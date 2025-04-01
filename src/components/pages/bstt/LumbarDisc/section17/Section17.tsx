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
        `많은 환자들이 척추관협착증을 극복하고 있습니다.`,
        <br key="1" className="mo" />,
        ` 지금 바로 치료를 시작하세요!`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section17/card1_pc.png`,
        who: `30대 사무직 근무자`,
        desc: [
          `"오래 앉아서 일하다 보니 허리가 자주 아팠어요. 처음엔 단순한 피로라고 생각했지만, 점점 다리가 저려서 병원을 찾았어요. 비수술 치료를 받으면서 자세 교정을 병행했더니 증상이 확실히 개선되었습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section17/card2_pc.png`,
        who: `50대 주부`,
        desc: [
          `"집안일을 하다가 갑자기 허리를 삐끗한 후 통증이 지속되었어요. 치료를 받으면서 운동을 병행하니 통증도 줄고 움직이는 것이 편해졌습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section17/card3_pc.png`,
        who: `40대 운동선수`,
        desc: [
          `"운동 중 허리를 다쳐 디스크 탈출 진단을 받았습니다. 비수술 치료를 통해 허리 안정성을 회복하고 다시 운동할 수 있게 되었습니다."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
