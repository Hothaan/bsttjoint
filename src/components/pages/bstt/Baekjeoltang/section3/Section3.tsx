"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import PageQuote from "@/components/ui/text/PageQuote";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

export default function Section3() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const title_eng_ = `FOR YOUR HEALTHY JOINTS`;
  const section_title_simple_ = {
    text: [`백절탕`],
    color: theme.colors.mono.black,
    align: "center",
  };
  const sub_title_ = `20년 가까이 발전하여 현재 3세대까지 연구개발된`;
  const page_quote_ = {
    text: [
      <span className="green" key="1">
        튼튼마디 연골한약의 대표처방
      </span>,
    ],
    align: "left",
  };

  const list_data_ = [
    [
      `관절염, 협착증 등 `,
      <span key="1" className="green">
        퇴행성 관절척추질환
      </span>,
      `의 비수술적 치료에 사용`,
    ],
    [
      `류마티스관절염, 강직성척추염 등 `,
      <span key="1" className="green">
        자가면역성 근골격계질환
      </span>,
      `치료에 응용`,
    ],
    [
      ` 외상성 디스크, 연골인대파열 등,`,
      <span key="1" className="green">
        결합조직 손상성 질환
      </span>,
      `부터 족저근막염, `,
      <br key="1" className="pc" />,
      `손목터널증후군 등`,
      <br key="1" className="mo" />,
      `연부조직염 연관질환 치료까지 폭넓게 응용`,
    ],
  ];

  const product1_pc = `/assets/components/pages/bstt/Baekjeoltang/section3/product1_pc.png`;

  return (
    <ContentsContainer>
      <div css={wrap}>
        <div css={image_container}>
          <img src={product1_pc} alt="product" />
        </div>
        <div css={content_wrap}>
          <div css={title_sub_title_wrap}>
            <div css={title_wrap}>
              <p css={title_eng}>{title_eng_}</p>
              <SectionTitleSimple {...section_title_simple_} />
            </div>
            <div css={sub_title_wrap}>
              <p css={sub_title}>{sub_title_}</p>
              <PageQuote {...page_quote_} />
            </div>
          </div>
          <ul css={list_wrap}>
            {list_data_.map((item, idx) => (
              <li key={idx + "section3 list item"}>
                <div css={list_item}>
                  <span css={num_text}>-{idx + 1}세대 : &nbsp;</span>
                  <p css={list_text}> {renderWidthKeys(item)}</p>
                </div>
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
  gap: 70px;
  align-items: center;

  @media (max-width: 1800px) {
    gap: 50px;
  }
  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

const image_container = css`
  width: 50%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1800px) {
    width: 60%;
  }
  @media (max-width: 1400px) {
    width: 100%;
    order: 2;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1800px) {
    gap: 30px;
  }
  @media (max-width: 1600px) {
    gap: 24px;
  }
  @media (max-width: 1400px) {
    gap: 24px;
    order: 1;
    width: 100%;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const sub_title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const title_sub_title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 1600px) {
    gap: 16px;
  }
`;

const title_eng = css`
  color: #018c3b;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 18px;
  }
`;

const sub_title = css`
  color: #121212;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -1.24px;

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 17px;
  }
  @media (max-width: 374px) {
    font-size: 18px;
  }
`;

const list_wrap = css`
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    gap: 12px;
  }
`;

const list_item = css`
  display: flex;
`;
const num_text = css`
  opacity: 0.8;
  color: #262626;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%;

  white-space: nowrap;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
const list_text = css`
  color: #262626;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */

  opacity: 0.8;

  .green {
    color: #018c3b;
    font-weight: 700;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
