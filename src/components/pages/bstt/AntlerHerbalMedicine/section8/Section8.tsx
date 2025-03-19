import TypeH from "@/components/ui/treatment/TypeH";

export default function Section8() {
  const data_ = {
    imgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section8/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section8/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`녹용한약에 대한 오해와 진실`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`잘못된 정보로 인해 건강 회복의 기회를 놓치지 마세요!`],
      color: `#666666`,
      align: `left`,
    },
    cardData: [
      {
        title: `녹용한약은 남성들에게만 좋은 거 아닌가요?`,
        desc: [
          `아닙니다. 녹용은 남녀노소 모두에게 도움이 됩니다.`,
          <br key="1" className="pc" />,
          `여성들의 `,
          <span key="1" className="bold">
            갱년기 건강 관리와 기력 회복
          </span>,
          `에도 효과적입니다.`,
        ],
      },
      {
        title: `한 번 먹으면 계속 먹어야 하나요?`,
        desc: [
          `아닙니다.`,
          `여성들의 `,
          <span key="1" className="bold">
            적절한 기간 동안 복용한 후, 상태에 맞춰 조절
          </span>,
          `에도 효과적입니다.`,
        ],
      },
      {
        title: `열이 많은 사람은 먹으면 안 되나요?`,
        desc: [
          <span key="1" className="bold">
            체질에 맞게 조절된 처방을 받으면 누구나 복용
          </span>,
          ` 가능합니다.`,
        ],
      },
    ],
  };

  return <TypeH {...data_} />;
}
