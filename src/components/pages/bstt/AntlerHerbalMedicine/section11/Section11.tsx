import TypeK from "@/components/ui/treatment/TypeK";

export default function Section11() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section11/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section11/bg1_mo.png`,
    small: [`지금 바로 녹용한약을 시작하세요!`],
    big: [`기력을 회복하고`, <br key="1" />, `면역력을 높이고 싶다면?`],
  };
  return <TypeK {...data_} />;
}
