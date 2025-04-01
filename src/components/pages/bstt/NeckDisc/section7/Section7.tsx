import TypeD from "@/components/ui/spinalDisease/TypeD";
import Card1 from "@/assets/components/pages/bstt/NeckDisc/section7/card1.svg";
import Card2 from "@/assets/components/pages/bstt/NeckDisc/section7/card2.svg";
import Card3 from "@/assets/components/pages/bstt/NeckDisc/section7/card3.svg";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [`우리의 치료가 `, <br key="1" className="mo" />, `특별한 이유`],
      color: `#fff`,
      align: "center",
    },
    pageTitleContent: {
      text: [`퇴행성 관절염, 조기 치료가 가장 중요합니다.`],
      color: `#fff`,
    },
    cardData: [
      {
        icon: <Card1 />,
        title: [`환자 맞춤형 치료`],
        desc: [
          `관절 손상 정도에 따른`,
          <br key="1" />,
          `
맞춤 프로토콜 적용`,
        ],
      },
      {
        icon: <Card2 />,
        title: [
          `수술 없이, 자연스럽게`,
          <br key="1" />,
          `
연골을 보호하고 기능을`,
          <br key="1" />,
          `
회복하는 치료법 제공`,
        ],
      },
      {
        icon: <Card3 />,
        title: [
          `단순한 통증 완화가 아니라,

`,
          <br key="1" />,
          `
관절 기능 회복을`,
          <br key="1" />,
          `
목표로 한 치료`,
        ],
      },
    ],
    bgPc: `/assets/components/pages/bstt/NeckDisc/section7/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/NeckDisc/section7/bg1_mo.png`,
  };

  return <TypeD {...data_} />;
}
