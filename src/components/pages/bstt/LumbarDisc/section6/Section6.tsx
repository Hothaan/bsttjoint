"use client";
/** @jsxImportSource @emotion/react */
import TypeB from "@/components/ui/spinalDisease/TypeB";

export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          허리디스크
        </span>,
        `가 이렇게 악화됩니다`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `허리디스크는 조기에 치료할수록 신경 손상을 막고, 정상적인 생활을 유지할 수 있습니다.`,
        <br key="1" className="pc" />,
        `
초기에는 보존적 치료로 충분히 회복할 수 있지만, 진행될수록 치료가 어려워집니다.`,
      ],
      color: `#666`,
      align: "center",
    },
    bg: `#EAF5EF`,
    cardData: [
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section6/card1_pc.png`,
        desc: [
          `허리가 뻐근하고

`,
          <br key="1" />,
          `피로감을 느낌`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section6/card2_pc.png`,
        desc: [
          `허리를 숙이거나

`,
          <br key="1" />,
          `뒤로 젖힐 때 통증 발생`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section6/card3_pc.png`,
        desc: [
          `다리 저림과 감각

`,
          <br key="1" />,
          `저하가 나타나기 시작`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section6/card4_pc.png`,
        desc: [
          `걷거나 서 있을 때 통증이
,
`,
          <br key="1" />,
          `심해지고, 움직이는 것이 어려움`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section6/card5_pc.png`,
        desc: [
          `신경 손상으로 인해 다리에

`,
          <br key="1" />,
          `힘이 빠지고 보행 장애 발생`,
        ],
      },
    ],
  };
  return <TypeB {...data_} />;
}
