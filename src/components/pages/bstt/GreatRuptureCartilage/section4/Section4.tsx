import TypeC, { Ttype } from "@/components/ui/jointDisease/TypeC";

export default function Section4() {
  const sectionTitleSimple_ = {
    text: [
      <span key="1" className="green">
        연골·인대 손상
      </span>,
      `을 방치하면 `,
      <br key="1" className="mo" />,
      `어떻게 될까요?`,
    ],
    color: "#131313",
    align: "center",
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card1_pc.png`,
      text: [
        `초기 증상의 자연회복을`,
        <br key="1" />,
        `기다리다가 증상이 점점 심화`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card2_pc.png`,
      text: [
        `잠시 완화되었다가 다시`,
        <br key="1" />,
        `재발되기를 반복하는 단계`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card3_pc.png`,
      text: [`한동안 완화되었다가`, <br key="1" />, `악화하기를 반복하는 단계`],
    },
    {
      img: `/assets/components/pages/bstt/JointDisease/section3/card4_pc.png`,
      text: [
        `더이상 치료에 반응이 없고`,
        <br key="1" />,
        `통증이 억제되지 않는 단계`,
      ],
    },
  ];

  const data_ = {
    type: "b" as Ttype,
    sectionTitleSimple: sectionTitleSimple_,
    pageTitleContent: {
      text: [
        `연골·인대 손상은 방치하면 회복이 어려워지고, 관절염으로 발전할 수 있습니다.`,
      ],
      color: `#444`,
      align: `center`,
    },
    bg: `#EAF5EF`,
    cardData: card_data_,
    desc: [
      `초기에 적절한 치료를 받아야 손상 부위를 보호하고, `,
      <br key="1" />,
      `관절 기능을 유지할 수 있습니다.`,
    ],
  };
  return <TypeC {...data_} />;
}
