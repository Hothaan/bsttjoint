import TypeN from "@/components/ui/treatment/TypeN";
import Card1 from "@/assets/components/pages/bstt/AcupunctureTreatment/section9/card1.svg";
import Card2 from "@/assets/components/pages/bstt/AcupunctureTreatment/section9/card2.svg";
import Card3 from "@/assets/components/pages/bstt/AcupunctureTreatment/section9/card3.svg";

export default function Section9() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          약침요법,
        </span>,
        <br key="1" className="mo" />,
        ` 통증을 완전히 해결하는 방법`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    cardData: [
      {
        icon: <Card1 />,
        title: `면역력 및 체력 회복`,
        desc: [
          `단순한 통증 치료가 아니라 `,
          <span className="green" key="1">
            염증 제거와
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            조직 회복까지 가능한
          </span>,
          ` 치료입니다.`,
        ],
      },
      {
        icon: <Card2 />,
        title: `근육 및 뼈 건강 강화`,
        desc: [
          `비수술 치료 중에서도 `,
          <span className="green" key="1">
            가장 빠르고
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            효과적인 치료 방법
          </span>,
          `입니다.`,
        ],
      },
      {
        icon: <Card3 />,
        title: `회복 속도 증가`,
        desc: [
          `몸의 균형을 바로잡고, `,
          <span className="green" key="1">
            장기적인 건강을
          </span>,
          <br key="1" />,

          <span className="green" key="1">
            유지하는 데 도움
          </span>,
          `을 줍니다.`,
        ],
      },
    ],
    desc: `약침요법, 비수술 치료의 최적의 선택입니다.`,
  };

  return <TypeN {...data_} />;
}
