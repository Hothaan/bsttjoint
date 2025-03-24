import TypeD from "@/components/ui/jointDisease/TypeD";

export default function Section4() {
  const data_ = {
    sectionTitleSimple: {
      text: [`대표적인 관절질환`],
      color: `#3C3C3C`,
      align: `center`,
    },
    imgPc: `/assets/components/pages/bstt/JointDisease/section4/treatment1_pc.png`,
    imgMo: `/assets/components/pages/bstt/JointDisease/section4/treatment1_mo.png`,
  };
  return <TypeD {...data_} />;
}
