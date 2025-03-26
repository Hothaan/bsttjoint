"use client";
import TypeP from "@/components/ui/treatment/TypeP";
export default function Section14() {
  const data_ = {
    sectionTitleSimple: {
      text: [`우리의 치료가 특별한 이유`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`퇴행성 관절염, 조기 치료가 가장 중요합니다.`],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section10/card1_pc.png`,
        imgMo: `/assets/components/pages/bstt/GreatRuptureCartilage/section10/card1_mo.png`,
        title: [
          `환자 맞춤형 치료,
 `,
          <br key="1" />,
          ` 관절 손상 정도에 따른 `,
          <br key="1" className="mo" />,
          `맞춤 프로토콜 적용`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section10/card2_pc.png`,
        imgMo: `/assets/components/pages/bstt/GreatRuptureCartilage/section10/card2_mo.png`,
        title: [
          `수술 없이 자연스럽게 `,
          <br key="1" className="mo" />,
          `연골을 보호하고, `,
          <br key="1" />,
          `기능을 회복하는 치료법 제공,`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/section10/card3_pc.png`,
        imgMo: `/assets/components/pages/bstt/GreatRuptureCartilage/section10/card3_mo.png`,
        title: [
          `단순한 통증 완화가 아닌,`,
          <br key="1" />,
          ` 관절 기능 회복을 `,
          <br key="1" className="mo" />,
          `목표로 한 치료`,
        ],
      },
    ],
  };

  return <TypeP {...data_} />;
}
