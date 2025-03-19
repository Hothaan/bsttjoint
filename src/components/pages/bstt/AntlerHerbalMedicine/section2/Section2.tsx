import TypeB from "@/components/ui/treatment/TypeB";

export default function Section2() {
  const bg1_pc_ = `/assets/components/pages/bstt/AntlerHerbalMedicine/section2/bg1_pc.png`;
  const bg1_mo_ = `/assets/components/pages/bstt/AntlerHerbalMedicine/section2/bg1_mo.png`;

  const data_ = {
    bgPc: bg1_pc_,
    bgMo: bg1_mo_,
    title: [
      <span key="1" className="green">
        녹용한약,
      </span>,
      <br key="1" className="mo" />,
      ` 건강한 몸을 위한 최상의 선택`,
    ],
    desc: [`이 중 하나라도 해당된다면, 녹용한약이 필요할 수 있습니다.`],
    cardData: [
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section2/card1_pc.png`,
        desc: [`쉽게 피곤하고,`, <br key="1" />, `체력이 떨어진 느낌이 든다.`],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section2/card2_pc.png`,
        desc: [`수술이나 큰 병을 앓은 후`, <br key="1" />, `회복이 더디다.`],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section2/card3_pc.png`,
        desc: [`면역력이 약해져서`, <br key="1" />, `감기에 자주 걸린다.`],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section2/card4_pc.png`,
        desc: [`관절이 약해지고,`, <br key="1" />, `뼈 건강이 걱정된다.`],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section2/card5_pc.png`,
        desc: [
          `집중력이 떨어지고,`,
          <br key="1" />,
          `몸이 무거운 느낌이 든다.`,
        ],
      },
    ],
    caption: [
      `단순한 보양을 넘어, 몸의 균형을 맞추고 근본적인 건강을 회복하는 것이 중요합니다.`,
    ],
  };
  return <TypeB {...data_} />;
}
