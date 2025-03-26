"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeC, { Ttype } from "@/components/ui/jointDisease/TypeC";

export default function Section8() {
  const theme = useTheme() as CustomTheme;
  const sectionTitleSimple_ = {
    text: [
      <span key="1" className="light">
        제대로 치료하지 않는 경우
      </span>,
      <br key="1" />,
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
      img: `/assets/components/pages/bstt/ArthritisFingers/section8/card1_pc.png`,
      text: [`손가락이 뻣뻣하고 가끔 욱신거리는 정도`],
    },
    {
      title: `퇴화의 진행`,
      img: `/assets/components/pages/bstt/ArthritisFingers/section8/card2_pc.png`,
      text: [
        `손가락을 움직일 때 통증이 심해지고,
`,
        <br key="1" />,
        `붓기가 나타남`,
      ],
    },
    {
      title: `손상과 변형`,
      img: `/assets/components/pages/bstt/ArthritisFingers/section8/card3_pc.png`,
      text: [
        `손가락 관절이 변형되기 시작하고,
`,
        <br key="1" />,
        `힘이 빠지는 느낌이 듦`,
      ],
    },
    {
      title: `기능적 상실`,
      img: `/assets/components/pages/bstt/ArthritisFingers/section8/card4_pc.png`,
      text: [
        `손가락을 자유롭게 사용하기 어려워지고,
`,
        <br key="1" />,
        `일상생활에 지장 발생`,
      ],
    },
  ];

  const data_ = {
    type: "b" as Ttype,
    sectionTitleSimple: sectionTitleSimple_,
    bg: `#EAF5EF`,
    cardData: card_data_,
    desc: [
      `초기에는 간단한 치료로도 증상을 완화할 수 있지만, 진행될수록 치료가 어려워집니다.`,
    ],
  };
  return <TypeC {...data_} />;
}
