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
import Check from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section3/check.svg";

interface ITypeC {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  imgPc: string;
  imgMo: string;
  checkData: { text: (string | React.ReactNode)[] }[];
}

export default function TypeC(prop: ITypeC) {
  const { sectionTitleSimple, pageTitleContent, imgPc, imgMo, checkData } =
    prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  return (
    <ContentsContainer>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <div css={content_wrap}>
          <div css={image_container}>
            <img src={width >= 960 ? imgPc : imgMo} alt="treatment" />
          </div>
          <ul css={check_wrap}>
            {checkData.map((item, idx) => (
              <li key={idx + "TypeC check item"} css={check_item}>
                <div css={check_icon_container}>
                  <Check />
                </div>
                <p css={check_item_text}>{renderWidthKeys(item.text)}</p>
              </li>
            ))}
          </ul>
        </div>
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

  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 960px) {
    gap: 15px;
  }
`;

const image_container = css`
  width: 100%;
  height: auto;

  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const check_wrap = css`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1400px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 960px) {
    gap: 15px;
  }
`;

const check_item = css`
  width: 100%;

  display: flex;
  padding: 30px 40px;
  align-items: center;
  align-self: stretch;
  gap: 40px;

  border-radius: 10px;
  background: #eff8f3;

  @media (max-width: 1600px) {
    padding: 24px 32px;
    gap: 30px;
  }
  @media (max-width: 1400px) {
    padding: 20px 28px;
    gap: 20px;
  }

  @media (max-width: 960px) {
    padding: 18px 20px;
  }

  @media (max-width: 374px) {
    padding: 10px 16px;
    gap: 16px;
  }
`;

const check_item_text = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 35.2px */

  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const check_icon_container = css`
  width: 30px;
  flex-shrink: 0;
  aspect-ratio: 1/1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1600px) {
    width: 28px;
  }
  @media (max-width: 1400px) {
    width: 28px;
  }
  @media (max-width: 960px) {
    width: 20px;
  }
  @media (max-width: 480px) {
    width: 18px;
  }
  @media (max-width: 374px) {
    width: 14px;
  }
`;
