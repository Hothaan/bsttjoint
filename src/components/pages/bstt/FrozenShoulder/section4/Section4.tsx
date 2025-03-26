import TypeC, { Ttype } from "@/components/ui/jointDisease/TypeC";

export default function Section4() {
  const sectionTitleSimple_ = {
    text: [
      <span key="1" className="green">
        오십견
      </span>,
      `은 이렇게 진행됩니다`,
    ],
    color: "#131313",
    align: "center",
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/FrozenShoulder/section4/card1_pc.png`,
      text: [
        `어깨 통증이 시작되고,
`,
        <br key="1" />,
        `특정 동작에서 불편함이 느껴짐`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/FrozenShoulder/section4/card2_pc.png`,
      text: [
        `팔을 올리거나 돌릴 때

`,
        <br key="1" />,
        `통증이 심해지고, 움직임이 제한됨`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/FrozenShoulder/section4/card3_pc.png`,
      text: [
        `어깨가 굳어가면서 움직이는
`,
        <br key="1" />,
        `범위가 현저히 줄어듦`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/FrozenShoulder/section4/card4_pc.png`,
      text: [
        `시간이 지나면서 통증은 줄어들지만,
`,
        <br key="1" />,
        `관절의 움직임이 회복되지 않음`,
      ],
    },
  ];

  const data_ = {
    type: "b" as Ttype,
    sectionTitleSimple: sectionTitleSimple_,
    pageTitleContent: {
      text: [
        `오십견은 조기에 치료할수록 회복이 빠르고, 정상적인 어깨 움직임을 유지할 수 있습니다.`,
      ],
      color: `#444`,
      align: `center`,
    },
    bg: `#EAF5EF`,
    cardData: card_data_,
    desc: [
      `초기에 치료하지 않으면 어깨 관절이`,
      <br key="1" className="mo" />,
      ` 완전히 굳어버릴 위험이 있습니다.`,
    ],
  };
  return <TypeC {...data_} />;
}
