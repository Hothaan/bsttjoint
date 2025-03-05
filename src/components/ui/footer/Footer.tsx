/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Fnb from "./Fnb";
import Info from "./Info";

export default function Footer() {
  return (
    <footer css={wrap}>
      <Fnb />
      <Info />
    </footer>
  );
}

const wrap = css`
  width: 100%;
`;
