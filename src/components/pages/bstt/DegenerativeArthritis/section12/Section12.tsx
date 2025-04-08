import TypeD from "@/components/ui/jointDisease/TypeD";

export default function Section12() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span className="green" key="1">
          퇴행성 관절염
        </span>,
        `이 오는 `,
        <br key="1" className="mo" />,
        `진짜 원인은 무엇일까요?`,
      ],
      color: "#131313",
      align: "center",
    },
    imgPc: `/assets/components/pages/bstt/DegenerativeArthritis/section12/img1_pc.png`,
    imgMo: `/assets/components/pages/bstt/DegenerativeArthritis/section12/img1_mo.png`,
    desc: [
      `원인이 개선되지 않으면 아무리 통증치료를 해도 계속 재발하면서`,
      <br key="1" />,
      `
결국 관절을 사용하지 못할 정도로 망가집니다.`,
    ],
    bgColor: "#EAF5EF",
  };
  return <TypeD {...data_} />;
}
