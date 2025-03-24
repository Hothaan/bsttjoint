import TypeO from "@/components/ui/treatment/TypeO";

export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          체중 감량
        </span>,
        `이 어려운 이유`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `많은 사람들이 다이어트를 시도하지만, 제대로 된 효과를 보지 못하는 이유는 `,
        <span key="1" className="bold">
          신체 대사와 호르몬 균형이 깨져 있기 때문
        </span>,
        `입니다.`,
        <br key="1" className="pc" />,
        `
단순히 적게 먹는 것이 정답이 아닙니다. `,
        <span key="1" className="bold">
          체질을 개선하고, 신진대사를 활성화
        </span>,
        `해야 합니다.`,
      ],
      color: `#444`,
      align: "center",
    },
    bgPc: `/assets/components/pages/bstt/WeightLoss/section3/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/WeightLoss/section3/bg1_mo.png`,
  };
  return <TypeO {...data_} />;
}
