import TypeC from "@/components/ui/treatment/TypeC";

export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          녹용한약
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `녹용한약은 `,
        <span key="1" className="bold">
          사슴의 어린 뿔(녹용)을 주재료로 하여 기력 회복, 면역력 강화, 관절 및
          뼈 건강 개선을 돕는 한약
        </span>,
        `입니다.`,
        <br key="1" className="pc" />,
        `오랜 세월 동안 `,
        <span key="1" className="bold">
          “원기를 보충하는 최고의 한약”
        </span>,
        `으로 알려져 있으며, 기력 저하, 면역력 증진, 회복기 치료 등에 널리 사용됩니다.`,
      ],
      color: `#444`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section3/treatment1_pc.png`,
    imgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section3/treatment1_mo.png`,
    checkData: [
      {
        text: [
          `녹용은 성장기부터 노년기까지 건강을 지키는`,
          <br key="1" />,
          `중요한 성분을 포함하고 있습니다.`,
        ],
      },
      {
        text: [
          `단순한 피로 회복이 아닌,`,
          <br key="1" />,
          `신체 전반의 기능을 강화하는 한약입니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
