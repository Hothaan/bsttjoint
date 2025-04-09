import TypeB from "@/components/ui/treatment/TypeB";

export default function Section2() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/SpinalStenosis/section2/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/SpinalStenosis/section2/bg1_mo.png`,
    title: [
      <span key="1" className="green">
        척추관협착증,
      </span>,
      ` 걸을 때`,
      <br key="1" className="mo" />,
      `  다리가 저리고 힘이 빠지나요?`,
    ],
    desc: [`이 중 하나라도 해당된다면, 척추관협착증을 의심해야 합니다.`],
    cardData: [
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section2/card1_pc.png`,
        desc: [
          `오래 걸으면 다리가 저리고,

`,
          <br key="1" className="pc" />,
          `쉬면 괜찮아진다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section2/card2_pc.png`,
        desc: [
          `허리를 펴고 서 있으면 통증이

`,
          <br key="1" className="pc" />,
          `심해지고, 구부리면 편해진다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section2/card3_pc.png`,
        desc: [
          `허리 통증이 반복되면서

`,
          <br key="1" className="pc" />,
          `다리 감각이 둔해진다.`,
        ],
      },

      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section2/card4_pc.png`,
        desc: [
          `계단을 내려갈 때 다리에

`,
          <br key="1" className="pc" />,
          `힘이 빠지고, 균형을 잡기 어렵다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section2/card5_pc.png`,
        desc: [
          `다리 근력이 약해지고,

`,
          <br key="1" />,
          `점점 보행이 힘들어진다.`,
        ],
      },
    ],
    caption: [
      `방치하면 신경 손상이 진행되면서 `,
      <br key="1" className="mo" />,
      `보행 장애로 이어질 수 있습니다.`,
    ],
  };
  return <TypeB {...data_} />;
}
