"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import TypeGcard from "./TypeGcard";

export default function TypeG() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const section_title_simple_ = {
    text: [
      `만성질환의 현명한 `,
      <br key="1" className="mo" />,
      `치료에 필요한 조건`,
    ],
    color: theme.colors.mono.black,
    align: "center",
  };
  const section_desc_ = [
    `”눈앞의 통증완화 뿐만 아니라`,
    <br key="1" className="mo" />,
    `관절척추가 튼튼해져야`,
    <br key="1" />,
    <span key="1" className="green">
      노후에도 활동하면서 가족과 행복한 시간을 보내실 수 있습니다.”
    </span>,
  ];
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section4/card1_pc.png`,
      title: `신체복원력의 강화`,
      desc: [`원기회복에 의한`, <br key="1" />, `자연치유력의 강화`],
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section4/card2_pc.png`,
      title: `만성염증 완화`,
      desc: [`염증조직에 침윤된`, <br key="1" />, `면역세포의 활성도 조절`],
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section4/card3_pc.png`,
      title: `항상성 회복`,
      desc: [`결합조직의 파괴억제,`, <br key="1" />, `세포기질의 생성촉진`],
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section4/card4_pc.png`,
      title: `퇴행 억제`,
      desc: [
        `노화에 따른 퇴화의`,
        <br key="1" />,
        `진행을 억제하여 기능적 유지`,
      ],
    },
  ];

  return (
    <ContentsContainer bgColor="#EAF5EF">
      <div css={wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={card_wrap}>
          {card_data_.map((item, idx) => (
            <TypeGcard
              key={idx + "section4 card"}
              idx={idx}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        <p css={section_desc_text(theme)}>{renderWidthKeys(section_desc_)}</p>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 84px;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    gap: 34px;
  }
`;

const card_wrap = css`
  display: flex;
  align-items: start;

  & > div {
    width: 25%;
  }

  @media (max-width: 960px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    & > div {
      width: calc(50% - 12px);
      flex-shrink: 0;
    }
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    & > div {
      width: calc(50% - 4px);
      flex-shrink: 0;
    }
  }
`;

const section_desc_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.black};
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: normal;
  line-height: 1.5;

  .bold {
    font-weight: 700;
  }
  .green {
    font-weight: normal;
    color: ${theme.colors.point.primary};
    font-weight: 700;
  }

  @media (max-width: 1600px) {
    font-size: 34px;
  }
  @media (max-width: 1400px) {
    font-size: 32px;
  }
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 960px) {
    font-size: 28px;
    line-height: 1.8;
  }
  @media (max-width: 840px) {
    font-size: 26px;
  }
  @media (max-width: 680px) {
    font-size: 24px;
  }
  @media (max-width: 540px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
