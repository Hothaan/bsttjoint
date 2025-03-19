/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeL from "@/components/ui/treatment/TypeL";

export default function Section5() {
  const theme = useTheme() as CustomTheme;
  const section_title_simple_ = {
    text: [
      <span className="green" key="1">
        약침요법
      </span>,
      `이 필요한 경우`,
    ],
    color: theme.colors.mono.black,
    align: "start",
  };
  const section_desc_ = [
    `통증 질환부터 면역 질환까지,`,
    <br className="mo" key="1" />,
    `다양한 질환에 적용할 수 있는 치료법입니다.`,
  ];
  const card_data_ = [
    {
      idx: 0,
      img: `/assets/components/pages/bstt/AcupunctureTreatment/section5/card1_pc.png`,
      title: `허리디스크 & 척추관협착증`,
      desc: [`신경 염증 제거, 척추 안정화`],
      cardType: "round",
    },
    {
      idx: 1,
      img: `/assets/components/pages/bstt/AcupunctureTreatment/section5/card2_pc.png`,
      title: `퇴행성 관절염 & 연골 손상`,
      desc: [`관절의 염증을 줄이고, 연골 재생 촉진`],
      cardType: "round",
    },
    {
      idx: 2,
      img: `/assets/components/pages/bstt/AcupunctureTreatment/section5/card3_pc.png`,
      title: `어깨질환 (오십견, 회전근개파열)`,
      desc: [`어깨 관절 회복 및 가동 범위 증가`],
      cardType: "round",
    },
    {
      idx: 3,
      img: `/assets/components/pages/bstt/AcupunctureTreatment/section5/card4_pc.png`,
      title: `손목·발목 관절염 & 인대 손상`,
      desc: [`손상된 인대 및 연골 회복`],
      cardType: "round",
    },
    {
      idx: 4,
      img: `/assets/components/pages/bstt/AcupunctureTreatment/section5/card5_pc.png`,
      title: `류마티스 관절염&만성 염증 질환`,
      desc: [`면역 조절 및 염증 완화`],
      cardType: "round",
    },
  ];
  const bg1_pc_ = `/assets/components/pages/bstt/AcupunctureTreatment/section5/bg1_pc.png`;

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
