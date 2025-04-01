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
  paddingBottom?: boolean;
}

export default function TypeD(prop: ITypeD) {
  const {
    sectionTitleSimple,
    pageTitleContent,
    imgPc,
    imgMo,
    desc,
    bgColor,
    paddingBottom,
  } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  if (paddingBottom === undefined || paddingBottom === true) {
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
  } else {
    return (
      <div css={bg_wrap(bgColor)}>
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
      </div>
    );
  }
}

const bg_wrap = (bgColor?: string) => css`
  position: relative;

  width: 100%;
  padding: 180px 180px 0 180px;
  margin: 0 auto;
  background: ${bgColor || "#fff"};

  @media (max-width: 1800px) {
    padding: 160px 160px 0 160px;
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
  }
`;

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
