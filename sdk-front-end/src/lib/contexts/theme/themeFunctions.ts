import { OptTheme } from "../../shared/styles/theme";
import { RecursivePartial } from "../../types/RecursivePartial";

export function copyInto<T>(to: T, from?: RecursivePartial<T>) {
  if (from) {
    Object.entries(from)
      .filter((kv) => kv[1])
      .forEach((kv) => {
        const [key, value] = kv;
        if (value) {
          if (typeof value === 'object') {
            copyInto((to as any)[key], value as any);
          } else {
            (to as any)[key] = value;
          }
        }
      });
  }

  return to;
}

export function generateNewTheme(theme: OptTheme, customTheme?: RecursivePartial<OptTheme>) {
  let newTheme = JSON.parse(JSON.stringify(theme)) as OptTheme;

  if (customTheme) {
    newTheme = copyInto(newTheme, customTheme);
  }

  return newTheme;
}
