import TypeF from "@/components/ui/treatment/TypeF";

export default function Section6() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section6/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section6/bg1_mo.png`,
    imgLayer: `/assets/components/pages/bstt/AntlerHerbalMedicine/section6/over1_pc.png`,
    sectionTitleSimple: {
      text: [
        `단순한 보양이 아닌, `,
        <br key="1" className="mo" />,
        <span key="1" className="green">
          맞춤형 처방
        </span>,
        `이 필요합니다`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `건강을 지키기 위해서는 체질에 맞는 올바른 복용법이 중요합니다.
단순히 피로 회복을 넘어, 몸의 균형을 맞추는 것이 핵심입니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        text: [
          `녹용한약은 체질과 건강 상태에 맞춰 `,
          <br key="1" className="mo" />,
          <span key="1" className="green">
            맞춤 처방
          </span>,
          `이 중요합니다.`,
        ],
      },
      {
        text: [
          `개인의 체질에 맞지 않는 경우, 과도한 `,
          <br key="1" className="mo" />,
          `열이 오르거나 몸이 무거울 수 있습니다.`,
        ],
      },
      {
        text: [
          `적절한 한약 성분과 배합을 통해 `,
          <br key="1" className="mo" />,
          <span key="1" className="green">
            균형 잡힌 치료
          </span>,
          `가 필요합니다.`,
        ],
      },
    ],
  };
  return <TypeF {...data_} />;
}
