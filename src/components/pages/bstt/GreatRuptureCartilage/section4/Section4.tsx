import TypeC, { Ttype } from "@/components/ui/jointDisease/TypeC";

export default function Section4() {
  const sectionTitleSimple_ = {
    text: [
      <span key="1" className="green">
        연골·인대 손상
      </span>,
      `을 방치하면 `,
      <br key="1" className="mo" />,
      `어떻게 될까요?`,
    ],
    color: "#131313",
    align: "center",
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card1_pc.png`,
      text: [
        `외상 후 가벼운 통증과
`,
        <br key="1" className="pc" />,
        `붓기 발생`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card2_pc.png`,
      text: [
        `관절의 불안정성이 느껴지고,
`,
        <br key="1" className="pc" />,
        `운동 시 통증 증가`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card3_pc.png`,
      text: [
        `반복적인 손상으로 인해
`,
        <br key="1" className="pc" />,
        `관절이 약해지고, 연골이 점점 닳음`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card4_pc.png`,
      text: [
        `만성적인 통증과 함께 관절 기능
`,
        <br key="1" className="pc" />,
        `저하, 활동에 제한 발생`,
      ],
    },
  ];

  const data_ = {
    type: "b" as Ttype,
    sectionTitleSimple: sectionTitleSimple_,
    pageTitleContent: {
      text: [
        `연골·인대 손상은 방치하면 회복이 어려워지고, `,
        <br key="1" className="mo" />,
        `관절염으로 발전할 수 있습니다.`,
      ],
      color: `#444`,
      align: `center`,
    },
    bg: `#EAF5EF`,
    cardData: card_data_,
    desc: [
      `초기에 적절한 치료를 받아야 손상 부위를 보호하고, `,
      `관절 기능을 유지할 수 있습니다.`,
    ],
  };
  return <TypeC {...data_} />;
}
