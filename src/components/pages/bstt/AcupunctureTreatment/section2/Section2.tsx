import TypeB from "@/components/ui/treatment/TypeB";

export default function Section2() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section2/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section2/bg1_mo.png`,
    title: [
      <span key="1" className="green">
        약침요법,
      </span>,

      ` 침과 한약의 결합으로 `,
      <br key="1" className="mo" />,
      `최적의 치료 효과`,
    ],
    desc: [`이 중 하나라도 해당된다면, 녹용한약이 필요할 수 있습니다.`],
    cardData: [
      {
        img: `/assets/components/pages/bstt/AcupunctureTreatment/section2/card1_pc.png`,
        desc: [
          `통증이 반복되면서 약을 먹어도`,
          <br key="1" className="pc" />,
          `효과가 일시적이다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/AcupunctureTreatment/section2/card2_pc.png`,
        desc: [
          `근육과 관절이 뻣뻣하고,`,
          <br key="1" className="pc" />,
          `움직일 때마다 불편함이 느껴진다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/AcupunctureTreatment/section2/card3_pc.png`,
        desc: [
          `특정 부위의 염증이`,
          <br key="1" className="pc" />,
          `쉽게 가라앉지 않고 지속된다.`,
        ],
      },

      {
        img: `/assets/components/pages/bstt/AcupunctureTreatment/section2/card4_pc.png`,
        desc: [
          `단순한 물리치료나 약물 치료로는`,
          <br key="1" className="pc" />,
          `증상이 잘 낫지 않는다.`,
        ],
      },
    ],
    caption: [
      `단순한 보양을 넘어, 몸의 균형을 맞추고 근본적인 건강을 회복하는 것이 중요합니다.`,
    ],
  };
  return <TypeB {...data_} />;
}
