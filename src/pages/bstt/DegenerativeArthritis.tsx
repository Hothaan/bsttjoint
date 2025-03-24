import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/JointDisease/section1/Section1";
import Section2 from "@/components/pages/bstt/JointDisease/section2/Section2";
import Section3 from "@/components/pages/bstt/JointDisease/section3/Section3";
import Section4 from "@/components/pages/bstt/JointDisease/section4/Section4";
import Section5 from "@/components/pages/bstt/JointDisease/section5/Section5";
import Section6 from "@/components/pages/bstt/JointDisease/section6/Section6";
import Section7 from "@/components/pages/bstt/JointDisease/section7/Section7";
import Section8 from "@/components/pages/bstt/JointDisease/section8/Section8";
import Section9 from "@/components/pages/bstt/JointDisease/section9/Section9";
import Section10 from "@/components/pages/bstt/JointDisease/section10/Section10";
import Section11 from "@/components/pages/bstt/JointDisease/section11/Section11";
import Section12 from "@/components/pages/bstt/JointDisease/section12/Section12";
import Section13 from "@/components/pages/bstt/JointDisease/section13/Section13";
import Section14 from "@/components/pages/bstt/JointDisease/section14/Section14";
import Section15 from "@/components/pages/bstt/JointDisease/section15/Section15";
import Section16 from "@/components/pages/bstt/JointDisease/section16/Section16";
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
    </>
  );
}
