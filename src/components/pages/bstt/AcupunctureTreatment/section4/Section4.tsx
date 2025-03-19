import TypeD from "@/components/ui/treatment/TypeD";

export default function Section4() {
  const data_ = {
    sectionTitleSimple: {
      text: [`약침의 주요효능`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `약침 치료는 단순한 통증 완화가 아니라, 손상된 조직을 회복하는 치료입니다.`,
      ],
      color: `#666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section4/card1_pc.png`,
        imgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section4/card1_mo.png`,
        title: `염증 제거 및 통증 완화`,
        descList: [
          `신경과 근육 주변 염증 감소`,
          `급성·만성 통증 치료에 효과적`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section4/card2_pc.png`,
        imgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section4/card2_mo.png`,
        title: `혈액 순환 개선 및 면역력 증진`,
        descList: [
          `몸속 어혈 제거 및 기혈 순환 촉진`,
          `면역계 활성화로 염증 반응 조절`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section4/card3_pc.png`,
        imgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section4/card3_mo.png`,
        title: `조직 재생 및 기능 회복`,
        descList: [`연골 및 인대 재생 촉진`, `손상된 신경 및 근육 회복`],
      },
      {
        imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section4/card4_pc.png`,
        imgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section4/card4_mo.png`,
        title: `혈액 순환 개선 및 항노화 효과`,
        descList: [
          `혈액 순환 촉진으로 냉증, 손발 저림 개선`,
          `항산화 작용으로 노화를 늦추고, 피부 건강 증진`,
        ],
      },
    ],
  };
  return <TypeD {...data_} />;
}
