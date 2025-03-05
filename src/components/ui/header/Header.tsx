/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import React from "react";
import Logo from "./Logo";
import Gnb from "./Gnb";
import ChooseBranch from "./ChooseBranch";
import AllMenu from "./AllMenu";

const depth2_menu_height = 320;

export default function Header() {
  const theme = useTheme() as CustomTheme;
  const [isDepth1MenuOpen, setisDepth1MenuOpen] = useState(false);

  return (
    <header css={wrap(theme, isDepth1MenuOpen)}>
      <Logo />
      <Gnb
        isDepth1MenuOpen={isDepth1MenuOpen}
        setisDepth1MenuOpen={setisDepth1MenuOpen}
      />
      <div css={right_menu}>
        <ChooseBranch />
        <AllMenu />
      </div>
    </header>
  );
}

const wrap = (theme: CustomTheme, isDepth1MenuOpen: boolean) => css`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: 0 160px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.colors.mono.white};

  &:after {
    content: "";
    display: ${isDepth1MenuOpen ? "block" : "none"};

    position: absolute;
    top: 100%;
    left: 0;
    z-index: -1;

    width: 100%;
    height: ${depth2_menu_height}px;

    border-top: 1px solid ${theme.colors.mono.stroke};
    border-bottom: 1px solid ${theme.colors.mono.stroke};
    background-color: ${theme.colors.mono.white};
  }
`;

const right_menu = css`
  padding: 21px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;
