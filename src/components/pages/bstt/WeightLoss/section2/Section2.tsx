import TypeB from "@/components/ui/treatment/TypeB";

export default function Section2() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/WeightLoss/section2/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/WeightLoss/section2/bg1_mo.png`,
    title: [
      <span key="1" className="green">
        체중 감량,
      </span>,
      <br key="1" className="mo" />,
      ` 건강한 몸을 위한 최적의 방법`,
    ],
    desc: [
      `이 중 하나라도 해당된다면, 단순한 다이어트가 아닌 체질 개선이 필요합니다.`,
    ],
    cardData: [
      {
        img: `/assets/components/pages/bstt/WeightLoss/section2/card1_pc.png`,
        desc: [
          `여러 번 다이어트를 시도했지만`,
          <br key="1" />,
          `실패를 반복한다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/WeightLoss/section2/card2_pc.png`,
        desc: [
          `운동과 식단 조절을 해도`,
          <br key="1" />,
          `살이 잘 빠지지 않는다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/WeightLoss/section2/card3_pc.png`,
        desc: [` 다이어트 후 요요현상이`, <br key="1" />, `반복된다.`],
      },

      {
        img: `/assets/components/pages/bstt/WeightLoss/section2/card4_pc.png`,
        desc: [
          `배는 쉽게 나오는데 팔뚝이나`,
          <br key="1" />,
          `허벅지는 빠지지 않는다.`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/WeightLoss/section2/card5_pc.png`,
        desc: [`체력이 저하되고`, <br key="1" />, `쉽게 피로를 느낀다.`],
      },
    ],
    caption: [
      `건강한 체중 감량을 위해서는 단순한 칼로리 조절이 아닌 근본적인 접근이 중요합니다.`,
    ],
  };
  return <TypeB {...data_} />;
}
