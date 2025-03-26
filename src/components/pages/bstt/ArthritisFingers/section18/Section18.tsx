import TypeU from "@/components/ui/jointDisease/TypeU";

export default function Section18() {
  const data_ = {
    sectionTitleSimple: {
      text: [`치료 후 변화된 환자 이야기`],
      color: "#3c3c3c",
      align: "left",
    },
    pageTitleContent: {
      text: [
        `“손가락이 자주 붓고 통증이 있어서 병원을 찾았어요.`,
        <br key="1" />,
        `약물치료만 받다가 효과가 없어서 비수술 치료를 선택했어요.`,
        <br key="1" />,
        `약침과 백절탕 치료를 병행하면서 관절이 점점 부드러워지고,`,
        <br key="1" />,
        `지금은 오래 움직여도 불편함 없이 생활할 수 있습니다!”`,
      ],
      color: "#3c3c3c",
      align: "left",
    },
    imgCircle: `/assets/components/pages/bstt/ArthritisFingers/section18/circle1_pc.png`,
    bg: `/assets/components/pages/bstt/ArthritisFingers/section18/bg1_pc.png`,
  };
  return <TypeU {...data_} />;
}
