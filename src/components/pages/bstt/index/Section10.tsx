/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

export default function Section10() {
  const theme = useTheme() as CustomTheme;

  return <div css={wrap(theme)}>Section10</div>;
}

const wrap = (theme: CustomTheme) => css``;
