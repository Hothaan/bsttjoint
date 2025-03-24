"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

import { useHeaderFooterHeight } from "@/components/ui/provider/HeaderFooterProvider";
export default function Section1() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const { headerHeight, footerHeight } = useHeaderFooterHeight();
  const bg1_pc = `/assets/components/pages/bstt/index/section1/bg1_pc.png`;
  const bg1_mo = `/assets/components/pages/bstt/index/section1/bg1_mo.png`;
  const text1_ = [
    `어떻게 하면 더 젊게, 더 건강하게,`,
    <br key="1" className="mo" />,
    `더 안 아프게  살 수 있을까?`,
  ];
  const text2_ = [
    `건강한 백년을 위한 `,
    <br key="1" className="mo" />,
    <span key="2" className="highlight">
      튼튼한 약속
    </span>,
  ];
  const text3_ = [
    `관절척추 백년대계, `,
    <span key="3" className="bold">
      튼튼마디한의원
    </span>,
  ];

  return (
    <div css={wrap(width, bg1_pc, bg1_mo)}>
      <div css={text_wrap(width, headerHeight)}>
        <p css={text1_style(theme, width)}>{text1_}</p>
        <p css={text2_style(theme, width)}>{text2_}</p>
        <p css={text3_style(theme, width)}>{text3_}</p>
      </div>
    </div>
  );
}

const wrap = (width: number, img1: string, img2: string) => css`
  width: 100%;
  aspect-ratio: 1920 / 1120;
  position: relative;

  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    background-image: url(${img2});
    aspect-ratio: 375 / 600;
  }
  @media (max-width: 480px) {
    background-image: url(${img2});
    aspect-ratio: 375 / 812;
  }
`;

const text_wrap = (width: number, headerHeight: number) => css`
  position: absolute;
  top: ${width / 6.2}px;
  left: ${width / 12}px;

  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    top: ${width / 5.3 + headerHeight}px;
    left: 50%;
    transform: translateX(-50%);

    align-items: center;
  }
`;

const text1_style = (theme: CustomTheme, width: number) => css`
  margin-bottom: ${width / 50.5 < 16 ? 16 : width / 50.5}px;

  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${width > 1000
    ? theme.fontWeight.bold
    : theme.fontWeight.normal};
  line-height: 150%;
  letter-spacing: -0.48px;

  .mo {
    display: none;
  }

  @media (max-width: 960px) {
    .mo {
      display: block;
    }
    text-align: center;
    white-space: nowrap;
    font-size: ${width / 18.7 > 30 ? 30 : width / 18.7}px;
  }
`;

const text2_style = (theme: CustomTheme, width: number) => css`
  margin-bottom: 10px;

  position: relative;
  color: ${theme.colors.mono.white};
  font-size: ${width / 29.5 < 48 ? 48 : width / 29.5}px;
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.3;
  letter-spacing: -1.3px;
  display: flex;
  gap: 0.25em;
  align-items: center;

  .mo {
    display: none;
  }

  .highlight {
    display: inline-block;
    position: relative;
    z-index: 1;
    background-color: #31915d;
    padding: 0 0.25em;
    display: inline-block;
    width: auto;
    white-space: nowrap;
    vertical-align: middle;
  }

  @media (max-width: 960px) {
    display: inline-block;
    margin-bottom: 16px;
    text-align: center;
    .mo {
      display: block;
    }
    white-space: nowrap;
  }
  @media (max-width: 500px) {
    font-size: ${width / 29.5 < 30 ? 30 : width / 29.5}px;
    font-weight: ${theme.fontWeight.semiBold};
  }
`;

const text3_style = (theme: CustomTheme, width: number) => css`
  color: ${theme.colors.mono.white};
  font-size: ${width / 56.4 < 24 ? 24 : width / 56.4}px;
  letter-spacing: -0.02em;
  font-weight: ${theme.fontWeight.light};

  .bold {
    font-weight: ${theme.fontWeight.bold};
  }

  @media (max-width: 960px) {
    text-align: center;
    white-space: nowrap;
    font-size: ${width / 15.6 > 34 ? 34 : width / 15.6}px;
  }
`;
