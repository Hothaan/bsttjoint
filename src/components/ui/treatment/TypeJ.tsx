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

interface ITypeJ {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: { img: string; who: string; desc: (string | React.ReactNode)[] }[];
}

export default function TypeJ(prop: ITypeJ) {
  const { sectionTitleSimple, pageTitleContent, cardData } = prop;
  return (
    <ContentsContainer bgColor="#EAF5EF">
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <ul css={card_wrap}>
          {cardData.map((item, idx) => (
            <li key={idx + "TypeJ card item"} css={card_item}>
              <div css={card_case_badge}>
                <p css={card_case_badge_text}>case {idx + 1}</p>
              </div>
              <div css={who_wrap}>
                <div css={image_container}>
                  <img src={item.img} alt="card" />
                </div>
                <p css={who_text}>{item.who}</p>
              </div>
              <p css={desc_text}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1400px) {
    gap: 64px;
  }
  @media (max-width: 840px) {
    gap: 52px;
  }
`;

const card_wrap = css`
  display: flex;
  gap: 55px;

  @media (max-width: 1800px) {
    gap: 50px;
  }
  @media (max-width: 1600px) {
    gap: 40px;
  }
  @media (max-width: 1400px) {
    gap: 30px;
  }
  @media (max-width: 1200px) {
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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

const card_item = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;

  width: 100%;
  position: relative;

  padding: 88px 45px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;

  @media (max-width: 1800px) {
    padding: 80px 40px 60px;
  }
  @media (max-width: 1600px) {
    padding: 60px 40px 40px;
    gap: 30px;
  }
  @media (max-width: 1400px) {
    padding: 60px 25px 55px
    gap: 20px;
  }
  @media (max-width: 1200px) {
    width: calc(50% - (40px / 2));
  }
  @media (max-width: 840px) {
    width: 100%;
  }
  @media (max-width: 374px) {
    gap: 10px;
  }
`;

const card_case_badge = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  padding: 13px 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 0px 10px 10px;
  background: #018c3b;

  @media (max-width: 1600px) {
    padding: 12px 32px;
  }
  @media (max-width: 1400px) {
    padding: 11px 25px;
  }
`;

const card_case_badge_text = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */

  white-space: nowrap;
  text-transform: uppercase;

  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

const who_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const image_container = css`
  max-width: 250px;

  aspect-ratio: 1 / 1;
  img {
    object-fit: cover;
  }

  @media (max-width: 1800px) {
    max-width: 230px;
  }
  @media (max-width: 1600px) {
    max-width: 200px;
  }
  @media (max-width: 1400px) {
    max-width: 180px;
  }
  @media (max-width: 960px) {
    max-width: 220px;
  }
`;
const who_text = css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
`;

const desc_text = css`
  color: #444;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
