"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

export default function Section4() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const section_title_simple_ = {
    text: [`진료시간`],
    color: theme.colors.mono.white,
    alert: "left",
  };
  const bg1_pc_ = `/assets/components/pages/bstt/BranchGuide/Bstt/section4/bg1_pc.png`;
  const bg1_mo_ = `/assets/components/pages/bstt/BranchGuide/Bstt/section4/bg1_mo.png`;

  const time1_pc_ = `/assets/components/pages/bstt/BranchGuide/Bstt/section4/time1_pc.png`;
  const time1_mo_ = `/assets/components/pages/bstt/BranchGuide/Bstt/section4/time1_mo.png`;

  if (width === null) {
    return;
  }

  return (
    <ContentsContainer bgPc={bg1_pc_} bgMo={bg1_mo_}>
      <div css={wrap(bg1_pc_, bg1_mo_)}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={image_container}>
          <img src={width > 960 ? time1_pc_ : time1_mo_} alt="map" />
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = (imgPc: string, imgMo: string) => css`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 44px;
`;

const image_container = css`
  width: 100%;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    object-fit: cover;
  }
`;
