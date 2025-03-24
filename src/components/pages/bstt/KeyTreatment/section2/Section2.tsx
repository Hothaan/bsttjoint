"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import Card from "./Card";

export default function Section2() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const section_title_desc_ = {
    titleColor: theme.colors.point.primary,
    descColor: theme.colors.mono.black,
    title: `About us`,
    desc: [`통증질환 환자의 일반적인 여정`],
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section2/card1_pc.png`,
      text: [
        `초기 증상의 자연회복을`,
        <br key="1" />,
        `기다리다가 증상이 점점 심화`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section2/card2_pc.png`,
      text: [
        `잠시 완화되었다가 다시`,
        <br key="1" />,
        `재발되기를 반복하는 단계`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section2/card3_pc.png`,
      text: [`한동안 완화되었다가`, <br key="1" />, `악화하기를 반복하는 단계`],
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section2/card4_pc.png`,
      text: [
        `더이상 치료에 반응이 없고`,
        <br key="1" />,
        `통증이 억제되지 않는 단계`,
      ],
    },
  ];
  return (
    <div css={wrap}>
      <div css={title_desc_wrap}>
        <SectionTitleDesc {...section_title_desc_} />
      </div>
      <div css={card_wrap}>
        {card_data_.map((item, idx) => (
          <Card idx={idx} key={idx} img={item.img} text={item.text} />
        ))}
      </div>
    </div>
  );
}

const wrap = css`
  padding: 180px 0;
  display: flex;
  flex-direction: column;

  gap: 74px;

  @media (max-width: 1800px) {
    padding: 160px 0;
  }
  @media (max-width: 1400px) {
    padding: 140px 0;
  }
  @media (max-width: 1200px) {
    padding: 120px 0;
  }
  @media (max-width: 1000px) {
    padding: 100px 0;
  }
  @media (max-width: 960px) {
    padding: 80px 0;
  }
`;

const title_desc_wrap = css`
  padding: 0 180px;

  @media (max-width: 1800px) {
    padding: 0 160px;
  }
  @media (max-width: 1400px) {
    padding: 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 0 100px;
  }
  @media (max-width: 960px) {
    padding: 0 80px;
  }
  @media (max-width: 680px) {
    padding: 0 60px;
  }
  @media (max-width: 540px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const card_wrap = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  grid-gap: 0;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
