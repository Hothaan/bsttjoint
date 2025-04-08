import TypeF from "@/components/ui/treatment/TypeF";

export default function Section6() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section6/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section6/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`비수술 치료로 약침이 필요한 이유`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료로 빠른 효과를 원하는 경우 약침요법이 최적의 선택입니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        text: [
          `약물이나 물리치료만으로는 `,
          <span key="1" className="green bold">
            염증을 완전히 해결하기 어렵습니다.
          </span>,
        ],
      },
      {
        text: [
          `수술 없이도 `,
          <span key="1" className="green bold">
            근본적인 치료가 가능합니다.
          </span>,
        ],
      },
      {
        text: [
          `단순한 진통제가 아니라 `,
          <span key="1" className="green bold">
            몸의 재생력을 높이는 치료법입니다.
          </span>,
        ],
      },
      {
        text: [
          `인체에 부담이 적고, `,
          <span key="1" className="green bold">
            빠른 회복이 가능합니다.
          </span>,
        ],
      },
    ],
  };
  return <TypeF {...data_} />;
}
