/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface INumberCard {
  icon: React.ReactNode;
  number: number;
  unit: string;
  desc: (string | React.ReactNode)[];
}

export default function NumberCard(prop: INumberCard) {
  const { icon, number, unit, desc } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return (
    <div css={wrap(width)}>
      <div css={inner_wrap(width)}>
        <div css={icon_container(width)}>{icon}</div>
        <div css={number_wrap}>
          <p css={number_text(theme, width)}>
            {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p css={unit_text(theme)}>{unit}</p>
        </div>
      </div>
      <p css={desc_text(theme)}>{desc}</p>
    </div>
  );
}

const wrap = (width: number) => css`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  @media (max-width: 1800px) {
    width: ${width / 6}px;
    gap: ${width / 56}px;
  }

  @media (max-width: 960px) {
    width: 240px;
  }
  @media (max-width: 800px) {
    width: ${width / 6 < 164 ? 164 : width / 6}px;
  }
`;

const inner_wrap = (width: number) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${width / 96}px;
`;
const icon_container = (width: number) => css`
  height: ${width / 32 < 40 ? 40 : width / 32}px;
  width: auto;
  display: flex;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    height: ${width / 6.25 > 60 ? 60 : width / 6.25}px;
  }

  @media (max-width: 800px) {
    height: ${width / 6.25 > 50 ? 50 : width / 6.25}px;
  }
  @media (max-width: 375px) {
    height: 60px;
  }
  @media (max-width: 370px) {
    height: 40px;
  }
`;

const number_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;

  @media (max-width: 600px) {
    gap: 4px;
  }
`;
const number_text = (theme: CustomTheme, width: number) => css`
  font-size: 48px;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.point.extraHighlight};

  @media (max-width: 1800px) {
    font-size: 40px;
  }
  @media (max-width: 1500px) {
    font-size: 32px;
  }
  @media (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: 16px;
  }
`;
const unit_text = (theme: CustomTheme) => css`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.point.extraHighlight};

  @media (max-width: 1500px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 370px) {
    font-size: 14px;
  }
`;
const desc_text = (theme: CustomTheme) => css`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.mono.white};
  text-align: center;

  @media (max-width: 1500px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 15px;
    line-height: 250%;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 200%;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    font-size: 15px;
  }
  @media (max-width: 370px) {
    font-size: 12px;
  }
`;
