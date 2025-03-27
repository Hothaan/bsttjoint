"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "../container/ContentsContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ITypeB {
  bgPc: string;
  bgMo: string;
  align?: string;
  title: (string | React.ReactNode)[];
  desc: (string | React.ReactNode)[];
  cardData: {
    img: string;
    title?: string;
    desc: (string | React.ReactNode)[];
  }[];
  caption?: (string | React.ReactNode)[];
}

export default function TypeB(prop: ITypeB) {
  const { bgPc, bgMo, align, title, desc, cardData, caption } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={wrap}>
        <div css={title_wrap(align)}>
          <p css={title_text}>{renderWidthKeys(title)}</p>
          <p css={desc_text}>{renderWidthKeys(desc)}</p>
        </div>
        <div css={content_wrap}>
          <ul css={card_wrap}>
            {cardData.map((item, idx) => (
              <li key={idx + "TypeB card"} css={card_item}>
                <div css={card_image_container}>
                  <img src={item.img} alt="card" />
                </div>
                <p css={card_title_text}>{item.title}</p>
                <p css={card_desc_text}>{renderWidthKeys(item.desc)}</p>
              </li>
            ))}
          </ul>
          {caption && <p css={caption_text}>{renderWidthKeys(caption)}</p>}
        </div>
      </div>
      <div css={gradient}></div>
    </ContentsContainer>
  );
}

const gradient = css`
  position: absolute;
  top: 0;
  height: 20%;
  left: 0;
  right: 0;

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
`;

const wrap = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;
const title_wrap = (align?: string) => css`
  display: flex;
  flex-direction: column;
  align-items: ${align || "center"};
  justify-content: center;
  gap: 30px;
`;

const title_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -1.44px;
  text-transform: uppercase;
  text-align: center;

  .green {
    color: #018c3b;
  }

  @media (max-width: 1800px) {
    font-size: 44px;
  }
  @media (max-width: 1600px) {
    font-size: 40px;
  }
  @media (max-width: 1400px) {
    font-size: 34px;
  }
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
`;
const desc_text = css`
  color: #666;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;

const card_wrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1600px) {
    flex-wrap: wrap;
  }
  @media (max-width: 480px) {
    gap: 15px;
  }
`;
const card_item = css`
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-self: stretch;
  gap: 20px;

  border-radius: 10px;
  border: 1px solid rgba(1, 140, 59, 0.3);
  background: #fff;

  @media (max-width: 1800px) {
    padding: 24px;
    gap: 16px;
  }
  @media (max-width: 1600px) {
    padding: 16px;
    max-width: 300px;
    gap: 14px;
  }
  @media (max-width: 960px) {
    padding: 10px;
    max-width: 240px;
    gap: 10px;
  }
  @media (max-width: 720px) {
    max-width: 200px;
  }
  @media (max-width: 680px) {
    border-radius: 5px;
    max-width: 180px;
  }
  @media (max-width: 480px) {
    max-width: 160px;
  }
  @media (max-width: 374px) {
    max-width: 120px;
  }
`;
const card_image_container = css`
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 680px) {
    border-radius: 5px;
  }
`;
const card_title_text = css`
  color: var(--Color-primary, #018c3b);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const card_desc_text = css`
  color: var(--black-text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 135%; /* 27px */

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const caption_text = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;

  @media (max-width: 1800px) {
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
    font-size: 20px;
  }
  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
