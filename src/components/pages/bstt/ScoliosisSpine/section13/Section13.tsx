import TypeF from "@/components/ui/treatment/TypeF";

export default function Section6() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/NeckDisc/section13/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/NeckDisc/section13/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`비수술 치료가 필요한 이유`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `척추측만증은 가 좋습니다. `,
        <span key="1" className="bold">
          조기에 교정할수록 치료 효과
        </span>,
        `가 좋습니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        text: [
          `척추의 변형이 진행되면  `,
          <span key="1" className=" bold">
            더 심한 불균형이 나타날 수 있습니다.
          </span>,
        ],
      },
      {
        text: [
          `성인이 되어서 교정하려면 `,
          <span key="1" className=" bold">
            더 오랜 시간이 필요합니다.
          </span>,
        ],
      },
      {
        text: [
          `지금 치료하면 `,
          <span key="1" className=" bold">
            비수술 치료만으로도 충분히 회복할 수 있습니다.
          </span>,
        ],
      },
    ],
  };
  return <TypeF {...data_} />;
}
