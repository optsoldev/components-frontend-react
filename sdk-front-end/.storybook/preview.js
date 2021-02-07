import { GlobalTestStyles } from '../src/lib/shared/styles/global';
import { OptLayoutProvider } from '../src/lib/components/OptLayout/OptLayoutProvider.tsx';

export const decorators = [
  (Story) => (
    <OptLayoutProvider>
      <GlobalTestStyles />
      <Story />
    </OptLayoutProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
