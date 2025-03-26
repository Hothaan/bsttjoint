"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeL from "@/components/ui/treatment/TypeL";

export default function Section7() {
  const theme = useTheme() as CustomTheme;

  const section_title_simple_ = {
    text: [
      <span key="1" className="green">
        척추질환
      </span>,
      ` 비수술치료 원리`,
    ],
    color: theme.colors.mono.black,
    align: "start",
  };
  const card_data_ = [
    {
      idx: 0,
      img: `/assets/components/pages/bstt/SpinalDisease/section7/card1_pc.png`,
      title: `염증 완화`,
      desc: [`면역세포에 의한 만성염증반응 조절`],
      cardType: "round",
    },
    {
      idx: 1,
      img: `/assets/components/pages/bstt/SpinalDisease/section7/card2_pc.png`,
      title: `회복력 강화 `,
      desc: [`원기회복에 따른 신체 전반적인 자연치유력 강화`],
      cardType: "round",
    },
    {
      idx: 2,
      img: `/assets/components/pages/bstt/SpinalDisease/section7/card3_pc.png`,
      title: `연골·인대의 기질합성 촉진`,
      desc: [`콜라겐 분해효소의 억제, 조직재생 인자의 활성화`],
      cardType: "round",
    },
    {
      idx: 3,
      img: `/assets/components/pages/bstt/SpinalDisease/section7/card4_pc.png`,
      title: `주변조직 강화`,
      desc: [`연골, 인대, 힘줄 등 관절조직 전반의 지지와 강화`],
      cardType: "round",
    },
    {
      idx: 4,
      img: `/assets/components/pages/bstt/SpinalDisease/section7/card5_pc.png`,
      title: `관절 신진대사의 항상성 회복`,
      desc: [
        `치료 후 회복상태의 유지, 만성염증재발 및`,
        <br key="1" />,
        `
 퇴행 억제`,
      ],
      cardType: "round",
    },
    {
      idx: 5,
      img: `/assets/components/pages/bstt/SpinalDisease/section7/card6_pc.png`,
      title: `움직임패턴 회복`,
      desc: [`근골격계의 비대칭성과 부정렬 회복`],
      cardType: "round",
    },
  ];
  const section_desc_ = [`여러 관절질환을 치료하는 공통적인 치료원리`];
  const bg_pc_ = `/assets/components/pages/bstt/SpinalDisease/section7/bg1_pc.png`;

  return (
    <TypeL
      sectionTitleSimple={section_title_simple_}
      cardData={card_data_}
      sectionDesc={section_desc_}
      bgPc={bg_pc_}
    />
  );
}
