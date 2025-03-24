"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface IPageBold {
  text: (string | React.ReactNode)[];
}

export default function PageBold(prop: IPageBold) {
  const { text } = prop;
  return <p css={text_style}>{renderWidthKeys(text)}</p>;
}

const text_style = () => css`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
  white-space: nowrap;

  opacity: 0.5;

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
    white-space: wrap;
    letter-spacing: 8px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    white-space: wrap;
  }
`;
