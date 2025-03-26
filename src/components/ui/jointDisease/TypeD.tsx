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
  pageTitleContent?: IPageTitleContent;
  imgPc: string;
  imgMo: string;
  desc?: (string | React.ReactNode)[];
  bgColor?: string;
}

export default function TypeD(prop: ITypeD) {
  const { sectionTitleSimple, pageTitleContent, imgPc, imgMo, desc, bgColor } =
    prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  return (
    <ContentsContainer bgColor={bgColor}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          {pageTitleContent && <PageTitleContent {...pageTitleContent} />}
        </div>
        <div css={image_container}>
          <img src={width > 960 ? imgPc : imgMo} alt="treatment" />
        </div>
        {desc && <p css={desc_text}>{renderWidthKeys(desc)}</p>}
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

  @media (max-width: 1600px) {
    gap: 50px;
  }
  @media (max-width: 960px) {
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 30px;
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

const image_container = css`
  width: 120%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const desc_text = css`
  color: var(--Black-title, #131313);
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

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
