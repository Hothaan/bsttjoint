import TypeM from "@/components/ui/treatment/TypeM";
export default function Section7() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section7/bg1_pc.png`,
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          약침요법
        </span>,
        `이 특별한 이유`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`비수술 치료로 근본적인 문제 해결이 가능합니다.`],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section7/card1_pc.png`,
        imgMo: ``,
        title: `신속한 치료 효과`,
        content: [
          [
            `한약 성분이 신경과 근육에 직접 전달되어`,
            <br key="1" className="pc" />,
            `   빠른 치료 가능`,
          ],
          [`통증과 염증을 단시간 내 완화`],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section7/card2_pc.png`,
        imgMo: ``,
        title: `부작용이 적고 안전한 치료`,
        content: [
          [`화학 성분 없이, 자연 유래 한약을 사용`],
          [`장기간 복용이 부담스러운 약물 치료의 대안`],
        ],
      },
      {
        imgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section7/card3_pc.png`,
        imgMo: ``,
        title: `근본적인 문제 해결`,
        content: [
          [
            `증상 완화뿐만 아니라 `,
            <span key="1" className="bold">
              조직 재생과 기능 회복
            </span>,
            `까지 가능`,
          ],
          [
            `면역 조절을 통해 `,
            <span key="1" className="bold">
              재발 방지
            </span>,
          ],
        ],
      },
    ],
  };

  return <TypeM {...data_} />;
}
