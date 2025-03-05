/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

export default function Section8() {
  const theme = useTheme() as CustomTheme;

  return <div css={wrap(theme)}>Section8</div>;
}

const wrap = (theme: CustomTheme) => css``;
