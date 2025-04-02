import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/TtTv/section1/Section1";
export default function TtTv() {
  const depth1 = "병원소개";
  const pageTitleDefault_ = {
    imgPc: `/assets/components/pages/bstt/TtTv/pageTitleDefault/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/TtTv/pageTitleDefault/bg1_mo.png`,
    depth1: depth1,
    depth2: `튼튼백세TV`,
    desc: `strong-KNIE MEDICAL CENTER`,
    button: {
      text: "튼튼백세 유튜브알림 구독하기",
      link: "",
      onClick: () => {
        window.open(`https://www.youtube.com/@ttjoint`);
      },
    },
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
