import TypeF from "@/components/ui/treatment/TypeF";

export default function Section6() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/FrozenShoulder/section6/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/FrozenShoulder/section6/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`비수술 치료가 필요한 이유`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료를 통해 신경 압박을 완화하고,  `,
        <br key="1" className="mo" />,
        `척추 기능을 회복하는 것이 중요합니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        text: [
          `척추 신경이 눌리는 증상은 `,
          <span key="1" className="green bold">
            방치하면 보행 장애로 발전할 수 있습니다.
          </span>,
        ],
      },
      {
        text: [
          `시간이 지나면서 `,
          <span key="1" className="green bold">
            신경 손상이 심해지면 치료가 어려워질 수 있습니다.
          </span>,
        ],
      },
      {
        text: [
          `조기에 치료하면 `,
          <span key="1" className="green bold">
            비수술적 방법으로도 충분히 회복할 수 있습니다.
          </span>,
        ],
      },
      {
        text: [
          `수술은 최후의 선택이며, `,
          <span key="1" className="green bold">
            가능한 한 보존적 치료를 우선해야 합니다.
          </span>,
        ],
      },
    ],
  };
  return <TypeF {...data_} />;
}
