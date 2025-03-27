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

interface ITypeN {
  title: (string | React.ReactNode)[];
  desc: (string | React.ReactNode)[];
  bgPc: string;
  bgMo: string;
}

export default function TypeN(prop: ITypeN) {
  const { title, desc, bgPc, bgMo } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  return (
    <div css={wrap}>
      <div css={image_container}>
        <img src={width > 960 ? bgPc : bgMo} alt="treatment" />
      </div>
      <div css={text_wrap}>
        <p css={title_text}>{renderWidthKeys(title)}</p>
        <p css={desc_text}>{renderWidthKeys(desc)}</p>
      </div>
    </div>
  );
}

const image_container = css`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const wrap = css`
  position: relative;
`;

const text_wrap = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 180px 180px 100px 180px;

  @media (max-width: 1800px) {
    padding: 160px 160px 100px 160px;
  }
  @media (max-width: 1400px) {
    padding: 140px 140px 100px 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px 120px 100px 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px;
  }
  @media (max-width: 960px) {
    padding: 180px 40px 100px 40px;
  }
  @media (max-width: 780px) {
    padding: 160px 40px 100px 40px;
  }
  @media (max-width: 640px) {
    padding: 140px 40px 80px 40px;
  }
  @media (max-width: 540px) {
    padding: 120px 40px 60px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px;
  }
  @media (max-width: 374px) {
    padding: 60px 20px;
  }
  @media (max-width: 320px) {
    padding: 60px 20px 50px 20px;
  }
`;

const title_text = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 145%;

  .green {
    color: var(--Color-primary, #018c3b);
  }

  @media (max-width: 1800px) {
    font-size: 48px;
  }
  @media (max-width: 1600px) {
    font-size: 40px;
  }
  @media (max-width: 1400px) {
    font-size: 34px;
  }
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 960px) {
    font-size: 54px;
  }
  @media (max-width: 780px) {
    font-size: 48px;
  }
  @media (max-width: 640px) {
    font-size: 44px;
  }
  @media (max-width: 540px) {
    font-size: 34px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
  @media (max-width: 374px) {
    font-size: 28px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;
const desc_text = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 51.2px */

  .bold {
    font-weight: 700;
  }

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    transform: translateY(25%);
  }
  @media (max-width: 960px) {
    font-size: 32px;
    transform: none;
  }
  @media (max-width: 780px) {
    font-size: 28px;
  }
  @media (max-width: 680px) {
    font-size: 24px;
  }
  @media (max-width: 540px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
