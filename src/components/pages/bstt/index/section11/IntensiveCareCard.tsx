/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface IIntensiveCareCard {
  img: string;
  title: string;
  desc: string;
}

export default function IntensiveCareCard(prop: IIntensiveCareCard) {
  const { img, title, desc } = prop;

  const theme = useTheme() as CustomTheme;
  return (
    <div css={wrap}>
      <div css={image_wrap}>
        <img src={img} alt="intensive care" />
      </div>
      <div css={text_wrap}>
        <p css={title_text(theme)}>{title}</p>
        <p css={desc_text(theme)}>{desc}</p>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  position: relative;
  display: flex;
  align-items: end;

  &:hover {
    img {
      transform: scale(1.25);
    }
  }
`;

const image_wrap = css`
  overflow: hidden;

  img {
    object-fit: cover;
    aspect-ratio: 475 / 705;

    transition: transform 0.6s ease-in-out;
  }
`;

const text_wrap = css`
  position: absolute;
  bottom: 52px;
  left: 46px;

  display: flex;
  width: calc(100% - 104px);
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

const title_text = (theme: CustomTheme) => css`
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: ${theme.colors.mono.white};

  word-break: keep-all;
`;
const desc_text = (theme: CustomTheme) => css`
  font-size: ${theme.fontSize.ml};
  font-weight: ${theme.fontWeight.light};
  line-height: 1.5;
  color: ${theme.colors.mono.white};

  word-break: keep-all;
`;
