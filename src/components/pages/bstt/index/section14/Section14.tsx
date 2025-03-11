/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import MedicalInquiriesBanner from "@/components/ui/banner/MedicalInquiriesBanner";

export default function Section14() {
  const bg1_pc = `/assets/components/pages/bstt/index/section14/bg1.png`;
  const bg1_mo = `/assets/components/pages/bstt/index/section14/bg1_mo.png`;
  const content_ = {
    title: [
      `튼튼한 백년을 위한 `,
      <span key="1" className="green">
        현명한 선택
      </span>,
    ],
    desc: [
      `관절척추 중점진료`,
      <br key="1" />,
      <span key="2" className="highlight">
        튼튼마디 한의원
      </span>,
    ],
    quote: [`”당신과 함께 걷고 싶습니다”`],
  };

  const link_button_ = {
    text: "진료문의",
    link: "/bstt/MedicalInquiries",
  };
  return (
    <MedicalInquiriesBanner bgPc={bg1_pc} bgMo={bg1_mo} content={content_} />
  );
}
