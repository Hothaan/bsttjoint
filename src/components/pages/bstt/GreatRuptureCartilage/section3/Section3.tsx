import TypeC from "@/components/ui/treatment/TypeC";

export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          연골·인대 파열
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `연골과 인대는 관절의 움직임을 원활하게 하고, 충격을 흡수하는 중요한 조직입니다. 하지만 외상, 반복적인 움직임, 퇴행성 변화 등의 원인으로 손상될 수 있습니다.`,
        <br key="1" className="pc" />,
        `한 번 손상된 연골과 인대는 자연적으로 회복되기 어렵고, 방치할 경우 만성 통증과 관절 기능 저하로 이어질 수 있습니다.`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/ArthritisFingers/section7/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/ArthritisFingers/section7/bg1_mo.png`,
    checkData: [
      {
        text: [
          `연골과 인대는 혈액 공급이 원활하지 않아,`,
          <br key="1" />,
          `손상되면 자연 회복이 어렵습니다.`,
        ],
      },
      {
        text: [
          `적절한 치료가 없으면 관절이 불안정해지고,`,
          <br key="1" />,
          `추가적인 손상이 발생할 수 있습니다.`,
        ],
      },
    ],
    checkList: {
      title: `주로 발생하는 부위`,
      data: [
        {
          title: `무릎 관절`,
          desc: [
            `전방 십자인대 파열, 
`,
            <br key="1" className="mo" />,
            `반월상 연골판 손상`,
          ],
        },
        {
          title: `발목 관절`,
          desc: [`인대 염좌, 연골 손상`],
        },
        {
          title: `어깨 관절`,
          desc: [`회전근개 파열, 탈구`],
        },
        {
          title: `손목 관절`,
          desc: [
            `삼각섬유연골 `,
            <br key="1" className="mo" />,
            `복합체(TFCC) 손상`,
          ],
        },
      ],
    },
  };
  return <TypeC {...data_} />;
}
