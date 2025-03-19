import TypeD from "@/components/ui/treatment/TypeD";

export default function Section4() {
  const data_ = {
    sectionTitleSimple: {
      text: [`녹용의 주요효능`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `녹용한약은 몸을 구성하는 핵심 기능을 회복하고, 활력을 되찾아주는 역할을 합니다.`,
      ],
      color: `#666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section4/card1_pc.png`,
        imgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section4/card1_mo.png`,
        title: `면역력 증진 및 체력 보강`,
        descList: [
          `혈액 순환을 촉진하여 피로를 줄이고 활력을 증가`,
          `감기, 만성 피로, 면역 저하로 인한 질환 예방`,
          `수술 후 회복 속도를 높이고 체력을 보충`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section4/card2_pc.png`,
        imgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section4/card2_mo.png`,
        title: `관절 및 뼈 건강 강화`,
        descList: [
          `연골과 뼈 조직을 강화하여 골다공증 예방`,
          `관절의 염증을 줄이고 퇴행성 관절염 완화`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section4/card3_pc.png`,
        imgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section4/card3_mo.png`,
        title: `신경 안정 및 정신 건강 개선`,
        descList: [`스트레스 완화 및 불면증 개선`, `기억력 및 집중력 향상`],
      },
      {
        imgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section4/card4_pc.png`,
        imgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section4/card4_mo.png`,
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
