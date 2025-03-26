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
import Check from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section6/check.svg";

interface ITypeE {
  bgPc: string;
  bgMo: string;

  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    text: (string | React.ReactNode)[];
  }[];
  imgLayer?: string;
}

export default function TypeF(prop: ITypeE) {
  const {
    bgPc,
    bgMo,
    imgLayer,
    sectionTitleSimple,
    pageTitleContent,
    cardData,
  } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <ul css={card_wrap}>
          {cardData.map((item, idx) => (
            <li key={idx + "TypeF card item"} css={card_item}>
              <div css={icon_container}>
                <Check />
              </div>
              <p css={card_item_text}>{renderWidthKeys(item.text)}</p>
            </li>
          ))}
        </ul>
      </div>
      {width >= 960 && imgLayer !== undefined && (
        <div css={img_container}>
          <img src={imgLayer} alt="img layer" />
        </div>
      )}
    </ContentsContainer>
  );
}

const img_container = css`
  position: absolute;
  right: 0;
  bottom: 30px;
  width: auto;
  height: 50%;
  aspect-ratio: 603.83/520;
  flex-shrink: 0;

  @media (max-width: 1800px) {
    height: 45%;
  }
  @media (max-width: 1600px) {
    height: 40%;
  }
  @media (max-width: 1400px) {
    height: 35%;
  }
  @media (max-width: 1200px) {
    height: 30%;
  }
`;

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media (max-width: 640px) {
    gap: 40px;
  }
  @media (max-width: 374px) {
    gap: 24px;
  }
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
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 15px;
  }
`;
const card_item = css`
  display: flex;
  padding: 50px 100px;
  align-items: center;
  gap: 20px;

  border-radius: 10px;
  border: 1px dashed #018c3b;
  background: #fff;

  @media (max-width: 1800px) {
    padding: 45px 90px;
  }
  @media (max-width: 1600px) {
    padding: 40px 80px;
  }
  @media (max-width: 1400px) {
    padding: 35px 70px;
  }
  @media (max-width: 1200px) {
    padding: 30px 60px;
  }
  @media (max-width: 960px) {
    padding: 25px 50px;
  }
  @media (max-width: 680px) {
    padding: 25px 40px;
  }
  @media (max-width: 540px) {
    padding: 25px 30px;
  }
  @media (max-width: 480px) {
    padding: 25px 20px;
    gap: 16px;
  }
  @media (max-width: 374px) {
    padding: 20px 16px;
    gap: 10px;
    flex-direction: column;
  }
`;
const icon_container = css`
  width: 30px;
  aspect-ratio: 1/1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1400px) {
    width: 24px;
  }
  @media (max-width: 1200px) {
    width: 20px;
  }
  @media (max-width: 480px) {
    width: 18px;
  }
  @media (max-width: 374px) {
    width: 14px;
  }
`;
const card_item_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  .green {
    color: #018c3b;
  }
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
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
    text-align: center;
  }
`;
