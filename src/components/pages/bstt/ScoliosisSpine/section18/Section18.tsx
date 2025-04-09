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
        `많은 환자들이 척추측만증을 극복하고 있습니다. `,
        <br key="1" className="mo" />,
        ` 지금 바로 치료를 시작하세요!`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/ScoliosisSpine/section18/card1_pc.png`,
        who: `20대 대학생`,
        desc: [
          `"오랜 시간 앉아서 공부하다 보니 허리가 점점 한쪽으로 기울어지는 것 같았어요. 치료를 받으면서 척추가 바르게 정렬되고, 허리 통증도 사라졌습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/ScoliosisSpine/section18/card2_pc.png`,
        who: `40대 직장인`,
        desc: [
          `"오래 서 있거나 걸으면 허리 통증이 심해졌어요. 병원에서 척추측만증 진단을 받았고, 치료를 진행하면서 자세가 개선되고 허리 통증이 줄어들었습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/ScoliosisSpine/section18/card3_pc.png`,
        who: `50대 주부`,
        desc: [
          `"허리가 점점 휘어지고 통증이 심해져서 병원을 찾았어요. 치료 후 허리 불균형이 개선되고, 일상생활이 훨씬 편해졌어요."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
