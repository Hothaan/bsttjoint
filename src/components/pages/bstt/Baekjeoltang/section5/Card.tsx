"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ICard {
  img: string;
  idx: number;
  title: string;
  desc: (string | React.ReactNode)[];
}

export default function Card(prop: ICard) {
  const { img, idx, title, desc } = prop;
  return (
    <div css={wrap}>
      <div css={image_container}>
        <img src={img} alt="card" />
      </div>
      <div css={content_container}>
        <div css={title_wrap}>
          <p css={idx_text}>0{idx + 1}</p>
          <p css={title_text}>{title}</p>
        </div>
        <p css={desc_text}>{renderWidthKeys(desc)}</p>
      </div>
    </div>
  );
}

const wrap = css``;

const image_container = css`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const content_container = css`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 1600px) {
    gap: 8px;
    padding: 24px 20px;
  }
`;
const title_wrap = css`
  display: flex;
  gap: 10px;
`;
const idx_text = css`
  color: #018c3b;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
`;
const title_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
`;
const desc_text = css`
  color: var(--text, #3c3c3c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;
