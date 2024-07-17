import { BoxProps } from '@mui/material';
import { ImgHTMLAttributes } from 'react';

import { FlexBox } from '../Flexbox';

type ImageCarouselListItemProps = ImgHTMLAttributes<HTMLImageElement> & {
  bgcolor?: BoxProps['bgcolor'];
};

export const ImageCarouselListItem = ({
  ...props
}: ImageCarouselListItemProps) => {
  return (
    <FlexBox
      bgcolor={props.bgcolor}
      sx={{ cursor: 'pointer' }}
      borderRadius={0.75}
      overflow="hidden"
      height="2.5rem"
      width="3.5rem"
    >
      <img
        alt="img"
        width="100%"
        height="100%"
        loading="lazy"
        style={{ objectFit: 'contain' }}
        {...props}
      />
    </FlexBox>
  );
};

ImageCarouselListItem.displayName = 'ImageCarouselListItem';
