/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface ISectionTitle {
  text: string;
  color: string;
}
export default function SectionTitle(prop: ISectionTitle) {
  const { text, color } = prop;
  const theme = useTheme() as CustomTheme;

  return <p css={text_style(theme, color)}>{text}</p>;
}

const text_style = (theme: CustomTheme, color: string) => css`
  color: ${color};
  font-size: ${theme.fontSize.st};
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -0.04em;
`;
