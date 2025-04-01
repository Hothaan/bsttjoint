"use client";
import TypeE from "@/components/ui/spinalDisease/TypeE";
export default function Section14() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          척추측만증
        </span>,
        `을 교정하는 `,
        <br key="1" className="mo" />,
        `최선의 선택`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `비수술 치료를 통해 척추측만증을 교정하고, 척추 건강을 유지할 수 있습니다.`,
      ],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/ScoliosisSpine/section14/card1_pc.png`,
        imgMo: `/assets/components/pages/bstt/ScoliosisSpine/section14/card1_mo.png`,
        title: [`척추 정렬 교정 및 운동 치료`],
        content: [
          [`척추를 올바른 정렬로 맞추고, 근육 균형을 잡아주는 치료 진행`],
          [`척추 주변 근육을 강화하여 변형 진행 방지`],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/ScoliosisSpine/section14/card2_pc.png`,
        imgMo: `/assets/components/pages/bstt/ScoliosisSpine/section14/card2_mo.png`,
        title: [`생활 습관 교정`],
        content: [
          [`잘못된 자세 교정 및 허리에 부담을 줄이는 생활 습관 개선`],
          [`바른 자세를 유지하는 습관 형성`],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/ScoliosisSpine/section14/card3_pc.png`,
        imgMo: `/assets/components/pages/bstt/ScoliosisSpine/section14/card3_mo.png`,
        title: [`맞춤형 비수술 치료 프로그램`],
        content: [
          [`개인의 척추 변형 정도와 원인에 따른 맞춤 치료 적용`],
          [`척추 기능 회복과 통증 완화 치료 병행`],
        ],
      },
    ],
  };

  return <TypeE {...data_} />;
}
