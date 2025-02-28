import { Theme as EmotionTheme } from "@emotion/react";

export interface CustomTheme extends EmotionTheme {
  maxWidth: string;
  minWidth: string;
  mediaQuery: {
    xs: string;
    sm: string;
    ms: string;
    md: string;
    ml: string;
    lg: string;
    xl: string;
  };
  colors: {
    [key: string]: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    ms: string;
    md: string;
    ml: string;
    lg: string;
    xl: string;
  };
  fontWeight: {
    black: string;
    bold: string;
    normal: string;
    light: string;
  };
  padding: {
    xs: string;
    sm: string;
    ms: string;
    md: string;
    ml: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    xs: string;
    sm: string;
    ms: string;
    md: string;
    ml: string;
    lg: string;
    xl: string;
  };
}

const theme: CustomTheme = {
  maxWidth: "1920px",
  minWidth: "280px",
  mediaQuery: {
    xs: "(max-width: 576px)",
    sm: "(max-width: 768px)",
    ms: "(max-width: 992px)",
    md: "(max-width: 1200px)",
    ml: "(max-width: 1440px)",
    lg: "(max-width: 1600px)",
    xl: "(max-width: 1920px)",
  },
  colors: { white: "#fff" },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    ms: "1rem",
    md: "1.125rem",
    ml: "1.25rem",
    lg: "1.5rem",
    xl: "1.875rem",
  },
  fontWeight: {
    black: "800",
    bold: "600",
    normal: "400",
    light: "300",
  },
  padding: {
    xs: "0.5rem",
    sm: "1rem",
    ms: "1.5rem",
    md: "2rem",
    ml: "2.5rem",
    lg: "3rem",
    xl: "4rem",
  },
  borderRadius: {
    xs: "0.125rem",
    sm: "0.25rem",
    ms: "0.375rem",
    md: "0.5rem",
    ml: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
  },
};

export default theme;
