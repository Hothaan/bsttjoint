/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

export default function Section9() {
  const theme = useTheme() as CustomTheme;

  return <div css={wrap(theme)}>Section9</div>;
}

const wrap = (theme: CustomTheme) => css``;
