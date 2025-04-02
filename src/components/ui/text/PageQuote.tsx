"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface IPageQuote {
  text: (string | React.ReactNode)[];
  align: string;
}

export default function PageQuote(prop: IPageQuote) {
  const { text, align } = prop;
  return <p css={text_style(align)}>{renderWidthKeys(text)}</p>;
}

const text_style = (align: string) => css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-align: ${align};
  .green {
    color: #018c3b;
  }
  .bold {
    font-weight: 700;
  }

  @media (max-width: 1900px) {
    font-size: 30px;
  }
  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 18px;
  }
  @media (max-width: 300px) {
    font-size: 16px;
  }
`;
