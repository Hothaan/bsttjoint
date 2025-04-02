"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

export default function Section3() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const section_title_simple_ = {
    text: [`오시는 길`],
    color: theme.colors.mono.black,
    alert: "left",
  };
  const map1_pc_ = `/assets/components/pages/bstt/BranchGuide/Bstt/section3/map1_pc.png`;
  const map1_mo_ = `/assets/components/pages/bstt/BranchGuide/Bstt/section3/map1_mo.png`;

  if (width === null) {
    return;
  }

  return (
    <ContentsContainer bgColor="#f6f6f6">
      <div css={wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <img src={width > 960 ? map1_pc_ : map1_mo_} alt="map" />
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 44px;
`;
