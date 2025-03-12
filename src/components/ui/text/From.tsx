/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface IFrom {
  text: string;
}

export default function From(prop: IFrom) {
  const { text } = prop;
  return <p css={text_style}>{text}</p>;
}

const text_style = css`
  color: #808080;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 38.4px */
`;
