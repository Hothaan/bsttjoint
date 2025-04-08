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
        `초기 증상의 자연회복을`,
        <br key="1" />,
        `기다리다가 증상이 점점 심화`,
      ],
    },
    {
      title: `퇴화의 진행`,
      img: `/assets/components/pages/bstt/JointDisease/section3/card2_pc.png`,
      text: [
        `잠시 완화되었다가 다시`,
        <br key="1" />,
        `재발되기를 반복하는 단계`,
      ],
    },
    {
      title: `손상과 변형`,
      img: `/assets/components/pages/bstt/JointDisease/section3/card3_pc.png`,
      text: [`한동안 완화되었다가`, <br key="1" />, `악화하기를 반복하는 단계`],
    },
    {
      title: `기능적 상실`,
      img: `/assets/components/pages/bstt/JointDisease/section3/card4_pc.png`,
      text: [
        `더이상 치료에 반응이 없고`,
        <br key="1" />,
        `통증이 억제되지 않는 단계`,
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
