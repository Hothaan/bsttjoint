import TypeN from "@/components/ui/jointDisease/TypeN";

export default function Section1() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/DegenerativeArthritis/section1/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/DegenerativeArthritis/section1/bg1_mo.png`,
    title: [
      <span key="1" className="green">
        퇴행성 관절염,
      </span>,
      <br key="1" />,
      `나이가 들수록 자연스러운 현상일까요?`,
    ],
    desc: [
      `나이가 들면 누구나 관절이 약해지지만, `,
      <br key="1" className="pc" />,
      <span key="1" className="bold">
        퇴행성 관절염을 방치하면 일상생활이 점점 불편해질 수 있습니다.
      </span>,
      <br key="1" />,
      `초기에는 무릎이 뻐근하거나 약간의 통증이 있을 뿐이지만, `,
      <br key="1" className="pc" />,
      `시간이 지나면서 `,
      <span key="1" className="bold">
        연골이 닳고, 관절이 손상되면서 통증이 심해집니다.
      </span>,
    ],
  };
  return <TypeN {...data_} />;
}
