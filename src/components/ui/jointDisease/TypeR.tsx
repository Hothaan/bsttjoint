"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import SectionTitleSimple from "../text/SectionTitleSimple";
import ContentsContainer from "../container/ContentsContainer";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ITypeR {
  bgPc: string;
  bgMo: string;
  sectionTitleSimple: ISectionTitleSimple;
  cardData: {
    icon: React.ReactNode;
    title: string;
    desc: (string | React.ReactNode)[];
  }[];
  desc: (string | React.ReactNode)[];
}

export default function TypeR(prop: ITypeR) {
  const { bgPc, bgMo, sectionTitleSimple, cardData, desc } = prop;
  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={wrap}>
        <SectionTitleSimple {...sectionTitleSimple} />
        <div css={content_wrap}>
          <ul css={card_wrap}>
            {cardData.map((item, idx) => (
              <li key={idx + `TypeR card item`} css={card_item}>
                <div css={icon_wrap}>{item.icon}</div>
                <div css={card_text_wrap}>
                  <p css={card_title}>{item.title}</p>
                  <p css={card_desc}>{renderWidthKeys(item.desc)}</p>
                </div>
              </li>
            ))}
          </ul>
          <p css={desc_text}>{renderWidthKeys(desc)}</p>
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;
const content_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;
const card_wrap = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const card_item = css`
  display: flex;
  padding: 30px;
  align-items: center;
  gap: 50px;
  align-self: stretch;

  border-radius: 10px;
  border: 1px dashed #018c3b;
  background: #fff;

  @media (max-width: 1400px) {
    padding: 20px;
    gap: 40px;
  }
  @media (max-width: 480px) {
    padding: 18px 15px;
    gap: 30px;z
  }
  @media (max-width: 374px) {
    gap: 20px;
  }
`;

const icon_wrap = css`
  width: 100px;
  height: 100px;

  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1600px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 374px) {
    width: 50px;
    height: 50px;
  }
`;

const card_text_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 960px) {
    gap: 10px;
  }
`;

const card_title = css`
  color: var(--Black-title, #131313);
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

const card_desc = css`
  color: #666;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 29.7px */

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const desc_text = css`
  width: 100%;

  color: var(--Black-title, #131313);
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;

  .bold {
    font-weight: 700;
  }

  @media (max-width: 1800px) {
    font-size: 32px;
  }
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
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
