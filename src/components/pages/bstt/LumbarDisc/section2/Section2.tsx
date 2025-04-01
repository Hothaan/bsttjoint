import TypeB from "@/components/ui/treatment/TypeB";

export default function Section2() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/LumbarDisc/section2/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/LumbarDisc/section2/bg1_mo.png`,
    title: [
      <span key="1" className="green">
        허리디스크,
      </span>,
      <br key="1" className="mo" />,
      ` 단순한 허리 통증이 아닙니다`,
    ],
    desc: [`이 중 하나라도 해당된다면, 허리디스크를 의심해야 합니다. `],
    cardData: [
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section2/card1_pc.png`,
        desc: [
          ` 허리를 숙일 때 통증이 심해지고,


`,
          <br key="1" />,
          `다리까지 저린다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section2/card2_pc.png`,
        desc: [
          `오래 앉아 있으면 허리가 무겁고,


`,
          <br key="1" />,
          `일어나면 뻐근하다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section2/card3_pc.png`,
        desc: [
          `걸을 때 다리가 저리고,


`,
          <br key="1" />,
          `감각이 둔해지는 느낌이 든다.`,
        ],
      },

      {
        img: `/assets/components/pages/bstt/LumbarDisc/section2/card4_pc.png`,
        desc: [
          `허리 통증이 반복되면서


`,
          <br key="1" />,
          `
점점 움직이는 것이 불편해진다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section2/card5_pc.png`,
        desc: [
          `다리에 힘이 빠지고, 오래
`,
          <br key="1" />,
          `서 있거나 걷기가 어려워진다.`,
        ],
      },
    ],
    caption: [
      `방치하면 신경 손상이 진행되면서 보행 장애로 이어질 수 있습니다.`,
    ],
  };
  return <TypeB {...data_} />;
}
