"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

export interface IPageTitleContent {
  text: (string | React.ReactNode)[];
  color?: string;
  align?: string;
}

export default function PageTitleContent(prop: IPageTitleContent) {
  const { text, color, align } = prop;
  return (
    <p css={text_style(color, align)} className="page_title_content">
      {renderWidthKeys(text)}
    </p>
  );
}

const text_style = (color?: string, align?: string) => css`
  color: ${color !== undefined ? color : "#3c3c3c"};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  white-space: nowrap;
  text-align: ${align ?? "left"};

  .bold {
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
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
