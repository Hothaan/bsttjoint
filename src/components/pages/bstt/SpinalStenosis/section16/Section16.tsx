import TypeJ from "@/components/ui/treatment/TypeJ";

export default function Section16() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `사회적 증명 – `,
        <br key="1" className="mo" />,
        `치료 후 변화된 환자 이야기`,
      ],
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
        img: `/assets/components/pages/bstt/SpinalStenosis/section16/card1_pc.png`,
        who: `60대 직장인`,
        desc: [
          `"걸을 때마다 다리가 저리고 힘이 빠졌어요. 비수술 치료를 받으며 꾸준히 운동을 병행했더니 다시 편하게 걸을 수 있게 되었습니다."`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section16/card2_pc.png`,
        who: `70대 은퇴자`,
        desc: [
          `"허리 통증 때문에 장시간 서 있기가 어려웠어요. 치료 후에는 일상생활이 한결 편해지고,
다리 저림도 사라졌습니다."
`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section16/card3_pc.png`,
        who: `50대 주부`,
        desc: [
          `"계단을 내려갈 때마다 무릎과 허리가 아팠는데, 치료를 받고 나서 보행이 훨씬 편해졌습니다."`,
        ],
      },
    ],
  };

  return <TypeJ {...data_} />;
}
