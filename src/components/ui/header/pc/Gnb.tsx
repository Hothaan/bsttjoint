"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import { menu_data } from "@/datas/menuData";
import { useWindowSizeContext } from "../../provider/WindowSizeProvider";

interface IGnb {
  isDepth1MenuOpen: boolean;
  setisDepth1MenuOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function Gnb(prop: IGnb) {
  const { isDepth1MenuOpen, setisDepth1MenuOpen } = prop;

  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const router = useRouter();
  const [isDepth2MenuOpen, setisDepth2MenuOpen] = useState<number | null>(null);

  function handleisDepth1MenuOpen(boolean: boolean) {
    setisDepth1MenuOpen(boolean);
  }

  function handleisDepth2MenuOpen(idx: number) {
    setisDepth2MenuOpen(idx);
  }

  function handleisDepth2MenuClose() {
    setisDepth2MenuOpen(null);
  }

  function handleMoverToDepth1Page(path: string) {
    router.push(path);
  }
  if (width === null) {
    return;
  }
  return (
    <div css={wrap}>
      <ul css={depth1_menu_wrap}>
        {menu_data.map((item, idx) => (
          <li
            key={item.depth1}
            css={depth1_menu(theme, isDepth1MenuOpen, width)}
            onMouseOver={() => {
              handleisDepth1MenuOpen(true);
            }}
            onMouseLeave={() => {
              handleisDepth1MenuOpen(false);
            }}
          >
            <p
              css={depth1_menu_text(theme, width)}
              onClick={() => {
                handleMoverToDepth1Page(
                  item.depth2.filter((item2) => item2.text === item.depth1)[0]
                    .link
                );
              }}
            >
              {item.depth1}
            </p>
            <ul
              css={depth2_menu_wrap(theme, isDepth1MenuOpen, idx, width)}
              onMouseOver={() => handleisDepth2MenuOpen(idx)}
              onMouseLeave={() => handleisDepth2MenuClose()}
            >
              {item.depth2.map((item) => (
                <li key={item.text} css={depth2_menu(width)}>
                  <Link
                    href={item.link}
                    css={depth2_menu_inner_container(width)}
                  >
                    <span css={dot(theme, router.pathname, item.link)}></span>
                    <p
                      css={depth2_menu_text(
                        theme,
                        isDepth2MenuOpen,
                        idx,
                        router.pathname,
                        item.link
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
  );
}

const wrap = css``;

const depth1_menu_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const depth1_menu = (
  theme: CustomTheme,
  isDepth1MenuOpen: boolean,
  width: number
) => css`
  width: ${width / 12 < 100 ? 100 : width / 12}px;
  padding: ${width / 54.8}px 0;

  position: relative;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.point.highlightDeep};

    ul {
      background-color: ${isDepth1MenuOpen
        ? theme.colors.point.highlightDeep
        : theme.colors.mono.white};
    }
  }
`;

const depth1_menu_text = (theme: CustomTheme, width: number) => css`
  flex-shrink: 0;

  color: ${theme.colors.mono.black};
  text-align: center;
  font-size: ${width / 96 < 14 ? 14 : width / 96}px;
  font-style: normal;
  font-weight: ${theme.fontWeight.bold};
  line-height: normal;

  cursor: pointer;
`;

const depth2_menu_wrap = (
  theme: CustomTheme,
  isDepth1MenuOpen: boolean,
  idx: number,
  width: number
) => css`
  position: absolute;
  top: 100%;

  width: ${width / 12 < 100 ? 100 : width / 12}px;
  height: 320px;
  padding: ${width / 60 > 32 ? 32 : width / 60}px 0px;

  display: ${isDepth1MenuOpen ? "flex" : "none"};
  flex-direction: column;
  align-items: center;

  border-top: 1px solid ${theme.colors.mono.stroke};

  transition: background-color 0.3s ease-in-out;

  &: after {
    display: block;
    content: "";
    position: absolute;

    z-index: 0;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border-left: ${idx === 0
      ? `1px solid ${theme.colors.mono.stroke}`
      : "none"};
    border-right: ${idx === menu_data.length - 1
      ? `1px solid ${theme.colors.mono.stroke}`
      : "none"};
  }

  @media (min-width: 1921px) {
    height: 400px;
  }
`;

const depth2_menu = (width: number) => css`
  z-index: 1;

  width: ${width / 12}px;
  padding: ${width / 213.3}px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const depth2_menu_inner_container = (width: number) => css`
  display: flex;
  align-items: center;
  gap: ${width / 480}px;
`;

const dot = (theme: CustomTheme, pathname: string, link: string) => css`
  width: 3px;
  height: 3px;

  display: ${pathname === link ? "block" : "none"};
  background-color: ${pathname === link
    ? theme.colors.point.primary
    : "transparent"};
`;

const depth2_menu_text = (
  theme: CustomTheme,
  isDepth2MenuOpen: number | null,
  idx: number,
  pathname: string,
  link: string
) => css`
  flex-shrink: 0;

  text-align: center;
  line-height: 140%;
  color: ${pathname === link
    ? theme.colors.point.primary
    : isDepth2MenuOpen === idx
    ? theme.colors.mono.black
    : theme.colors.mono.text};
  font-weight: ${isDepth2MenuOpen === idx
    ? theme.fontWeight.bold
    : theme.fontWeight.normal};
  font-size: ${theme.fontSize.xs};

  cursor: pointer;

  transition: 0.3s ease-in-out;
`;
