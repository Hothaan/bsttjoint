import TypeJ from "@/components/ui/treatment/TypeJ";

export default function Section16() {
  const data_ = {
    sectionTitleSimple: {
      text: [`치료 후 변화된 `, <br key="1" className="mo" />, `환자 이야기`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `많은 환자들이 척추관협착증을 극복하고 `,
        <br key="1" className="mo" />,
        ` 있습니다.`,

        ` 지금 바로 치료를 시작하세요!`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/NeckDisc/section18/card1_pc.png`,
        who: `30대 직장인`,
        desc: [
          `"오랜 시간 컴퓨터를 사용하면서 목이 뻐근했어요. 처음엔 대수롭지 않게 생각했지만, 점점 손이 저리고 아픈 증상이 나타났어요. 비수술 치료를 받으며 생활 습관을 교정하니 확실히 좋아졌어요."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/NeckDisc/section18/card2_pc.png`,
        who: `50대 주부`,
        desc: [
          `"집안일을 하다 보면 목이 뻐근하고 팔까지 저렸어요. 병원에서 목디스크 초기 진단을 받았고, 치료를 진행하면서 통증이 많이
줄었습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/NeckDisc/section18/card3_pc.png`,
        who: `40대 운동선수`,
        desc: [
          `"운동 중 목을 다쳐 디스크 탈출 진단을
받았습니다. 비수술 치료를 통해 목 안정성을 회복하고 다시 운동할 수 있게
되었습니다."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
