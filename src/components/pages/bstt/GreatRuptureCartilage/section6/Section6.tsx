import TypeF from "@/components/ui/treatment/TypeF";

export default function Section6() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section6/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/GreatRuptureCartilage/section6/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`비수술 치료가 필요한 이유`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료를 통해 관절의 기능을 회복하고, `,
        <br key="1" className="mo" />,
        `손상 부위를 보호하는 것이 중요합니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        text: [
          `연골과 인대는 `,
          <span key="1" className="green bold">
            손상되면 자연 회복이 어렵습니다.
          </span>,
        ],
      },
      {
        text: [
          `방치하면 `,
          <span key="1" className="green bold">
            관절이 불안정해지고, 만성 통증으로 이어질 수 있습니다.
          </span>,
        ],
      },
      {
        text: [
          `조기에 치료하면 `,
          <span key="1" className="green bold">
            비수술적 방법으로도 충분히 회복할 수 있습니다.
          </span>,
        ],
      },
      {
        text: [
          `수술은 최후의 선택이며, `,
          <span key="1" className="green bold">
            가능한 한 보존적 치료를 우선해야 합니다.
          </span>,
        ],
      },
    ],
  };
  return <TypeF {...data_} />;
}
