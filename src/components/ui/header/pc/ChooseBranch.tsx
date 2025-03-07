/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { branch_data } from "@/datas/menuData";
import LocationIcon from "@/assets/components/ui/header/pc/ChooseBranch/location.svg";
import ArrowDownIcon from "@/assets/components/ui/header/pc/ChooseBranch/arrowDown.svg";
import { useWindowSizeContext } from "../../provider/WindowSizeProvider";

export default function ChooseBranch() {
  const theme = useTheme() as CustomTheme;
  const router = useRouter();
  const [isdepth1MenuOpen, setisdepth1MenuOpen] = useState(false);
  const { width } = useWindowSizeContext();

  const button_text_ = "튼튼마디 지점선택";

  function handleisdepth1MenuOpen() {
    setisdepth1MenuOpen(!isdepth1MenuOpen);
  }

  function handleIsThisBranch(pathname: string, link: string): boolean {
    return router.pathname.includes(link);
  }

  return (
    <div css={wrap}>
      <div css={button(theme, width)} onClick={handleisdepth1MenuOpen}>
        <div css={inner_container(width)}>
          <div css={location_icon_container(width)}>
            <LocationIcon />
          </div>
          <p css={button_text(theme, width)}>{button_text_}</p>
        </div>
        <ArrowDownIcon />
      </div>
      <ul css={depth1_menu_wrap(theme, isdepth1MenuOpen, width)}>
        {branch_data.map((branch) => (
          <li key={branch.depth1} css={depth1_menu(width)}>
            <p css={depth1_text(theme, width)}>{branch.depth1}</p>
            <ul>
              {branch.depth2.map((item) => (
                <li key={item.text}>
                  {item.isAvailable ? (
                    <Link href={item.link} onClick={handleisdepth1MenuOpen}>
                      <p
                        css={depth2_menu_text(
                          theme,
                          handleIsThisBranch(router.pathname, item.link),
                          item.isAvailable
                        )}
                      >
                        {item.text}
                      </p>
                    </Link>
                  ) : (
                    <p
                      css={depth2_menu_text(
                        theme,
                        handleIsThisBranch(router.pathname, item.link),
                        item.isAvailable
                      )}
                    >
                      {item.text}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

const wrap = css`
  position: relative;
`;

const inner_container = (width: number) => css`
  display: flex;
  gap: ${width / 320}px;
  align-items: center;
`;
const location_icon_container = (width: number) => css`
  display: flex;
  width: ${width / 96 < 16 ? 16 : width / 96}px;
  height: ${width / 96 < 16 ? 16 : width / 96}px;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const button = (theme: CustomTheme, width: number) => css`
  display: flex;
  padding: ${width / 192 < 6 ? 6 : width / 192}px
    ${width / 96 < 8 ? 8 : width / 96}px;
  align-items: center;
  gap: ${width / 192 < 10 ? width / 192 : 10}px;

  background-color: ${theme.colors.point.primaryLight};
  border-radius: 80px;

  transition: background-color 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.point.primaryLightHover};
  }
`;

const button_text = (theme: CustomTheme, width: number) => css`
  color: ${theme.colors.mono.white};
  font-size: ${width / 113 < 12 ? 12 : width / 113}px;
  font-style: normal;
  font-weight: 600;
`;

const depth1_menu_wrap = (
  theme: CustomTheme,
  isdepth1MenuOpen: boolean,
  width: number
) => css`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;

  display: ${isdepth1MenuOpen ? "flex" : "none"};
  padding: ${width / 80}px;

  border-radius: 15px;
  border: 1px solid ${theme.colors.mono.stroke};
  box-shadow: 0px 10px 30px -4px rgba(35, 48, 59, 0.1);
  background-color: ${theme.colors.mono.white};
`;
const depth1_menu = (width: number) => css`
  width: ${width / 24.6 < 64 ? 64 : width / 24.6}px;
`;

const depth1_text = (theme: CustomTheme, width: number) => css`
  padding: ${width / 147.6}px 0;
  color: ${theme.colors.mono.black};
  font-size: ${theme.fontSize.xs};
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  line-height: 140%;
  white-space: nowrap;
`;

const depth2_menu_text = (
  theme: CustomTheme,
  isThisBranch: boolean,
  isAvailable: boolean
) => css`
  padding: 13px 0;
  color: ${isThisBranch ? theme.colors.mono.text : theme.colors.mono.textLight};
  font-size: ${theme.fontSize.xs};
  text-align: center;
  font-weight: ${isThisBranch
    ? theme.fontWeight.bold
    : theme.fontWeight.normal};
  line-height: 140%;
  white-space: nowrap;

  transition: 0.3s ease-in-out;

  &:hover {
    color: ${isAvailable
      ? theme.colors.point.primary
      : theme.colors.mono.textLight};
  }
`;
