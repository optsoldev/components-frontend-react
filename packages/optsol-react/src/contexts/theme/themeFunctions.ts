import { OptFullTheme } from '../../shared/styles/theme';
import { RecursivePartial } from '../../types/RecursivePartial';

export function copyInto<T>(to: T, from: RecursivePartial<T>) {
  if (typeof from === 'object') {
    const target = to;
    Object.entries(from).forEach(([key, value]) => {
      Object.defineProperty(target, key, {
        value: copyInto(to[key], value),
      });
    });

    return target;
  }

  return from;
}

export function generateNewTheme(
  theme: OptFullTheme,
  customTheme?: RecursivePartial<OptFullTheme>
) {
  let newTheme = JSON.parse(JSON.stringify(theme)) as OptFullTheme;

  if (customTheme) {
    newTheme = copyInto(newTheme, customTheme);
  }

  return newTheme;
}
