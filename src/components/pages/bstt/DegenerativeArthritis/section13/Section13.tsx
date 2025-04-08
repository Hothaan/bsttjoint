"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeL from "@/components/ui/treatment/TypeL";

export default function Section13() {
  const theme = useTheme() as CustomTheme;

  const section_title_simple_ = {
    text: [`비수술 치료의 원리`],
    color: theme.colors.mono.black,
    align: "start",
  };
  const card_data_ = [
    {
      cardType: "round",
      idx: 0,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card1_pc.png`,
      title: `염증완화`,
      desc: [`면역세포에 의한 염증반응 억제`],
    },
    {
      cardType: "round",
      idx: 1,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card2_pc.png`,
      title: `항상성 회복`,
      desc: [`관절 신진대사의 항상성 회복`],
    },
    {
      cardType: "round",
      idx: 2,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card3_pc.png`,
      title: `재구축 촉진`,
      desc: [`연골 인대 결합조직의 기질 합성 촉진`],
    },
    {
      cardType: "round",
      idx: 3,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card4_pc.png`,
      title: `관절 강화`,
      desc: [`관절조직의 강화에 따른 활동능력 유지`],
    },
    {
      cardType: "round",
      idx: 4,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card5_pc.png`,
      title: `부정렬 개선`,
      desc: [`압력분배 회복 및 움직임패턴 회복`],
    },
    {
      cardType: "round",
      idx: 5,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card6_pc.png`,
      title: ` 퇴행 억제`,
      desc: [`튼튼마디 평생관리 프로그램에 의한 유지·관리`],
    },
  ];
  const section_desc_ = [
    `관절염에 수술은 최후의 수단이라던데 수술하지 않고도 관절염 치료가 어떻게 가능할까요?`,
  ];
  const aspectRatio = {
    over960: ``,
    under960: `300 / 184`,
  };

  return (
    <TypeL
      sectionTitleSimple={section_title_simple_}
      cardData={card_data_}
      sectionDesc={section_desc_}
      aspectRatio={aspectRatio}
      withIdx={true}
    />
  );
}
