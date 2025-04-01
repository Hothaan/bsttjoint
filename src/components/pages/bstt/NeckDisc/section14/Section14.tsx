"use client";
import TypeE from "@/components/ui/spinalDisease/TypeE";
export default function Section14() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `목디스크를 회복하는 `,
        <br key="1" className="mo" />,
        `최선의 선택`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료를 통해 목디스크의 신경 압박을 줄이고, 손과 팔의 기능을 회복할 수 있습니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/NeckDisc/section14/card1_pc.png`,
        imgMo: `/assets/components/pages/bstt/NeckDisc/section14/card1_mo.png`,
        title: [`염증 완화 및 생활 습관 개선`],
        content: [
          [`신경 염증을 줄이고, 목 주변 조직을 부드럽게 하는 치료 진행`],
          [`올바른 자세 유지 및 목에 부담을 줄이는 생활 습관 개선`],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/NeckDisc/section14/card2_pc.png`,
        imgMo: `/assets/components/pages/bstt/NeckDisc/section14/card2_mo.png`,
        title: [`물리치료 & 재활 운동`],
        content: [
          [`목 근력을 강화하고, 경추의 유연성을 회복하는 운동 진행 `],
          [`신경 압박을 완화하고, 통증을 줄이는 재활 치료`],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/NeckDisc/section14/card3_pc.png`,
        imgMo: `/assets/components/pages/bstt/NeckDisc/section14/card3_mo.png`,
        title: [`맞춤형 비수술 치료 프로그램`],
        content: [
          [`개개인의 증상과 진행 정도에 따른 맞춤 치료 적용`],
          [`척추 기능 회복과 통증 완화 치료 병행`],
        ],
      },
    ],
  };

  return <TypeE {...data_} />;
}
