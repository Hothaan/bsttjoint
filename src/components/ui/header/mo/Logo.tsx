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
    <Link href={home_}>
      <ImageContainer
        maxWidth={`${
          width / 2.5 > 200 ? 200 : width / 2.5 < 160 ? 160 : width / 2.5
        }px`}
      >
        <img src={logo_} alt="logo" />
      </ImageContainer>
    </Link>
  );
}
