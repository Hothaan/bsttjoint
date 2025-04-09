import TypeC from "@/components/ui/treatment/TypeC";

export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          척추관협착증
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `척추관협착증은 `,
        <span key="1" className="bold">
          척추 중앙의 신경이 지나가는 통로(척추관)가 좁아져 신경을 압박하는 질환
        </span>,
        `입니다.
`,
        <br key="1" className="pc" />,
        `나이가 들면서 퇴행성 변화가 일어나거나, 반복적인 충격과 잘못된 자세로 인해 척추관이 점점 좁아지면서 발생합니다.`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/SpinalStenosis/section3/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/SpinalStenosis/section3/bg1_mo.png`,
    checkData: [
      {
        text: [
          `보행 시 통증이 심해지고, 앉거나 쪼그려 앉으면
`,
          <br key="1" />,
          `증상이 완화되는 것이 특징입니다.`,
        ],
      },
      {
        text: [
          `방치하면 신경 손상이 진행되면서 다리 힘이 약해지고,
`,
          <br key="1" className="pc" />,
          `보행 장애로 이어질 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
