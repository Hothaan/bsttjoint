"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ICircle {
  idx: number;
  num: number;
  unit: string;
  desc: (string | React.ReactNode)[];
}

export default function TypeRcircle(prop: ICircle) {
  const { idx, num, unit, desc } = prop;
  return (
    <div css={wrap(idx)}>
      <p css={num_text}>
        {num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        {unit}
      </p>
      <p css={desc_text}>{renderWidthKeys(desc)}</p>
    </div>
  );
}

const wrap = (idx: number) => css`
  width: 25%;
  height: auto;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;

  flex-shrink: 0;

  border-radius: 50%;
  background: rgba(1, 138, 59, 0.9);

  margin-left: ${idx > 0 ? "-20px" : "0"};

  @media (max-width: 1880px) {
    gap: 20px;
  }
  @media (max-width: 1720px) {
    gap: 16px;
  }
  @media (max-width: 1600px) {
    gap: 12px;
  }
  @media (max-width: 960px) {
    gap: 8px;
    width: 100%;
    margin-left: ${idx % 2 !== 0 ? "-20px" : "0"};
    margin-top: ${idx > 1 ? "-20px" : "0"};
  }
  @media (max-width: 480px) {
    margin-left: ${idx % 2 !== 0 ? "-15px" : "0"};
    margin-top: ${idx > 1 ? "-15px" : "0"};
  }
  @media (max-width: 374px) {
    gap: 4px;
    margin-left: ${idx % 2 !== 0 ? "-10px" : "0"};
    margin-top: ${idx > 1 ? "-10px" : "0"};
  }
`;
const num_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 1880px) {
    font-size: 30px;
  }
  @media (max-width: 1720px) {
    font-size: 26px;
  }
  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 34px;
  }
  @media (max-width: 680px) {
    font-size: 26px;
  }
  @media (max-width: 540px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
const desc_text = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1400px) {
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
  @media (max-width: 374px) {
    font-size: 10px;
  }
`;
