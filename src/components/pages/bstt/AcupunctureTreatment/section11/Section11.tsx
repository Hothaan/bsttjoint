import TypeK from "@/components/ui/treatment/TypeK";

export default function Section11() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section11/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AcupunctureTreatment/section11/bg1_mo.png`,
    small: [`지금 바로 녹용한약을 시작하세요!`],
    big: [
      `약침요법, 빠르고 강력한 `,
      <br key="1" className="mo" />,
      `비수술 치료!`,
      <br key="1" />,
      `지금 시작하세요!`,
    ],
  };
  return <TypeK {...data_} />;
}
