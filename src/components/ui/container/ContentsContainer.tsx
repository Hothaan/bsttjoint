/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IContentsContainer extends Container {
  bgPc?: string;
  bgMo?: string;
  bgColor?: string;
}

export default function ContentsContainer(prop: IContentsContainer) {
  const { children, bgPc, bgMo, bgColor } = prop;

  if (bgPc !== undefined && bgMo !== undefined) {
    return <div css={bg_wrap(bgPc, bgMo)}>{children}</div>;
  }
  return <div css={wrap(bgColor)}>{children}</div>;
}

const wrap = (bgColor?: string) => css`
  position: relative;

  width: 100%;
  padding: 180px;
  margin: 0 auto;
  background-color: ${bgColor || "#fff"};

  @media (max-width: 1800px) {
    padding: 160px;
  }
  @media (max-width: 1400px) {
    padding: 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px;
  }
  @media (max-width: 960px) {
    padding: 80px;
  }
  @media (max-width: 680px) {
    padding: 80px 60px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px;
  }
`;
const bg_wrap = (bgPc: string, bgMo: string) => css`
  position: relative;

  width: 100%;
  padding: 180px;
  margin: 0 auto;
  overflow: hidden;

  background-image: url(${bgPc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1800px) {
    padding: 160px;
  }
  @media (max-width: 1400px) {
    padding: 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px;
  }
  @media (max-width: 960px) {
    background-image: url(${bgMo});
    padding: 80px;
  }
  @media (max-width: 680px) {
    padding: 80px 60px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px;
  }
`;
