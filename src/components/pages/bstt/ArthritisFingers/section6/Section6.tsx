import TypeW from "@/components/ui/jointDisease/TypeW";

export default function Section6() {
  const data_ = {
    bgColor: `#EAF5EF`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          손가락 관절염
        </span>,
        `의 원인은 `,
        <br key="1" className="mo" />,
        `단순한 연골 손상이 아닙니다.`,
      ],
      color: `#3c3c3c`,
      align: "left",
    },
    pageTitleContent: {
      text: [
        `손가락을 반복적으로 사용하면서 연골이 점점 닳아 없어지고, `,
        <span key="1" className="bold">
          관절 내 염증이 만성화
        </span>,
        `됩니다. `,
        <br key="1" className="pc" />,
        `단순한 진통제와 물리치료만으로는 `,
        <span key="1" className="bold">
          염증을 근본적으로 치료할 수 없습니다.
        </span>,
      ],
      color: `#3c3c3c`,
      align: "left",
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section6/card1_pc.png`,
        text: [
          `원인을 해결하지 않으면 증상이 반복적으로 나타나고,`,
          <br key="1" />,
          `결국 관절이 변형될 수 있습니다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/ArthritisFingers/section6/card2_pc.png`,
        text: [
          `손가락 관절염은 조기에 치료해야 연골 손상을 줄이고,`,
          <br key="1" />,
          `관절 기능을 유지할 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeW {...data_} />;
}
