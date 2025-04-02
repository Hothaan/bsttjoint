"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import Logo from "./Logo";
import Gnb from "./Gnb";
import ChooseBranch from "./ChooseBranch";
import AllMenu from "./AllMenu";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

export default function HeaderPc() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const [isDepth1MenuOpen, setisDepth1MenuOpen] = useState(false);

  if (width === null) {
    return;
  }

  if (width < 1000) {
    return;
  }

  return (
    <header css={wrap(theme, isDepth1MenuOpen, width)}>
      <Logo />
      <Gnb
        isDepth1MenuOpen={isDepth1MenuOpen}
        setisDepth1MenuOpen={setisDepth1MenuOpen}
      />
      <div css={right_menu(width)}>
        <ChooseBranch />
        <AllMenu />
      </div>
    </header>
  );
}

const wrap = (
  theme: CustomTheme,
  isDepth1MenuOpen: boolean,
  width: number
) => css`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: 0 ${width / 12}px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.colors.mono.white};
  border-bottom: 1px solid ${theme.colors.mono.stroke};

  &:after {
    content: "";
    display: ${isDepth1MenuOpen ? "block" : "none"};

    position: absolute;
    top: 100%;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 320px;

    border-top: 1px solid ${theme.colors.mono.stroke};
    border-bottom: 1px solid ${theme.colors.mono.stroke};
    background-color: ${theme.colors.mono.white};
  }

  @media (min-width: 1921px) {
    &:after {
      height: 400px;
    }
  }
`;

const right_menu = (width: number) => css`
  padding: ${width / 91.4}px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${width / 56.4}px;
`;
