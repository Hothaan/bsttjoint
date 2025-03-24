"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeC from "@/components/ui/jointDisease/TypeC";

export default function Section3() {
  const theme = useTheme() as CustomTheme;
  const section_title_desc_ = {
    titleColor: theme.colors.point.primary,
    descColor: theme.colors.mono.black,
    title: `About us`,
    desc: [`관절질환 환자의 일반적인 여정`],
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card1_pc.png`,
      text: [
        `초기 증상의 자연회복을`,
        <br key="1" />,
        `기다리다가 증상이 점점 심화`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card2_pc.png`,
      text: [
        `잠시 완화되었다가 다시`,
        <br key="1" />,
        `재발되기를 반복하는 단계`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card3_pc.png`,
      text: [`한동안 완화되었다가`, <br key="1" />, `악화하기를 반복하는 단계`],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card4_pc.png`,
      text: [
        `더이상 치료에 반응이 없고`,
        <br key="1" />,
        `통증이 억제되지 않는 단계`,
      ],
    },
  ];

  const data_ = {
    sectionTitleDesc: section_title_desc_,
    bg: `linear-gradient(359deg, #FFF 13.94%, #EAF5EF 114.07%);`,
    cardData: card_data_,
  };
  return <TypeC {...data_} />;
}
