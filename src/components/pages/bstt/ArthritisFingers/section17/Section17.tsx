import TypeX from "@/components/ui/jointDisease/TypeX";

export default function Section17() {
  const data_ = {
    sectionTitleSimple: {
      text: ["비수술적 치료로 가능한 변화"],
      color: "#3c3c3c",
      align: "center",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section17/card1_pc.png`,
        text: [
          `손가락 관절 염증 완화 `,
          <br key="1" className="mo" />,
          `& 통증 감소`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section17/card2_pc.png`,
        text: [`연골 손상 방지 `, <br key="1" className="mo" />, `& 재생 촉진`],
      },
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section17/card3_pc.png`,
        text: [
          `손가락 기능 회복 `,
          <br key="1" className="mo" />,
          `& 일상생활 복귀`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section17/card4_pc.png`,
        text: [
          `퇴행 진행 억제`,
          <br key="1" className="mo" />,
          ` & 지속적인 관리 가능`,
        ],
      },
    ],
  };
  return <TypeX {...data_} />;
}
