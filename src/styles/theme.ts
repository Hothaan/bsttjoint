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
    mono: {
      white: string;
      black: string;
      text: string;
      textLight: string;
      stroke: string;
    };
    point: {
      primary: string;
      primaryHover: string;
      primaryLight: string;
      primaryLightHover: string;
      highlightDeep: string;
      highlightLight: string;
      extraHighlight: string;
    };
  };
  fontSize: {
    xs: string;
    sm: string;
    ms: string;
    md: string;
    ml: string;
    lg: string;
    xl: string;
    qu: string;
    num: string;
    st: string;
    tt: string;
  };
  fontWeight: {
    black: string;
    bold: string;
    semiBold: string;
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
  colors: {
    mono: {
      white: "#fff",
      black: "rgba(19, 19, 19, 1)",
      text: "rgba(60, 60, 60, 1)",
      textLight: "rgba(106, 106, 106, 1)",
      stroke: "rgba(217, 217, 217, 1)",
    },
    point: {
      primary: "rgba(1, 140, 59, 1)",
      primaryHover: "rgba(255, 255, 255, 1)",
      primaryLight: "rgba(48, 162, 100, 1)",
      primaryLightHover: "rgba(27, 120, 69, 1)",
      highlightDeep: "rgba(217, 238, 214, 1)",
      highlightLight: "rgba(234, 245, 239, 1)",
      extraHighlight: "rgba(1, 224, 94, 1)",
    },
  },
  fontSize: {
    xs: "14px",
    sm: "0.875rem",
    ms: "1rem",
    md: "16px",
    ml: "20px",
    lg: "24px",
    xl: "36px",
    qu: "40px",
    num: "48px",
    st: "54px",
    tt: "65px",
  },
  fontWeight: {
    black: "800",
    bold: "700",
    semiBold: "500",
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
};

export default theme;
