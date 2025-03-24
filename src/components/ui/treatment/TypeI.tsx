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

interface ITypeI {
  bgPc: string;
  bgMo: string;
  sectionTitleSimple: ISectionTitleSimple;
  circleData: {
    desc: (string | React.ReactNode)[];
  }[];
  desc: (string | React.ReactNode)[];
}

export default function TypeI(prop: ITypeI) {
  const { bgPc, bgMo, sectionTitleSimple, circleData, desc } = prop;
  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={wrap}>
        <SectionTitleSimple {...sectionTitleSimple} />
        <ul css={circle_wrap}>
          {circleData.map((item, idx) => (
            <li key={idx + "TypeI circle item"} css={circle_item}>
              <div css={circle_item_inner_wrap}>
                <p css={circle_item_text}>{renderWidthKeys(item.desc)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p css={desc_text}>{renderWidthKeys(desc)}</p>
      </div>
    </ContentsContainer>
  );
}
const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 45px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

const circle_wrap = css`
  display: flex;
  padding: 40px;
  justify-content: center;
  align-items: center;
  gap: 80px;

  border-radius: 300px;
  border: 1.142px dashed #018c3b;
  background: #fff;

  @media (max-width: 1400px) {
    padding: 32px;
    gap: 60px;
  }
  @media (max-width: 1200px) {
    padding: 28px;
    gap: 40px;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 20px;
    border-radius: 200px;
    gap: 20px;
  }
  @media (max-width: 374px) {
    padding: 10px;
  }
`;

const circle_item = css`
  padding: 44px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(1, 140, 59, 0.15) 0%,
    rgba(1, 140, 59, 0.06) 95.5%
  );

  @media (max-width: 1400px) {
    padding: 32px;
  }
  @media (max-width: 1200px) {
    padding: 28px;
  }
  @media (max-width: 374px) {
    padding: 16px;
  }
`;
const circle_item_inner_wrap = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  aspect-ratio: 1/ 1;
  border-radius: 50%;
  background: #018c3b;

  @media (max-width: 1800px) {
    width: 280px;
  }
  @media (max-width: 1600px) {
    width: 240px;
  }
  @media (max-width: 1400px) {
    width: 200px;
  }
  @media (max-width: 1200px) {
    width: 180px;
  }
  @media (max-width: 960px) {
    width: 240px;
  }
  @media (max-width: 720px) {
    width: 200px;
  }
  @media (max-width: 680px) {
    width: 190px;
  }
  @media (max-width: 374px) {
    width: 160px;
  }
`;

const circle_item_text = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%; /* 32.4px */

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;

const desc_text = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 34px;
  }
  @media (max-width: 1600px) {
    font-size: 32px;
  }
  @media (max-width: 1400px) {
    font-size: 30px;
  }
  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
  @media (max-width: 680px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
