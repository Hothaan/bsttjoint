import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/FrequentlyAskedQuestions/section1/Section1";

export default function FrequentlyAskedQuestions() {
  const depth1 = "병원소개";
  const pageTitleDefault_ = {
    imgPc: `/assets/components/pages/bstt/FrequentlyAskedQuestions/pageTitleDefault/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/FrequentlyAskedQuestions/pageTitleDefault/bg1_mo.png`,
    depth1: depth1,
    depth2: `자주묻는 질문`,
    desc: `strong-KNIE MEDICAL CENTER`,
  };
  return (
    <>
      <PageTitleDefault {...pageTitleDefault_} />
      <PageMenu
        depth2={menu_data.filter((item) => item.depth1 === depth1)[0].depth2}
      />
      <Section1 />
    </>
  );
}
