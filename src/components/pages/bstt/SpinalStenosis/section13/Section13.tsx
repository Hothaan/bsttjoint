import TypeH from "@/components/ui/treatment/TypeH";

export default function Section8() {
  const data_ = {
    imgPc: `/assets/components/pages/bstt/FrozenShoulder/section8/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/FrozenShoulder/section8/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`오십견에 대한 오해와 진실`],
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
        title: `시간이 지나면 저절로 나아질까요?`,
        desc: [
          `아닙니다! 오십견은 치료 없이 방치하면 관절이 굳고

`,
          <br key="1" />,
          `회복이 더 어려워질 수 있습니다.`,
        ],
      },
      {
        title: `어깨를 안 쓰면 덜 아프지 않을까요?`,
        desc: [
          `오히려 관절을 적절히 움직이지 않으면 더 심하게 굳을 수 있습니다.


`,
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
