import TypeS from "@/components/ui/jointDisease/TypeS";
export default function Section21() {
  const data_ = {
    sectionTitleSimple: {
      text: [`튼튼마디 집중치료 프로그램`],
      color: `#000`,
      align: "center",
    },
    pageTitleContent: {
      text: [`보다 근본적인 회복을 위해서는 치료에도 원칙과 순서가 있습니다.`],
      color: `#666666`,
      align: "center",
    },
    title: [
      `체계적으로 `,
      <br key="1" />,
      <span key="1" className="bold">
        하나씩 하나씩 치료합니다.
      </span>,
    ],
    cardData: [
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section21/card1_pc.png`,
        desc: [`원기회복, 복원력상승, 면역활성조절`],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section21/card2_pc.png`,
        desc: [`염증억제, 관절내부환경 안정화, 항상성회복`],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section21/card3_pc.png`,
        desc: [`연골인대조직의 기질복구, 결합조직 강화`],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section21/card4_pc.png`,
        desc: [`근력강화, 대칭성회복, 재발방지 및 퇴행억제`],
      },
    ],
    bgPc: `/assets/components/pages/bstt/DegenerativeArthritis/section21/bg1_pc.png`,
  };
  return <TypeS {...data_} />;
}
