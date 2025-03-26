import TypeT from "@/components/ui/jointDisease/TypeT";

export default function Section23() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          퇴행성 관절염,
        </span>,
        <br key="1" className="mo" />,
        ` 어떻게 치료해야 할까요?`,
      ],
      color: `#000`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `조기에 치료하면 수술 없이도 충분히 관절 건강을 `,
        <br key="1" className="mo" />,
        `유지할 수 있습니다.`,
      ],
      color: `#666666`,
      align: "center",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section23/card1_pc.png`,
        desc: [
          `진통제나 주사는 `,
          <span key="1" className="bold">
            일시적인 통증 완화
          </span>,
          `일 뿐, `,
          <br key="1" />,
          `연골을 회복하지는 못합니다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section23/card2_pc.png`,
        desc: [
          `연골이 더 이상 손상되지 않도록, `,
          ,
          <br key="1" />,
          <span key="1" className="bold">
            연골 보호와 염증 조절 치료가 필수적
          </span>,
          `입니다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/DegenerativeArthritis/section23/card3_pc.png`,
        desc: [
          `비수술 치료로 연골 손상을 막고, `,
          <br key="1" />,
          <span key="1" className="bold">
            관절의 기능을 회복하는 것이 핵심
          </span>,
          `입니다.`,
        ],
      },
    ],
  };
  return <TypeT {...data_} />;
}
