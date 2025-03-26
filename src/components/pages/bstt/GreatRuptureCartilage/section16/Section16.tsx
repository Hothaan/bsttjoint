import TypeJ from "@/components/ui/treatment/TypeJ";

export default function Section16() {
  const data_ = {
    sectionTitleSimple: {
      text: [`치료 후 변화된 환자 이야기`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        ` 많은 환자들이 연골·인대 손상을 극복하고 있습니다.`,
        <br key="1" className="mo" />,
        ` 지금 바로 치료를 시작하세요!`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section16/card1_pc.png`,
        who: `30대 스포츠 트레이너`,
        desc: [
          `"축구 경기 중 무릎을 다친 후 통증이 계속됐어요.
비수술 치료를 받으며 재활을 병행했더니 통증 없이 다시 운동할 수 있게 됐습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section16/card2_pc.png`,
        who: `50대 주부`,
        desc: [
          `계단을 오르내릴 때마다 무릎이 흔들리고 불안정했어요. 비수술 치료를 받고 나서 무릎이 한결 편해졌습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section16/card3_pc.png`,
        who: `40대 직장인`,
        desc: [
          `"손목을 반복적으로 사용하다 보니 인대가 손상됐어요. 치료 후 손목 힘이 회복되고, 일상생활이 훨씬 편해졌습니다."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
