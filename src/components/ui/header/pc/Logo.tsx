"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import ImageContainer from "../../container/ImageContainer";
import { useWindowSizeContext } from "../../provider/WindowSizeProvider";

export default function Logo() {
  const home_ = "/bstt";
  const logo_ = "/assets/components/ui/header/Logo/Logo.png";
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return (
    <Link href={home_} css={wrap(width)}>
      <ImageContainer maxWidth={`${width / 7.3}px`}>
        <img src={logo_} alt="logo" />
      </ImageContainer>
    </Link>
  );
}

const wrap = (width: number) => css`
  padding: ${width / 91.4}px 0;
`;
