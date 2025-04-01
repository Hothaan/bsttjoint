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

interface ITypeD {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    icon: React.ReactNode;
    title: (string | React.ReactNode)[];
    desc?: (string | React.ReactNode)[];
  }[];
  bgPc: string;
  bgMo: string;
}

export default function TypeD(prop: ITypeD) {
  const { sectionTitleSimple, pageTitleContent, cardData, bgPc, bgMo } = prop;
  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <div css={card_wrap}>
          {cardData.map((item, idx) => (
            <div key={idx + `TypeD card item`} css={card_item}>
              <div css={icon_container}>{item.icon}</div>
              <div css={card_item_content_wrap}>
                <p css={title_text}>{renderWidthKeys(item.title)}</p>
                {item.desc && (
                  <p css={desc_text}>{renderWidthKeys(item.desc)}</p>
                )}
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
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media (max-width: 480px) {
    gap: 34px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;
const card_wrap = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 20px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const card_item = css`
  display: flex;
  padding: 56px 60px;
  align-items: center;
  align-self: stretch;
  gap: 60px;

  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);

  @media (max-width: 1900px) {
    padding: 50px 54px;
    gap: 50px;
  }
  @media (max-width: 1800px) {
    padding: 46px 50px;
    gap: 45px;
  }
  @media (max-width: 1600px) {
    padding: 42px 46px;
    gap: 40px;
  }
  @media (max-width: 1400px) {
    padding: 38px 42px;
    gap: 35px;
  }
  @media (max-width: 1200px) {
    padding: 34px 38px;
    gap: 30px;
  }
  @media (max-width: 960px) {
    width: 100%;
    padding: 30px 34px;
    gap: 25px;
  }
  @media (max-width: 840px) {
    padding: 26px 30px;
    gap: 20px;
  }
  @media (max-width: 480px) {
    padding: 20px;
    gap: 16px;
  }
  @media (max-width: 374px) {
    padding: 16px;
  }
`;
const icon_container = css`
  width: 80px;
  height: auto;
  aspect-ratio: 8/7;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1900px) {
    width: 70px;
  }
  @media (max-width: 374px) {
    width: 50px;
  }
`;
const card_item_content_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
const title_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;

  @media (max-width: 1900px) {
    font-size: 22px;
  }
  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 17px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
const desc_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 24.3px */

  @media (max-width: 1900px) {
    font-size: 16px;
  }
  @media (max-width: 1600px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
