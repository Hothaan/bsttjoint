import TypeF from "@/components/ui/treatment/TypeF";

export default function Section6() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/WeightLoss/section6/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/WeightLoss/section6/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`비수술 치료가 필요한 이유`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료를 통해 신체 대사를 최적화하고 건강한 체중 감량을 실현할 수 있습니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        text: [
          `다이어트를 해도 `,
          <span key="1" className="green bold">
            체중이 쉽게 빠지지 않는 경우
          </span>,
        ],
      },
      {
        text: [
          `식단 조절과 운동만으로 `,
          <span key="1" className="green bold">
            살이 빠지지 않는 경우
          </span>,
        ],
      },
      {
        text: [
          `요요현상을 막고 `,
          <span key="1" className="green bold">
            지속적인 체중 감량을 원할 경우
          </span>,
        ],
      },
      {
        text: [
          `건강한 방식으로 `,
          <span key="1" className="green bold">
            체지방을 감량하고, 근육을 보호하고 싶을 경우
          </span>,
        ],
      },
    ],
  };
  return <TypeF {...data_} />;
}
