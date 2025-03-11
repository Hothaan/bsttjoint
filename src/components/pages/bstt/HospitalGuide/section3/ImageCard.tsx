/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ArrowRight from "@/assets/components/pages/bstt/index/section5/arrowRight.svg";
import { SetStateAction } from "react";

interface IImageCard {
  img: string;
  idx: number;
  title: string;
  desc: (string | React.ReactNode)[];
}

export default function ImageCard(prop: IImageCard) {
  const { idx, title, desc, img } = prop;
  return (
    <div css={wrap(idx)}>
      <div css={image_container}>
        <img src={img} alt="card image" />
      </div>
      <div css={text_container}>
        <div css={title_wrap}>
          <p css={idx_text}>0{idx}</p>
          <p css={title_text}>{title}</p>
        </div>
        <p css={desc_text}>{desc}</p>
      </div>
    </div>
  );
}

const wrap = (idx: number) => css`
  max-width: 370px;

  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);

  transform: ${idx % 2 !== 0 ? "translateY(60px)" : "none"};

  @media (max-width: 1800px) {
    max-width: 320px;
  }
  @media (max-width: 1600px) {
    max-width: 280px;
  }
  @media (max-width: 1400px) {
    max-width: 220px;
  }
  @media (max-width: 1200px) {
    max-width: 200px;
  }
  @media (max-width: 1000px) {
    max-width: 180px;
  }
  @media (max-width: 960px) {
    max-width: 100%;
    transform: none;
  }
`;

const image_container = css`
  width: 100%;
  height: auto;
  aspect-ratio: 370 / 240;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    aspect-ratio: 335 / 170;
  }
`;
const text_container = css`
  width: 100%;

  display: flex;
  padding: 24px 24px 34px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media (max-width: 1200px) {
    padding: 16px;
  }
  @media (max-width: 960px) {
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
  }
`;

const title_wrap = css`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 1200px) {
    gap: 8px;
  }
`;

const idx_text = css`
  color: #018c3b;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
  @media (max-width: 374px) {
    font-size: 20px;
  }
`;
const title_text = css`
  color: #3c3c3c;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
  @media (max-width: 374px) {
    font-size: 20px;
  }
`;
const desc_text = css`
  color: var(--text, #3c3c3c);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 960px) {
    font-size: 15px;
  }
`;
