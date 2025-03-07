/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";

interface IChartCard {
  img: string;
  title: string;
  desc: (string | React.ReactNode)[];
}

export default function ChartCard(prop: IChartCard) {
  const { img, title, desc } = prop;
  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap}>
      <ImageContainer maxWidth="380px">
        <img src={img} alt="chart" />
      </ImageContainer>
      <div css={text_wrap}>
        <p css={title_text(theme)}>{title}</p>
        <p css={desc_text(theme)}>{desc}</p>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const text_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const title_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: 44px;
  font-weight: ${theme.fontWeight.bold};
  text-decoration-line: underline;
`;
const desc_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.light};
  text-align: center;
`;
