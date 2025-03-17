/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import CardCheck from "@/assets/components/pages/bstt/KeyTreatment/section3/card_check.svg";

interface ICard {
  idx: number;
  img: React.ReactNode;
  title: string;
  desc: (string | React.ReactNode)[];
}

export default function Card(prop: ICard) {
  const { img, title, desc, idx } = prop;
  return (
    <div css={wrap}>
      <div css={icon_container}>{img}</div>
      <div css={title_wrap}>
        <div css={icon_wrap}>
          <CardCheck />
        </div>
        <p css={title_text}>{title}</p>
      </div>
      <p css={desc_text}>{renderWidthKeys(desc)}</p>
      {idx > 0 && <span css={stroke}></span>}
    </div>
  );
}

const stroke = css`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 120px;

  opacity: 0.4;
  background: #d9d9d9;

  @media (max-width: 960px) {
    display: none;
  }
`;

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  padding: 0 24px;

  position: relative;

  @media (max-width: 1880px) {
    padding: 0 16px;
  }
  @media (max-width: 1600px) {
    gap: 24px;
    padding: 0 24px;
  }
  @media (max-width: 960px) {
    gap: 8px;
    padding: 0;
  }
`;

const icon_container = css`
  height: 64px;
  width: auto;
  aspect-ratio: 1 / 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    height: 60px;
  }

  @media (max-width: 374px) {
    height: 48px;
  }
`;
const icon_wrap = css`
  height: 24px;
  width: auto;
  aspect-ratio: 1 / 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 374px) {
    display: none;
  }
`;

const title_wrap = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 960px) {
    gap: 8px;
  }
`;

const title_text = css`
  color: #06d65d;
  text-align: center;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.68px;
  white-space: nowrap;

  @media (max-width: 1880px) {
    font-size: 30px;
  }
  @media (max-width: 1700px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 960px) {
    font-size: 17px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
const desc_text = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  .bold {
    font-weight: 700;
  }

  @media (max-width: 1880px) {
    font-size: 22px;
  }
  @media (max-width: 1700px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1400px) {
    font-size: 14px;
  }
`;
