"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import ArrowRight from "@/assets/components/pages/bstt/index/section14/arrowRight.svg";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import ContentsContainer from "../container/ContentsContainer";

interface IMedicalInquiriesBanner {
  bgPc: string;
  bgMo: string;
  content: {
    title?: (string | React.ReactNode)[];
    desc: (string | React.ReactNode)[];
    caption?: (string | React.ReactNode)[];
    quote?: (string | React.ReactNode)[];
  };
}

export default function MedicalInquiriesBannerA(prop: IMedicalInquiriesBanner) {
  const { bgPc, bgMo, content } = prop;
  const theme = useTheme() as CustomTheme;

  const link_button_ = {
    text: "진료문의",
    link: "/bstt/MedicalInquiries",
  };
  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={content_wrap}>
        <div css={title_desc_qoute_wrap}>
          {content.quote && (
            <p css={quote_text(theme)}>{renderWidthKeys(content.quote)}</p>
          )}
          {content.title && (
            <p css={title_text(theme)}>{renderWidthKeys(content.title)}</p>
          )}
          <p css={desc_text(theme)}>{renderWidthKeys(content.desc)}</p>
          {content.caption && (
            <p css={caption_text(theme)}>{renderWidthKeys(content.caption)}</p>
          )}
        </div>
        <Link href={link_button_.link} css={link_button(theme)}>
          <p css={link_text(theme)}>{link_button_.text}</p>
          <div css={icon_wrap}>
            <ArrowRight />
          </div>
        </Link>
      </div>
    </ContentsContainer>
  );
}

const wrap = (img1: string, img2: string) => css`
  position: relative;
  width: 100%;
  aspect-ratio: 1920 / 683;
  padding: 170px 320px;

  display: flex;
  justify-content: start;
  align-items: flex-start;

  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1800px) {
    padding: 160px 320px;
  }
  @media (max-width: 1600px) {
    padding: 140px 280px;
  }
  @media (max-width: 1400px) {
    padding: 120px 240px;
  }
  @media (max-width: 1200px) {
    padding: 100px 200px;
  }
  @media (max-width: 1000px) {
    padding: 80px 160px;
  }
  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;

    padding: 80px 20px 800px;

    background-image: url(${img2});
    background-position: center bottom;

    aspect-ratio: auto;
  }
  @media (max-width: 800px) {
    padding: 80px 20px 600px;
  }
  @media (max-width: 600px) {
    padding: 80px 20px 500px;
  }
  @media (max-width: 400px) {
    padding: 80px 20px 360px;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 54px;

  @media (max-width: 1600px) {
    gap: 32px;
  }
  @media (max-width: 1200px) {
    gap: 24px;
  }
  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`;
const title_desc_qoute_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`;

const title_text = (theme: CustomTheme) => css`
  color: #121212;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  .green {
    color: var(--Color-primary, #018c3b);
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
    white-space: nowrap;
  }
  @media (max-width: 560px) {
    font-size: 20px;
  }
  @media (max-width: 340px) {
    font-size: 16px;
  }
`;
const desc_text = (theme: CustomTheme) => css`
  color: #121212;
  font-size: 54px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5em;

  .highlight {
    color: #fff;
    font-weight: 700;

    padding: 6px 14px;
    display: inline-block;
    background-color: var(--Color-primary, #018c3b);
  }

  @media (max-width: 1800px) {
    font-size: 48px;
  }
  @media (max-width: 1600px) {
    font-size: 40px;
  }
  @media (max-width: 1200px) {
    font-size: 32px;
  }
  @media (max-width: 960px) {
    font-size: 54px;
    white-space: nowrap;
  }
  @media (max-width: 560px) {
    font-size: 34px;
  }
  @media (max-width: 340px) {
    font-size: 24px;
  }
`;

const caption_text = (theme: CustomTheme) => css`
  color: #444;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6em;
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    color: #121212;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  @media (max-width: 560px) {
    font-size: 14px;
  }
  @media (max-width: 340px) {
    font-size: 12px;
  }
`;

const quote_text = (theme: CustomTheme) => css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 26px */

  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
    white-space: nowrap;
  }
  @media (max-width: 560px) {
    font-size: 18px;
  }
  @media (max-width: 340px) {
    font-size: 16px;
  }
`;

const link_button = (theme: CustomTheme) => css`
  width: fit-content;

  display: flex;
  padding: 24px 40px;
  align-items: center;
  gap: 20px;
  border-radius: 80px;
  background: #fff;
  transition: 0.3s ease-out;

  &:hover {
    background-color: #7ca81e;
    p {
      color: #fff;
    }
    svg * {
      stroke: #fff;
    }
  }
  @media (max-width: 1600px) {
    padding: 20px 40px;
  }
  @media (max-width: 560px) {
    padding: 17px 40px;
  }
`;
const link_text = (theme: CustomTheme) => css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 30px;
  }
  @media (max-width: 560px) {
    font-size: 20px;
  }
  @media (max-width: 340px) {
    font-size: 16px;
  }
`;

const icon_wrap = css`
  width: 39px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    width: 28px;
    height: 14px;
  }
  @media (max-width: 960px) {
    width: 39px;
    height: 20px;
  }
  @media (max-width: 960px) {
    width: 28px;
    height: 14px;
  }
`;
