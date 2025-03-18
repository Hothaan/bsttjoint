import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    overflow-x: hidden;
    line-height: 1.5;
    font-family: "Pretendard", sans-serif;
    word-break: keep-all;
  }

    button {
    background-color: transparent;
    border: none;
    padding 0;}

  a {
    color: #000;
    text-decoration: none;
  }

  img {
    max-width: 100%;

    display: block;
    vertical-align: bottom;
  }

  @media (min-width: 960px) {
    .mo {
      display: none;
    }
    .pc {
      display: block;
    }
  }
  @media (max-width: 960px) {
    .mo {
      display: block;
    }
    .pc {
      display: none;
    }
  }
  .swiper-wrapper {
    width: fit-content;
  }

  .swiper-slide {
    width: fit-content;
  }
`;
