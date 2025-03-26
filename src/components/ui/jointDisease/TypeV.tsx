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
import Check from "@/assets/components/ui/jointDisease/TypeV/check.svg";

interface ITypeV {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  circleBig: string;
  circleSmall: string;
  checkData: { text: (string | React.ReactNode)[] }[];
  desc: (string | React.ReactNode)[][];
}

export default function TypeV(prop: ITypeV) {
  const {
    sectionTitleSimple,
    pageTitleContent,
    circleBig,
    circleSmall,
    checkData,
    desc,
  } = prop;
  return (
    <ContentsContainer>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <div css={content_wrap}>
          <div css={circle_wrap}>
            <div css={circle_big_container}>
              <img src={circleBig} alt="circle big" />
            </div>
            <div css={circle_small_container}>
              <img src={circleSmall} alt="circle small" />
            </div>
          </div>
          <div css={text_wrap}>
            <ul css={check_list_wrap}>
              {checkData.map((item, idx) => (
                <li key={idx + `TypeV check list item`} css={check_list_item}>
                  <div css={icon_container}>
                    <Check />
                  </div>
                  <p css={check_list_text}>{renderWidthKeys(item.text)}</p>
                </li>
              ))}
            </ul>
            <ul css={desc_wrap}>
              {desc.map((item, idx) => (
                <li key={idx + `TypeV desc item`}>
                  <p css={desc_text}>{renderWidthKeys(item)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 1600px) {
    gap: 60px;
  }
  @media (max-width: 1400px) {
    gap: 50px;
  }
  @media (max-width: 1200px) {
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;
const title_wrap = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
`;

const content_wrap = css`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 25px;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const circle_wrap = css`
  position: relative;

  display: flex;
  justify-content: end;

  width: 55%;

  @media (max-width: 960px) {
    width: 100%;

    position: relative;
    z-index: 1;
  }
`;
const circle_big_container = css`
  width: 82%;
  hight: auto;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const circle_small_container = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 37%;
  hight: auto;
  border-radius: 50%;
  border: 10px solid #9bc4ac;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1800px) {
    border: 8px solid #9bc4ac;
  }
  @media (max-width: 1600px) {
    border: 6px solid #9bc4ac;
  }
  @media (max-width: 480px) {
    border: 4px solid #9bc4ac;
  }
`;
const text_wrap = css`
  width: 45%;

  display: flex;
  flex-direction: column;
  gap: 80px;

  background-color: #fff;

  @media (max-width: 1800px) {
    gap: 60px;
  }
  @media (max-width: 1600px) {
    gap: 40px;
  }
  @media (max-width: 960px) {
    width: 100%;

    position: relative;
    z-index: 2;
    transform: translateY(-20%);
  }
  @media (max-width: 720px) {
    transform: translateY(-15%);
  }
`;
const check_list_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1600px) {
    gap: 10px;
  }
`;
const check_list_item = css`
  display: flex;
  padding: 40px 30px;
  align-items: center;
  gap: 15px;

  border-radius: 10px;
  border: 1px solid rgba(1, 140, 59, 0.34);
  background: #fff;

  @media (max-width: 1800px) {
    padding: 32px 22px;
  }
  @media (max-width: 1600px) {
    padding: 26px 20px;
  }
  @media (max-width: 1400px) {
    padding: 22px 20px;
  }
  @media (max-width: 1200px) {
    padding: 18px 20px;
  }
  @media (max-width: 480px) {
    padding: 14px 20px;
  }
`;
const check_list_text = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const desc_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1600px) {
    gap: 10px;
  }
`;
const desc_text = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 41.6px */

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
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const icon_container = css`
  width: 20px;
  flex-shrink: 0;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
