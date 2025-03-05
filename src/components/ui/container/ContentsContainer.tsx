/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ContentsContainer(prop: Container) {
  const { children } = prop;
  return <div css={wrap}>{children}</div>;
}

const wrap = css`
  width: 100%;
  padding: 180px 185px;
  margin: 0 auto;
  overflow: hidden;
`;
