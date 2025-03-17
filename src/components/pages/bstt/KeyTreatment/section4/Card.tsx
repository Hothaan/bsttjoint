/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { imageOptimizer } from "next/dist/server/image-optimizer";

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
      <div css={text_wrap}>
        <div css={title_wrap}>
          <p css={idx_text}>0{idx + 1}</p>
          <p css={title_text}>{title}</p>
        </div>
        <p css={desc_text}>{renderWidthKeys(desc)}</p>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  flex-shrink: 0;

  @media (max-width: 1900px) {
    padding: 18px;
  }
  @media (max-width: 1800px) {
    padding: 16px;
  }
  @media (max-width: 1600px) {
    padding: 10px;
  }
  @media (max-width: 960px) {
    gap: 20px;
  }
`;
const image_container = css`
  width: 100%;
  aspect-ratio: 1 / 1;

  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const text_wrap = css`
  display: flex;
  padding: 0px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media (max-width: 960px) {
    padding: 0;
    gap: 4px;
  }
`;
const title_wrap = css`
  display: flex;
  gap: 10px;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 960px) {
    flex-direction: row;
  }
  @media (max-width: 374px) {
    gap: 4px;
    flex-direction: column;
  }
`;
const idx_text = css`
  color: var(--Color-primary, #018c3b);
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 1900px) {
    font-size: 28px;
  }

  @media (max-width: 1800px) {
    font-size: 24px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }

  @media (max-width: 680px) {
    font-size: 22px;
  }
  @media (max-width: 540px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 17px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
const title_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;

  @media (max-width: 1900px) {
    font-size: 28px;
  }

  @media (max-width: 1800px) {
    font-size: 24px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }

  @media (max-width: 680px) {
    font-size: 22px;
  }
  @media (max-width: 540px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 17px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
const desc_text = css`
  color: var(--text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */

  @media (max-width: 1900px) {
    font-size: 20px;
  }

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
`;
