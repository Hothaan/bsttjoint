import MedicalInquiriesBanner from "@/components/ui/banner/MedicalInquiriesBanner";

export default function Section11() {
  const bg1_pc = `/assets/components/pages/bstt/HospitalGuide/section11/bg1_pc.png`;
  const bg1_mo = `/assets/components/pages/bstt/HospitalGuide/section11/bg1_mo.png`;
  const content_ = {
    title: [
      `건강한 백년을 위한 `,
      <span className="green" key="1">
        튼튼한 약속
      </span>,
    ],
    desc: [
      `관절척추 백년대게 `,
      <br key="1" />,
      <span className="highlight" key="1">
        튼튼마디 한의원
      </span>,
    ],
    caption: [
      `몇살까지 사느냐 보다`,
      <br key="1" />,
      `몇살까지 걸을 수 있느냐가 더 중요합니다`,
    ],
  };
  return (
    <MedicalInquiriesBanner bgMo={bg1_mo} bgPc={bg1_pc} content={content_} />
  );
}
