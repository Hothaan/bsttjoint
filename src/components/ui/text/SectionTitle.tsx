"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface ISectionTitle {
  text: string;
  color: string;
}
export default function SectionTitle(prop: ISectionTitle) {
  const { text, color } = prop;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const theme = useTheme() as CustomTheme;

  return <p css={text_style(theme, color, width)}>{text}</p>;
}

const text_style = (theme: CustomTheme, color: string, width: number) => css`
  color: ${color};
  font-size: ${width / 35.5}px;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -0.04em;

  @media (max-width: 960px) {
    font-size: 34px;
    text-align: center;
  }
  @media (max-width: 370px) {
    font-size: 28px;
  }
`;
