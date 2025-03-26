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
        `많은 환자들이 오십견을 극복하고 있습니다.`,
        <br key="1" className="mo" />,
        ` 지금 바로 치료를 시작하세요!`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/FrozenShoulder/section16/card1_pc.png`,
        who: `50대 직장인`,
        desc: [
          `"처음에는 어깨가 뻐근한 정도였어요. 그런데 점점 팔을 들기가 어려워지고, 어느 순간에는 셔츠를 입는 것도 힘들어졌습니다. 치료를 시작한 후 점차 어깨 움직임이 회복되었고, 일상생활이 편해졌습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/FrozenShoulder/section16/card2_pc.png`,
        who: `60대 주부`,
        desc: [
          `"음식을 하다가 팔을 올리는 게 너무 힘들었어요. 그냥 나이 탓인가 했는데, 오십견이라고 하더라고요. 치료 후에는 팔이 훨씬 가벼워지고, 통증도 많이 줄었습니다."
`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/FrozenShoulder/section16/card3_pc.png`,
        who: `40대 운동선수`,
        desc: [
          `"어깨를 제대로 움직이지 못하니 운동하는 게 너무 힘들었어요. 비수술 치료를 병행하며 재활을 진행했더니 어깨 기능이 많이 회복되었습니다."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
