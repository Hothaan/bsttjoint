import { useState } from "react";
import PageTitleDefault from "@/components/ui/pageTitle/PageTitleDefault";
import PageMenu from "@/components/ui/pageMenu/PageMenu";
import { menu_data } from "@/datas/menuData";
import Section1 from "@/components/pages/bstt/PhysicianHealthColumn/section1/Section1";
import ModalForm from "@/components/pages/bstt/PhysicianHealthColumn/section1/ModalForm";

export default function PhysicianHealthColumn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const depth1 = "병원소개";
  const pageTitleDefault_ = {
    imgPc: `/assets/components/pages/bstt/PhysicianHealthColumn/pageTitleDefault/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/PhysicianHealthColumn/pageTitleDefault/bg1_mo.png`,
    depth1: depth1,
    depth2: `주치의 칼럼`,
    desc: `strong-KNIE MEDICAL CENTER`,
    button: {
      text: "튼튼백세 건강칼럼 구독하기",
      link: "",
      onClick: () => setIsModalOpen((prev) => !prev),
    },
  };

  return (
    <>
      <PageTitleDefault {...pageTitleDefault_} />
      <PageMenu
        depth2={menu_data.filter((item) => item.depth1 === depth1)[0].depth2}
      />
      <Section1 />
      {isModalOpen && <ModalForm onClick={setIsModalOpen} />}
    </>
  );
}
