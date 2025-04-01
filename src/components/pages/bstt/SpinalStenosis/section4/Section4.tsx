"use client";
/** @jsxImportSource @emotion/react */
import TypeB from "@/components/ui/spinalDisease/TypeB";

export default function Section3() {
  const data_ = {
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          척추관협착증
        </span>,
        `이 이렇게 진행됩니다`,
      ],
      color: `#3C3C3C`,
      align: "center",
    },
    pageTitleContent: {
      text: [
        `척추관협착증은 조기에 치료할수록 신경 손상을 최소화할 수 있습니다. 초기에는 보존적 치료로 충분히 회복할 수 있지만, 진행될수록 치료가 어려워집니다.`,
      ],
      color: `#666`,
      align: "center",
    },
    bg: `#EAF5EF`,
    cardData: [
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section4/card1_pc.png`,
        desc: [
          `허리 통증과 함께 다리에
`,
          <br key="1" />,
          `가끔 저린 느낌이 듦`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section4/card2_pc.png`,
        desc: [
          `오래 서 있거나 걸으면 다리가
`,
          <br key="1" />,
          `저리고, 쪼그려 앉으면 편해짐`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section4/card3_pc.png`,
        desc: [
          `다리 감각이 둔해지고,
`,
          <br key="1" />,
          `보행 중 힘이 빠지는 느낌 발생`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section4/card4_pc.png`,
        desc: [
          `보행 거리가 줄어들고,
`,
          <br key="1" />,
          `균형을 잡기 어려워짐`,
        ],
      },
      {
        img: `/assets/components/pages/bstt/SpinalStenosis/section4/card5_pc.png`,
        desc: [
          `심한 경우 다리 근력 저하 및
`,
          <br key="1" />,
          `신경 손상으로 보행이 힘들어짐`,
        ],
      },
    ],
  };
  return <TypeB {...data_} />;
}
