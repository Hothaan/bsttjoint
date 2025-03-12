/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface PageTitleContent {
  text: (string | React.ReactNode)[];
}

export default function PageTitleContent(prop: PageTitleContent) {
  const { text } = prop;
  return <p css={text_style}>{renderWidthKeys(text)}</p>;
}

const text_style = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  white-space: nowrap;

  .bold {
    color: var(--black-text, #3c3c3c);
    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .green {
    color: #018c3b;
    font-family: Pretendard;

    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }

  @media (max-width: 1400px) {
    white-space: wrap;
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;
