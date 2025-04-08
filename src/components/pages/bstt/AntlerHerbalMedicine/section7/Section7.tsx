import TypeG from "@/components/ui/treatment/TypeG";
import Card1 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card1.svg";
import Card2 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card2.svg";
import Card3 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card3.svg";

export default function Section7() {
  const data_ = {
    bgColor: `linear-gradient(359deg, #FFF 13.94%, #EAF5EF 114.07%)`,
    sectionTitleSimple: {
      text: [
        `비수술 치료와 병행하면 `,
        <br key="1" className="mo" />,
        `더욱 효과적인 이유`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `녹용한약은 단순한 건강 보조제가 아니라, `,
        <br key="1" className="mo" />,
        `몸의 기능을 최적화하는 역할을 합니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        icon: <Card1 />,
        title: `면역력 및 체력 회복`,
        desc: [
          `허약 체질을 개선하고,`,
          <br key="1" className="pc" />,
          `지속적인 건강 유지`,
        ],
      },
      {
        icon: <Card2 />,
        title: `근육 및 뼈 건강 강화`,
        desc: [
          `관절 및 근육 손상을`,
          <br key="1" className="pc" />,
          `예방하고 회복 촉진`,
        ],
      },
      {
        icon: <Card3 s />,
        title: `회복 속도 증가`,
        desc: [
          `질환 치료 후`,
          <br key="1" className="pc" />,
          `빠른 회복을 돕는 역할`,
        ],
      },
    ],
  };

  return <TypeG {...data_} />;
}
