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
import Check from "@/assets/components/ui/jointDisease/TypeO/check.svg";

interface ITypeO {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent?: IPageTitleContent;
  cardData: { text: (string | React.ReactNode)[] }[];
  quote: (string | React.ReactNode)[];
  bgColor?: string;
}

export default function TypeO(prop: ITypeO) {
  const { sectionTitleSimple, pageTitleContent, cardData, quote, bgColor } =
    prop;
  const bgColor_ = `linear-gradient(180deg, #FFF 13.94%, #EAF5EF 114.07%)`;
  return (
    <ContentsContainer bgColor={bgColor || bgColor_}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          {pageTitleContent && <PageTitleContent {...pageTitleContent} />}
        </div>
        <ul css={card_wrap}>
          {cardData.map((item, idx) => (
            <div key={idx + "TypeO card item"} css={card_item}>
              <div css={icon_container}>
                <Check />
              </div>
              <p css={card_text}>{renderWidthKeys(item.text)}</p>
            </div>
          ))}
        </ul>
        <span css={stroke}></span>
        <p css={quote_text}>{renderWidthKeys(quote)}</p>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media (max-width: 1200px) {
    gap: 40px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
const card_wrap = css`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 374px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const icon_container = css`
  width: 28px;
  height: 28px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 960px) {
    width: 16px;
    height: 16px;
  }
`;
const card_item = css`
  display: flex;
  padding: 31px 40px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  align-self: stretch;

  border-radius: 10px;
  border: 1px solid rgba(1, 140, 59, 0.3);
  background: #fff;

  @media (max-width: 1200px) {
    padding: 30px;
  }
  @media (max-width: 960px) {
    padding: 20px;
    gap: 10px;
  }
  @media (max-width: 480px) {
    padding: 20px 5px;
    gap: 5px;
  }
`;
const card_text = css`
  color: var(--black-text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 720px) {
    font-size: 16px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const stroke = css`
  width: 1px;
  height: 150px;

  border: 1px dashed #018c3b;

  @media (max-width: 960px) {
    height: 75px;
  }
`;
const quote_text = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;

  .green {
    color: #018c3b;
  }

  .big {
    font-size: 64px;
  }

  @media (max-width: 1200px) {
    font-size: 30px;
    .big {
      font-size: 48px;
    }
  }
  @media (max-width: 960px) {
    font-size: 22px;
    .big {
      font-size: 40px;
    }
  }
`;
