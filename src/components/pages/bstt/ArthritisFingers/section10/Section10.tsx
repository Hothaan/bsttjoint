import TypeQ from "@/components/ui/jointDisease/TypeQ";

export default function Section10() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          손가락 관절염
        </span>,
        `은 왜 생길까요?`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    pageTitleContent: {
      text: [
        `손가락 관절염은 단순한 노화 현상이 아닙니다. 근본적인 치료가 필요하지 않으면 점점 손가락 기능이 저하될 수 있습니다.`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section10/card1_pc.png`,
        title: `반복적인 손 사용`,
        desc: [
          `장기간 반복된 손가락 사용으로`,
          <br key="1" />,
          `연골과 인대가 손상됨`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section10/card2_pc.png`,
        title: `퇴행성 변화`,
        desc: [
          `연령 증가로 인해 연골이 닳고
`,
          <br key="1" />,
          `탄력이 감소`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section10/card3_pc.png`,
        title: `자가면역 반응`,
        desc: [
          `면역 세포가 관절 조직을 공격하여
`,
          <br key="1" />,
          `염증이 지속됨 (류마티스 관절염)`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section10/card4_pc.png`,
        title: `유전적 요인`,
        desc: [`가족력이 있는 경우 발병 위험 증가`],
      },
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section10/card5_pc.png`,
        title: `손목과 팔의 근력 저하`,
        desc: [
          `손가락 관절에 가해지는 부담이 커짐`,
          <br key="1" />,
          <br key="2" />,
        ],
      },
    ],
  };
  return <TypeQ {...data_} />;
}
