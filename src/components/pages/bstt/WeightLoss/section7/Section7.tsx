"use client";
import TypeP from "@/components/ui/treatment/TypeP";
import TypeG from "@/components/ui/treatment/TypeG";
import Card1 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card1.svg";
import Card2 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card2.svg";
import Card3 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card3.svg";
import TypeM from "@/components/ui/treatment/TypeM";
export default function Section7() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `건강한`,
        <span key="1" className="green">
          체중 감량
        </span>,
        `의 최선의 선택`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`비수술 치료를 통해 안전하게 체중 감량이 가능합니다.`],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/WeightLoss/section7/card1_pc.png`,
        imgMo: `/assets/components/pages/bstt/WeightLoss/section7/card1_mo.png`,
        title: `대사 활성화 및 생활 습관 개선`,
        content: [
          `신진대사를 높여 지방이 쉽게 연소될 수 있도록 조절`,
          `올바른 식습관과 생활 습관 개선을 통한 체질 개선`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/WeightLoss/section7/card2_pc.png`,
        imgMo: `/assets/components/pages/bstt/WeightLoss/section7/card2_mo.png`,
        title: `운동 요법 & 근육 강화`,
        content: [
          `무리한 운동이 아닌 체지방을 효과적으로 감량하는 운동 진행`,
          `근육량을 유지하면서 건강한 감량 유도`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/WeightLoss/section7/card3_pc.png`,
        imgMo: `/assets/components/pages/bstt/WeightLoss/section7/card3_mo.png`,
        title: `맞춤형 체중 감량 프로그램`,
        content: [
          `개인의 체질과 건강 상태에 맞춘 감량 방법 적용`,
          `신체 밸런스를 유지하며 장기적으로 체중을 조절할 수 있도록 도움`,
        ],
      },
    ],
  };

  return <TypeP {...data_} />;
}
