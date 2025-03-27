"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import PageTitleContent from "@/components/ui/text/PageTitleContent";
import PageQuote from "@/components/ui/text/PageQuote";
import From from "@/components/ui/text/From";
import Back from "@/components/ui/text/Back";

export default function Section1() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const section_title_desc_ = {
    title: `Greeting`,
    desc: [`지점 인사말`],
    branch: `부산서면점`,
    titleColor: "rgba(1, 140, 59, 1)",
    descColor: "#131313",
  };
  const page_title_content_1 = [
    `건강할 때에는 잘 모르고 지내다가 아픈 때가 되어서야 비로소 건강의 소중함을 깨닫습니다.`,
    <br key="1" />,
    `건강한 일상을 되찾고자 열심히 노력하지만 세월이 가면 갈수록 건강을 되찾는 것이,`,
    <br key="1" />,
    `그리고 유지하는 것이 결코 쉽지만은 않습니다.`,
  ];
  const page_title_content_2 = [
    `튼튼마디한의원 부산서면점은 여러분의 소중한 일상을 되찾아드리기 위해 존재합니다.`,
    <br key="1" />,
    `한분 한분의 삶 속에서 단순히 당장 아프지 않기 위한 임시방편이 아니라 환자분의 삶의`,
    <br key="1" />,
    `질을 향상시키고, 온전한 생활을 가능하도록 해드리고자 합니다. 오랜 통증과 질병으로`,
    <br key="1" />,
    `몸과 마음이 지쳐있더라도 포기하지 마시고 언제든 찾아주십시오.`,
  ];
  const page_title_content_3 = [
    `저희 튼튼마디한의원 부산서면점의 모든 의료진과 임직원들은 환자분들의 이야기에`,
    <br key="1" />,
    `귀 기울이며 따스한 마음으로 늘 최선을 다할 것입니다`,
  ];

  const page_quote_ = [
    <span key="1" className="bold">
      ”시간을 되돌릴 수는 없지만 건강을 되찾을 수는 있습니다.”
    </span>,
  ];

  const from_ = `-부산서면점 임직원 일동`;
  const bg1_pc = `/assets/components/pages/bstt/BranchGuide/Bstt/section1/bg1_pc.png`;
  const bg1_mo = `/assets/components/pages/bstt/BranchGuide/Bstt/section1/bg1_mo.png`;
  const back_ = `FOR YOUR HEALTHY JOINTS FOR YOUR HEALTHY JOINTS`;
  return (
    <div css={wrap}>
      <div css={inner_wrap}>
        <div css={content_wrap}>
          <SectionTitleDesc {...section_title_desc_} />
          <div css={content_inner_wrap}>
            <PageTitleContent text={page_title_content_1} />
            <PageTitleContent text={page_title_content_2} />
            <PageTitleContent text={page_title_content_3} />
            <PageQuote text={page_quote_} align="left" />
          </div>
          <From text={from_} />
        </div>
        <div css={image_container}>
          <img src={width > 960 ? bg1_pc : bg1_mo} alt="profile" />
        </div>
      </div>
      <div css={back_container}>
        <Back text={back_} />
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px 0 180px 180px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;

  @media (max-width: 1800px) {
    padding: 140px 0 140px 140px;
  }
  @media (max-width: 1600px) {
    padding: 100px 0 100px 100px;
    gap: 40px;
  }
  @media (max-width: 1400px) {
    padding: 100px 0 100px 60px;
  }
  @media (max-width: 1200px) {
    padding: 80px 0 80px 40px;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 80px 0;
    gap: 16px;
  }
`;
const inner_wrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1800px) {
    gap: 140px;
  }
  @media (max-width: 1600px) {
    gap: 80px;
  }
  @media (max-width: 1400px) {
    gap: 60px;
  }
  @media (max-width: 1200px) {
    gap: 40px;
  }
  @media (max-width: 960px) {
    flex-direction: column;

    gap: 34px;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1400px) {
    gap: 40px;z
  }
  @media (max-width: 960px) {
    padding: 0 20px;
    gap: 24px;
  }
`;
const content_inner_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1400px) {
    gap: 24px;
  }
  @media (max-width: 960px) {
    gap: 16px;
  }
`;

const image_container = css`
  max-width: 47%;
  min-width: 47%;
  height: auto;
  aspect-ratio: 811 / 795;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 960px) {
    max-width: 100%;
    min-width: 100%;
    aspect-ratio: 375 / 300;
  }
`;

const back_container = css`
  transform: translateX(-200px);

  @media (max-width: 1800px) {
    transform: translateX(-160px);
  }
  @media (max-width: 1600px) {
    transform: translateX(-120px);
  }
  @media (max-width: 1400px) {
  }
  @media (max-width: 1200px) {
    transform: translateX(-100px);
  }
  @media (max-width: 960px) {
  }
`;
