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
        `척추측만증은 `,
        <span key="1">조기에 교정할수록</span>,
        <br key="1" className="mo" />,
        ` 치료 효과가 좋습니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        text: [
          `척추의 변형이 진행되면  `,
          <br key="1" className="mo" />,
          <span key="1" className=" bold">
            더 심한 불균형이 나타날 수 있습니다.
          </span>,
        ],
      },
      {
        text: [
          `성인이 되어서 교정하려면 `,
          <br key="1" className="mo" />,
          <span key="1" className=" bold">
            더 오랜 시간이 필요합니다.
          </span>,
        ],
      },
      {
        text: [
          `지금 치료하면 `,
          <span key="1" className=" bold">
            비수술 치료만으로도 충분히 회복
          </span>,
          `할 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeF {...data_} />;
}
