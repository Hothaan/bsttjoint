import TypeO from "@/components/ui/jointDisease/TypeO";
export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `무릎이 불편하시다면`,
        <br key="1" className="mo" />,
        ` 다음 중 해당하는 것을 골라보세요`,
      ],
      color: "#3C3C3C;",
      align: "center",
    },
    cardData: [
      {
        text: [
          `무릎이 점점 약해지고 불안정한`,
          <br key="1" className="pc" />,
          `느낌이 든다.`,
        ],
      },
      {
        text: [
          `통증때문에 마음대로 다니는데`,
          <br key="1" className="pc" />,
          `지장이 있다.`,
        ],
      },
      {
        text: [
          `치료를 받아도 그때 뿐이고,`,
          <br key="1" className="pc" />,
          `안 받으면 곧 재발한다.`,
        ],
      },
      {
        text: [
          `증상이 갈수록 심해지고,`,
          <br key="1" className="pc" />,
          `치료효과가 점저 없어진다.`,
        ],
      },
      {
        text: [
          `밤이 되면 통증으로 몸을 뒤척이고,`,
          <br key="1" className="pc" />,
          `우울감을 느낀다`,
        ],
      },
      {
        text: [
          `아파서 걷기가 싫고,`,
          <br key="1" className="pc" />,
          `전신건강이 점점 악화된다.`,
        ],
      },
    ],
    quote: [
      `” 치료를 받는데도 `,
      <span key="1" className="green big">
        왜
      </span>,
      ` 이렇게`,
      <br key="1" className="mo" />,
      ,
      ` 되는 것일까요? ”`,
    ],
  };
  return <TypeO {...data_} />;
}
