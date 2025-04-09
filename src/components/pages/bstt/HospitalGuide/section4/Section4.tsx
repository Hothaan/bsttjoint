"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import InnerContainer from "@/components/ui/container/InnerContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import History from "./History";

export default function Section4() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const bg1_pc = `/assets/components/pages/bstt/HospitalGuide/section4/bg1_pc.png`;
  const sectionTitleDesc_ = {
    title: `History`,
    desc: [`튼튼마디한의원의 발자취`],
  };
  const history_data_ = [
    {
      year: 2024,
      month: 11,
      content: [
        `대규모 임상데이터 기반 `,
        <span key="1" className="bold">
          인공지능 진료분석 시스템 연구개발 착수
        </span>,
      ],
    },
    {
      year: 2023,
      month: 7,
      content: [
        <span key="1" className="bold">
          초음파유도하 심부봉약침 시술
        </span>,
        ` 튼튼마디 핵심치료법으로 도입`,
      ],
    },
    {
      year: 2022,
      month: 3,
      content: [
        `고농도 교제를 기반으로 하는 연골한약 `,
        <span key="1" className="bold">
          백절탕 3세대
        </span>,
        ` 개발성공`,
      ],
    },
    {
      year: 2020,
      month: 10,
      content: [
        `수론 기반 체중감량 `,
        <span key="1" className="bold">
          프로그램 체계화
        </span>,
      ],
    },
    {
      year: 2017,
      month: 11,
      content: [
        `자가면역질환 치료를 위한 연골한약 `,
        <span key="1" className="bold">
          백절탕 2세대 개발성공
        </span>,
      ],
    },
    {
      year: 2016,
      month: 2,
      content: [
        `튼성장교를 이용한`,
        <span key="1" className="bold">
          소아성장
        </span>,

        `프로그램 연구개발 완료`,
      ],
    },
    {
      year: 2014,
      month: 7,
      content: [
        <span key="1" className="bold">
          전국 주요 도시
        </span>,
        `도시에 거점을 갖춘 네트워크한의원으로 성장`,
      ],
    },
  ];
  return (
    <ContentsContainer bgPc={bg1_pc} bgMo={bg1_pc}>
      <InnerContainer>
        <div css={wrap(bg1_pc)}>
          <SectionTitleDesc
            titleColor={theme.colors.point.primary}
            descColor={theme.colors.mono.black}
            title={sectionTitleDesc_.title}
            desc={sectionTitleDesc_.desc}
          />
          <div css={history_wrap}>
            <History data={history_data_} />
          </div>
        </div>
      </InnerContainer>
    </ContentsContainer>
  );
}

const wrap = (img: string) => css`
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1920px) {
    gap: 120px;
  }
  @media (max-width: 1800px) {
    gap: 100px;
  }
  @media (max-width: 1600px) {
    gap: 100px;
  }
  @media (max-width: 1400px) {
    gap: 80px;
    flex-direction: column;
  }
  @media (max-width: 1200px) {
    gap: 40px;
  }
  @media (max-width: 960px) {
  }
`;

const history_wrap = css`
  padding-top: 100px;

  @media (max-width: 1400px) {
    padding-top: 0;
  }
`;
