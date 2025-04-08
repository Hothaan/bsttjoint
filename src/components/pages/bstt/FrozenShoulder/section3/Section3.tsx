import TypeC from "@/components/ui/treatment/TypeC";

export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          오십견
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `오십견(유착성 관절낭염, 동결견)은 `,
        <span key="1" className="bold">
          어깨 관절을 감싸는 관절낭에 염증이 생겨 두꺼워지고, 점점 유착되면서
          어깨 움직임이 제한되는 질환
        </span>,
        `입니다.`,
        <br key="1" className="pc" />,
        `나이가 들면서 자주 발생하며, 특히 `,
        <span key="1" className="bold">
          운동 부족, 잘못된 자세, 당뇨병 등
        </span>,
        `이 원인이 될 수 있습니다.`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/FrozenShoulder/section3/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/FrozenShoulder/section3/bg1_mo.png`,
    checkData: [
      {
        text: [
          `초기에는 어깨 통증이 있지만,
`,
          <br key="1" />,
          `점점 어깨를 움직이는 것 자체가 어려워지는 것이 특징입니다.`,
        ],
      },
      {
        text: [
          `방치하면 어깨 움직임이 점점 줄어들어,
`,
          <br key="1" />,
          `일상생활이 힘들어질 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
