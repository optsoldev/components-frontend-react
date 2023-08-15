import merge from 'lodash.merge';

import { OptFullTheme } from '../../shared/styles/theme';

export function generateNewTheme(
  theme: OptFullTheme,
  customTheme?: Partial<OptFullTheme>
) {
  const newTheme = JSON.parse(JSON.stringify(theme)) as OptFullTheme;

  if (customTheme) merge(newTheme, customTheme);

  return newTheme;
}
