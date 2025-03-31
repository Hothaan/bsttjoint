import TypeQ from "@/components/ui/jointDisease/TypeQ";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `왜 `,
        <span className="green" key="1">
          오십견
        </span>,
        `이 생길까요?`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    pageTitleContent: {
      text: [
        `오십견은 단순한 노화 현상이 아니라, 어깨 관절 기능 저하와 염증이 원인입니다. 초기에 적극적으로 치료해야 어깨가 굳어지는 것을 막을 수 있습니다.`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card1_pc.png`,
        title: `퇴행성 변화`,
        desc: [
          `나이가 들면서 관절낭이


`,
          <br key="1" />,
          `두꺼워지고 탄력이 감소`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card2_pc.png`,
        title: `잘못된 자세와 운동 부족`,
        desc: [
          `오랜 시간 한 자세로 앉아 있거나


`,
          <br key="1" />,
          `어깨 사용이 적은 경우`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card3_pc.png`,
        title: `반복적인 염증`,
        desc: [
          `관절낭에 반복적으로


`,
          <br key="1" />,
          `염증이 발생하여 관절이 유착됨`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card4_pc.png`,
        title: `당뇨병, 갑상선 질환`,
        desc: [
          `혈액순환 장애로 인해
`,
          <br key="1" />,
          `
염증이 잘 생기는 경우`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card5_pc.png`,
        title: `어깨 관절 손상`,
        desc: [
          `회전근개 파열, 탈구 등의 부상 후

`,
          <br key="1" />,
          `어깨를 제대로 움직이지 않으면`,
          <br key="2" />,
          `오십견으로 발전할 가능성이 높음`,
        ],
      },
    ],
  };
  return <TypeQ {...data_} />;
}
