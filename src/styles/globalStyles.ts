import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  html,
  body {
    overflow-x: hidden;
    line-height: 1.5;
    font-family: "Pretendard", sans-serif;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  img {
    max-width: 100%;

    display: block;
    vertical-align: bottom;
  }

  @media (min-width: 1000px) {
    .mo {
      display: none;
    }
    .pc {
      display: block;
    }
  }
  @media (max-width: 1000px) {
    .mo {
      display: block;
    }
    .pc {
      display: none;
    }
  }

  * {
    overflow-x: hidden;
  }
`;
