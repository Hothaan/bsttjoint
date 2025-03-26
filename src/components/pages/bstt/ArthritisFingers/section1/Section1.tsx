import TypeV from "@/components/ui/jointDisease/TypeV";

export default function Section1() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          손가락 관절염,
        </span>,
        <br key="1" />,
        `방치하면 관절 변형으로 `,
        <br key="1" />,
        `이어질 수 있습니다.`,
      ],
      color: `#131313`,
      align: "left",
    },
    pageTitleContent: {
      text: [
        `손가락 관절염은 진행될수록 치료가 어렵습니다. 조기에 치료하면 연골 손상을 줄이고, 손가락 기능을 유지할 수 있습니다.`,
      ],
      color: `#3C3C3C`,
      align: "left",
    },
    circleBig: `/assets/components/pages/bstt/ArthritisFingers/section1/circle_big1_pc.png`,
    circleSmall: `/assets/components/pages/bstt/ArthritisFingers/section1/circle_small1_pc.png`,
    checkData: [
      {
        text: [`손가락을 움직일 때마다 아프고, 붓고 뻣뻣해지는 느낌이 든다면?`],
      },
      {
        text: [
          `물건을 잡을 때 손가락이 아프고, 오래 사용하면 통증이 심해지나요?`,
        ],
      },
      {
        text: [
          `날씨가 추워지면 손가락 관절이 더 뻣뻣하고 움직이기 어려워지나요?`,
        ],
      },
    ],
    desc: [
      [
        `손가락 관절염은 단순한 노화 현상이 아니라, `,
        <span key="1" className="bold">
          손가락 관절을 구성하는 연골과 인대가 손상되면서 발생하는 만성 염증성
          질환
        </span>,
        `입니다.`,
      ],
      [
        `초기에는 단순한 뻐근함과 통증으로 시작되지만, 방치하면 `,
        <span key="1" className="bold">
          손가락이 굽어지고 변형될 수 있습니다.
        </span>,
      ],
    ],
  };
  return <TypeV {...data_} />;
}
