import TypeN from "@/components/ui/treatment/TypeN";
import Card1 from "@/assets/components/pages/bstt/ScoliosisSpine/section16/card1.svg";
import Card2 from "@/assets/components/pages/bstt/ScoliosisSpine/section16/card2.svg";
import Card3 from "@/assets/components/pages/bstt/ScoliosisSpine/section16/card3.svg";

export default function Section14() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/ScoliosisSpine/section16/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/ScoliosisSpine/section16/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          척추측만증,
        </span>,
        <br key="1" className="mo" />,
        ` 치료 시기를 놓치지 마세요`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    cardData: [
      {
        icon: <Card1 />,
        title: `면역력 및 체력 회복`,
        desc: [
          `척추의 변형이 진행되면 

`,

          <br key="1" />,
          <span className="green" key="1">
            더 심한 불균형이 나타날 수 있습니다.
          </span>,
        ],
      },
      {
        icon: <Card2 />,
        title: `근육 및 뼈 건강 강화`,
        desc: [
          `시간이 지날수록 
`,
          <span className="green" key="1">
            자연 교정이 어려워지고,
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            치료가 더 오래 걸릴 수 있습니다.
          </span>,
        ],
      },
      {
        icon: <Card3 />,
        title: `회복 속도 증가`,
        desc: [
          `지금 치료하면 
`,
          <span className="green" key="1">
            비수술 치료만으로도
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            충분히 회복할 수 있습니다.
          </span>,
        ],
      },
    ],
    desc: [
      `척추 건강을 유지하려면, `,

      `지금 치료가 `,
      <br key="1" className="mo" />,
      ,
      `필요합니다.`,
    ],
  };

  return <TypeN {...data_} />;
}
