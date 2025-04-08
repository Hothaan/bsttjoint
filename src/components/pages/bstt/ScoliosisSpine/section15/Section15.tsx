import TypeH from "@/components/ui/treatment/TypeH";

export default function Section15() {
  const data_ = {
    imgPc: `/assets/components/pages/bstt/ScoliosisSpine/section15/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/ScoliosisSpine/section15/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        `척추측만증에 대한 `,
        <br key="1" className="mo" />,
        `오해와 진실`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `잘못된 정보로 인해 치료 시기를 `,
        <br key="1" className="mo" />,
        `놓치지 마세요!`,
      ],
      color: `#666666`,
      align: `left`,
    },
    cardData: [
      {
        title: `자세를 바르게 하면 나아질까요?`,
        desc: [
          `아닙니다. 자세 교정만으로는 척추측만증이 해결되지 않습니다.
`,
          <br key="1" />,
          <span key="1" className="bold">
            적절한 치료가 병행
          </span>,
          `되어야 합니다.`,
        ],
      },
      {
        title: `운동을 하면 척추가 펴질까요?`,
        desc: [
          `단순한 운동이 아니라, `,
          <span className="bold" key="1">
            척추 변형을 교정하는 맞춤 운동이 필요
          </span>,
          `합니다.`,
        ],
      },
      {
        title: `수술을 받아야만 교정할 수 있나요`,
        desc: [
          `아닙니다. `,
          <span key="1" className="bold">
            조기에 치료하면 비수술적 방법으로도 충분히 회복
          </span>,
          `할 수 있습니다.`,
        ],
      },
    ],
  };

  return <TypeH {...data_} />;
}
