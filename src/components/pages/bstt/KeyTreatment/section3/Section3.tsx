"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import Card1Icon from "@/assets/components/pages/bstt/KeyTreatment/section3/card1_pc.svg";
import Card2Icon from "@/assets/components/pages/bstt/KeyTreatment/section3/card2_pc.svg";
import Card3Icon from "@/assets/components/pages/bstt/KeyTreatment/section3/card3_pc.svg";
import Card4Icon from "@/assets/components/pages/bstt/KeyTreatment/section3/card4_pc.svg";
import Card from "./Card";

export default function Section3() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const bg1_pc_ = `/assets/components/pages/bstt/KeyTreatment/section3/bg1_pc.png`;
  const bg1_mo_ = `/assets/components/pages/bstt/KeyTreatment/section3/bg1_mo.png`;
  const section_title_simple_ = {
    text: [`통증 질환의 진행과정에서 일어나는 일`],
    color: theme.colors.mono.white,
    align: "center",
  };
  const section_desc_ = [
    `“문제가 방치된 채로 눈앞의 통증만 해결하면`,
    <br key="1" />,
    `한동안 그럭저럭 괜찮아 보이지만`,
    <br key="1" />,
    <span key="1" className="green">
      여러분의 마디마디는
    </span>,
    <br key="1" className="mo" />,
    <span key="1" className="green">
      점점 더 약화되고 있습니다.”
    </span>,
  ];

  const card_data_ = [
    {
      img: <Card1Icon />,
      title: `신체복원력 약화`,
      desc: [
        `연령증가와 원기손상에 따른 `,
        <br key="1" className="pc" />,
        <span className="bold" key="1">
          자연치유력의 저하
        </span>,
      ],
    },
    {
      img: <Card2Icon />,
      title: `만성염증 확산`,
      desc: [
        `염증세포가 손상조직 주변으로 `,
        <br key="1" className="pc" />,
        <span className="bold" key="1">
          확산·침윤
        </span>,
      ],
    },
    {
      img: <Card3Icon />,
      title: `항상성 파괴`,
      desc: [
        `결합조직의 파괴와 재형성 사이의 `,
        <br key="1" className="pc" />,
        <span className="bold" key="1">
          불균형 상태
        </span>,
      ],
    },
    {
      img: <Card4Icon />,
      title: `퇴행 진행`,
      desc: [
        `관절척추의 약화와 퇴화로 인한 `,
        <br key="1" className="pc" />,
        <span className="bold" key="1">
          기능적 손실
        </span>,
      ],
    },
  ];
  return (
    <ContentsContainer bgPc={bg1_pc_} bgMo={bg1_mo_}>
      <div css={wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={card_wrap}>
          {card_data_.map((item, idx) => (
            <Card
              key={idx + "section3 card"}
              img={item.img}
              title={item.title}
              desc={item.desc}
              idx={idx}
            />
          ))}
        </div>
        <p css={section_desc_text(theme)}>{renderWidthKeys(section_desc_)}</p>
      </div>
    </ContentsContainer>
  );
}

const stroke = css`
  width: 1px;
  height: 120px;

  opacity: 0.4;
  background: #d9d9d9;
`;

const wrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;
`;

const section_desc_text = (theme: CustomTheme) => css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: light;
  line-height: 1.5;

  .bold {
    font-weight: 700;
  }
  .green {
    font-weight: normal;
    color: #06d65d;
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

const card_wrap = css`
  display: flex;
  // justify-content: space-between;

  width: 100%;
  background: rgba(255, 255, 255, 0.1);

  padding: 48px 20px;

  & > div {
    width: 25%;
  }

  @media (max-width: 1880px) {
    padding: 48px 16px;
  }

  @media (max-width: 960px) {
    & > div {
      width: 100%;
    }

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    padding: 24px 20px;
  }
  @media (max-width: 374px) {
    padding: 16px;
  }
`;
