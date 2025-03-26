import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/GreatRuptureCartilage/section1/Section1";
import Section2 from "@/components/pages/bstt/GreatRuptureCartilage/section2/Section2";
import Section3 from "@/components/pages/bstt/GreatRuptureCartilage/section3/Section3";
import Section4 from "@/components/pages/bstt/GreatRuptureCartilage/section4/Section4";
import Section5 from "@/components/pages/bstt/GreatRuptureCartilage/section5/Section5";
import Section6 from "@/components/pages/bstt/GreatRuptureCartilage/section6/Section6";
import Section7 from "@/components/pages/bstt/GreatRuptureCartilage/section7/Section7";
import Section8 from "@/components/pages/bstt/GreatRuptureCartilage/section8/Section8";
import Section9 from "@/components/pages/bstt/GreatRuptureCartilage/section9/Section9";
import Section10 from "@/components/pages/bstt/GreatRuptureCartilage/section10/Section10";
import Section11 from "@/components/pages/bstt/GreatRuptureCartilage/section11/Section11";
import Section12 from "@/components/pages/bstt/GreatRuptureCartilage/section12/Section12";
import Section13 from "@/components/pages/bstt/GreatRuptureCartilage/section13/Section13";
import Section14 from "@/components/pages/bstt/GreatRuptureCartilage/section14/Section14";
import Section15 from "@/components/pages/bstt/GreatRuptureCartilage/section15/Section15";
import Section16 from "@/components/pages/bstt/GreatRuptureCartilage/section16/Section16";
import Section17 from "@/components/pages/bstt/GreatRuptureCartilage/section17/Section17";
import Section18 from "@/components/pages/bstt/GreatRuptureCartilage/section18/Section18";
import Section19 from "@/components/pages/bstt/GreatRuptureCartilage/section19/Section19";

export default function GreatRuptureCartilage() {
  const depth1 = "관절질환";
  const depth2 = "연골인대파열";
  const pageTitleDefault_ = {
    imgPc: `/assets/components/pages/bstt/GreatRuptureCartilage/pageTitleDefault/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/GreatRuptureCartilage/pageTitleDefault/bg1_mo.png`,
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
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />
      <Section18 />
      <Section19 />
    </>
  );
}
