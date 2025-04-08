"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import ArrowRight from "@/assets/components/pages/bstt/KeyTreatment/section2/arrowRight.svg";
import { Ttype } from "./TypeC";

export interface ITypeCcard {
  type?: Ttype;
  img: string;
  title?: string;
  text?: (string | React.ReactNode)[];
  caption?: (string | React.ReactNode)[];
  idx?: number;
  isLast?: boolean;
  isOdd?: boolean;
}

export default function TypeCcard(prop: ITypeCcard) {
  const { type, idx, img, title, text, caption, isLast, isOdd } = prop;

  if (idx == undefined) return;

  return (
    <div css={wrap(isLast)} className="card">
      <div
        css={type !== "b" ? image_container(isLast, isOdd) : image_container_b}
      >
        <img src={img} alt="card" />
      </div>
      {type !== "b" && (
        <div css={line_wrap(idx, isLast, isOdd)}>
          <div css={dot_wrap}>
            <div css={dot} className="dot"></div>
            <div css={dot_border} className="dot_border"></div>
          </div>
          <div css={icon_wrap(idx, isLast, isOdd)}>
            <ArrowRight />
          </div>
        </div>
      )}

      <div css={text_wrap}>
        {type === "b" && title !== undefined ? (
          <p css={idx_text}>
            0{idx + 1}. <span css={title_text}>{title}</span>
          </p>
        ) : (
          <p css={step_style}>{idx + 1}단계</p>
        )}
        <div css={text_inner_wrap}>
          {type !== "b" && title !== undefined && (
            <p css={title_text}>{title}</p>
          )}
          <p css={type !== "b" ? text_wrap_a : content_text}>
            {text && <span css={text_style}>{renderWidthKeys(text)}</span>}
            {caption && (
              <span css={caption_style}>{renderWidthKeys(caption)}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

const wrap = (isLast?: boolean) => css`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
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

  @media (max-width: 960px) {
    gap: 24px;

    margin-bottom: ${!isLast ? "24px" : "0"};

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
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const line_wrap = (idx: number, isLast?: boolean, isOdd?: boolean) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:before {
    content: "";
    display: ${idx > 0 ? "block" : isLast ? "block" : "none"};
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
      display: ${idx % 2 !== 0 ? "block" : isLast ? "block" : "none"};
      left: ${isLast && isOdd ? "50%" : "-50%"};
      transform: ${isLast && isOdd
        ? "translate(-50%, -50%)"
        : "translateY(-50%)"};
      width: ${isLast && isOdd ? "50%" : "100%"};
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

const icon_wrap = (idx: number, isLast?: boolean, isOdd?: boolean) => css`
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
    display: ${idx % 2 !== 0 ? "block" : isLast && isOdd ? "block" : "none"};
    left: ${isLast && isOdd ? "calc(25% + 10px)" : "0"};
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

  @media (max-width: 480px) {
    gap: 10px;
  }
`;
const text_inner_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;
const idx_text = css`
  color: #018c3b;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 28px */

  @media (max-width: 1800px) {
    font-size: 26px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const title_text = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 44.8px */
  @media (max-width: 1800px) {
    font-size: 26px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
const image_container = (isLast?: boolean, isOdd?: boolean) => css`
  aspect-ratio: 384 / 460;
  width: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 960px) {
    aspect-ratio: ${isOdd && isLast ? "375 / 200" : "384 / 460"};
    height: ${isLast ? "50%" : "auto"};
  }
`;
const image_container_b = css`
  width: auto;
  border-radius: 10px;
  overflow: hidden;

  aspect-ratio: 365 / 450;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 960px) {
    border-radius: 5px;
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
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    font-weight: 300;
  }
  @media (max-width: 374px) {
    padding: 0 10px;
  }
`;
const caption_style = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-align: center;

  @media (max-width: 1600px) {
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

const text_wrap_a = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 374px) {
    padding: 0 8px;
  }
`;

const content_text = css`
  color: var(--text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 30px */

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
