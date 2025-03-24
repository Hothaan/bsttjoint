"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import CheckList from "@/components/ui/checkList/CheckList";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

export default function Section2() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const bg1_pc = "/assets/components/pages/bstt/index/section2/bg1_pc.png";
  const bg1_mo = "/assets/components/pages/bstt/index/section2/bg1_mo.png";

  const sectionTitleDesc_ = {
    title: `Why problem`,
    desc: [
      `많은 통증질환`,
      <br key="3" className="mo" />,
      ,
      `환자분들이 `,
      <br key="1" className="pc" />,
      `이런`,
      <br key="2" className="mo" />,
      ,
      `어려움을 겪고 계십니다`,
    ],
  };

  const check_list_data_ = [
    "갈수록 약해지는 마디마디",
    "그때그때 눈가림식 통증치료",
    "자꾸만 줄어드는 치료효과",
    "질병의 진행, 악화, 수술, 재발",
    "점점 견디기 힘든 통증, 불면, 우울..",
  ];

  const quote_ = [
    `”도대체 `,
    <span key="2" className="primary">
      어떻게 하면 좋을까요?”
    </span>,
  ];

  return (
    <div css={wrap(bg1_pc)}>
      {width < 960 && (
        <div css={image_container}>
          <ImageContainer maxWidth="100%">
            <img src={bg1_mo} alt="bg1" />
          </ImageContainer>
        </div>
      )}
      <div css={text_wrap(width)}>
        <div css={margin_bottom(width / 35.5)}>
          <SectionTitleDesc
            titleColor="#018C3B"
            descColor={theme.colors.mono.black}
            title={sectionTitleDesc_.title}
            desc={sectionTitleDesc_.desc}
          />
        </div>
        <div css={margin_bottom(width / 22.8)}>
          <CheckList checkListData={check_list_data_} color="black" />
        </div>
        <p css={quote_style(theme, width)}>{quote_}</p>
      </div>
    </div>
  );
}

const wrap = (img1: string) => css`
  width: 100%;
  aspect-ratio: 1920 / 948;
  position: relative;

  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    background-image: none;
    aspect-ratio: 375 / 600;
    background-color: #fff;
  }
  @media (max-width: 600px) {
    background-image: none;
    aspect-ratio: 375 / 760;
    background-color: #fff;
  }
  @media (max-width: 400px) {
    background-image: none;
    aspect-ratio: 375 / 840;
    background-color: #fff;
  }
`;

const image_container = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
const margin_bottom = (margin: number) =>
  css`
    margin-bottom: ${margin}px;
  `;

const text_wrap = (width: number) => css`
  width: fit-content;
  max-width: 680px;
  position: absolute;
  top: 50%;
  left: ${width / 10.3}px;
  transform: translateY(-50%);

  @media (max-width: 960px) {
    top: ${width / 4.6}px;
    transform: none;
    padding-right: ${width / 12}px;
  }
`;

const quote_style = (theme: CustomTheme, width: number) => css`
  color: ${theme.colors.mono.black};
  font-size: 40px;

  font-weight: ${theme.fontWeight.semiBold};
  letter-spacing: -0.02em;

  .primary {
    color: ${theme.colors.point.primary};
  }

  @media (max-width: 1919px) {
    font-size: ${width / 48 < 24 ? 24 : width / 48}px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
    white-space: nowrap;
  }
`;
