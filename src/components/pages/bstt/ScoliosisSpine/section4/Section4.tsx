import TypeC from "@/components/ui/treatment/TypeC";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          척추측만증
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `척추측만증은 

`,
        <span key="1" className="bold">
          척추가 정상적인 정렬에서 벗어나 ‘C’ 또는 ‘S’자 형태로 휘어진 상태를
          말합니다.
        </span>,
        `하는 질환입니다.
`,
        <br key="1" className="pc" />,
        `정상적인 척추는 정면에서 봤을 때 일직선이어야 하지만, 척추측만증이 있으면 한쪽으로 기울어지면서 신체 균형이 무너집니다. `,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/ScoliosisSpine/section4/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/ScoliosisSpine/section4/bg1_mo.png`,
    checkData: [
      {
        text: [
          `척추 변형이 진행될수록 허리 통증, 피로감, 심한 경우 `,
          <br key="1" />,
          `호흡 곤란까지 발생할 수 있습니다.`,
        ],
      },
      {
        text: [
          `조기에 교정할수록 더 빠르게 `,
          <br key="1" />,
          `정상적인 척추 정렬을 회복할 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
