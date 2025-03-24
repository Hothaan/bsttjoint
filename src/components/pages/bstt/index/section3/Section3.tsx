"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import CheckList from "@/components/ui/checkList/CheckList";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

export default function Section3() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const bg1_pc = "/assets/components/pages/bstt/index/section3/bg1_pc.png";
  const bg1_mo = "/assets/components/pages/bstt/index/section3/bg1_mo.png";
  const bg2_mo = "/assets/components/pages/bstt/index/section3/bg2_mo.png";
  const bg3_mo = "/assets/components/pages/bstt/index/section3/bg3_mo.png";

  const sectionTitleDesc_ = {
    title: `Solution`,
    desc: [
      `이렇게 된다면`,
      <br key="3" className="mo" />,
      ,
      `얼마나 좋을까요?`,
    ],
  };

  const check_list_data_ = [
    "아직도 튼튼한 마디마디",
    "지속가능한 치료와 평생관리",
    "질환 개선에 의한 통증완화",
    "등산, 골프, 운동 등 취미생활",
    "활동능력 유지와 건강한 노후",
  ];

  const quote_ = [`”충분히 좋아지실 수 있습니다!”`];

  const caption_ = `strong-KNIE MEDICAL CENTER`;

  return (
    <div css={wrap(bg1_pc)}>
      {width < 960 && (
        <>
          <div css={image_container1}>
            <ImageContainer maxWidth="100%">
              <img src={bg1_mo} alt="bg1" />
            </ImageContainer>
          </div>
          <div css={image_container2(width)}>
            <ImageContainer maxWidth="100%">
              <img src={bg3_mo} alt="bg1" />
            </ImageContainer>
          </div>
        </>
      )}
      <div css={text_wrap(width)}>
        <div css={margin_bottom(width / 35.5)}>
          <SectionTitleDesc
            titleColor={theme.colors.mono.white}
            descColor={theme.colors.mono.white}
            title={sectionTitleDesc_.title}
            desc={sectionTitleDesc_.desc}
          />
        </div>
        <div css={margin_bottom(width / 22.8)}>
          <CheckList checkListData={check_list_data_} color="white" />
        </div>
        <div css={margin_bottom(width / 64)}>
          <p css={quote_style(theme, width)}>{quote_}</p>
        </div>
        <p css={caption_style(theme, width)}>{caption_}</p>
      </div>
    </div>
  );
}

const wrap = (img1: string) => css`
  width: 100%;
  aspect-ratio: 1920 / 982;
  position: relative;

  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    background-image: none;
    aspect-ratio: 375 / 600;
    background-color: #15974b;
  }
  @media (max-width: 600px) {
    aspect-ratio: 375 / 700;
  }
  @media (max-width: 480px) {
    aspect-ratio: 375 / 840;
  }
`;

const image_container1 = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
const image_container2 = (width: number) => css`
  position: absolute;
  z-index: 1;

  top: ${width / 3}px;
  right: -${width / 6}px;

  width: ${width / 2.5}px;
  aspect-ratio: 276 / 296;

  img {
    width: 100%;
    aspect-ratio: 276 / 296;
  }

  @media (max-width: 600px) {
    top: ${width / 2}px;
    right: -${width / 6}px;
    width: ${width / 2}px;
  }

  @media (max-width: 480px) {
    top: ${width / 1.2}px;
    right: -${width / 6}px;
    width: ${width / 1.8}px;
  }
`;

const margin_bottom = (margin: number) =>
  css`
    margin-bottom: ${margin}px;
  `;

const text_wrap = (width: number) => css`
  width: 100%;
  max-width: ${width / 2.8}px;
  position: absolute;
  top: 50%;
  left: calc(50% + ${width / 12}px);
  transform: translateY(-50%);
  z-index: 2;

  @media (max-width: 1400px) {
    max-width: ${width / 2.5}px;
    left: calc(50% + ${width / 24}px);
  }

  @media (max-width: 960px) {
    transform: none;
    top: ${width / 4.6}px;
    left: ${width / 10.3}px;
    max-width: ${width - (width / 12) * 2}px;
  }
  @media (max-width: 800px) {
    top: 40px;
  }
  @media (max-width: 480px) {
    max-width: ${width - (width / 23.4) * 2}px;
  }
  @media (max-width: 375px) {
    transform: none;
    top: ${width / 4.6}px;
    left: ${width / 18.75}px;
  }
`;

const quote_style = (theme: CustomTheme, width: number) => css`
  color: ${theme.colors.mono.white};
  font-size: ${width / 42.6}px;
  font-weight: ${100};
  letter-spacing: -0.02em;

  @media (max-width: 960px) {
    font-size: 24px;
  }
  @media (max-width: 370px) {
    font-size: 20px;
  }
`;
const caption_style = (theme: CustomTheme, width: number) => css`
  color: ${theme.colors.mono.white};
  font-size: ${width / 96}px;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -0.02em;

  opacity: 0.5;
  letter-spacing: 0.5em;

  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: ${width / 31.2}px;
  }
`;
