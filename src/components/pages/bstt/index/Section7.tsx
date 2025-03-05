/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

export default function Section7() {
  const theme = useTheme() as CustomTheme;

  return <div css={wrap(theme)}>Section7</div>;
}

const wrap = (theme: CustomTheme) => css``;
