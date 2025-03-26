import TypeJ from "@/components/ui/jointDisease/TypeJ";
export default function Section11() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/JointDisease/section11/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/JointDisease/section11/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          손가락 관절염
        </span>,
        `을 어떻게 치료해야 할까요? `,
      ],
      color: `#000`,
      align: "center",
    },
    cardData: [
      {
        title: `염증 완화`,
        desc: [`면역세포의 염증 반응을 조절하여 관절 부종 감소`],
      },
      {
        title: `관절 기능 회복`,
        desc: [`손가락을 자유롭게 사용할 수 있도록 가동 범위 증가`],
      },
      {
        title: `연골 보호 및 재생 촉진`,
        desc: [`손가락 관절의 연골과 인대를 강화`],
      },
      {
        title: `근육 및 인대 강화`,
        desc: [`손가락 힘을 길러 관절을 보호`],
      },
    ],
  };
  return <TypeJ {...data_} />;
}
