import TypeN from "@/components/ui/treatment/TypeN";
import Card1 from "@/assets/components/pages/bstt/SpinalStenosis/section14/card1.svg";
import Card2 from "@/assets/components/pages/bstt/SpinalStenosis/section14/card2.svg";
import Card3 from "@/assets/components/pages/bstt/SpinalStenosis/section14/card3.svg";

export default function Section14() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          척추관협착증,
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
          `척추 신경이 눌리면`,
          <br key="1" />,
          <span className="green" key="1">
            보행 장애로 발전할 수 있습니다.
          </span>,
        ],
      },
      {
        icon: <Card2 />,
        title: `근육 및 뼈 건강 강화`,
        desc: [
          `시간이 지나면서 `,
          <span className="green" key="1">
            신경 손상이 심해지면
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            치료가 어려워질 수 있습니다.
          </span>,
        ],
      },
      {
        icon: <Card3 />,
        title: `회복 속도 증가`,
        desc: [
          `지금 치료하면  `,
          <span className="green" key="1">
            수술 없이도
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            충분히 회복할 수 있습니다.
          </span>,
        ],
      },
    ],
    desc: [`척추 건강을 유지하려면, `, `지금 치료가 필요합니다.`],
  };

  return <TypeN {...data_} />;
}
