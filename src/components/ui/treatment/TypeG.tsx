"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "../text/SectionTitleSimple";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ITypeG {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    icon: React.ReactNode;
    title: string;
    desc: (string | React.ReactNode)[];
  }[];
  bgPc?: string;
  bgMo?: string;
  bgColor?: string;
}

export default function TypeG(prop: ITypeG) {
  const {
    sectionTitleSimple,
    pageTitleContent,
    cardData,
    bgPc,
    bgMo,
    bgColor,
  } = prop;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      css={bgColor === undefined ? wrap(bgPc, bgMo) : wrap_bg_color(bgColor)}
      data-aos="fade-up"
    >
      <div css={title_wrap}>
        <SectionTitleSimple {...sectionTitleSimple} />
        <PageTitleContent {...pageTitleContent} />
      </div>
      <ul css={card_wrap}>
        {cardData.map((item, idx) => (
          <li key={idx + "TypeG card item"} css={card_item}>
            <div css={icon_container}>{item.icon}</div>
            <div css={card_item_text_container}>
              <p css={card_item_title_text}>{item.title}</p>
              <p css={card_item_desc_text}>{renderWidthKeys(item.desc)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
const wrap = (bgPc?: string, bgMo?: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  position: relative;

  width: 100%;
  padding: 180px;
  margin: 0 auto;

  background-image: url(${bgPc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1800px) {
    padding: 160px;
  }
  @media (max-width: 1400px) {
    padding: 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px;
  }
  @media (max-width: 960px) {
    padding: 80px;
    background-image: url(${bgMo});
  }
  @media (max-width: 680px) {
    padding: 80px 60px;
    gap: 40px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px;
  }
`;
const wrap_bg_color = (bgColor?: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  position: relative;

  width: 100%;
  padding: 180px;
  margin: 0 auto;

  background: ${bgColor ||
  "linear-gradient(359deg, #fff 13.94%, #eaf5ef 114.07%)"};

  @media (max-width: 1800px) {
    padding: 160px;
  }
  @media (max-width: 1400px) {
    padding: 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px;
  }
  @media (max-width: 960px) {
    padding: 80px;
  }
  @media (max-width: 680px) {
    padding: 80px 60px;
    gap: 40px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px;
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

const card_wrap = css`
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;

  & > li {
    width: 100%;
  }

  @media (max-width: 1400px) {
    flex-wrap: wrap;

    & > li {
      width: calc(50% - (25px / 2));
    }
  }
  @media (max-width: 680px) {
    flex-wrap: nowrap;
    flex-direction: column;

    & > li {
      width: 100%;
    }
  }
`;

const card_item = css`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  gap: 40px;

  border-radius: 10px;
  border: 1px solid rgba(1, 140, 59, 0.5);
  background: #fff;

  @media (max-width: 1400px) {
    padding: 32px;
    gap: 32px;
  }
  @media (max-width: 1200px) {
    padding: 28px;
    gap: 24px;
  }
  @media (max-width: 480px) {
    padding: 20px;
    gap: 20px;
  }
  @media (max-width: 374px) {
    padding: 16px;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
`;

const icon_container = css`
  width: auto;
  height: 60px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1400px) {
    height: 50px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;
const card_item_text_container = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1400px) {
    gap: 16px;
  }
  @media (max-width: 1200px) {
    gap: 12px;
  }
  @media (max-width: 480px) {
    gap: 5px;
  }
  @media (max-width: 374px) {
    align-items: center;
    justify-content: center;
  }
`;
const card_item_title_text = css`
  color: #222;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 36.4px */

  white-space: nowrap;
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
const card_item_desc_text = css`
  color: #555;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 28.5px */
  letter-spacing: -0.38px;

  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
