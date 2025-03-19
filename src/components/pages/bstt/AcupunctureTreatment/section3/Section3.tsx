import TypeC from "@/components/ui/treatment/TypeC";

export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          약침요법
        </span>,
        `이란?`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `약침요법(藥鍼療法)은 `,
        <span key="1" className="bold">
          한약에서 추출한 유효 성분을 정제하여 경혈(경락)에 직접 주입하는 치료법
        </span>,
        `입니다.`,
        <br key="1" className="pc" />,
        `즉, `,
        <span key="1" className="bold">
          침 치료와 한약 치료를 동시에 적용하여 치료 효과를 극대화하는 방법
        </span>,
        `으로, 통증을 빠르게 완화하고 신체의 자연 치유력을 높이는 데 탁월한 효과를 보입니다.`,
      ],
      color: `#444`,
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section3/treatment1_pc.png`,
    imgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section3/treatment1_mo.png`,
    checkData: [
      {
        text: [`한약을 먹는 것보다 신속하게 효과가 나타납니다.`],
      },
      {
        text: [
          `경혈을 자극하여 몸의 균형을 조절하고, 치료 반응을 극대화합니다.`,
        ],
      },
    ],
  };
  return <TypeC {...data_} />;
}
