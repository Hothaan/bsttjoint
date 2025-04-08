"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import PageTitleContent from "@/components/ui/text/PageTitleContent";
import TypeRcircle from "./TypeRcircle";

export default function TypeR() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const bgPc__ = `/assets/components/pages/bstt/Baekjeoltang/section1/bg1_pc.png`;
  const bgMo_ = `/assets/components/pages/bstt/Baekjeoltang/section1/bg1_mo.png`;

  const section_title_desc_ = {
    title: [
      `튼튼마디를 탄생시킨 `,
      <span key="1" className="green">
        독보적인 처방
      </span>,
    ],
    desc: [
      `연골한약 `,
      <span key="1" className="green">
        백절탕
      </span>,
    ],
    titleColor: "#343434",
    descColor: "#131313",
  };
  const page_title_content_ = {
    text: [
      `한약에 교(膠)를 넣어 치료하기 시작하여, 만성통증 치료를 연구한지 20여년. `,
      <br key="1" className="pc" />,
      `주변의 소중한 분들을 치료하다보니, 전국에 11개 지점을 두게 되었습니다.`,
    ],
  };

  const circle_data_ = [
    {
      num: 18,
      unit: `건`,
      desc: [`관절척추질환 중점진료`, <br key="1" />, `튼튼마디의 탄생`],
    },
    {
      num: 5000,
      unit: `명`,
      desc: [`매년 전국 튼튼마디`, <br key="1" />, `비수술치료 환자수`],
    },
    {
      num: 800000,
      unit: `건`,
      desc: [`전지적 합산`, <br key="1" />, `누적 임상례`],
    },
    {
      num: 4000000,
      unit: `첩`,
      desc: [`지금까지 처방된`, <br key="1" />, `백절탕의 양`],
    },
  ];

  return (
    <ContentsContainer bgPc={bgPc__} bgMo={bgMo_}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleDesc {...section_title_desc_} />
          <PageTitleContent {...page_title_content_} />
        </div>
        <div css={circle_wrap}>
          {circle_data_.map((item, idx) => {
            const newData_ = { ...item, idx: idx };
            return <TypeRcircle key={idx + "section1 circle"} {...newData_} />;
          })}
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
const circle_wrap = css`
  display: flex;
  width: 69.5%;

  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 960px) {
    width: calc(100% + 20px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    width: calc(100% + 15px);
  }
  @media (max-width: 374px) {
    width: calc(100% + 10px);
  }
`;
