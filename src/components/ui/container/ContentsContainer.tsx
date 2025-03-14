/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ContentsContainer(prop: Container) {
  const { children } = prop;
  return <div css={wrap}>{children}</div>;
}

const wrap = css`
  width: 100%;
  padding: 180px;
  margin: 0 auto;
  overflow: hidden;

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
