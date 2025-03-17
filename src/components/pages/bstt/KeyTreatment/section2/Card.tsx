/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import ArrowRight from "@/assets/components/pages/bstt/KeyTreatment/section2/arrowRight.svg";

interface ICard {
  idx: number;
  img: string;
  text: (string | React.ReactNode)[];
}

export default function Card(prop: ICard) {
  const { idx, img, text } = prop;
  return (
    <div css={wrap(idx)}>
      <div css={image_container}>
        <img src={img} alt="card" />
      </div>
      <div css={line_wrap(idx)}>
        <div css={dot_wrap}>
          <div css={dot} className="dot"></div>
          <div css={dot_border} className="dot_border"></div>
        </div>
        <div css={icon_wrap(idx)}>
          <ArrowRight />
        </div>
      </div>
      <div css={text_wrap}>
        <p css={step_style}>{idx + 1}단계</p>
        <p css={text_style}>{renderWidthKeys(text)}</p>
      </div>
    </div>
  );
}

const wrap = (idx: number) => css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;

  &:hover {
    .dot {
      width: 20px;
      height: 20px;
    }
    .dot_border {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 1600px) {
  }
  @media (max-width: 1400px) {
    gap: 32px;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 960px) {
    gap: 24px;

    margin-bottom: ${idx === 0 ? "24px" : "0"};

    &:hover {
      .dot {
        width: 14px;
        height: 14px;
      }
      .dot_border {
        width: 24px;
        height: 24px;
      }
    }
  }
  @media (max-width: 680px) {
    gap: 20px;
  }
`;

const line_wrap = (idx: number) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:before {
    content: "";
    display: ${idx > 0 ? "block" : "none"};
    position: absolute;
    top: 50%;
    left: -50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background: #018c3b;
  }

  @media (max-width: 960px) {
    &:before {
      display: ${idx % 2 !== 0 ? "block" : "none"};
    }
  }
`;
const dot_wrap = css`
  position: relative;
  width: 32px;
  height: 32px;

  @media (max-width: 960px) {
    width: 24px;
    height: 24px;
  }
`;
const dot = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #018c3b;
  transition: 0.3s ease-out;
  box-sizing: content-box;

  @media (max-width: 960px) {
    width: 10px;
    height: 10px;
  }
`;
const dot_border = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #018c3b;
  opacity: 0.24;
  transition: 0.3s ease-out;

  @media (max-width: 960px) {
    width: 10px;
    height: 10px;
  }
`;

const icon_wrap = (idx: number) => css`
  position: absolute;

  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);

  display: ${idx > 0 ? "block" : "none"};

  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    display: ${idx % 2 !== 0 ? "block" : "none"};

    width: 16px;
    height: 16px;
  }
`;
const text_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
const image_container = css`
  height: 460px;
  width: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1600px) {
    height: 440px;
  }
  @media (max-width: 1400px) {
    height: 420px;
  }
  @media (max-width: 1200px) {
    height: 400px;
  }
  @media (max-width: 960px) {
    height: auto;
    width: 100%;
  }
`;
const step_style = css`
  color: #018c3b;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 540px) {
    font-size: 17px;
  }
`;
const text_style = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    padding: 0 10px;
    font-size: 12px;
  }
`;
