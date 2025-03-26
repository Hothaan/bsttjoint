import TypeM from "@/components/ui/treatment/TypeM";
export default function Section7() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section7/bg1_pc.png`,
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          연골·인대 손상
        </span>,
        `을 회복하는 최선의 선택`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료를 통해 손상된 연골과 인대의 회복을 돕고, 추가적인 손상을 방지할 수 있습니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section7/card1_pc.png`,
        imgMo: ``,
        title: `기능 회복 및 생활 습관 개선`,
        content: [
          [`관절에 부담을 줄이는 움직임 조절`],
          [`관절 안정성을 높이는 생활 습관 개선`],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section7/card2_pc.png`,
        imgMo: ``,
        title: `물리치료 & 재활 운동`,
        content: [
          [`손상된 조직이 회복될 수 있도록 기능 강화 운동 진행`],
          [
            `관절 가동 범위를 늘리고, 불안정성을 줄이는 `,
            <br key="1" />,
            `맞춤형 운동`,
          ],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section7/card3_pc.png`,
        imgMo: ``,
        title: `맞춤형 비수술 치료 프로그램`,
        content: [
          [`개개인의 손상 부위와 증상에 맞춘 치료 적용`],
          [`관절 기능 회복 및 통증 완화 치료 병행`],
        ],
      },
    ],
  };

  return <TypeM {...data_} />;
}
