import TypeP from "@/components/ui/jointDisease/TypeP";

export default function Section4() {
  const data_ = {
    title: [
      `사실 퇴행성 관절염은 `,
      <br key="1" className="mo" />,
      <span key="1" className="bold">
        연골이 닳아서 오는게 아닙니다.
      </span>,
    ],
    imgPc: `/assets/components/pages/bstt/DegenerativeArthritis/section4/img1_pc.png`,
    imgMo: `/assets/components/pages/bstt/DegenerativeArthritis/section4/img1_mo.png`,
    bgPc: `/assets/components/pages/bstt/DegenerativeArthritis/section4/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/DegenerativeArthritis/section4/bg1_mo.png`,
    desc: [
      `근본적 원인은 그대로 두고 결과적으로 증상이 발생한 곳 하나만 치료하는데 나을리가 있을까요?`,
    ],
  };
  return <TypeP {...data_} />;
}
