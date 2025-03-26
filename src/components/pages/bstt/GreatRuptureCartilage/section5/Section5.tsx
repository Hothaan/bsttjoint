import TypeQ from "@/components/ui/jointDisease/TypeQ";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `왜 `,
        <span className="green" key="1">
          연골·인대
        </span>,
        `가 손상될까요?`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    pageTitleContent: {
      text: [
        `연골·인대 손상은 운동 선수뿐만 아니라, 일상생활에서도 충분히 발생할 수 있습니다. 손상이 발생한 초기부터 적극적인 치료가 필요합니다.`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card1_pc.png`,
        title: `운동 중 외상`,
        desc: [
          `점프, 착지, 급격한 방향 전환 시

`,
          <br key="1" />,
          `손상 발생`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card2_pc.png`,
        title: `반복적인 과사용`,
        desc: [
          `특정 관절을 반복적으로 사용하면

`,
          <br key="1" />,
          `인대가 약해짐`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card3_pc.png`,
        title: `노화 및 퇴행성 변화`,
        desc: [
          `연골과 인대가 약해지면서

`,
          <br key="1" />,
          `작은 충격에도 손상 발생`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card4_pc.png`,
        title: `관절의 불안정성`,
        desc: [
          `근육과 인대가 약하면 관절이`,
          <br key="1" />,
          `
쉽게 손상됨`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/GreatRuptureCartilage/section5/card5_pc.png`,
        title: `잘못된 운동 습관`,
        desc: [
          `준비운동 부족, 과도한 무게 사용 등`,
          <br key="1" />,
          <br key="2" />,
        ],
      },
    ],
  };
  return <TypeQ {...data_} />;
}
