import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/WeightLoss/section1/Section1";
import Section2 from "@/components/pages/bstt/WeightLoss/section2/Section2";
import Section3 from "@/components/pages/bstt/WeightLoss/section3/Section3";
import Section4 from "@/components/pages/bstt/WeightLoss/section4/Section4";
import Section5 from "@/components/pages/bstt/WeightLoss/section5/Section5";
import Section6 from "@/components/pages/bstt/WeightLoss/section6/Section6";
import Section7 from "@/components/pages/bstt/WeightLoss/section7/Section7";
import Section8 from "@/components/pages/bstt/WeightLoss/section8/Section8";
import Section9 from "@/components/pages/bstt/WeightLoss/section9/Section9";
import Section10 from "@/components/pages/bstt/WeightLoss/section10/Section10";
import Section11 from "@/components/pages/bstt/WeightLoss/section11/Section11";

export default function WeightLoss() {
  const depth1 = "핵심치료";
  const depth2 = "체중감량";
  const pageTitleDefault_ = {
    imgPc: `/assets/components/pages/bstt/WeightLoss/pageTitleDefault/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/WeightLoss/pageTitleDefault/bg1_mo.png`,
    depth1: depth1,
    depth2: depth2,
    desc: `strong-KNIE MEDICAL CENTER`,
  };
  return (
    <>
      <PageTitleDefault {...pageTitleDefault_} />
      <PageMenu
        depth2={menu_data.filter((item) => item.depth1 === depth1)[0].depth2}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </>
  );
}
