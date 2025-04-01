"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ContentsContainer from "../container/ContentsContainer";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { ISectionTitleSimple } from "@/components/ui/text/SectionTitleSimple";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ITypeN {
  bgPc: string;
  bgMo: string;
  sectionTitleSimple: ISectionTitleSimple;
  cardData: {
    icon: React.ReactNode;
    title: string;
    desc: (string | React.ReactNode)[];
  }[];
  desc?: (string | React.ReactNode)[] | string;
}

export default function TypeN(prop: ITypeN) {
  const { sectionTitleSimple, bgPc, bgMo, cardData, desc } = prop;
  return (
    <ContentsContainer bgMo={bgMo} bgPc={bgPc}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <span css={stroke}></span>
        </div>
        <div css={content_wrap}>
          <ul css={card_wrap}>
            {cardData.map((item, idx) => (
              <li key={idx + "TypeG card item"} css={card_item}>
                <div css={icon_container}>{item.icon}</div>
                <div css={card_item_text_container}>
                  <p css={card_item_desc_text}>{renderWidthKeys(item.desc)}</p>
                </div>
              </li>
            ))}
          </ul>
          {desc && (
            <p css={desc_text}>
              {typeof desc === "string" ? desc : renderWidthKeys(desc)}
            </p>
          )}
        </div>
      </div>
    </ContentsContainer>
  );
}
const wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: 1600px) {
    gap: 70px;
  }
  @media (max-width: 1400px) {
    gap: 70px;
  }
  @media (max-width: 1200px) {
    gap: 50px;
  }
  @media (max-width: 960px) {
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

const desc_text = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 32px;
  }
  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px) {
    gap: 90px;
  }
  @media (max-width: 1400px) {
    gap: 68px;
  }
  @media (max-width: 1200px) {
    gap: 56px;
  }
  @media (max-width: 960px) {
    gap: 48px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;
const content_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px) {
    gap: 40px;
  }
  @media (max-width: 1400px) {
    gap: 30px;
  }
`;

const stroke = css`
  display: block;

  width: 1px;
  height: 150px;

  background: #018c3b;

  @media (max-width: 1600px) {
    height: 140px;
  }
  @media (max-width: 1400px) {
    height: 124px;
  }
  @media (max-width: 1200px) {
    height: 100px;
  }
  @media (max-width: 960px) {
    height: 84px;
  }
  @media (max-width: 480px) {
    height: 75px;
  }
`;

const card_wrap = css`
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;

  & > li {
    width: 100%;
  }

  @media (max-width: 960px) {
    flex-wrap: wrap;

    & > li {
      width: calc(50% - (25px / 2));
    }
  }
  @media (max-width: 680px) {
    flex-wrap: nowrap;
    flex-direction: column;

    & > li {
      width: 100%;
    }
  }
`;

const card_item = css`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 40px;

  border-radius: 10px;
  border: 1px solid rgba(1, 140, 59, 0.5);
  background: #fff;

  @media (max-width: 1400px) {
    padding: 32px;
    gap: 32px;
  }
  @media (max-width: 1200px) {
    padding: 28px;
    gap: 24px;
  }
  @media (max-width: 480px) {
    padding: 20px;
    gap: 20px;
  }
  @media (max-width: 374px) {
    padding: 16px;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
`;

const icon_container = css`
  width: auto;
  height: 60px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1400px) {
    height: 50px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;
const card_item_text_container = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1400px) {
    gap: 16px;
  }
  @media (max-width: 1200px) {
    gap: 12px;
  }
  @media (max-width: 480px) {
    gap: 5px;
  }
  @media (max-width: 374px) {
    align-items: center;
    justify-content: center;
  }
`;
const card_item_title_text = css`
  color: #222;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 36.4px */

  white-space: nowrap;
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
const card_item_desc_text = css`
  color: #555;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 28.5px */
  letter-spacing: -0.38px;

  .green {
    color: #018c3b;
    font-weight: 700;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
    text-align: center;
  }
`;
