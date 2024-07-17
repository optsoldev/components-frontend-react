import { FlexBox } from '../Flexbox';
import { FlexBoxProps } from '../Flexbox/FlexBox';

type DrawerContentProps = FlexBoxProps;

const DrawerContent = ({ children, ...props }: DrawerContentProps) => {
  return (
    <FlexBox flex={1} {...props}>
      {children}
    </FlexBox>
  );
};

export default DrawerContent;
