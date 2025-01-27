declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    largeTitle: React.CSSProperties;
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    title3?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    largeTitle?: React.CSSProperties;
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    caption1: true;
    caption2: true;
    largeTitle: true;
    poster: true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    caption: false;
  }
}

export {};
