import TypeI from "@/components/ui/treatment/TypeI";
export default function Section9() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section9/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section9/bg1_mo.png`,
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          녹용한약,
        </span>,
        ` 건강한 몸을 위한 선택`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },

    circleData: [
      {
        desc: [
          `단순한 보양이 아니라`,
          <br key="1" />,
          `체내 기능을 최적화하는`,
          <br key="1" />,
          `한약입니다.`,
        ],
      },
      {
        desc: [
          ` 면역력과 체력을 동시에`,
          <br key="1" />,
          `회복할 수 있습니다.`,
        ],
      },
      {
        desc: [`체질에 맞춘 맞춤형`, <br key="1" />, `처방이 중요합니다.`],
      },
    ],
    desc: [`녹용한약, 건강을 지키는 최적의 방법입니다.`],
  };

  return <TypeI {...data_} />;
}
