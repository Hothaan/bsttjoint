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

interface ITypeP {
  title: (string | React.ReactNode)[];
  imgPc: string;
  imgMo: string;
  bgPc: string;
  bgMo: string;
  desc: (string | React.ReactNode)[];
}

export default function TypeP(prop: ITypeP) {
  const { title, imgPc, imgMo, bgPc, bgMo, desc } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={wrap}>
        <p css={title_text}>{renderWidthKeys(title)}</p>
        {/* <SectionTitleSimple {...sectionTitleSimple} /> */}
        <div css={content_wrap}>
          <div css={image_container}>
            <img src={width > 960 ? imgPc : imgMo} alt="content" />
          </div>
          <p css={desc_text}>{renderWidthKeys(desc)}</p>
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 60px;
  }
`;
const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;

const image_container = css`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const title_text = css`
  color: var(--Black-title, #131313);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;

  .bold {
    font-weight: 600;
  }

  @media (max-width: 1800px) {
    font-size: 44px;
  }
  @media (max-width: 1600px) {
    font-size: 40px;
  }
  @media (max-width: 1400px) {
    font-size: 36px;
  }
  @media (max-width: 1200px) {
    font-size: 32px;
  }
  @media (max-width: 960px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    font-weight: 700;
    .bold {
      font-weight: 700;
    }
  }
`;
const desc_text = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 1800px) {
    font-size: 30px;
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
