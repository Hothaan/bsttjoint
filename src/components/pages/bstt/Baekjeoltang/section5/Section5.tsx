/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeL from "@/components/ui/treatment/TypeL";

export default function Section5() {
  const theme = useTheme() as CustomTheme;

  const section_title_simple_ = {
    text: [`백절탕의`, <br key="1" className="mo" />, `치료범위`],
    color: theme.colors.mono.black,
    align: "start",
  };
  const card_data_ = [
    {
      idx: 0,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card1_pc.png`,
      title: `퇴행성질환`,
      desc: [
        `퇴행성관절염, 척추관협착증, 퇴행성디스크, `,
        <br key="1" />,
        `목디스크 등`,
      ],
    },
    {
      idx: 1,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card2_pc.png`,
      title: `손상성질환`,
      desc: [
        `반월상연골파열, 관절인대파열, 회전근개파열, `,
        <br key="1" />,
        `외상성디스크 등`,
      ],
    },
    {
      idx: 2,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card3_pc.png`,
      title: `자가면역성질환`,
      desc: [
        `류마티스관절염, 강직성척추염, 건선성관절염, `,
        <br key="1" />,
        `섬유근육통 등`,
      ],
    },
    {
      idx: 3,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card4_pc.png`,
      title: `만성통증질환`,
      desc: [`족저근막염, 지간신경종, 손목터널증후군, 엘보 등`],
    },
    {
      idx: 4,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card5_pc.png`,
      title: `수술전후치료`,
      desc: [`수술전치료, 수술후재활치료, 수술후유증치료 등`],
    },
    {
      idx: 5,
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card6_pc.png`,
      title: `예방적치료`,
      desc: [
        `관절척추질환 진행예방, 치료후 재발방지를 위한 `,
        <br key="1" />,
        `보수적 치료`,
      ],
    },
  ];

  return (
    <TypeL sectionTitleSimple={section_title_simple_} cardData={card_data_} />
  );
}
