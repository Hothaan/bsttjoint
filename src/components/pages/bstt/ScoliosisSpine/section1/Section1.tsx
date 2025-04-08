import TypeF from "@/components/ui/spinalDisease/TypeF";

export default function Section1() {
  const data_ = {
    sectionTitleDesc: {
      titleColor: `#018C3B`,
      descColor: `#131313`,
      title: [`Why problem`],
      desc: [
        `척추측만증, 단순한 `,
        <br key="1" className="mo" />,
        `체형 통증이`,
        <br key="1" className="pc" />,
        `아닙니다`,
      ],
    },
    desc: [
      `척추측만증, 자세가 아니라 `,
      <span key="1" className="bold">
        척추가 휘어진 것입니다
      </span>,
    ],
    checkList: [
      `어깨 높이가 다르고, 한쪽이 더 올라가 보인다.`,
      `골반이 한쪽으로 기울어져 있다.`,
      `오래 앉아 있으면 허리가 쉽게 피로해진다.`,
      `허리와 등 근육이 뻐근하고, 자주 결린다.`,
      `방을 메면 한쪽이 더 쏠리는 느낌이 든다.`,
    ],
    captionList: [
      ` 이 중 하나라도 해당된다면, 척추측만증을 의심해야 합니다.
`,
      ` 방치하면 허리 통증뿐만 아니라 전신 불균형과 기능 저하로 이어질 수 있습니다.`,
    ],
    bgPc: `/assets/components/pages/bstt/ScoliosisSpine/section1/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/ScoliosisSpine/section1/bg1_mo.png`,
  };

  return <TypeF {...data_} />;
}
