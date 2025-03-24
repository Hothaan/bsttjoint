import TypeJ from "@/components/ui/treatment/TypeJ";

export default function Section10() {
  const data_ = {
    sectionTitleSimple: {
      text: [`치료 후 변화된 환자 이야기`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `많은 환자들이 약침요법으로 통증을 극복하고 있습니다.`,
        <br key="1" className="mo" />,
        ` 지금 바로 치료를 시작하세요!`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section10/card1_pc.png`,
        who: `40대 직장인`,
        desc: [
          `"오랜 시간 앉아서 일하다 보니 허리 통증이 계속됐어요. 물리치료만으로는 효과가 부족했는데, 약침 치료를 병행하면서 통증이 확 줄었습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section10/card2_pc.png`,
        who: `60대 주부`,
        desc: [
          `"무릎 관절염으로 고생하다 약침 치료를 받았어요. 통증이 줄고 관절이 훨씬 부드러워졌어요!"`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/AntlerHerbalMedicine/section10/card3_pc.png`,
        who: `30대 운동선수`,
        desc: [
          `"운동 중 부상을 입어 치료를 받았는데, 약침을 병행하니 회복 속도가 빨라지고 다시 운동할 수 있게 되었습니다."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
