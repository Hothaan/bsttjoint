import TypeQ from "@/components/ui/treatment/TypeQ";
import Card1 from "@/assets/components/pages/bstt/WeightLoss/section9/card1.svg";
import Card2 from "@/assets/components/pages/bstt/WeightLoss/section9/card2.svg";
import Card3 from "@/assets/components/pages/bstt/WeightLoss/section9/card3.svg";

export default function Section9() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          체중 감량,
        </span>,
        ` 단순한 숫자가 아닌`,
        <br key="1" className="mo" />,
        ,
        ` 건강한 변화를 위한 과정`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`체중 감량, 건강을 지키는 최적의 방법입니다.`],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        icon: <Card1 />,
        title: `면역력 및 체력 회복`,
        desc: [
          `건강한 다이어트는`,
          <br key="1" />,
          <span className="green" key="1">
            체질을 바꾸는
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            과정입니다.
          </span>,
        ],
      },
      {
        icon: <Card2 />,
        title: `근육 및 뼈 건강 강화`,
        desc: [
          `무리한 다이어트가 아니라`,
          <br key="1" />,
          <span className="green" key="1">
            지속 가능한 방법이
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            필요합니다.
          </span>,
        ],
      },
      {
        icon: <Card3 />,
        title: `회복 속도 증가`,
        desc: [
          `단순한 감량이 아니라`,
          <br key="1" />,
          <span className="green" key="1">
            건강한 몸을 유지하는 것이
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            핵심입니다.
          </span>,
        ],
      },
    ],
  };

  return <TypeQ {...data_} />;
}
