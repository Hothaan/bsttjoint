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

interface ITypeU {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  imgCircle: string;
  bg: string;
}

export default function TypeU(prop: ITypeU) {
  const { sectionTitleSimple, pageTitleContent, imgCircle, bg } = prop;
  return (
    <div css={wrap}>
      <div css={image_container}>
        <div css={bg_container}>
          <img src={bg} alt="bg" className="bg" />
        </div>
        <img src={imgCircle} alt="circle" className="circle" />
      </div>
      <div css={title_wrap}>
        <SectionTitleSimple {...sectionTitleSimple} />
        <PageTitleContent {...pageTitleContent} />
      </div>
    </div>
  );
}

const wrap = css`
  position: relative;

  display: flex;
  align-items: center;
  gap: 74px;

  width: 100%;
  padding: 230px 180px 80px 0;
  margin: 0 auto;

  @media (max-width: 1800px) {
    padding: 220px 160px 75px 0;
  }
  @media (max-width: 1600px) {
    gap: 90px;
  }
  @media (max-width: 1400px) {
    padding: 200px 0 75px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
  @media (max-width: 1200px) {
    padding: 180px 0 75px 0;
  }
  @media (max-width: 1000px) {
    padding: 160px 0 75px 0;
  }
  @media (max-width: 960px) {
    padding: 140px 0 75px 0;
    gap: 40px;
  }
  @media (max-width: 680px) {
    padding: 130px 0 75px 0;
  }
  @media (max-width: 540px) {
    padding: 120px 0 75px 0;
  }
  @media (max-width: 480px) {
    padding: 118px 0 75px 0;
  }
`;
const image_container = css`
  position: relative;

  width: 65%;
  height: auto;
  aspect-ratio: 1100 / 540;

  & > div {
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .circle {
    position: absolute;

    top: 0;
    right: 0;
    transform: translate(50%, -50%);

    width: 26%;
    aspect-ratio: 1 / 1;

    border: 10px solid #fff;
    border-radius: 50%;
  }

  @media (max-width: 1800px) {
    .circle {
      border: 8px solid #fff;
    }
  }
  @media (max-width: 1600px) {
    .circle {
      border: 6px solid #fff;
    }
  }
  @media (max-width: 1400px) {
    width: 100%;
    margin-right: 140px;

    .circle {
      transform: translate(0, -50%);
    }
  }
  @media (max-width: 1200px) {
    margin-right: 120px;
  }
  @media (max-width: 1000px) {
    margin-right: 100px;
  }
  @media (max-width: 960px) {
    margin-right: 80px;
    .circle {
      border: 4px solid #fff;
    }
  }
  @media (max-width: 680px) {
    margin-right: 60px;
  }
  @media (max-width: 540px) {
    margin-right: 40px;
  }
  @media (max-width: 480px) {
    margin-right: 20px;
    aspect-ratio: 355 / 240;

    .circle {
      width: 40%;
    }
  }
`;
const bg_container = css`
  border-radius: 0px 500px 500px 0px;
  overflow: hidden;
`;
const title_wrap = css`
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 40px;

  @media (max-width: 1400px) {
    gap: 20px;
    align-items: center;

    * {
      text-align: center !important;
    }
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;
