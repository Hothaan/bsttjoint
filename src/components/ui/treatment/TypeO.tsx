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

interface ITypeO {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  bgPc: string;
  bgMo: string;
}

export default function TypeO(prop: ITypeO) {
  const { sectionTitleSimple, pageTitleContent, bgPc, bgMo } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return (
    <div css={wrap}>
      <div css={title_wrap}>
        <SectionTitleSimple {...sectionTitleSimple} />
        <PageTitleContent {...pageTitleContent} />
      </div>

      <div css={image_container}>
        <img src={width >= 840 ? bgPc : bgMo} alt="information" />
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 180px 180px 0 180px;

  @media (max-width: 1800px) {
    padding: 160px 160px 0 160px;
    gap: 50px;
  }

  @media (max-width: 1400px) {
    padding: 140px 140px 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px 120px 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px 100px 0 100px;
  }
  @media (max-width: 960px) {
    gap: 40px;

    padding: 80px 80px 0 80px;
  }
  @media (max-width: 680px) {
    padding: 80px 60px 0 60px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px 0 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px 0 20px;
    gap: 30px;
  }
`;

const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const image_container = css`
  width: 100%;
  height: auto;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
