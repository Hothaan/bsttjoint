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

interface ITypeW {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent?: IPageTitleContent;
  cardData: { img: string; text: (string | React.ReactNode)[] }[];
  bgColor: string;
}

export default function TypeW(prop: ITypeW) {
  const { sectionTitleSimple, pageTitleContent, cardData, bgColor } = prop;
  return (
    <ContentsContainer bgColor={bgColor}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          {pageTitleContent && <PageTitleContent {...pageTitleContent} />}
        </div>
        <div css={card_wrap}>
          {cardData.map((item, idx) => (
            <div key={idx + `TypeW card item`} css={card_item(idx === 0)}>
              <div css={image_container}>
                <img src={item.img} alt="card" />
              </div>
              <p css={card_text}>{renderWidthKeys(item.text)}</p>
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
  gap: 40px;
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const card_wrap = css`
  display: flex;
  gap: 50px;

  @media (max-width: 1600px) {
    gap: 40px;
  }
  @media (max-width: 1200px) {
    gap: 30px;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
const card_item = (isFirst: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  transform: ${isFirst ? "translateY(20%)" : "none"};

  @media (max-width: 960px) {
    transform: none;
  }
`;
const image_container = css`
  width: 100%;
  height: auto;

  aspect-ratio: 750 / 402;
  border-radius: 10px;
  overflow: hidden;
`;
const card_text = css`
  color: var(--black-text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

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
  @media (max-width: 720px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
