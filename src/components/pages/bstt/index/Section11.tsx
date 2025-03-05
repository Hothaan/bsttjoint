/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

export default function Section1111() {
  const theme = useTheme() as CustomTheme;

  return <div css={wrap(theme)}>Section1111</div>;
}

const wrap = (theme: CustomTheme) => css``;
