import TypeR from "@/components/ui/jointDisease/TypeR";
import Card1 from "@/assets/components/pages/bstt/DegenerativeArthritis/section11/card1.svg";
import Card2 from "@/assets/components/pages/bstt/DegenerativeArthritis/section11/card2.svg";
import Card3 from "@/assets/components/pages/bstt/DegenerativeArthritis/section11/card3.svg";
import Card4 from "@/assets/components/pages/bstt/DegenerativeArthritis/section11/card4.svg";
import Card5 from "@/assets/components/pages/bstt/DegenerativeArthritis/section11/card5.svg";
import Card6 from "@/assets/components/pages/bstt/DegenerativeArthritis/section11/card6.svg";

export default function Section11() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/DegenerativeArthritis/section11/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/DegenerativeArthritis/section11/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`나는 어디까지 진행됐을까요?`],
      color: "#131313",
      align: "center",
    },
    cardData: [
      {
        icon: <Card1 />,
        title: `불안정감`,
        desc: [`관절이 불안정하고 삐그덕거리는 느낌`],
      },
      {
        icon: <Card2 />,
        title: `삼출`,
        desc: [`관절에 물이차서 붓고, 아프고, 심한 경우 열감`],
      },
      { icon: <Card3 />, title: `뻣뻣함`, desc: [`관절이 무겁고 뻣뻣한 느낌`] },
      {
        icon: <Card4 />,
        title: `안정시 통증`,
        desc: [`하루종일 밤새도록 욱신거리고 콕콕 쑤시는 통증`],
      },
      {
        icon: <Card5 />,
        title: `활동시 통증`,
        desc: [`활동시 관절이 뜨끔하면서 날카로운 통증 발생`],
      },
      { icon: <Card6 />, title: `퇴행`, desc: [`관절의 변형, 보행능력 감소`] },
    ],
    desc: [
      `이렇게 장기적으로 진행되기 때문에 `,
      <span className="bold" key="1">
        “퇴행성”
      </span>,
      ` 관절염입니다.`,
    ],
  };
  return <TypeR {...data_} />;
}
