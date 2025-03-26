import TypeC from "@/components/ui/treatment/TypeC";

export default function Section9() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          퇴행성 관절염
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `퇴행성 관절염(Osteoarthritis)은 관절을 보호하는 연골이 점점 닳아 없어지면서, `,
        <span key="1" className="bold">
          뼈끼리 맞닿아 통증과 염증을 유발하는 질환
        </span>,
        `입니다.`,
        <br key="1" className="pc" />,
        ` 주로 무릎, 고관절, 손가락, 어깨 관절에서 많이 발생하며, 관절이 뻣뻣해지고, 점점 움직이기 어려워지는 것이 특징입니다`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/DegenerativeArthritis/section9/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/DegenerativeArthritis/section9/bg1_mo.png`,
    checkData: [
      {
        text: [
          `단순한 노화가 아니라,`,
          <br key="1" className="mo" />,
          `적극적인 치료와 관리가 필요한 질환입니다.`,
        ],
      },
      {
        text: [
          `조기에 치료할수록 연골 손상을 막고,`,
          <br key="1" className="mo" />,
          `건강한 관절을 유지할 수 있습니다.`,
        ],
      },
    ],
    boxData: {
      desc: [
        `관절을 구성하는 조직 전반이 약화되면서 연골, 인대, 힘줄, 뼈 등의`,
        <br key="1" className="pc" />,
        `여러 구조에 만성 염증이 누적되면서 관절에 전체적인 손상과 퇴화가 진행되는 퇴행성 질환!`,
      ],
      title: [`주로 발생하는 부위`],
      caption: [`무릎, 손가락, 고관절, 발목관절, 손목관절, 턱관절 등`],
    },
  };
  return <TypeC {...data_} />;
}
