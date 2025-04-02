"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InnerContainer(prop: Container) {
  const { children } = prop;

  useEffect(() => {
    AOS.init();
  }, []);

  return <div css={wrap}>{children}</div>;
}

const wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    max-width: 1920px;
  }
`;
