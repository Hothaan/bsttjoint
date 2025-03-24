import TypeD from "@/components/ui/treatment/TypeD";

export default function Section4() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          체중 감량의 핵심,
        </span>,
        ` 체질 개선이 우선입니다`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `체중 감량은 단순한 체중 숫자를 줄이는 것이 아니라, 건강한 몸 상태를 유지하면서 지방을 감량하는 것이 중요합니다.`,
      ],
      color: `#666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/WeightLoss/section4/card1_pc.png`,
        imgMo: `/assets/components/pages/bstt/WeightLoss/section4/card1_mo.png`,
        title: `염신진대사 활성화 및 지방 연소 촉진`,
        descList: [
          `기초대사량을 높여 지방이 연소되는 체질로 변화`,
          `체온을 높이고 혈액순환을 원활하게 만들어 대사 개선`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/WeightLoss/section4/card2_pc.png`,
        imgMo: `/assets/components/pages/bstt/WeightLoss/section4/card2_mo.png`,
        title: `호르몬 균형 회복`,
        descList: [
          `인슐린 저항성을 개선하여 지방 축적을 억제`,
          `갑상선 기능을 활성화하여 기초대사량 증가`,
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/WeightLoss/section4/card3_pc.png`,
        imgMo: `/assets/components/pages/bstt/WeightLoss/section4/card3_mo.png`,
        title: `지방 분해 및 노폐물 배출`,
        descList: [
          `체내 독소와 노폐물을 배출하여 지방 연소 촉진`,
          `몸속 염증을 줄이고 지방 세포 크기를 감소`,
        ],
      },
    ],
  };
  return <TypeD {...data_} />;
}
