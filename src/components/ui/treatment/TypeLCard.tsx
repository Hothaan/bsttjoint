"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

export interface ITypeLCard {
  img: string;
  idx: number;
  title: string;
  desc: (string | React.ReactNode)[];
  cardType?: string;
  aspectRatio?: { over960: string; under960: string };
  withIdx?: boolean;
}

export default function TypeLCard(prop: ITypeLCard) {
  const { img, idx, title, desc, cardType, aspectRatio, withIdx } = prop;

  if (cardType === undefined) {
    return (
      <div>
        <div css={default_image_container}>
          <img src={img} alt="card" />
        </div>
        <div css={default_content_container}>
          <div css={default_title_wrap}>
            <p css={default_idx_text}>0{idx + 1}</p>
            <p css={default_title_text}>{title}</p>
          </div>
          <p css={default_desc_text}>{renderWidthKeys(desc)}</p>
        </div>
      </div>
    );
  } else if (cardType === "round") {
    return (
      <div css={round_wrap(aspectRatio)}>
        <div css={round_image_container(aspectRatio)}>
          <img src={img} alt="card" />
        </div>
        <div css={round_content_container(aspectRatio)}>
          <div css={default_title_wrap}>
            {withIdx && (
              <p
                css={[
                  round_title_text,
                  css`
                    color: #018c3b;
                  `,
                ]}
              >
                0{idx + 1}
              </p>
            )}
            <p css={round_title_text}>{title}</p>
          </div>
          <p css={round_desc_text}>{renderWidthKeys(desc)}</p>
        </div>
      </div>
    );
  }
}

const round_wrap = (aspectRatio?: { over960: string; under960: string }) => css`
  display: flex;
  flex-direction: column;
  gap: ${aspectRatio ? "0" : "40px"};

  @media (max-width: 1200px) {
    gap: ${aspectRatio ? "0" : "20px"};
  }
`;

const default_image_container = css`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const round_image_container = (aspectRatio?: {
  over960: string;
  under960: string;
}) => css`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 960px) {
    border-radius: 5px;
    aspect-ratio: ${aspectRatio ? aspectRatio.under960 : "300 / 340"};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const default_content_container = css`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 1600px) {
    gap: 8px;
    padding: 24px 20px;
  }
  @media (max-width: 960px) {
    padding: 20px;
  }
  @media (max-width: 374px) {
    padding: 16px 12px;
  }
`;
const round_content_container = (aspectRatio?: {
  over960: string;
  under960: string;
}) => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: ${aspectRatio ? "24px" : "0"};

  @media (max-width: 1200px) {
    gap: 10px;
  }
  @media (max-width: 480px) {
    padding: ${aspectRatio ? "17px 22px" : "0"};
  }
`;
const default_title_wrap = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const default_idx_text = css`
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
const default_title_text = css`
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
const round_title_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 960px) {
    font-size: 19px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
const default_desc_text = css`
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
const round_desc_text = css`
  color: #444;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
