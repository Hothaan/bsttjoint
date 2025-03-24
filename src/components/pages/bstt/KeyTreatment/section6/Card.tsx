"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ICard {
  img: string;
  idx: number;
  title: string;
  desc: string;
}

export default function Card(prop: ICard) {
  const { img, idx, title, desc } = prop;
  return (
    <div css={wrap(idx)}>
      <div css={image_container}>
        <img src={img} alt="card" />
      </div>
      <div css={content_wrap}>
        <div css={title_wrap}>
          <p css={idx_text}>0{idx + 1}</p>
          <p css={title_text}>{title}</p>
        </div>
        <p css={desc_text}>{desc}</p>
      </div>
    </div>
  );
}

const wrap = (idx: number) => css`
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  transform: ${idx % 2 !== 0 ? "translateY(60px)" : "none"};

  @media (max-width: 1200px) {
    border-radius: 10px;
    transform: none;
  }
`;
const image_container = css``;
const content_wrap = css`
  display: flex;
  padding: 24px 28px 30px 28px;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1400px) {
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
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
`;
const title_text = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
`;
const desc_text = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1400px) {
    font-size: 14px;
  }
`;
