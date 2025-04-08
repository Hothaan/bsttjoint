import TypeQ from "@/components/ui/jointDisease/TypeQ";

export default function Section7() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          퇴행성 관절염
        </span>,
        `은 왜 생길까요?`,
      ],
      color: "#3C3C3C",
      align: "left",
    },
    pageTitleContent: {
      text: [
        `퇴행성 관절염은 자연스러운 노화 현상이 아닙니다. `,
        <br key="1" className="mo" />,
        `관절 건강을 지키려면, 지금부터 적극적인 치료와 관리가 필요합니다`,
      ],
      color: "#666",
      align: "left",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section7/card1_pc.png`,
        title: `연령 증가`,
        desc: [`나이가 들면서 연골이`, <br key="1" />, `닳고 마모됨`],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section7/card2_pc.png`,
        title: `반복적인 사용`,
        desc: [
          `무릎, 손가락 등을 과하게`,
          <br key="1" />,
          `사용하는 생활 습관`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section7/card3_pc.png`,
        title: `체중 증가`,
        desc: [`과체중일 경우, 무릎에`, <br key="1" />, `가해지는 부담 증가`],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section7/card4_pc.png`,
        title: `운동 부족`,
        desc: [
          `근육이 약해지면서 관절을`,
          <br key="1" />,
          `보호하는 힘이 감소`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section7/card5_pc.png`,
        title: `유전적 요인`,
        desc: [`가족력에 의해 발병 위험 증가`, <br key="1" />, <br key="2" />],
      },
    ],
  };
  return <TypeQ {...data_} />;
}
