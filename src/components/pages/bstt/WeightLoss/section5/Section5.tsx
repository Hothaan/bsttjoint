"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeL from "@/components/ui/treatment/TypeL";

export default function Section5() {
  const theme = useTheme() as CustomTheme;
  const section_title_simple_ = {
    text: [
      <span className="green" key="1">
        체중 감량
      </span>,
      `이 필요한 경우`,
    ],
    color: theme.colors.mono.black,
    align: "start",
  };
  const section_desc_ = [
    `단순한 감량이 아니라, 건강한 체중 감량이 필요합니다.`,
  ];
  const card_data_ = [
    {
      idx: 0,
      img: `/assets/components/pages/bstt/WeightLoss/section5/card1_pc.png`,
      title: `여러 번 다이어트를 시도했지만 요요현상이 반복되는 경우`,
      desc: [`신경 염증 제거, 척추 안정화`],
      cardType: "round",
    },
    {
      idx: 1,
      img: `/assets/components/pages/bstt/WeightLoss/section5/card2_pc.png`,
      title: `체질적으로 쉽게 살이 찌는 사람`,
      desc: [`기초대사량이 낮고, 부종이 자주 생김`],
      cardType: "round",
    },
    {
      idx: 2,
      img: `/assets/components/pages/bstt/WeightLoss/section5/card3_pc.png`,
      title: `운동을 해도 살이 잘 빠지지 않는 경우`,
      desc: [`지방이 쉽게 연소되지 않음`],
      cardType: "round",
    },
    {
      idx: 3,
      img: `/assets/components/pages/bstt/WeightLoss/section5/card4_pc.png`,
      title: `식이조절을 하면 위장 기능이 약해지는 경우`,
      desc: [`소화 장애, 변비, 더부룩함`],
      cardType: "round",
    },
    {
      idx: 4,
      img: `/assets/components/pages/bstt/WeightLoss/section5/card5_pc.png`,
      title: `다이어트 후 생리불순, 피로감 증가 등의 부작용을 경험한 경우`,
      desc: [`면역 조절 및 염증 완화`],
      cardType: "round",
    },
  ];
  const bg1_pc_ = `/assets/components/pages/bstt/WeightLoss/section5/bg1_pc.png`;

  return (
    <TypeL
      sectionTitleSimple={section_title_simple_}
      cardData={card_data_}
      sectionDesc={section_desc_}
      bgColor="#EAF5EF"
      bgPc={bg1_pc_}
    />
  );
}
