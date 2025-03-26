import TypeQ from "@/components/ui/treatment/TypeQ";
import Card1 from "@/assets/components/pages/bstt/FrozenShoulder/section9/card1.svg";
import Card2 from "@/assets/components/pages/bstt/FrozenShoulder/section9/card2.svg";
import Card3 from "@/assets/components/pages/bstt/FrozenShoulder/section9/card3.svg";

export default function Section9() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section9/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          오십견,
        </span>,
        <br key="1" className="mo" />,
        ` 치료 시기를 놓치지 마세요`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`어깨가 불편하다면, 지금 바로 치료를 시작하세요.`],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        icon: <Card1 />,
        title: `면역력 및 체력 회복`,
        desc: [
          `오십견은`,
          <br key="1" />,
          <span className="green" key="1">
            방치하면 회복이
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            어려운 질환
          </span>,
          `입니다.`,
        ],
      },
      {
        icon: <Card2 />,
        title: `근육 및 뼈 건강 강화`,
        desc: [
          `시간이 지나면서

`,
          <br key="1" />,
          <span className="green" key="1">
            관절 운동 범위가
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            제한
          </span>,
          `될 수 있습니다.`,
        ],
      },
      {
        icon: <Card3 />,
        title: `회복 속도 증가`,
        desc: [
          `지금 치료하면

`,
          <br key="1" />,
          <span className="green" key="1">
            수술 없이도 충분히
          </span>,
          <br key="1" />,
          <span className="green" key="1">
            회복
          </span>,
          `할 수 있습니다.`,
        ],
      },
    ],
  };

  return <TypeQ {...data_} />;
}
