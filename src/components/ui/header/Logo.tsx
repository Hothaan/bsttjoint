/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import ImageContainer from "../container/ImageContainer";

export default function Logo() {
  const home_ = "/bstt";
  const logo_ = "/assets/components/ui/header/Logo/logo.png";
  return (
    <Link href={home_} css={wrap}>
      <ImageContainer maxWidth="263px">
        <img src={logo_} alt="logo" />
      </ImageContainer>
    </Link>
  );
}

const wrap = css`
  padding: 21px 0;
`;
