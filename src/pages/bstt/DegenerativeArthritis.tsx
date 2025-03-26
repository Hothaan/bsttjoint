import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/DegenerativeArthritis/section1/Section1";
import Section2 from "@/components/pages/bstt/DegenerativeArthritis/section2/Section2";
import Section3 from "@/components/pages/bstt/DegenerativeArthritis/section3/Section3";
import Section4 from "@/components/pages/bstt/DegenerativeArthritis/section4/Section4";
import Section5 from "@/components/pages/bstt/DegenerativeArthritis/section5/Section5";
import Section6 from "@/components/pages/bstt/DegenerativeArthritis/section6/Section6";
import Section7 from "@/components/pages/bstt/DegenerativeArthritis/section7/Section7";
import Section8 from "@/components/pages/bstt/DegenerativeArthritis/section8/Section8";
import Section9 from "@/components/pages/bstt/DegenerativeArthritis/section9/Section9";
import Section10 from "@/components/pages/bstt/DegenerativeArthritis/section10/Section10";
import Section11 from "@/components/pages/bstt/DegenerativeArthritis/section11/Section11";
import Section12 from "@/components/pages/bstt/DegenerativeArthritis/section12/Section12";
import Section13 from "@/components/pages/bstt/DegenerativeArthritis/section13/Section13";
import Section14 from "@/components/pages/bstt/DegenerativeArthritis/section14/Section14";
import Section15 from "@/components/pages/bstt/DegenerativeArthritis/section15/Section15";
import Section16 from "@/components/pages/bstt/DegenerativeArthritis/section16/Section16";
import Section17 from "@/components/pages/bstt/DegenerativeArthritis/section17/Section17";
import Section18 from "@/components/pages/bstt/DegenerativeArthritis/section18/Section18";
import Section19 from "@/components/pages/bstt/DegenerativeArthritis/section19/Section19";
import Section20 from "@/components/pages/bstt/DegenerativeArthritis/section20/Section20";
import Section21 from "@/components/pages/bstt/DegenerativeArthritis/section21/Section21";
import Section22 from "@/components/pages/bstt/DegenerativeArthritis/section22/Section22";
import Section23 from "@/components/pages/bstt/DegenerativeArthritis/section23/Section23";
import Section24 from "@/components/pages/bstt/DegenerativeArthritis/section24/Section24";
import Section25 from "@/components/pages/bstt/DegenerativeArthritis/section25/Section25";
import Section26 from "@/components/pages/bstt/DegenerativeArthritis/section26/Section26";
import Section27 from "@/components/pages/bstt/DegenerativeArthritis/section27/Section27";
import Section28 from "@/components/pages/bstt/DegenerativeArthritis/section28/Section28";
import Section29 from "@/components/pages/bstt/DegenerativeArthritis/section29/Section29";
import Section30 from "@/components/pages/bstt/DegenerativeArthritis/section30/Section30";
export default function DegenerativeArthritis() {
  const depth1 = "관절질환";
  const depth2 = "퇴행성관절염";
  const pageTitleDefault_ = {
    imgPc: `/assets/components/pages/bstt/DegenerativeArthritis/pageTitleDefault/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/DegenerativeArthritis/pageTitleDefault/bg1_mo.png`,
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
      <Section20 />
      <Section21 />
      <Section22 />
      <Section23 />
      <Section24 />
      <Section25 />
      <Section26 />
      <Section27 />
      <Section28 />
      <Section29 />
      <Section30 />
    </>
  );
}
