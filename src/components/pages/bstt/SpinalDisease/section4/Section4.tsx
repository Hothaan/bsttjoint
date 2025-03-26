import TypeB from "@/components/ui/treatment/TypeB";

export default function Section4() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/bg1_mo.png`,
    title: [
      <span key="1" className="green">
        척추질환,
      </span>,
      <br key="1" className="mo" />,
      ` 단순한 허리 통증이 아닙니다`,
    ],
    desc: [`이 중 하나라도 해당된다면, 척추질환을 의심해야 합니다.`],
    cardData: [
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card1_pc.png`,
        desc: [
          `허리나 목이 자주 아프고,

`,
          <br key="1" />,
          `움직일 때 불편함이 느껴진다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card2_pc.png`,
        desc: [
          `오래 서 있거나 걸으면

`,
          <br key="1" />,
          `다리가 저리고 힘이 빠진다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card3_pc.png`,
        desc: [
          `허리가 굽거나,

`,
          <br key="1" />,
          `한쪽으로 기울어진 느낌이 든다.`,
        ],
      },

      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card4_pc.png`,
        desc: [
          `목이 뻐근하고, 어깨와

`,
          <br key="1" />,
          `팔까지 저리는 증상이 나타난다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section2/card5_pc.png`,
        desc: [
          ` 가만히 있어도 허리나 목이

`,
          <br key="1" />,
          `뻣뻣하고 통증이 느껴진다.`,
        ],
      },
    ],
    caption: [
      `방치하면 신경 손상으로 인해 보행 장애나 근력 저하로 이어질 수 있습니다.`,
    ],
  };
  return <TypeB {...data_} />;
}
