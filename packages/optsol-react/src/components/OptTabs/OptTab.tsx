import styled from '@emotion/styled';
import { TabClasses } from '@mui/material';
import React from 'react';
import * as S from './styles';

const CustomTab = styled(S.CustomTab)`
  min-height: 24px;
  height: 24px;
`;

interface Props {
  children?: null;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TabClasses>;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple?: boolean;
  /**
   * The icon to display.
   */
  icon?: string | React.ReactElement;

  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  /**
   * The label element.
   */
  label?: React.ReactNode;
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value?: any;
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped?: boolean;

  tabIndex: number;
}

export const OptTab = React.forwardRef<HTMLDivElement, Props>(
  ({ ...props }, ref) => <CustomTab ref={ref} {...props} />
);
