import TypeQ from "@/components/ui/jointDisease/TypeQ";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `왜 `,
        <span className="green" key="1">
          허리디스크
        </span>,
        `가 생길까요?`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    pageTitleContent: {
      text: [
        `허리디스크는 단순한 노화가 아니라 잘못된 자세와 생활 습관이 주요 원인입니다. 조기에 적절한 치료를 통해 신경 손상을 예방하는 것이 중요합니다.`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section7/card1_pc.png`,
        title: `잘못된 자세`,
        desc: [
          `장시간 앉아 있거나 구부정한

`,
          <br key="1" />,
          `자세 유지`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section7/card2_pc.png`,
        title: `과도한 하중`,
        desc: [
          `무거운 물건을 반복적으로 들거나

`,
          <br key="1" />,
          `허리에 부담을 주는 동작`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section7/card3_pc.png`,
        title: `운동 부족`,
        desc: [
          `허리 주변 근육이 약해지면서

`,
          <br key="1" />,
          `디스크에 가해지는 부담 증가`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section7/card4_pc.png`,
        title: `퇴행성 변화`,
        desc: [
          `나이가 들면서 디스크가 손상되고


`,
          <br key="1" />,
          `
수분이 감소하여 탄력 저하`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/LumbarDisc/section7/card5_pc.png`,
        title: `반복적인 충격`,
        desc: [
          `과도한 운동, 잘못된 스트레칭 등이

`,
          <br key="1" />,
          `허리에 부담을 줌`,
        ],
      },
    ],
  };
  return <TypeQ {...data_} />;
}
