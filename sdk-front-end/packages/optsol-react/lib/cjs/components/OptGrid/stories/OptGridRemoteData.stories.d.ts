import { Story } from '@storybook/react';
import { OptGridProps } from '..';
interface Pessoa {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}
declare const _default: any;
export default _default;
interface OptGridArgs extends OptGridProps<Pessoa> {
    title: string;
    search: boolean;
    onDelete: (data: Pessoa) => string;
    onApprove: (data: Pessoa) => string;
    actionsPosition: 'start' | 'end';
    selection: boolean;
}
export declare const OptGridRemota: Story<OptGridArgs>;
