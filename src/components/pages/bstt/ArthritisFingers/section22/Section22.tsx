import MedicalInquiriesBannerA from "@/components/ui/banner/MedicalInquiriesBannerTypeA";

export default function Section22() {
  const bg1_pc = `/assets/components/pages/bstt/JointDisease/section16/bg1_pc.png`;
  const bg1_mo = `/assets/components/pages/bstt/JointDisease/section16/bg1_mo.png`;
  const content_ = {
    desc: [
      `튼튼마디 비수술치료`,
      <br key="1" />,
      <span key="2" className="highlight">
        80만건의 결론
      </span>,
    ],
    quote: [`“충분히 좋아지실 수 있습니다”`],
    caption: [
      `너무 늦었다 싶을 때 조차도 `,
      <br key="1" className="mo" />,
      `많은 경우에는 아직 가능성이 있습니다.`,
      <br key="1" />,
      `더 늦기 전에 문의하십시오.`,
    ],
  };

  return (
    <MedicalInquiriesBannerA bgPc={bg1_pc} bgMo={bg1_mo} content={content_} />
  );
}
