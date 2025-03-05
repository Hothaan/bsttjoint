/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { branch_data } from "@/datas/menuData";
import LocationIcon from "@/assets/components/ui/header/ChooseBranch/location.svg";
import ArrowDownIcon from "@/assets/components/ui/header/ChooseBranch/arrowDown.svg";

export default function ChooseBranch() {
  const theme = useTheme() as CustomTheme;
  const router = useRouter();
  const [isdepth1MenuOpen, setisdepth1MenuOpen] = useState(false);

  const button_text_ = "튼튼마디 지점선택";

  function handleisdepth1MenuOpen() {
    setisdepth1MenuOpen(!isdepth1MenuOpen);
  }

  function handleIsThisBranch(pathname: string, link: string): boolean {
    return router.pathname.includes(link);
  }

  return (
    <div css={wrap}>
      <div css={button(theme)} onClick={handleisdepth1MenuOpen}>
        <div css={inner_container}>
          <LocationIcon />
          <p css={button_text(theme)}>{button_text_}</p>
        </div>
        <ArrowDownIcon />
      </div>
      <ul css={depth1_menu_wrap(theme, isdepth1MenuOpen)}>
        {branch_data.map((branch) => (
          <li key={branch.depth1} css={depth1_menu}>
            <p css={depth1_text(theme)}>{branch.depth1}</p>
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
                    <div>
                      <p
                        css={depth2_menu_text(
                          theme,
                          handleIsThisBranch(router.pathname, item.link),
                          item.isAvailable
                        )}
                      >
                        {item.text}
                      </p>
                    </div>
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

const inner_container = css`
  display: flex;
  gap: 6px;
`;

const button = (theme: CustomTheme) => css`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;

  background-color: ${theme.colors.point.primaryLight};
  border-radius: 80px;

  transition: background-color 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.point.primaryLightHover};
  }
`;

const button_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

const depth1_menu_wrap = (theme: CustomTheme, isdepth1MenuOpen: boolean) => css`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);

  display: ${isdepth1MenuOpen ? "flex" : "none"};
  padding: 24px;

  border-radius: 15px;
  border: 1px solid ${theme.colors.mono.stroke};
  depth1_menu-shadow: 0px 10px 30px -4px rgba(35, 48, 59, 0.1);
  background-color: ${theme.colors.mono.white};
`;
const depth1_menu = css`
  width: 78px;
`;

const depth1_text = (theme: CustomTheme) => css`
  padding: 13px 0;
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
