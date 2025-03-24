"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { footer_menu_data, relative_site_data } from "@/datas/menuData";
import ArrowDownIcon from "@/assets/components/ui/footer/Fnb/arrowDonw.svg";
import { useState } from "react";

export default function Fnb() {
  const theme = useTheme() as CustomTheme;
  const relative_site_placeholder_ = "관련사이트";
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div css={wrap(theme)}>
      <ul css={menu_wrap}>
        {footer_menu_data.map((item, idx) => (
          <li key={item.text}>
            <Link href={item.link}>
              <p css={link_text(theme, idx)}>{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div css={relative_site_wrap}>
        <div css={relative_site_placeholder(theme)} onClick={handleIsOpen}>
          <p>{relative_site_placeholder_}</p>
          <ArrowDownIcon />
        </div>
        <ul css={relative_site_menu_wrap(theme, isOpen)}>
          {relative_site_data.map((item) => (
            <li key={item.text} css={relative_site_menu(theme)}>
              <Link href={item.link}>
                <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const wrap = (theme: CustomTheme) =>
  css`
    width: 100%;
    padding: 15px 260px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid ${theme.colors.mono.stroke};

    @media (max-width: 1400px) {
      padding: 15px 160px;
    }
    @media (max-width: 1000px) {
      padding: 15px 100px;
    }
    @media (max-width: 800px) {
      padding: 20px 80px;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 15px;
    }
    @media (max-width: 500px) {
      padding: 20px 40px;
    }
  `;

const menu_wrap = css`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 800px) {
    gap: 16px;
  }
`;

const link_text = (theme: CustomTheme, idx: number) => css`
  position: relative;

  font-size: ${theme.fontSize.md};
  color: ${theme.colors.mono.textLight};
  font-weight: ${theme.fontWeight.bold};
  line-height: 150%;

  &:after {
    content: "";
    display: ${idx > 0 ? "block" : "none"};

    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);

    width: 1px;
    height: 14px;
    background-color: ${theme.colors.mono.stroke};
  }

  @media (max-width: 800px) {
    font-size: ${theme.fontSize.xs};
    &:after {
      left: -8px;
    }
  }
  @media (max-width: 600px) {
    white-space: nowrap;

    &:after {
      display: none;
    }
  }
`;

const relative_site_wrap = css`
  position: relative;
`;

const relative_site_placeholder = (theme: CustomTheme) =>
  css`
    display: flex;
    width: 210px;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;

    border-radius: 74px;
    border: 1px solid ${theme.colors.mono.stroke};

    cursor: pointer;

    @media (max-width: 800px) {
      width: 160px;

      font-size: ${theme.fontSize.xs};
      padding: 6px 12px;
    }
  `;

const relative_site_menu_wrap = (theme: CustomTheme, isOpen: boolean) => css`
  display: ${isOpen ? "flex" : "none"};

  position: absolute;
  bottom: calc(100% + 10px);
  z-index: 10;

  width: 100%;
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid ${theme.colors.mono.stroke};
  background-color: ${theme.colors.mono.white};
`;
const relative_site_menu = (theme: CustomTheme) => css`
  width: 100%;
  padding: 10px 20px;

  background-color: ${theme.colors.mono.white};

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.point.highlightLight};
  }

  @media (max-width: 800px) {
    font-size: ${theme.fontSize.xs};
    padding: 6px 12px;
  }
`;
