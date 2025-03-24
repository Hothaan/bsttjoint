"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface IBanner {
  text: (string | React.ReactNode)[];
  img: string;
}

export default function Banner(prop: IBanner) {
  const { text, img } = prop;
  const theme = useTheme() as CustomTheme;
  return (
    <div css={wrap(img)}>
      <p css={text_style(theme)}>{text}</p>
    </div>
  );
}
const wrap = (img: string) => css`
  width: 100%;
  padding: 52px 46px;

  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: end;

  aspect-ratio: 955 / 350;

  @media (max-width: 960px) {
    padding: 20px;
    aspect-ratio: 183 / 150;
    width: 50%;
    align-items: start;
  }
`;

const text_style = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.black};
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};

  align-items: start;

  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: 16px;
  }
`;
