import Color from 'color';

export function bytesToSize(bytes: number) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';

  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  const label = sizes[Number(index)];

  return `${Math.round(bytes / 1024 ** index)} ${label}`;
}

function randomInteger(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export function randomRgbColor() {
  const r = randomInteger(255);
  const g = randomInteger(255);
  const b = randomInteger(255);
  return Color.rgb(r, g, b);
}
