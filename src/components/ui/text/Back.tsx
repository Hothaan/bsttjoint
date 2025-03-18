/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface IBack {
  text: string;
  color?: string;
}

export default function Back(prop: IBack) {
  const { text, color } = prop;
  return <p css={back_text(color)}>{text}</p>;
}
const back_text = (color?: string) => css`
  color: ${color ?? "#d2e9dc"};
  font-family: Montserrat;
  font-size: 120px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -2.4px;
  white-space: nowrap;

  @media (max-width: 1600px) {
    font-size: 100px;
  }
  @media (max-width: 1400px) {
    font-size: 80px;
  }
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 480px) {
    bottom: 80px;
  }
  @media (max-width: 374px) {
    font-size: 48px;
  }
`;
