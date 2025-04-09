import TypeD from "@/components/ui/treatment/TypeD";

export default function Section7() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          오십견을
        </span>,
        ` 회복하는 최선의 선택`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료를 통해 오십견의 진행을 막고, `,
        <br key="1" className="mo" />,
        `어깨 기능을 정상화할 수 있습니다.`,
      ],
      color: `#666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/FrozenShoulder/section7/card1_pc.png`,
        imgMo: `/assets/components/pages/bstt/FrozenShoulder/section7/card1_pc.png`,
        title: `염증 완화 및 생활 습관 개선`,
        descList: [
          `염증을 줄이고, 어깨 주변 조직을 부드럽게 하는 치료 진행`,
          `올바른 자세 유지 및 어깨 사용 습관 개선`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/FrozenShoulder/section7/card2_pc.png`,
        imgMo: `/assets/components/pages/bstt/FrozenShoulder/section7/card2_pc.png`,
        title: `물리치료 & 재활 운동`,
        descList: [
          `어깨 관절을 부드럽게 움직일 수 있도록 가동 범위 증가`,
          `근력 강화를 통해 어깨의 유연성과 기능 회복`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/FrozenShoulder/section7/card3_pc.png`,
        imgMo: `/assets/components/pages/bstt/FrozenShoulder/section7/card3_pc.png`,
        title: `맞춤형 비수술 치료 프로그램`,
        descList: [
          `개개인의 증상과 진행 정도에 따른 맞춤 치료 적용`,
          `관절 기능 회복과 통증 완화 치료 병행`,
        ],
      },
    ],
    idxFontSize: "64px",
  };
  return <TypeD {...data_} />;
}
