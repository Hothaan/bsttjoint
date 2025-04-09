import TypeH from "@/components/ui/treatment/TypeH";

export default function Section8() {
  const data_ = {
    imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section8/bg1_pc.png`,
    imgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section8/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`약침요법에 대한 오해와 진실`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`잘못된 정보로 인해 효과적인 치료 기회를 놓치지 마세요!`],
      color: `#666666`,
      align: `left`,
    },
    cardData: [
      {
        title: `약침은 일반 침과 같은가요?`,
        desc: [
          `아닙니다. 약침은 단순한 침 치료가 아니라 `,
          <br key="1" className="mo" />,
          <span key="1" className="bold">
            한약 성분이 포함된 침 치료
          </span>,
          `입니다.`,
        ],
      },
      {
        title: `일반 약물 주사와 차이가 있나요?`,
        desc: [
          `네. 일반 주사는 통증을 일시적으로 완화하지만,`,
          <br key="1" />,
          `약침은 `,
          <span key="1" className="bold">
            염증 치료와 조직 재생까지 돕습니다.
          </span>,
        ],
      },
      {
        title: `한 번만 맞으면 효과가 있나요?`,
        desc: [
          `개인의 상태에 따라 치료 횟수가 달라질 수 있으며, `,
          <br key="1" className="mo" />,
          <span key="1" className="bold">
            꾸준한 치료가 중요합니다.
          </span>,
        ],
      },
    ],
  };

  return <TypeH {...data_} />;
}
