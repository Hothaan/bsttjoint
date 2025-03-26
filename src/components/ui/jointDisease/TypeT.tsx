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

interface ITypeT {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: { img: string; desc: (string | React.ReactNode)[] }[];
}

export default function TypeT(prop: ITypeT) {
  const { sectionTitleSimple, pageTitleContent, cardData } = prop;
  return (
    <ContentsContainer>
      <div css={wrap}>
        <div css={title_desc_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <div css={card_wrap}>
          {cardData.map((item, idx) => (
            <div key={idx + `TypeT card item`} css={card_item(item.img)}>
              <div css={card_text_wrap}>
                <p css={card_text}>{renderWidthKeys(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const title_desc_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const card_wrap = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);

    & > div:last-child {
      grid-column: span 2;
      aspect-ratio: 335 / 220;
    }
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    & > div:last-child {
      grid-column: span 1;
    }
  }
`;

const card_item = (img: string) => css`
  position: relative;

  border-radius: 10px;
  overflow: hidden;

  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  aspect-ratio: 500 / 600;

  @media (max-width: 960px) {
    aspect-ratio: 335 / 220;
    border-radius: 5px;
  }
`;

const card_text_wrap = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 36px 30px;

  display: flex;

  align-items: end;

  @media (max-width: 1600px) {
    padding: 30px 25px;
  }
  @media (max-width: 1400px) {
    padding: 25px 20px;
  }
  @media (max-width: 480px) {
    padding: 20px 15px;
  }
  @media (max-width: 374px) {
    padding: 15px 10px;
  }
`;

const card_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  .bold {
    font-weight: 700;
  }

  @media (max-width: 1800px) {
    font-size: 24px;
  }
  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (max-width: 374px) {
    font-size: 13px;
  }
`;
