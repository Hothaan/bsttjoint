"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import SectionTitleDesc from "../text/SectionTitleDesc";
import { ISectionTitleDesc } from "../text/SectionTitleDesc";
import SectionTitleSimple from "../text/SectionTitleSimple";
import ContentsContainer from "../container/ContentsContainer";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import Check from "@/assets/components/ui/spinalDisease/TypeC/check.svg";

interface ITypeF {
  sectionTitleDesc: ISectionTitleDesc;
  desc: (string | React.ReactNode)[];
  checkList: string[];
  captionList: string[];
  bgPc: string;
  bgMo: string;
}

export default function TypeF(prop: ITypeF) {
  const { sectionTitleDesc, desc, checkList, captionList, bgPc, bgMo } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  if (!width) {
    return <></>;
  }
  return (
    <div css={wrap}>
      <div css={text_wrap}>
        <SectionTitleDesc {...sectionTitleDesc} />
        <div css={desc_list_wrap}>
          <p css={desc_text}>{renderWidthKeys(desc)}</p>
          <ul css={check_list_wrap}>
            {checkList.map((item, idx) => (
              <li key={idx + `TypeC checkList item`} css={check_list_item}>
                <div css={icon_container}>
                  <Check />
                </div>
                <p css={check_list_text}>{item}</p>
              </li>
            ))}
          </ul>
          <ul css={caption_list_wrap}>
            {captionList.map((item, idx) => (
              <li key={idx + `TypeC captionList item`} css={caption_list_item}>
                <div css={dot_container}>
                  <span css={dot}></span>
                </div>
                <p css={caption_list_text}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div css={image_container}>
        <img src={width > 960 ? bgPc : bgMo} alt="bg" />
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const text_wrap = css`
  width: 43%;

  display: flex;
  flex-direction: column;
  gap: 54px;

  padding: 180px 0 180px 180px;

  @media (max-width: 1800px) {
    padding: 160px 0 160px 160px;
  }
  @media (max-width: 1400px) {
    padding: 140px 0 140px 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px 0 120px 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px 0 100px 100px;
  }
  @media (max-width: 960px) {
    width: 100%;
    padding: 80p;
  }
  @media (max-width: 680px) {
    padding: 80px 60px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px;
  }
`;
const desc_list_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
const desc_text = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.64px;

  .bold {
    font-weight: 800;
  }

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 18px;
  }
`;
const check_list_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const check_list_item = css`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const icon_container = css`
  width: 24px;
  height: auto;
  aspect-ratio: 1 / 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1400px) {
    width: 20px;
  }
`;
const check_list_text = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
const image_container = css`
  align-self: stretch;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    width: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;
const caption_list_wrap = css``;
const caption_list_item = css`
  display: flex;
  gap: 1em;
  padding-left: 0.4em;

  font-size: 20px;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
const dot_container = css`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.6em;
`;
const dot = css`
  display: block;
  width: 6px;
  height: auto;
  aspect-ratio: 1 / 1;
  background-color: #3c3c3c;
  border-radius: 50%;

  @media (max-width: 1600px) {
    width: 4px;
  }
  @media (max-width: 374px) {
    width: 3px;
  }
`;
const caption_list_text = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;

  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.4px;
`;
