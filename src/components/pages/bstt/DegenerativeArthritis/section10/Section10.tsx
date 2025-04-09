"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeC, { Ttype } from "@/components/ui/jointDisease/TypeC";

export default function Section10() {
  const theme = useTheme() as CustomTheme;
  const sectionTitleSimple_ = {
    text: [
      <span key="1" className="light">
        제대로 치료하지 않는 경우&nbsp;
      </span>,
      <br key="1" className="mo" />,
      <span key="1" className="bold">
        퇴행성 관절염은 이렇게 진행됩니다.
      </span>,
    ],
    color: "#131313",
    align: "center",
  };
  const card_data_ = [
    {
      title: `반복적 재발`,
      img: `/assets/components/pages/bstt/JointDisease/section3/card1_pc.png`,
      text: [
        `재발을 계속 반복하면서 치료주기는
`,
        <br key="1" className="pc" />,
        `점점 짧아지고 통증민감도는 증가`,
      ],
    },
    {
      title: `퇴화의 진행`,
      img: `/assets/components/pages/bstt/JointDisease/section3/card2_pc.png`,
      text: [
        `치료를 받으면서 통증을 `,
        <br key="1" className="mo" />,
        `억제하는
`,
        <br key="1" className="pc" />,
        `동안에도 `,
        <br key="1" className="mo" />,
        `오히려 퇴화가 진행`,
      ],
    },
    {
      title: `손상과 변형`,
      img: `/assets/components/pages/bstt/JointDisease/section3/card3_pc.png`,
      text: [
        `만성염증에 의해 연골, 인대, 힘줄, 뼈
`,
        <br key="1" className="pc" />,
        `전반이 약화되면서 관절 전반이 손상·변형`,
      ],
    },
    {
      title: `기능적 상실`,
      img: `/assets/components/pages/bstt/JointDisease/section3/card4_pc.png`,
      text: [
        `관절이 더욱 약해지고 회복되지 않아
`,
        <br key="1" className="pc" />,
        `통증 심화, 활동능력 감소, 삶의 질 저하`,
      ],
    },
  ];

  const data_ = {
    type: "b" as Ttype,
    sectionTitleSimple: sectionTitleSimple_,
    bg: `#EAF5EF`,
    cardData: card_data_,
    desc: [
      `치료를 받더라도 통증만 치료하는 사이에`,
      <br key="1" className="mo" />,
      `이렇게 진행되는 경우가 많습니다.`,
    ],
  };
  return <TypeC {...data_} />;
}
