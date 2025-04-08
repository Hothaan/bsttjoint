"use client";
import TypeM from "@/components/ui/treatment/TypeM";
export default function Section7() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section7/bg1_pc.png`,
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          허리디스크
        </span>,
        `를 회복하는 최선의 선택`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료를 통해 척추 신경 압박을 줄이고, 보행 능력을 회복할 수 있습니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/LumbarDisc/section9/card1_pc.png`,
        imgMo: ``,
        title: `염증 완화 및 생활 습관 개선`,
        content: [
          [
            `신경 염증을 줄이고, 허리 주변 조직을`,
            <br key="1" className="pc" />,
            `부드럽게 하는 치료 진행`,
          ],
          [
            `올바른 자세 유지 및 허리에 부담을 줄이는`,
            <br key="1" className="pc" />,
            `생활 습관 개선`,
          ],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/LumbarDisc/section9/card2_pc.png`,
        imgMo: ``,
        title: `물리치료 & 재활 운동`,
        content: [
          [
            `허리 근력을 강화하고, 척추의 유연성을 `,
            <br key="1" className="pc" />,
            `회복하는 운동 진행`,
          ],
          [
            `- 신경 압박을 완화하고, 보행 능력을 향상하는 `,
            <br key="1" className="pc" />,
            `재활치료`,
          ],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/LumbarDisc/section9/card3_pc.png`,
        imgMo: ``,
        title: `맞춤형 비수술 치료 프로그램`,
        content: [
          [`개개인의 증상과 진행 정도에 따른 맞춤 치료 적용`],
          [`척추 기능 회복과 통증 완화 치료 병행`],
        ],
      },
    ],
  };

  return <TypeM {...data_} />;
}
