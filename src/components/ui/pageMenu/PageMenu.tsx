"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface IPageMenu {
  depth2: { text: string; link: string }[];
  isDepth3?: boolean;
}

export default function PageMenu(prop: IPageMenu) {
  const { depth2, isDepth3 } = prop;
  const { width } = useWindowSizeContext();

  const theme = useTheme() as CustomTheme;
  const router = useRouter();
  return (
    width > 680 && (
      <div css={wrap}>
        {depth2.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            css={nav_item(theme, router.pathname.includes(item.link), idx)}
          >
            <p css={nav_item_text(router.pathname.includes(item.link))}>
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    )
  );
}

const wrap = css`
  display: flex;
  padding: 0 134px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;

  @media (max-width: 1200px) {
    padding: 0 80px;
  }
  @media (max-width: 960px) {
    padding: 0;
  }
`;

const nav_item = (theme: CustomTheme, isHere: boolean, idx: number) => css`
  display: flex;
  height: 86px;
  padding: 24px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  background-color: ${isHere ? "#018C3B" : "#fff"};
  transition: 0.3s ease-in-out;

  border-left: ${idx === 0 ? "1px solid #dbdbdb" : "none"};
  border-right: 1px solid #dbdbdb;

  &:hover {
    background-color: ${isHere
      ? theme.colors.point.primaryLightHover
      : "#d9d9d9"};
  }

  @media (max-width: 1200px) {
    height: 60px;
    padding: 12px 0px;
  }
`;
const nav_item_text = (isHere: boolean) => css`
  color: ${isHere ? "#fff" : "#ACACAC"};
  leading-trim: both;
  text-edge: cap;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;

  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;
