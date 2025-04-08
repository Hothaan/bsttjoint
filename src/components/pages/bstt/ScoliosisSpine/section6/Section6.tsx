import TypeD from "@/components/ui/jointDisease/TypeD";

export default function Section6() {
  const data_ = {
    sectionTitleSimple: {
      text: [`왜 척추측만증이 `, <br key="1" className="mo" />, `생길까요?`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `척추측만증은 `,
        <span key="1" className="bold">
          조기에 치료할수록 효과적
        </span>,
        `이며,`,
        <br key="1" />,
        `성인이 되어서도 진행될 경우 `,
        <br key="1" className="mo" />,
        `통증과 신체 불균형이 심해질 수 있습니다.`,
      ],
      color: "#666;",
      align: "center",
    },
    bgColor: `#EAF5EF`,
    imgPc: `/assets/components/pages/bstt/ScoliosisSpine/section6/treatment1_pc.png`,
    imgMo: `/assets/components/pages/bstt/ScoliosisSpine/section6/treatment1_mo.png`,
    paddingBottom: false,
  };
  return <TypeD {...data_} />;
}
