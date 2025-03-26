import TypeJ from "@/components/ui/jointDisease/TypeJ";
export default function Section12() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/JointDisease/section11/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/JointDisease/section11/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`튼튼마디 비수술치료를 하면 이런 점에서 좋습니다.`],
      color: `#000`,
      align: "center",
    },
    pageTitleContent: {
      text: [`아픈 관절, 당장 안아프게만 하면 과연 충분할까요?`],
      color: `#666666`,
      align: "center",
    },
    desc: [
      `보존적치료로 최대한 오래 쓰는 것이 좋습니다.`,
      <br key="1" className="mo" />,
      `내 관절 그대로 쓸수 있으면 고쳐서 쓰세요.`,
    ],
    cardData: [
      {
        title: `한약치료`,
        desc: [
          `스테로이드, 마약성진통제, 마취제 등의 합성약물이 없는`,
          <br key="1" />,
          `순수 천연 한약재를 사용한 치료`,
        ],
      },
      {
        title: `전신건강 회복 `,
        desc: [
          `건강에 부담주지 않고 치료를 하면서 전신건강과`,
          <br key="1" />,
          `자연치유력 회복`,
        ],
      },
      {
        title: `일상 생활`,
        desc: [
          `집중적인 치료 후 운동, 여행, 골프 등 일상생활 가능`,
          <br key="1" />,
          `(진행단계에 따라 상이)`,
        ],
      },
      {
        title: `평생 관리`,
        desc: [
          `일시적인 통증완화가 아니라, 관절의 항상성을 회복하여`,
          <br key="1" />,
          `장기적인 유지관리가 가능`,
        ],
      },
      {
        title: `비수술적 치료`,
        desc: [
          `비수술적 치료로서 돌이킬 수 없는 실패를 피할 수 있는`,
          <br key="1" />,
          `보존적 치료`,
        ],
      },
      {
        title: `희망적 대안`,
        desc: [
          `다른 방법으로는 더이상 치료가 되지 않는 상황에서 조차`,
          <br key="1" />,
          `많은 회복을 이뤄낸 또 하나의 가능성`,
        ],
      },
    ],
  };
  return <TypeJ {...data_} />;
}
