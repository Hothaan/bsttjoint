import TypeO from "@/components/ui/jointDisease/TypeO";
export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        `손가락이 불편하시다면, `,
        <br key="1" className="mo" />,
        `다음 중 해당하는 증상이 있나요?`,
      ],
      color: "#3C3C3C;",
      align: "center",
    },
    pageTitleContent: {
      text: [
        `이 중 하나라도 해당된다면, 손가락 관절염을 의심해야 합니다. 손가락 관절은 많이 사용할수록 손상이 진행되므로 빠른 치료가 필요합니다.`,
      ],
      color: "#444;",
      align: "center",
    },
    cardData: [
      {
        text: [
          `손가락 마디가 붓고,
`,
          <br key="1" className="pc" />,
          `아침에 뻣뻣한 느낌이 든다.`,
        ],
      },
      {
        text: [
          `손을 움직일 때 관절에서
`,
          <br key="1" className="pc" />,
          `‘뚝뚝’ 소리가 난다.`,
        ],
      },
      {
        text: [
          `물건을 잡거나 쥘 때 손가락이
`,
          <br key="1" className="pc" />,
          `아프고 힘이 빠진다.`,
        ],
      },
      {
        text: [
          `손가락을 구부릴 때 통증이 심해지고,
`,
          <br key="1" className="pc" />,
          `손끝 감각이 둔해진다.`,
        ],
      },
      {
        text: [
          `손가락 관절이 점점 굳어지고,
`,
          <br key="1" className="pc" />,
          `변형되는 느낌이 든다.`,
        ],
      },
      {
        text: [
          `손가락 관절이 붓고 열감이 있으며,
`,
          <br key="1" className="pc" />,
          `심하면 밤에도 욱신거린다.`,
        ],
      },
    ],
    quote: [
      `” 치료를 받는데도 `,
      <span key="1" className="green big">
        왜
      </span>,
      ` 계속`,
      <br key="1" className="mo" />,
      ,
      ` 아픈 걸까요? ”`,
    ],
    bgColor: `linear-gradient(360deg, #FFF 13.94%, #EAF5EF 114.07%)`,
  };
  return <TypeO {...data_} />;
}
