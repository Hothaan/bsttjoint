/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface INumberCard {
  icon: React.ReactNode;
  number: number;
  unit: string;
  desc: (string | React.ReactNode)[];
}

export default function NumberCard(prop: INumberCard) {
  const { icon, number, unit, desc } = prop;
  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap}>
      <div css={inner_wrap}>
        {icon}
        <div css={number_wrap}>
          <p css={number_text(theme)}>{number.toLocaleString()}</p>
          <p css={unit_text(theme)}>{unit}</p>
        </div>
      </div>
      <p css={desc_text(theme)}>{desc}</p>
    </div>
  );
}

const wrap = css`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const inner_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const number_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const number_text = (theme: CustomTheme) => css`
  font-size: ${theme.fontSize.num};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.point.extraHighlight};
`;
const unit_text = (theme: CustomTheme) => css`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.point.extraHighlight};
`;
const desc_text = (theme: CustomTheme) => css`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.mono.white};
`;
