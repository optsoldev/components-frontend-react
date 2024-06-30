import { AllHTMLAttributes } from 'react';
export type ToolbarProps = Omit<
  AllHTMLAttributes<HTMLDivElement>,
  'as' | 'size'
>;
