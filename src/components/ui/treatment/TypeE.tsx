"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "../container/ContentsContainer";
import SectionTitleSimple from "../text/SectionTitleSimple";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ITypeE {
  bgPc: string;
  bgMo: string;
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    img: React.ReactNode;
    title: (string | React.ReactNode)[];
  }[];
}

export default function TypeE(prop: ITypeE) {
  const { bgPc, bgMo, sectionTitleSimple, pageTitleContent, cardData } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <ul css={card_wrap}>
          {cardData.map((item, idx) => (
            <li key={idx + "TypeE card item"} css={card_item}>
              <div css={icon_container}>{item.img}</div>
              <p css={card_item_text}>{renderWidthKeys(item.title)}</p>
            </li>
          ))}
        </ul>
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
`;

const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1400px) {
    gap: 20px;
  }
`;

const card_wrap = css`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 960px) {
    gap: 15px;
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 374px) {
    gap: 10px;
  }
`;

const card_item = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 45px 60px;

  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);

  @media (max-width: 1800px) {
    padding: 40px 55px;
    gap: 50px;
  }
  @media (max-width: 1600px) {
    padding: 35px 50px;
    gap: 40px;
  }
  @media (max-width: 1400px) {
    padding: 30px 45px;
    gap: 30px;
  }
  @media (max-width: 960px) {
    padding: 25px 30px;
  }
  @media (max-width: 374px) {
    padding: 15px 20px;
    gap: 20px;
  }
`;
const icon_container = css`
  width: 80px;
  aspect-ratio: 80 / 70;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1800px) {
    width: 70px;
  }
  @media (max-width: 1600px) {
    width: 60px;
  }
  @media (max-width: 1400px) {
    width: 57px;
  }
  @media (max-width: 374px) {
    width: 36px;
  }
`;

const card_item_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 135%;
  white-space: nowrap;

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
