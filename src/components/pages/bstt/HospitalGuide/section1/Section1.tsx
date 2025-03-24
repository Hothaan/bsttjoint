"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

export default function Section1() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const section_title_desc_ = {
    title: `Why problem`,
    desc: [
      `건강하고 행복한`,
      <br key="1" className="mo" />,
      `100세 시대의 현주소`,
    ],
    titleColor: "rgba(1, 140, 59, 1)",
    descColor: "#131313",
    justify: width > 1580 ? "start" : width > 960 ? "center" : "start",
    align: width > 1580 ? "start" : width > 960 ? "center" : "start",
  };
  const chart1_pc = `/assets/components/pages/bstt/HospitalGuide/section1/chart1_pc.png`;
  const chart1_mo = `/assets/components/pages/bstt/HospitalGuide/section1/chart1_mo.png`;
  const text1_ = [
    `2021년 기준 한국인 평균 기대수명 84.6세`,
    <br key="1" />,
    `그런데.. 평균 건강수명은 70.5세.`,
    <br key="1" />,
    <span key="2" className="green">
      즉, 노후에 평균 14.1년을 질병으로 고통받으면서 보냅니다.
    </span>,
  ];
  const text2_ = [
    `이는 2009년 조사결과에 비하여 80.7세에서 84.6세로`,
    <br key="1" className="pc" />,
    `기대수명이 3.9년이 증가하였으나 `,
    <br key="1" className="pc" />,
    `72.6년에서 70.5세로 건강수명은 2.1년이 오히려 감소한 것입니다.`,
  ];
  const text3_ = [
    `”의학기술이 그렇게 발전했는데,`,
    <span key="1" className="bold">
      도대체 왜 그럴까요?”
    </span>,
  ];

  return (
    <div css={wrap}>
      <SectionTitleDesc {...section_title_desc_} />
      <div css={content_wrap}>
        <div css={text_wrap}>
          <p css={text1_style}>{renderWidthKeys(text1_)}</p>
          <p css={text2_style}>{renderWidthKeys(text2_)}</p>
          {width > 960 && <p css={text3_style}>{renderWidthKeys(text3_)}</p>}
        </div>
        <div css={image_container}>
          <img src={width > 960 ? chart1_pc : chart1_mo} alt="chart" />
        </div>
        {width < 960 && <p css={text3_style}>{renderWidthKeys(text3_)}</p>}
      </div>
    </div>
  );
}

const wrap = css`
  padding: 180px;

  display: flex;
  flex-direction: column;
  gap: 56px;

  @media (max-width: 1600px) {
    padding: 100px;
  }
  @media (max-width: 1200px) {
    padding: 80px;
  }
  @media (max-width: 960px) {
    padding: 80px 20px;
  }
`;

const content_wrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1880px) {
    gap: 100px;
  }
  @media (max-width: 1580px) {
    flex-direction: column;
    gap: 80px;
  }
  @media (max-width: 960px) {
    align-items: start;
    gap: 0;
  }
`;

const text_wrap = css`
  @media (max-width: 960px) {
    margin-bottom: 80px;
  }
`;

const text1_style = css`
  color: #163007;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  .green {
    color: #018c3b;
  }

  margin-bottom: 26px;

  @media (max-width: 960px) {
    font-size: 20px;
  }
`;
const text2_style = css`
  color: var(--black-text, #3c3c3c);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  margin-bottom: 26px;
  word-break: keep-all;

  @media (max-width: 960px) {
    font-size: 17px;
  }
`;
const text3_style = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  .bold {
    font-weight: 800;
  }

  margin-bottom: 36px;

  @media (max-width: 960px) {
    margin-top: 34px;
    font-size: 24px;
  }
`;

const image_container = css`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 720px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    max-width: 720px;
    height: auto;
    aspect-ratio: 720 / 397;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    border-radius: 0;
    img {
      max-width: 100%;
      height: 100%;
      width: auto;
      aspect-ratio: 335 / 530;
    }
  }
`;
