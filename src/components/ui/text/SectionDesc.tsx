/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface ISectionDesc {
  text: (string | React.ReactNode)[];
  color: string;
}
export default function SectionDesc(prop: ISectionDesc) {
  const { text, color } = prop;
  const theme = useTheme() as CustomTheme;

  return <p css={text_style(theme, color)}>{text}</p>;
}

const text_style = (theme: CustomTheme, color: string) => css`
  color: ${color};
  font-size: ${theme.fontSize.ml};
  font-weight: ${theme.fontWeight.light};
  letter-spacing: -0.005em;
`;
