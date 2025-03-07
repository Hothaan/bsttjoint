/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface ISectionTitleSimple {
  text: string;
  color: string;
}

export default function SectionTitleSimple(prop: ISectionTitleSimple) {
  const { text, color } = prop;
  const theme = useTheme() as CustomTheme;

  return <p css={text_style(theme, color)}>{text}</p>;
}
const text_style = (theme: CustomTheme, color: string) => css`
  text-align: center;
  color: ${color};
  font-size: 50px;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -0.04em;

  white-space: nowrap;
  width: fit-content;
`;
