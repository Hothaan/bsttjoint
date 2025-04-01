import TypeC from "@/components/ui/treatment/TypeC";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          목디스크
        </span>,
        `란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `목디스크(경추 추간판 탈출증)는  
`,
        <span key="1" className="bold">
          목뼈(경추) 사이의 디스크(추간판)가 돌출되어 신경을 압박
        </span>,
        `하는 질환입니다.
`,
        <br key="1" className="pc" />,
        `스마트폰 사용 증가, 
구부정한 자세,잘못된 생활 습관 등이 원인이
되어 발생할 수 있습니다.`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/NeckDisc/section4/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/NeckDisc/section4/bg1_mo.png`,
    checkData: [
      {
        text: [
          `목이 뻐근하고, 어깨부터 팔까지 저린 증상이


`,
          <br key="1" />,
          `나타나는 것이 특징입니다.`,
        ],
      },
      {
        text: [
          `방치하면 신경 손상이 진행되어


`,
          <br key="1" />,
          `손과 팔의 감각이 둔해지고 근력이 약해질 수 있습니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
