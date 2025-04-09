import TypeB from "@/components/ui/treatment/TypeB";

export default function Section2() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/bg1_mo.png`,
    title: [
      <span key="1" className="green">
        연골·인대 손상,
      </span>,
      <br key="1" className="mo" />,
      ` 단순한 염좌가 아닙니다`,
    ],
    desc: [`이 중 하나라도 해당된다면, 연골·인대 손상을 의심해야 합니다.`],
    cardData: [
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card1_pc.png`,
        desc: [
          `무릎이나 발목을 삐끗한 후
`,
          <br key="1" className="pc" />,
          `통증이 계속된다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card2_pc.png`,
        desc: [
          `계단을 내려갈 때 무릎이
`,
          <br key="1" className="pc" />,
          `흔들리고 힘이 빠진다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card3_pc.png`,
        desc: [
          `운동 후 무릎이 붓고, 걸을 때마다
`,
          <br key="1" className="pc" />,
          `불안정한 느낌이 든다.`,
        ],
      },

      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card4_pc.png`,
        desc: [
          `손목이나 어깨를 사용할 때
`,
          <br key="1" className="pc" />,
          `통증이 심하고, 움직이기 어렵다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card5_pc.png`,
        desc: [
          `넘어지거나 부딪힌 후에도
`,
          <br key="1" className="pc" />,
          `관절이 쉽게 회복되지 않는다.`,
        ],
      },
    ],
    caption: [
      ` 초기에 적절한 치료를 받지 않으면 만성적인 통증과 관절 불안정성이 남을 수 있습니다.`,
    ],
  };
  return <TypeB {...data_} />;
}
