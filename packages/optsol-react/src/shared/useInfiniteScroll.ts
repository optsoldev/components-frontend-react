import { useCallback, useEffect, useRef, useState } from 'react';
export type PaginatedRequest<T = unknown, R = unknown> = Record<
  string,
  R | Date | string | number | boolean | null | undefined
> & {
  page: number;
  pageSize: number;
  sortColumn?: keyof T;
  sortOrder?: 'asc' | 'desc';
};

export type PaginatedResponse<T = unknown> = {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export interface HttpClientConfig {
  headers?: { [key: string]: string };
  signal?: AbortSignal;
}

export type InifiniteScrollProps<
  T = unknown,
  R = unknown
> = HttpClientConfig & {
  load: (
    request: PaginatedRequest<R>,
    signal?: AbortSignal
  ) => Promise<PaginatedResponse<T>>;
  search?: R;
  orderBy?: keyof T | '';
  pageSize?: number;
  firstPage?: number;
  orderDirection?: 'asc' | 'desc';
};

const ROOT_MARGIN = '100px';

export default function useInfiniteScroll<T = unknown, R = unknown>({
  load,
  search,
  firstPage = 1,
  pageSize = 50
}: InifiniteScrollProps<T, R>) {
  // States
  const [error, setError] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Array<T>>([]);
  const [paginaSelecionada, setPaginaSelecionada] = useState(firstPage);

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = (node: HTMLElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const [lastElement] = entries;
        if (lastElement.isIntersecting)
          setPaginaSelecionada((prev) => prev + 1);
      },
      { rootMargin: ROOT_MARGIN }
    );
    if (node) observer.current.observe(node);
  };

  const buscar = useCallback(
    async (signal?: AbortSignal) => {
      setError(false);
      setLoading(true);

      const request = {
        page: paginaSelecionada,
        pageSize: pageSize,
        ...search
      };

      load(request, signal)
        .then((response) => {
          if (!response || signal?.aborted) return;

          setHasNext(response.hasNextPage);
          setItems((prev) => prev.concat(response.items));
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    },
    [paginaSelecionada, pageSize, search, load]
  );

  const refresh = useCallback(() => {
    setItems([]);
    if (firstPage === paginaSelecionada) buscar();
    else setPaginaSelecionada(firstPage);
  }, [buscar, firstPage, paginaSelecionada]);

  useEffect(() => {
    setItems([]);
    setPaginaSelecionada(firstPage);
  }, [load, firstPage, search]);

  useEffect(() => {
    const controller = new AbortController();
    buscar(controller.signal);

    return () => {
      controller.abort();
    };
  }, [buscar]);

  return {
    error,
    items,
    hasNext,
    loading,
    refresh,
    lastElementRef
  };
}
