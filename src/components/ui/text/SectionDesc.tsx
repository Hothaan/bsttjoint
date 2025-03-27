"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface ISectionDesc {
  text: (string | React.ReactNode)[];
  color: string;
}
export default function SectionDesc(prop: ISectionDesc) {
  const { text, color } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return <p css={text_style(theme, color, width)}>{text}</p>;
}

const text_style = (theme: CustomTheme, color: string, width: number) => css`
  color: ${color};
  font-size: ${width / 96 < 16 ? 16 : width / 96}px;
  font-weight: ${theme.fontWeight.light};
  letter-spacing: -0.005em;

  @media (max-width: 960px) {
    font-size: 17px;
    text-align: center;
    line-height: 250%;
  }
  @media (max-width: 600px) {
    line-height: 200%;
    white-space: nowrap;
  }
  @media (max-width: 370px) {
    font-size: 14px;
  }
`;
