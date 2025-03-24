"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import Check from "@/assets/components/pages/bstt/index/section7/check.svg";
interface ITreatmentCard {
  isClicked: boolean;
  idx: number;
  img: string;
  title: string;
  desc: string;
}

export default function TreatmentCard(prop: ITreatmentCard) {
  const { idx, img, title, desc, isClicked } = prop;

  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return (
    <div css={wrap(width)}>
      <img src={img} alt="treatment" />
      <div css={content_wrap}>
        <p css={title_text(theme, isClicked)}>
          {isClicked ? <Check /> : <span css={idx_text(theme)}>0{idx}</span>}

          {title}
        </p>
        <p css={desc_text(theme, isClicked)}>{desc}</p>
      </div>
    </div>
  );
}

const wrap = (width: number) => css`
  width: 100%;
  max-width: calc(50% - 12px);

  @media (max-width: 960px) {
    max-width: 100%;
  }
`;

const content_wrap = css`
  display: flex;
  padding: 20px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media (max-width: 1800px) {
    padding: 14px;
  }
  @media (max-width: 1200px) {
    padding: 10px;
  }
`;
const title_text = (theme: CustomTheme, isClicked: boolean) => css`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${isClicked ? theme.colors.mono.white : theme.colors.mono.text};
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;
const idx_text = (theme: CustomTheme) => css`
  color: ${theme.colors.point.primary};
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};

  margin-right: 10px;

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;
const desc_text = (theme: CustomTheme, isClicked: boolean) => css`
  color: ${isClicked ? theme.colors.mono.white : theme.colors.mono.text};
  font-size: ${theme.fontSize.ml};
  line-height: 140%;

  @media (max-width: 1800px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 17px;
  }
`;
