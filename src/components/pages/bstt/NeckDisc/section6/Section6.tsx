import TypeD from "@/components/ui/jointDisease/TypeD";

export default function Section6() {
  const data_ = {
    sectionTitleSimple: {
      text: [`왜 목디스크가 생길까요?`],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [
        `목디스크는 단순한 피로가 아니라, `,
        <br key="1" className="mo" />,
        <span key="1" className="bold">
          신경 압박과 척추 정렬 문제
        </span>,
        `에서 비롯됩니다.`,
        <br key="1" />,
        `올바른 치료와 생활 습관 개선이 필요합니다.`,
      ],
      color: "#666;",
      align: "center",
    },
    bgColor: `#EAF5EF`,
    imgPc: `/assets/components/pages/bstt/NeckDisc/section6/treatment1_pc.png`,
    imgMo: `/assets/components/pages/bstt/NeckDisc/section6/treatment1_mo.png`,
    paddingBottom: false,
  };
  return <TypeD {...data_} />;
}
