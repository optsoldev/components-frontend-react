import { FlexBox } from '../Flexbox';
import { FlexBoxProps } from '../Flexbox/FlexBox';

type DrawerFooterProps = FlexBoxProps;

const DrawerFooter = ({ children, ...props }: DrawerFooterProps) => {
  return (
    <FlexBox alignContent="flex-end" {...props}>
      {children}
    </FlexBox>
  );
};

export default DrawerFooter;
