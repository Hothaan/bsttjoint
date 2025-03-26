import TypeF from "@/components/ui/treatment/TypeF";

export default function Section19() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/ArthritisFingers/section19/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/ArthritisFingers/section19/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          손가락 관절염
        </span>,
        <br key="1" className="mo" />,
        ` 지금 치료해야 하는 이유`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`관절 건강을 유지하려면, 지금 치료가 필요합니다.`],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        text: [
          `관절 연골은 `,
          <span key="1" className="green bold">
            손상되면 자연 회복이 어렵습니다.
          </span>,
        ],
      },
      {
        text: [
          `방치하면 `,
          <span key="1" className="green bold">
            관절 변형과 심한 통증으로 인해 수술이 필요할 수도
          </span>,
          `있습니다.`,
        ],
      },
      {
        text: [
          `지금 치료하면 `,
          <span key="1" className="green bold">
            비수술 치료만으로도 충분히 회복
          </span>,
          `할 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeF {...data_} />;
}
