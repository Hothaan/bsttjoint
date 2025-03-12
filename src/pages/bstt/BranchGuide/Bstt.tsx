import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/BranchGuide/Bstt/section1/Section1";
import Section2 from "@/components/pages/bstt/BranchGuide/Bstt/section2/Section2";
import Section3 from "@/components/pages/bstt/BranchGuide/Bstt/section3/Section3";
import Section4 from "@/components/pages/bstt/BranchGuide/Bstt/section4/Section4";

export default function Bstt() {
  const depth1 = "병원소개";
  const pageTitleDefault_ = {
    imgPc: `/assets/components/pages/bstt/BranchGuide/Bstt/pageTitleDefault/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/BranchGuide/Bstt/pageTitleDefault/bg1_mo.png`,
    depth1: depth1,
    depth2: `지점안내`,
    depth3: `부산서면점`,
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
    </>
  );
}
