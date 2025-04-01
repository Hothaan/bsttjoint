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
    desc: [`목디스크가 `, <br key="1" className="mo" />, `이렇게 악화됩니다`],
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/NeckDisc/section5/card1_pc.png`,
      text: [
        `목이 자꾸 뻐근하고
`,
        <br key="1" />,
        `결림이 발생`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/NeckDisc/section5/card2_pc.png`,
      text: [
        `어깨부터 팔까지
`,
        <br key="1" />,
        `저릿한 통증이 나타남`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/NeckDisc/section5/card3_pc.png`,
      text: [
        `손끝 감각이 둔해지고,
`,
        <br key="1" />,
        `근력이 저하됨`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/NeckDisc/section5/card4_pc.png`,
      text: [
        `팔에 힘이 빠지고,
`,
        <br key="1" />,
        `정교한 손 움직임이 어려워짐`,
      ],
    },
  ];

  const data_ = {
    sectionTitleDesc: section_title_desc_,
    caption: [
      [`목디스크는 조기에 치료할수록 신경 손상을 방지할 수 있습니다.`],
      [
        `초기에 치료하면 `,
        <span key="1" className="bold">
          비수술적 방법으로도 충분히 회복
        </span>,
        `할 수 있습니다.`,
      ],
    ],
    bg: `linear-gradient(359deg, #FFF 13.94%, #EAF5EF 114.07%);`,
    cardData: card_data_,
  };
  return <TypeC {...data_} />;
}
