import TypeN from "@/components/ui/treatment/TypeN";
import Card1 from "@/assets/components/pages/bstt/GreatRuptureCartilage/section9/card1.svg";
import Card2 from "@/assets/components/pages/bstt/GreatRuptureCartilage/section9/card2.svg";
import Card3 from "@/assets/components/pages/bstt/GreatRuptureCartilage/section9/card3.svg";

export default function Section9() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          연골·인대 손상,
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
          `연골과 인대는  `,
          <span className="green" key="1">
            손상되면 자연 회복이 어렵습니다.
          </span>,
        ],
      },
      {
        icon: <Card2 />,
        title: `근육 및 뼈 건강 강화`,
        desc: [
          `방치하면  `,
          <span className="green" key="1">
            관절 불안정과 만성 통증으로 이어질 수 있습니다.
          </span>,
        ],
      },
      {
        icon: <Card3 />,
        title: `회복 속도 증가`,
        desc: [
          `지금 치료하면  `,
          <span className="green" key="1">
            수술 없이도 충분히 회복할 수 있습니다.
          </span>,
        ],
      },
    ],
  };

  return <TypeN {...data_} />;
}
