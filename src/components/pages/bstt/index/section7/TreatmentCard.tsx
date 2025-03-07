/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";

interface ITreatmentCard {
  idx: number;
  img: string;
  title: string;
  desc: string;
}

export default function TreatmentCard(prop: ITreatmentCard) {
  const { idx, img, title, desc } = prop;

  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap}>
      <ImageContainer maxWidth="440px">
        <img src={img} alt="treatment" />
      </ImageContainer>
      <div css={content_wrap}>
        <p css={title_text(theme)}>
          <span css={idx_text(theme)}>0{idx}</span>
          {title}
        </p>
        <p css={desc_text(theme)}>{desc}</p>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  max-width: 440px;
`;

const content_wrap = css`
  display: flex;
  padding: 20px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;
const title_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.text};
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};
`;
const idx_text = (theme: CustomTheme) => css`
  color: ${theme.colors.point.primary};
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};

  margin-right: 10px;
`;
const desc_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.text};
  font-size: ${theme.fontSize.ml};
  line-height: 140%;
`;
