"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import Back from "@/components/ui/text/Back";

export default function TypeK() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const section_title_simple_ = {
    text: [`백절탕의 핵심작용`],
    color: theme.colors.mono.black,
    align: "center",
  };
  const main1_pc_ = `/assets/components/pages/bstt/Baekjeoltang/section4/main1_pc.png`;
  const main1_mo_ = `/assets/components/pages/bstt/Baekjeoltang/section4/main1_mo.png`;
  const back_ = {
    text: `FOR YOUR HEALTHY JOINTS FOR YOUR HEALTHY JOINTS`,
    color: theme.colors.mono.white,
  };
  return (
    <ContentsContainer bgColor="#EAF5EF">
      <div css={wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={image_container}>
          <img src={width > 960 ? main1_pc_ : main1_mo_} alt="main" />
        </div>
        <div css={back_container}>
          <Back {...back_} />
        </div>
      </div>
    </ContentsContainer>
  );
}
const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    gap: 48px;
  }
  @media (max-width: 680px) {
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 34px;
  }
`;

const image_container = css`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const back_container = css`
  align-self: start;

  transform: translateX(-180px);

  @media (max-width: 1800px) {
    transform: translateX(-160px);
  }
  @media (max-width: 1400px) {
    transform: translateX(-140px);
  }
  @media (max-width: 1200px) {
    transform: translateX(-120px);
  }
  @media (max-width: 1000px) {
    transform: translateX(-100px);
  }
  @media (max-width: 960px) {
    transform: translateX(-80px);
  }
  @media (max-width: 680px) {
    transform: translateX(-60px);
  }
  @media (max-width: 540px) {
    transform: translateX(-40px);
  }
  @media (max-width: 480px) {
    transform: translateX(-20px);
  }
`;
