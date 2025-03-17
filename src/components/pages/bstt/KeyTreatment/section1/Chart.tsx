/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
interface IChart {
  imgPc: string;
  imgMo: string;
  text: (string | React.ReactNode)[];
}

export default function Chart(prop: IChart) {
  const { imgPc, imgMo, text } = prop;
  const { width } = useWindowSizeContext();
  return (
    <div css={wrap}>
      <div css={image_container}>
        <img src={width > 960 ? imgPc : imgMo} alt="chart" />
      </div>
      <p css={text_style}>{renderWidthKeys(text)}</p>
    </div>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    gap: 16px;
  }
`;

const image_container = css`
  width: 305px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1600px) {
    width: 280px;
  }
  @media (max-width: 1400px) {
    width: 260px;
  }
  @media (max-width: 1200px) {
    width: 240px;
  }
  @media (max-width: 960px) {
    width: 220px;
  }
  @media (max-width: 840px) {
    width: 200px;
  }
  @media (max-width: 680px) {
    width: 180px;
  }
  @media (max-width: 540px) {
    width: 160px;
  }
  @media (max-width: 480px) {
    width: 140px;
  }
  @media (max-width: 400px) {
    width: 130px;
  }
`;

const text_style = css`
  color: #131313;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.48px;

  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 17px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
  @media (max-width: 300px) {
    font-size: 14px;
  }
`;
