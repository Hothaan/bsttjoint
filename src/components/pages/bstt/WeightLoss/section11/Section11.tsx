import TypeK from "@/components/ui/treatment/TypeK";

export default function Section11() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/WeightLoss/section11/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/WeightLoss/section11/bg1_mo.png`,
    small: [`지금 바로 녹용한약을 시작하세요!`],
    big: [
      `체중감량, 무리하지 않고 `,
      <br key="1" className="mo" />,
      `건강하게!`,
      <br key="1" />,
      `지금 바로 시작하세요!`,
    ],
  };
  return <TypeK {...data_} />;
}
