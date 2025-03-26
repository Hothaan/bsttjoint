import TypeA from "@/components/ui/spinalDisease/TypeA";

export default function Section5() {
  const data_ = {
    sectionTitleSimple: {
      text: [`주요 척추질환`],
      color: `#131313`,
      align: `left`,
    },
    cardData: [
      {
        img: `/assets/components/pages/bstt/SpinalDisease/section5/card1_pc.png`,
        listTitle: `척추관협착증`,
        title: [
          <span key="1" className="green">
            척추관협착증
          </span>,
          `이란?`,
        ],
        desc: `보행 시 통증이 심해지고, 앉거나 쪼그려 앉으면 증상이 완화됩니다. 방치하면 신경 손상이 진행되어 다리 감각이 둔해지고,심한 경우 보행 장애까지 이어질 수 있습니다.`,
        caption: `오래 걸으면 다리가 저리고 힘이 빠진다`,
      },
      {
        img: `/assets/components/pages/bstt/SpinalDisease/section5/card2_pc.png`,
        listTitle: `허리디스크`,
        title: [
          <span key="1" className="green">
            허리디스크
          </span>,
          `란?`,
        ],
        desc: `허리를 숙일 때 통증이 심해지고, 다리까지 저린 증상이 동반됩니다. 방치하면 신경 손상이 진행되어 다리 감각이 둔해지고, 심한 경우 마비까지 올 수 있습니다.`,
        caption: `허리를 숙일 때 통증과 다리 저림이 있다`,
      },
      {
        img: `/assets/components/pages/bstt/SpinalDisease/section5/card3_pc.png`,
        listTitle: `척추측만증`,
        title: [
          <span key="1" className="green">
            척추측만증
          </span>,
          `이란?`,
        ],
        desc: `초기에는 특별한 통증 없이 체형이 변형되는 것이 특징입니다. 방치하면 허리 통증, 골반 불균형, 호흡 곤란 등 다양한 문제가 발생할 수 있습니다.`,
        caption: `허리가 한쪽으로 휘어지고, 균형이 맞지 않는다`,
      },
      {
        img: `/assets/components/pages/bstt/SpinalDisease/section5/card4_pc.png`,
        listTitle: `목디스크`,
        title: [
          <span key="1" className="green">
            목디스크
          </span>,
          `란?`,
        ],
        desc: `목이 뻐근하고, 어깨부터 팔까지 저린 증상이 나타나는 것이 특징입니다. 방치하면 신경 손상이 진행되어 손과 팔의 기능 저하로 이어질 수 있습니다.`,
        caption: `목이 뻣뻣하고, 어깨와 팔까지 저리다`,
      },
    ],
    bgColor: `#EAF5EF`,
  };
  return <TypeA {...data_} />;
}
