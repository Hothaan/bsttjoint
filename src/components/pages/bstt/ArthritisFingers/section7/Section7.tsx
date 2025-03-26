import TypeC from "@/components/ui/treatment/TypeC";

export default function Section7() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          손가락 관절염
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `손가락 관절염은 `,
        <span key="1" className="bold">
          손가락 관절을 구성하는 연골이 닳고, 관절을 지탱하는 인대와 힘줄이
          약해지면서 발생하는 만성 염증성 질환
        </span>,
        `입니다.`,
        <br key="1" className="pc" />,
        ` 퇴행성 변화, 유전적 요인, 반복적인 손 사용, 면역계 이상 등 다양한 원인으로 발생할 수 있습니다.`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/ArthritisFingers/section7/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/ArthritisFingers/section7/bg1_mo.png`,
    checkData: [
      {
        text: [
          `손가락을 반복적으로 사용하면 관절에 지속적인 부담이 가해지고,
`,
          <br key="1" />,
          `염증이 생겨 연골이 점점 닳아 없어집니다.`,
        ],
      },
      {
        text: [
          `방치하면 손가락 관절이 굳고, 변형이 심해져 기능을 잃을 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
