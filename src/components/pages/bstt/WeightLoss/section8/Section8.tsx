import TypeH from "@/components/ui/treatment/TypeH";

export default function Section8() {
  const data_ = {
    imgPc: `/assets/components/pages/bstt/WeightLoss/section8/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/WeightLoss/section8/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`체중감량에 대한 오해와 진실`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`잘못된 정보로 인해 건강을 해치지 마세요!`],
      color: `#666666`,
      align: `left`,
    },
    cardData: [
      {
        title: `굶으면 살이 빠지겠지?`,
        desc: [
          `아닙니다! 단순한 절식은 오히려 기초대사량을 낮춰`,
          <br key="1" />,
          `살이 더 쉽게 찌는 체질로 바뀝니다.`,
        ],
      },
      {
        title: `운동만 하면 살이 빠질까요?`,
        desc: [
          `운동만으로는 효과적인 체중 감량이 어렵습니다.

`,
          <br key="1" />,
          `올바른 식습관과 생활 습관 개선이 함께 이루어져야 합니다.`,
        ],
      },
      {
        title: `다이어트 보조제를 먹으면 살이 빠질까요?`,
        desc: [
          `다이어트 보조제는 일시적인 도움이 될 수 있지만,`,
          <br key="1" />,
          `근본적인 체질 개선 없이는 지속적인 감량이 어렵습니다.`,
        ],
      },
    ],
  };

  return <TypeH {...data_} />;
}
