"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, keyframes } from "@emotion/react";

export interface IBack {
  text: string;
  color?: string;
}

export default function Back(prop: IBack) {
  const { text, color } = prop;
  return (
    <div css={wrap}>
      <div css={marqueeTrack}>
        <span css={back_text(color)}>{text}</span>
        <span css={back_text(color)}>{text}</span>
        <span css={back_text(color)}>{text}</span>
        <span css={back_text(color)}>{text}</span>
        <span css={back_text(color)}>{text}</span>
        <span css={back_text(color)}>{text}</span>
      </div>
    </div>
  );
}
const wrap = css`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
`;
const marquee = keyframes`
0% { transform: translateX(0%); }
100% { transform: translateX(-50%); }
`;
const marqueeTrack = css`
  display: inline-block;
  white-space: nowrap;
  animation: ${marquee} 120s linear infinite;
`;

const back_text = (color?: string) => css`
  color: ${color ?? "#d2e9dc"};
  font-family: Montserrat;
  font-size: 120px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -2.4px;
  white-space: nowrap;
  padding-right: 1em;

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
