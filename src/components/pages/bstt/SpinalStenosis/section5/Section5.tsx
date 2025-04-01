import TypeQ from "@/components/ui/jointDisease/TypeQ";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `왜 `,
        <span className="green" key="1">
          척추관협착증
        </span>,
        `이 생길까요?`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    pageTitleContent: {
      text: [
        `척추관협착증은 단순한 허리 통증이 아니라 신경이 눌리면서 다리까지 영향을 주는 질환입니다. 조기 치료를 통해 신경 손상을 예방하는 것이 중요합니다.`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section5/card1_pc.png`,
        title: `퇴행성 변화`,
        desc: [
          `나이가 들면서 척추관이 좁아지고,
`,
          <br key="1" />,
          `신경이 압박됨`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section5/card2_pc.png`,
        title: `디스크 돌출`,
        desc: [
          `추간판이 탈출하여 척추관을 좁히고,
`,
          <br key="1" />,
          `신경을 압박함`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section5/card3_pc.png`,
        title: `잘못된 자세와 생활 습관`,
        desc: [
          `오래 앉아 있거나,
`,
          <br key="1" />,
          `허리에 부담을 주는 자세 유지`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section5/card4_pc.png`,
        title: `척추 불안정성`,
        desc: [
          `척추 전방전위증 등으로 인해

`,
          <br key="1" />,
          `
신경이 눌리는 구조 변화`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section5/card5_pc.png`,
        title: `반복적인 충격`,
        desc: [
          `무거운 물건을 반복적으로 들거나,
`,
          <br key="1" />,
          `허리에 부담을 주는 활동`,
        ],
      },
    ],
  };
  return <TypeQ {...data_} />;
}
