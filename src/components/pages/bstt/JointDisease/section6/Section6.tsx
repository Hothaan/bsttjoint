import TypeD from "@/components/ui/jointDisease/TypeD";

export default function Section6() {
  const data_ = {
    sectionTitleSimple: {
      text: [`관절질환 예후`],
      color: `#3C3C3C`,
      align: `center`,
    },
    PageTitleContent: {
      text: [`아픈 관절, 당장 안아프게만 하면 과연 충분할까요?`],
      color: "#666;",
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/JointDisease/section6/treatment1_pc.png`,
    imgMo: `/assets/components/pages/bstt/JointDisease/section6/treatment1_mo.png`,
  };
  return <TypeD {...data_} />;
}
