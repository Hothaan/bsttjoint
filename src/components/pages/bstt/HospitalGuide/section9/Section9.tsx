"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import PageBold from "@/components/ui/text/PageBold";
import List from "./List";

export default function Section9() {
  const bgPc_ = `/assets/components/pages/bstt/HospitalGuide/section9/bg1_pc.png`;
  const bgMo_ = `/assets/components/pages/bstt/HospitalGuide/section9/bg1_mo.png`;
  const sectionTitleDesc_ = {
    title: `our promise`,
    desc: [
      `튼튼마디의 `,
      <span key="1" className="green">
        굳은 약속
      </span>,
    ],
  };
  const list_data_ = [
    [
      `환자의 몸에 `,
      <span key="1" className="bold">
        해가 되는 방식으로는 치료하지 않습니다.
      </span>,
    ],
    [
      `무엇이 환자분에게 필요한 치료인지 `,
      <span key="1" className="bold">
        소신있게 제안합니다.
      </span>,
    ],
    [
      `약재는 식약처 정식인증 의약품용 `,
      <span key="1" className="bold">
        고품질 한약재만을 사용
      </span>,
      `합니다.`,
    ],
    [
      `마약성진통제, 스테로이드, 마취제 등의 `,
      <span key="1" className="bold">
        합성의약품은 전혀 사용하지 않습니다
      </span>,
    ],
    [
      `한번 사용한 주사기와 침 등 `,
      <span key="1" className="bold">
        일회용 의료용품은 절대로 재사용하지 않습니다.
      </span>,
    ],
    [
      <span key="1" className="bold">
        저희 가족에게 하는 것과 똑같은 방식
      </span>,
      `으로 환자분들을 치료합니다.`,
    ],
    [
      `지금 당장을 넘어서 `,
      <span key="1" className="bold">
        환자분의 10년 뒤를 바라보며 치료합니다.
      </span>,
    ],
  ];
  const page_bold_ = [`strong-KNIE MEDICAL CENTER`];
  return (
    <ContentsContainer bgPc={bgPc_} bgMo={bgMo_}>
      <div css={wrap}>
        <div css={content_wrap}>
          <SectionTitleDesc
            title={sectionTitleDesc_.title}
            desc={sectionTitleDesc_.desc}
            titleColor="#fff"
            descColor="#fff"
            align="start"
            justify="start"
          />
          <List data={list_data_} />
          <PageBold text={page_bold_} />
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-end;
`;

const content_wrap = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media (max-width: 1800px) {
    gap: 36px;
  }
  @media (max-width: 1600px) {
    gap: 28px;
  }
  @media (max-width: 1400px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    width: 60%;
    gap: 12px;
  }
  @media (max-width: 960px) {
    width: 100%;
    gap: 34px;
  }
`;
