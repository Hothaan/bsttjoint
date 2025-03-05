/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

export default function Section12() {
  const theme = useTheme() as CustomTheme;

  return <div css={wrap(theme)}>Section12</div>;
}

const wrap = (theme: CustomTheme) => css``;
