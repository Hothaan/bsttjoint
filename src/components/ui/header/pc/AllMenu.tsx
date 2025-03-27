"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { menu_data } from "@/datas/menuData";

import AllMenuIcon from "@/assets/components/ui/header/pc/AllMenu/allMenu.svg";
import Close from "@/assets/components/ui/header/pc/AllMenu/close.svg";
import { useWindowSizeContext } from "../../provider/WindowSizeProvider";

export default function AllMenu() {
  const theme = useTheme() as CustomTheme;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const menu_title_ = "전체메뉴";

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleIsHere(pathname: string, link: string): boolean {
    return pathname === link;
  }

  return (
    <div css={wrap}>
      <div css={icon_container(width)}>
        <AllMenuIcon onClick={handleIsOpen} />
      </div>
      <div css={menu_wrap(theme, isOpen, width)}>
        <div css={close_icon_container(width)}>
          <Close css={close_icon(width)} onClick={handleIsOpen} />
        </div>
        <p css={menu_title_text(theme, width)}>{menu_title_}</p>
        <ul css={depth1_menu_wrap(theme)}>
          {menu_data.map((item, idx) => (
            <li key={item.depth1} css={depth1_menu(theme, idx, width)}>
              <p css={depth1_menu_text(theme, width)}>{item.depth1}</p>
              <ul css={depth2_menu_wrap(width)}>
                {item.depth2.map((item) => (
                  <li key={item.text}>
                    <Link href={item.link} onClick={handleIsOpen}>
                      <p
                        css={depth2_menu_text(
                          theme,
                          handleIsHere(router.pathname, item.link),
                          width
                        )}
                      >
                        {item.text}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const icon_container = (width: number) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${width / 43.6 < 24 ? 24 : width / 43.6}px;
  height: ${width / 43.6 < 24 ? 24 : width / 43.6}px;
  cursor: pointer;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const menu_wrap = (theme: CustomTheme, isOpen: boolean, width: number) => css`
  position: fixed;
  z-index: 20;

  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: ${width / 16}px;

  display: ${isOpen ? "flex" : "none"};

  background-color: ${theme.colors.mono.white};
  border-bottom: 1px solid ${theme.colors.mono.stroke};
`;

const close_icon_container = (width: number) => css`
  position: absolute;
  top: ${width / 38.4}px;
  right: ${width / 38.4}px;

  cursor: pointer;

  width: ${width / 43.6}px;
  height: ${width / 43.6}px;
`;
const close_icon = (width: number) => css``;

const menu_title_text = (theme: CustomTheme, width: number) => css`
  position: relative;

  width: ${width / 4.8}px;
  padding-top: ${width / 56.4}px;

  color: ${theme.colors.mono.black};
  font-size: ${width / 53.3}px;
  font-weight: ${theme.fontWeight.bold};

  &:after {
    content: "";
    display: block;
    position: absolute;

    top: 0;
    left: 0;

    width: ${width / 48}px;
    height: 4px;

    background-color: ${theme.colors.point.primary};
`;

const depth1_menu_wrap = (theme: CustomTheme) =>
  css`
    width: 100%;

    border-top: 1px solid ${theme.colors.mono.stroke};
    border-bottom: 1px solid ${theme.colors.mono.stroke};
  `;

const depth1_menu = (theme: CustomTheme, idx: number, width: number) => css`
  width: 100%;

  display: flex;
  padding: ${width / 35.5}px;

  border-top: ${idx > 0 ? `1px solid ${theme.colors.mono.stroke}` : `none`};
`;

const depth1_menu_text = (theme: CustomTheme, width: number) => css`
  width: ${width / 9.6}px;

  color: ${theme.colors.point.primary};
  font-size: ${width / 80 < 14 ? 14 : width / 80}px;
  font-weight: ${theme.fontWeight.bold};
`;

const depth2_menu_wrap = (width: number) => css`
  display: flex;
  align-items: center;
  gap: ${width / 56.4}px;
`;
const depth2_menu_text = (
  theme: CustomTheme,
  isHere: boolean,
  width: number
) => css`
  position: relative;

  color: ${isHere ? theme.colors.point.primary : theme.colors.mono.textLight};
  font-size: ${width / 96 < 14 ? 14 : width / 96}px;
  font-weight: ${isHere ? theme.fontWeight.bold : theme.fontWeight.normal};

  &:after {
    content: "";
    display: ${isHere ? "block" : "none"};

    position: absolute;

    width: calc(100% + 10px);
    height: 2px;

    background-color: ${theme.colors.point.primary};
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
  }
`;
