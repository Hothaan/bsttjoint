import TypeJ from "@/components/ui/treatment/TypeJ";

export default function Section10() {
  const data_ = {
    sectionTitleSimple: {
      text: [`체중 감량 후 변화된 사례`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `많은 사람들이 건강한 체중 감량을 통해 삶의 질을 높이고 있습니다.`,
        <br key="1" className="mo" />,
        ` 지금 바로 건강한 변화를 시작하세요!`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section10/card1_pc.png`,
        who: `40대 직장인`,
        desc: [
          `"업무 스트레스로 피곤이 누적되어 항상 몸이 무거웠어요. 체중 감량을 시작한 후 체력이 좋아지고, 업무 집중력도 높아졌어요."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section10/card2_pc.png`,
        who: `60대 주부`,
        desc: [
          `"나이가 들면서 살이 쉽게 찌고 잘 빠지지 않았어요. 체질 개선을 병행한 다이어트를 통해 건강하게 체중을 줄일 수 있었습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section10/card3_pc.png`,
        who: `30대 운동선수`,
        desc: [
          `"운동 후 체지방 감량이 잘되지 않았는데, 건강한 방식으로 감량을 진행하니 체력과 컨디션이 훨씬 좋아졌어요."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
