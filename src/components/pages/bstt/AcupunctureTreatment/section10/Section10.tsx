import TypeJ from "@/components/ui/treatment/TypeJ";

export default function Section10() {
  const data_ = {
    sectionTitleSimple: {
      text: [`복용 후 변화된 환자 이야기`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `많은 사람들이 녹용한약을 통해 건강을 회복하고 있습니다.`,
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
          `“업무 스트레스로 피곤이 누적되어 항상 몸이 무거웠어요. 녹용한약을 복용한 후 아침에 상쾌하게 일어날 수 있게 되었고, 업무 집중력도 높아졌어요.”`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section10/card2_pc.png`,
        who: `60대 주부`,
        desc: [
          `"갱년기 이후로 면역력이 약해져서 감기에 자주 걸렸어요. 녹용한약을 꾸준히 복용하면서 감기도 줄고, 몸이 한결 가벼워졌어요."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section10/card3_pc.png`,
        who: `30대 운동선수`,
        desc: [
          `"운동 후 회복이 느려지고 근육 피로가 심했어요. 녹용한약을 병행한 후 회복 속도가 빨라지고, 체력이 좋아진 걸 느꼈어요."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
