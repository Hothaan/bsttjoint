import TypeC from "@/components/ui/treatment/TypeC";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          허리디스크
        </span>,
        `란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `허리디스크(추간판 탈출증)는 
`,
        <span key="1" className="bold">
          척추 뼈 사이에 위치한 디스크(추간판)가 탈출하여 신경을 압박하면서
          통증과 저림을 유발하는 질환
        </span>,
        `입니다.
`,
        <br key="1" className="pc" />,
        `잘못된 자세, 퇴행성 변화, 과도한 운동 등이 원인이 되어 발생할 수 있습니다.`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/LumbarDisc/section5/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/LumbarDisc/section5/bg1_mo.png`,
    checkData: [
      {
        text: [
          `허리를 숙일 때 통증이 심해지고,

`,
          <br key="1" className="pc" />,
          `다리까지 저린 증상이 동반되는 것이 특징입니다.`,
        ],
      },
      {
        text: [
          `방치하면 신경 손상이 진행되어 다리 감각이 둔해지고,

`,
          <br key="1" className="pc" />,
          `심한 경우 마비까지 올 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
