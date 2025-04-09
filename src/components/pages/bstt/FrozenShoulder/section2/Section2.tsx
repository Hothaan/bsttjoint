import TypeB from "@/components/ui/treatment/TypeB";

export default function Section2() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/FrozenShoulder/section2/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/FrozenShoulder/section2/bg1_mo.png`,
    title: [
      <span key="1" className="green">
        오십견,
      </span>,
      ` 방치하면 어깨가`,
      <br key="1" className="mo" />,
      `  굳어버릴 수 있습니다`,
    ],
    desc: [`이 중 하나라도 해당된다면, 오십견(동결견)을 의심해야 합니다.`],
    cardData: [
      {
        img: `/assets/components/pages/bstt/FrozenShoulder/section2/card1_pc.png`,
        desc: [
          `팔을 들 때마다 어깨가 아프고,

`,
          <br key="1" className="pc" />,
          `움직이기 어렵다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/FrozenShoulder/section2/card2_pc.png`,
        desc: [
          `옷을 입거나 벗을 때 어깨가

`,
          <br key="1" className="pc" />,
          `당기고 통증이 심하다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/FrozenShoulder/section2/card3_pc.png`,
        desc: [
          `잠을 잘 때도 어깨가 쑤시고,

`,
          <br key="1" className="pc" />,
          `뒤척이기가 어렵다.`,
        ],
      },

      {
        img: `/assets/components/pages/bstt/FrozenShoulder/section2/card4_pc.png`,
        desc: [
          `특정한 방향으로 팔을 올리거나


`,
          <br key="1" className="pc" />,
          `돌리기가 힘들다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/FrozenShoulder/section2/card5_pc.png`,
        desc: [
          `통증이 점점 심해지면서

`,
          <br key="1" className="pc" />,
          `어깨 움직임이 제한된다.`,
        ],
      },
    ],
    caption: [
      `방치하면 어깨가 점점 굳고, `,
      <br key="1" className="mo" />,
      `치료가 더 어려워질 수 있습니다.`,
    ],
  };
  return <TypeB {...data_} />;
}
