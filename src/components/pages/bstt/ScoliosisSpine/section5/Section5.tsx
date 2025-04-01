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
    desc: [`척추측만증이 `, <br key="1" className="mo" />, `이렇게 진행됩니다`],
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/ScoliosisSpine/section5/card1_pc.png`,
      text: [
        `어깨와 골반 높이가 다르고,

`,
        <br key="1" />,
        `몸이 한쪽으로 기울어진 느낌이 듦`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/ScoliosisSpine/section5/card2_pc.png`,
      text: [
        `오랜 시간 앉아 있으면

`,
        <br key="1" />,
        `허리가 쉽게 피로해짐`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/ScoliosisSpine/section5/card3_pc.png`,
      text: [
        `척추 변형이 진행되면서

`,
        <br key="1" />,
        `허리 통증이 나타남`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/ScoliosisSpine/section5/card4_pc.png`,
      text: [
        `골반 불균형과 함께

`,
        <br key="1" />,
        `척추가 더욱 기울어짐`,
      ],
    },
  ];

  const data_ = {
    sectionTitleDesc: section_title_desc_,
    caption: [
      [
        `척추측만증은 `,
        <span key="1" className="bold">
          조기에 교정할수록 치료가 쉽고 효과적
        </span>,
        `입니다.`,
      ],
      [
        `방치하면 허리 통증이 심해지고, 골반 및 전신 불균형으로 이어질 수 있습니다.`,
      ],
    ],
    bg: `linear-gradient(359deg, #FFF 13.94%, #EAF5EF 114.07%);`,
    cardData: card_data_,
  };
  return <TypeC {...data_} />;
}
