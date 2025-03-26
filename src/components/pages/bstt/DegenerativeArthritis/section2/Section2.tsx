import TypeC from "@/components/ui/treatment/TypeC";

export default function Section2() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `무릎통증을 유발하는 `,
        <br key="1" className="mo" />,
        <span className="green" key="1">
          슬개골연골연화증
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section3/treatment1_pc.png`,
    imgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section3/treatment1_mo.png`,
    checkData: [
      {
        text: [
          `단순한 노화가 아니라,`,
          <br key="1" className="mo" />,
          `적극적인 치료와 관리가 필요한 질환입니다.`,
        ],
      },
      {
        text: [
          `조기에 치료할수록 연골 손상을 막고,`,
          <br key="1" className="mo" />,
          `건강한 관절을 유지할 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
