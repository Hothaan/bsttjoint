import TypeH from "@/components/ui/treatment/TypeH";

export default function Section15() {
  const data_ = {
    imgPc: `/assets/components/pages/bstt/NeckDisc/section15/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/NeckDisc/section15/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`목디스크에 대한 `, <br key="1" className="mo" />, `오해와 진실`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`잘못된 정보로 인해 치료 시기를 놓치지 마세요!`],
      color: `#666666`,
      align: `left`,
    },
    cardData: [
      {
        title: `목이 아프면 그냥 쉬면 되지 않을까요?`,
        desc: [
          `목을 지나치게 사용하지 않는 것도 중요하지만, `,
          <br key="1" />,
          <span key="1" className="bold">
            적절한 치료 없이 방치하면 디스크가 더 악화
          </span>,
          `될 수 있습니다.`,
        ],
      },
      {
        title: `수술을 받아야만 치료가 되나요?`,
        desc: [
          `아닙니다. 조기에 치료하면 `,
          <span className="bold" key="1">
            비수술적 방법으로도 충분히 회복
          </span>,
          `할 수 있습니다.`,
        ],
      },
      {
        title: [
          `디스크가 튀어나왔으면 `,
          <br key="1" className="mo" />,
          `원래대로 돌아오지 않나요?`,
        ],
        desc: [
          `아닙니다. 탈출된 디스크가 `,
          <span key="1" className="bold">
            자연적으로 완전히
          </span>,
          <br key="1" className="mo" />,
          <span key="1" className="bold">
            회복되는 경우는 드뭅니다.
          </span>,
        ],
      },
    ],
  };

  return <TypeH {...data_} />;
}
