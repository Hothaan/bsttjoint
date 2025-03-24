"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface IChartCard {
  img: string;
  title: string;
  desc: (string | React.ReactNode)[];
}

export default function ChartCard(prop: IChartCard) {
  const { img, title, desc } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return (
    <div css={wrap(width)}>
      <img src={img} alt="chart" />
      <div css={text_wrap}>
        <p css={title_text(theme)}>{title}</p>
        <p css={desc_text(theme)}>{desc}</p>
      </div>
    </div>
  );
}

const wrap = (width: number) => css`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  img {
    width: 100%;
    height: auto;
    max-width: ${width / 5}px;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 960px) {
    width: 284px;
    img {
      width: 284px;
      max-width: 284px;
    }
  }
`;

const text_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 1800px) {
    gap: 16px;
  }
`;

const title_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: 44px;
  font-weight: ${theme.fontWeight.bold};
  text-decoration: underline;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 36px;
  }
  @media (max-width: 1600px) {
    font-size: 30px;
  }
`;
const desc_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.light};
  text-align: center;

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
`;
