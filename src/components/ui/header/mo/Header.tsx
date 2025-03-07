/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { menu_data } from "@/datas/menuData";

import Close from "@/assets/components/ui/header/mo/Header/close.svg";
import AllMenuIcon from "@/assets/components/ui/header/pc/AllMenu/allMenu.svg";
import { useWindowSizeContext } from "../../provider/WindowSizeProvider";

export default function HeaderMo() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  function handleSelectedMenu(idx: number) {
    setSelectedMenu(idx);
  }

  if (width > 1000) {
    return;
  }

  return (
    <header css={wrap(theme, width, isOpen)}>
      <div css={top_wrap(width)}>
        <Logo />
        <div css={icon_container(width)}>
          {isOpen ? (
            <Close onClick={handleIsOpen} />
          ) : (
            <AllMenuIcon onClick={handleIsOpen} />
          )}
        </div>
      </div>
      {isOpen && (
        <ul css={menu_wrap(width)}>
          {menu_data.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                handleSelectedMenu(idx);
              }}
            >
              <p css={depth1_text(theme)}>{item.depth1}</p>
              {idx === selectedMenu && (
                <ul css={depth2_menu_wrap(width)}>
                  {item.depth2.map((item, idx) => (
                    <li key={idx} css={depth2_wrap(width)}>
                      <Link href={item.link} onClick={handleIsOpen}>
                        <p css={depth2_text(theme)}>{item.text}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

const wrap = (theme: CustomTheme, width: number, isOpen: boolean) => css`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: ${isOpen ? "100vh" : "auto"};

  background-color: ${theme.colors.mono.white};
`;

const top_wrap = (width: number) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${width / 18.75 > 20 ? 20 : width / 18.75}px;
`;

const menu_wrap = (width: number) => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: ${width / 18.75 > 20 ? 20 : width / 18.75}px;
`;
const depth2_menu_wrap = (width: number) => css`
  padding-top: 6px;
`;
const depth2_wrap = (width: number) => css`
  height: 36px;
  padding: 7px 10px;
`;

const icon_container = (width: number) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${width / 43.6 < 31 ? 31 : width / 43.6}px;
  height: ${width / 43.6 < 31 ? 31 : width / 43.6}px;
  cursor: pointer;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const depth1_text = (theme: CustomTheme) => css`
  padding: 7px 10px;

  color: #121212;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 22px;

  cursor: pointer;

  transition: 0.3s ease-out;

  &:hover {
    color: ${theme.colors.point.primary};
  }
`;

const depth2_text = (theme: CustomTheme) => css`
  color: #3c3c3c;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;

  transition: 0.3s ease-out;

  &:hover {
    color: ${theme.colors.point.primary};
  }
`;
