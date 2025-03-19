/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

export interface ISectionTitleSimple {
  text: string | (string | React.ReactNode)[];
  color: string;
  align?: string;
}

export default function SectionTitleSimple(prop: ISectionTitleSimple) {
  const { text, color, align } = prop;
  const theme = useTheme() as CustomTheme;

  return <p css={text_style(theme, color, align)}>{text}</p>;
}
const text_style = (theme: CustomTheme, color: string, align?: string) => css`
  color: ${color};
  font-size: 50px;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -0.04em;
  text-align: ${align || "left"};

  white-space: nowrap;
  width: fit-content;

  .green {
    color: ${theme.colors.point.primary};
  }

  @media (max-width: 1800px) {
    font-size: 46px;
  }
  @media (max-width: 1600px) {
    font-size: 42px;
  }
  @media (max-width: 1400px) {
    font-size: 40px;
  }
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
