/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import { menu_data } from "@/datas/menuData";
import { menu_data } from "@/datas/menuData";

import AllMenuIcon from "@/assets/components/ui/header/AllMenu/allMenu.svg";
import Close from "@/assets/components/ui/header/AllMenu/close.svg";

export default function AllMenu() {
  const theme = useTheme() as CustomTheme;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menu_title_ = "전체메뉴";

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleIsHere(pathname: string, link: string): boolean {
    return pathname === link;
  }

  return (
    <div css={wrap}>
      <AllMenuIcon css={all_menu_icon} onClick={handleIsOpen} />
      <div css={menu_wrap(theme, isOpen)}>
        <Close css={close_icon} onClick={handleIsOpen} />
        <p css={menu_title_text(theme)}>{menu_title_}</p>
        <ul css={depth1_menu_wrap(theme)}>
          {menu_data.map((item, idx) => (
            <li key={item.depth1} css={depth1_menu(theme, idx)}>
              <p css={depth1_menu_text(theme)}>{item.depth1}</p>
              <ul css={depth2_menu_wrap}>
                {item.depth2.map((item) => (
                  <li key={item.text}>
                    <Link href={item.link} onClick={handleIsOpen}>
                      <p
                        css={depth2_menu_text(
                          theme,
                          handleIsHere(router.pathname, item.link)
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

const all_menu_icon = css`
  cursor: pointer;
`;

const menu_wrap = (theme: CustomTheme, isOpen: boolean) => css`
  position: fixed;
  z-index: 20;

  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: 120px;

  display: ${isOpen ? "flex" : "none"};

  background-color: ${theme.colors.mono.white};
  border-bottom: 1px solid ${theme.colors.mono.stroke};
`;

const close_icon = css`
  position: absolute;
  top: 50px;
  right: 50px;

  cursor: pointer;
`;

const menu_title_text = (theme: CustomTheme) => css`
  position: relative;

  width: 400px;
  padding-top: 34px;

  color: ${theme.colors.mono.black};
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};

  &:after {
    content: "";
    display: block;
    position: absolute;

    top: 0;
    left: 0;

    width: 40px;
    height: 4px;

    background-color: ${theme.colors.point.primary};
`;

const depth1_menu_wrap = (theme: CustomTheme) =>
  css`
    width: 100%;

    border-top: 1px solid ${theme.colors.mono.stroke};
    border-bottom: 1px solid ${theme.colors.mono.stroke};
  `;

const depth1_menu = (theme: CustomTheme, idx: number) => css`
  width: 100%;

  display: flex;
  padding: 54px 0;

  border-top: ${idx > 0 ? `1px solid ${theme.colors.mono.stroke}` : `none`};
`;

const depth1_menu_text = (theme: CustomTheme) => css`
  width: 200px;

  color: ${theme.colors.point.primary};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
`;

const depth2_menu_wrap = css`
  display: flex;
  align-items: center;
  gap: 34px;
`;
const depth2_menu_text = (theme: CustomTheme, isHere: boolean) => css`
  position: relative;

  color: ${isHere ? theme.colors.point.primary : theme.colors.mono.textLight};
  font-size: ${theme.fontSize.ml};
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
