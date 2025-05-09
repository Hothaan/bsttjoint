import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/FrozenShoulder/section1/Section1";
import Section2 from "@/components/pages/bstt/FrozenShoulder/section2/Section2";
import Section3 from "@/components/pages/bstt/FrozenShoulder/section3/Section3";
import Section4 from "@/components/pages/bstt/FrozenShoulder/section4/Section4";
import Section5 from "@/components/pages/bstt/FrozenShoulder/section5/Section5";
import Section6 from "@/components/pages/bstt/FrozenShoulder/section6/Section6";
import Section7 from "@/components/pages/bstt/FrozenShoulder/section7/Section7";
import Section8 from "@/components/pages/bstt/FrozenShoulder/section8/Section8";
import Section9 from "@/components/pages/bstt/FrozenShoulder/section9/Section9";
import Section10 from "@/components/pages/bstt/FrozenShoulder/section10/Section10";
import Section11 from "@/components/pages/bstt/FrozenShoulder/section11/Section11";
import Section12 from "@/components/pages/bstt/FrozenShoulder/section12/Section12";
import Section13 from "@/components/pages/bstt/FrozenShoulder/section13/Section13";
import Section14 from "@/components/pages/bstt/FrozenShoulder/section14/Section14";
import Section15 from "@/components/pages/bstt/FrozenShoulder/section15/Section15";
import Section16 from "@/components/pages/bstt/FrozenShoulder/section16/Section16";
import Section17 from "@/components/pages/bstt/FrozenShoulder/section17/Section17";
import Section18 from "@/components/pages/bstt/FrozenShoulder/section18/Section18";
import Section19 from "@/components/pages/bstt/FrozenShoulder/section19/Section19";

export default function FrozenShoulder() {
  const depth1 = "관절질환";
  const depth2 = "오십견";
  const pageTitleDefault_ = {
    imgPc: `/assets/components/pages/bstt/FrozenShoulder/pageTitleDefault/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/FrozenShoulder/pageTitleDefault/bg1_mo.png`,
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
