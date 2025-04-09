import TypeG from "@/components/ui/treatment/TypeG";
import Card1 from "@/assets/components/pages/bstt/DegenerativeArthritis/section24/card1.svg";
import Card2 from "@/assets/components/pages/bstt/DegenerativeArthritis/section24/card2.svg";
import Card3 from "@/assets/components/pages/bstt/DegenerativeArthritis/section24/card3.svg";
import Card4 from "@/assets/components/pages/bstt/DegenerativeArthritis/section24/card4.svg";

export default function Section24() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `이제부터 관절염 치료의 목표는 `,
        <br key="1" className="mo" />,
        `달라져야만 합니다.`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `근골격계 통증질환은 일시적인 치료효과 만으로는 반복적으로 재발하여 만성화되면서 진행되기가 쉽습니다. `,
        <br key="1" className="pc" />,
        `따라서 이제부터 현명한 치료는 아래와 같습니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        icon: <Card1 />,
        title: `원인적 치료`,
        desc: [
          `질병 자체보다 질병이 발생한 원인을
`,
          <br key="1" />,
          `함께 치료합니다.`,
        ],
      },
      {
        icon: <Card2 />,
        title: `비수술적 회복`,
        desc: [
          `더욱 약해지지 않도록
`,
          <br key="1" />,
          `보존적·비수술적으로 치료합니다`,
        ],
      },
      {
        icon: <Card3 />,
        title: `활동능력 강화`,
        desc: [
          `통증감소 뿐만 아니라
`,
          <br key="1" />,
          `신체활동을 정상화 합니다.`,
        ],
      },
      {
        icon: <Card4 />,
        title: `노후까지 평생관리`,
        desc: [
          `지속가능한 치료,

`,
          <br key="1" />,
          `관리 가능한 방식으로 치료합니다.`,
        ],
      },
    ],
    bgPc: `/assets/components/pages/bstt/DegenerativeArthritis/section24/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/DegenerativeArthritis/section24/bg1_mo.png`,
  };
  return <TypeG {...data_} />;
}
