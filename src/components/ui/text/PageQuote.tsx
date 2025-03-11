/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface IPageQuote {
  text: (string | React.ReactNode)[];
}

export default function PageQuote(prop: IPageQuote) {
  const { text } = prop;
  return <p css={text_style}>{renderWidthKeys(text)}</p>;
}

const text_style = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  .green {
    color: #018c3b;
  }
  .bold {
    font-weight: 800;
  }
`;
