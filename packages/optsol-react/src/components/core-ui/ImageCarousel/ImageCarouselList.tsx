import { ChevronLeftRegular, ChevronRightRegular } from '@fluentui/react-icons';
import { Box, IconButton } from '@mui/material';
import {
  Children,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { FlexBox } from '../Flexbox';

type ImageCarouselListProps = {
  itemWidth?: number;
};
export const ImageCarouselList = ({
  itemWidth = 70,
  children,
}: PropsWithChildren<ImageCarouselListProps>) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // these two functions handle changing the pages
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const { width } = containerRef.current.getBoundingClientRect();
    setContainerWidth(width);
  }, []);

  const itensPerPage = Math.max(Math.floor(containerWidth / itemWidth) - 1, 1);
  const itens = Children.toArray(children).slice(
    currentPage * itensPerPage,
    currentPage * itensPerPage + itensPerPage,
  );

  const hidePreviousPage = currentPage === 0;
  const hideNextPage =
    currentPage >=
    Math.ceil((Children.count(children) || 0) / itensPerPage) - 1;

  return (
    <FlexBox width={1} justifyContent="space-between">
      <IconButton
        onClick={handlePrevPage}
        disabled={hidePreviousPage}
        sx={{ p: 0, visibility: hidePreviousPage ? 'hidden' : 'visible' }}
      >
        <ChevronLeftRegular fontSize={36} />
      </IconButton>
      <FlexBox
        ref={containerRef}
        gap={1}
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        {itens.map((child, index) => (
          <Box key={index} width={itemWidth}>
            {child}
          </Box>
        ))}
      </FlexBox>
      <IconButton
        onClick={handleNextPage}
        disabled={hideNextPage}
        sx={{ p: 0, visibility: hideNextPage ? 'hidden' : 'visible' }}
      >
        <ChevronRightRegular fontSize={36} />
      </IconButton>
    </FlexBox>
  );
};
