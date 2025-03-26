import TypeH from "@/components/ui/treatment/TypeH";

export default function Section8() {
  const data_ = {
    imgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section8/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/GreatRuptureCartilage/section8/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`연골·인대 손상에 대한 오해와 진실`],
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
        title: `시간이 지나면 저절로 낫지 않을까요?`,
        desc: [
          `아닙니다! 연골과 인대는 혈액 공급이 원활하지 않아
`,
          <br key="1" />,
          `자연적으로 회복되기 어렵습니다.`,
        ],
      },
      {
        title: `운동을 안 하면 괜찮아질까요?`,
        desc: [
          `활동을 완전히 중단하면 오히려 근력이 약해지고,


`,
          <br key="1" />,
          `관절이 더 불안정해질 수 있습니다.`,
        ],
      },
      {
        title: `수술을 받아야만 치료가 되나요?`,
        desc: [
          `아닙니다. 조기에 치료하면 비수술적 방법으로도 충분히 회복할 수 있습니다.`,
        ],
      },
    ],
  };

  return <TypeH {...data_} />;
}
