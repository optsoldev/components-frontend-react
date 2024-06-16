import { forwardRef } from 'react';

import { FlexBox, FlexBoxProps } from '../Flexbox';

export const ImageCarousel = forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <FlexBox ref={ref} p={2} {...props}>
        {children}
      </FlexBox>
    );
  },
);

ImageCarousel.displayName = 'ImageCarousel';
