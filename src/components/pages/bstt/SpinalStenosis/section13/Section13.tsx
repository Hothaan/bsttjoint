import TypeH from "@/components/ui/treatment/TypeH";

export default function Section8() {
  const data_ = {
    imgPc: `/assets/components/pages/bstt/SpinalStenosis/section13/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/SpinalStenosis/section13/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`척추관협착증에 대한 오해와 진실`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`잘못된 정보로 인해 치료 시기를 놓치지 마세요!`],
      color: `#666666`,
      align: `left`,
    },
    cardData: [
      {
        title: `허리가 아프면 그냥 쉬면 되지 않을까요?`,
        desc: [
          `허리를 지나치게 움직이지 않으면 오히려 근육이 약해지고,
`,
          <br key="1" />,
          `신경 압박이 심해질 수 있습니다.`,
        ],
      },
      {
        title: `수술을 받아야만 치료가 되나요?`,
        desc: [
          `아닙니다. 조기에 치료하면 비수술적 방법으로도 충분히 회복할 수 있습니다.


`,
        ],
      },
      {
        title: `나이가 들면 다들 이런 증상을 겪지 않나요?`,
        desc: [
          `아닙니다. 척추관협착증은 노화로 인해 발생할 수 있지만, `,
          <br key="1" />,
          `적절한 치료와 관리로 진행을 막을 수 있습니다.`,
        ],
      },
    ],
  };

  return <TypeH {...data_} />;
}
