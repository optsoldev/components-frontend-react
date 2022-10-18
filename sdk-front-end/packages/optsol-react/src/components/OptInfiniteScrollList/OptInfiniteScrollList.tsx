import { CircularProgress } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { OptSearchResponse } from '../../types';
import { OptSearchField } from '../OptSearchField/OptSearchField';
import * as S from './styles';

export interface OptInfiniteScrollListProps<T> {
  carregar: (
    search: string,
    page: number,
    pageSize: number
  ) => Promise<OptSearchResponse<T>>;
  renderItem: (item: T, index: number) => JSX.Element;
  pageSize?: number;
  semPesquisa?: boolean;
  onError?: (error: string) => void;
}

const distanciaEmPixel = 100;

interface State<T extends object> {
  carregando: boolean;
  total: number;
  pagina: number;
  lista: T[];
  listaRender: React.ReactElement[];
  termoPesquisa: string;
}

export function OptInfiniteScrollList<T extends object>({
  carregar,
  renderItem,
  pageSize = 10,
  semPesquisa = false,
  onError,
}: OptInfiniteScrollListProps<T>) {
  const [state, setState] = useState<State<T>>({
    carregando: false,
    total: 0,
    pagina: 0,
    lista: [],
    listaRender: [],
    termoPesquisa: '',
  });
  const [primeiroCarregamento, setPrimeiroCarregamento] = useState(true);

  const { carregando, total, pagina, lista, listaRender, termoPesquisa } =
    state;

  const componenteRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const possuiItens = lista.length > 0;
  const todosRegistrosCarregados = possuiItens && lista.length === total;
  const naoPossuiRegistrosNaPagina = total === 0 && lista.length === total;

  async function recarregarLista() {
    setState({ ...state, carregando: true });

    try {
      const response = await carregar(termoPesquisa, pagina, pageSize);

      adicionarNovosItens(response, true);
    } catch (err) {
      setState({ ...state, carregando: false });
      onError && onError('Falha ao carregar registros!');
    }
  }

  async function carregarPagina(search: string, page: number) {
    if (carregando) return;

    if (todosRegistrosCarregados) return;

    if (naoPossuiRegistrosNaPagina) {
      setState((currentState) => ({ ...currentState, carregando: true }));
    }

    try {
      const response = await carregar(search, page, pageSize);

      adicionarNovosItens(response);
    } catch (err) {
      setState((currentState) => ({ ...currentState, carregando: false }));
      throw new Error('Falha ao carregar registros');
    }
  }

  const scrollObserver = useCallback((node: HTMLElement | null) => {
    const options: IntersectionObserverInit = {
      rootMargin: `${distanciaEmPixel}px`,
    };

    const listener: IntersectionObserverCallback = (entries) => {
      if (entries) {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            carregarPagina(termoPesquisa, pagina + 1);
          }
        });
      }
    };

    const observer = new IntersectionObserver(listener, options);

    observer.observe(node!);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  function adicionarNovosItens(response: OptSearchResponse<T>, reset = false) {
    setState((currentState) => ({
      ...currentState,
      total: response.total,
      pagina: response.page,
      lista: reset
        ? [...response.data]
        : [...currentState.lista, ...response.data],
      carregando: false,
    }));

    if (primeiroCarregamento) {
      setPrimeiroCarregamento(false);
    }
  }

  function pesquisarPorTermo(termo?: string) {
    if (termo) {
      setState((currentState) => ({
        ...currentState,
        termoPesquisa: termo,
      }));
    }
  }

  function gerarListaRenderizacao() {
    const novaListaRender: React.ReactElement[] = [];

    lista.forEach((item, index) => {
      novaListaRender.push(renderItem(item, index));
    });

    setState((currentState) => ({
      ...currentState,
      listaRender: novaListaRender,
    }));
  }

  useEffect(() => {
    gerarListaRenderizacao();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lista]);

  useEffect(() => {
    const componenteScrolado = scrollRef.current;
    const componenteCarregado = componenteRef.current;

    const scrollInvalido =
      !componenteCarregado || !componenteScrolado || primeiroCarregamento;
    if (scrollInvalido) return;

    scrollObserver(componenteScrolado);
  }, [
    scrollObserver,
    primeiroCarregamento,
    possuiItens,
    todosRegistrosCarregados,
    naoPossuiRegistrosNaPagina,
  ]);

  useEffect(() => {
    recarregarLista();
    // eslint-disable-next-line
  }, [termoPesquisa]);

  return (
    <div ref={componenteRef}>
      {!semPesquisa && <OptSearchField onSearch={pesquisarPorTermo} />}

      {possuiItens && listaRender}

      {todosRegistrosCarregados && (
        <S.MensagemFooter>Todos registros foram carregados</S.MensagemFooter>
      )}
      {naoPossuiRegistrosNaPagina && (
        <S.MensagemFooter>Nenhum registro encontrado</S.MensagemFooter>
      )}

      {!naoPossuiRegistrosNaPagina && !todosRegistrosCarregados && (
        <S.ScrollContainer>
          <CircularProgress ref={scrollRef} size={20} />
        </S.ScrollContainer>
      )}
    </div>
  );
}
