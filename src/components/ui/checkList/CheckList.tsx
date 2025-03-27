"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Check from "@/assets/components/ui/checklist/check.svg";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface ICheckList {
  color: "white" | "black";
  checkListData: string[];
}
export default function CheckList(prop: ICheckList) {
  const { checkListData, color } = prop;

  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return (
    <ul css={wrap(width)}>
      {checkListData.map((item) => (
        <li key={item} css={list_item}>
          <Check />
          <p css={item_text(theme, color, width)}>{item}</p>
        </li>
      ))}
    </ul>
  );
}

const wrap = (width: number) => css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${width / 56.4}px;

  @media (max-width: 1400px) {
    gap: ${width / 80}px;
  }

  @media (max-width: 960px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
  @media (max-width: 370px) {
    gap: 12px;
  }
`;

const list_item = css`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

const item_text = (
  theme: CustomTheme,
  color: "white" | "black",
  width: number
) => css`
  color: ${color === "white"
    ? theme.colors.mono.white
    : theme.colors.mono.text};
  font-size: ${width / 80 < 20 ? 16 : width / 80}px;
  font-weight: ${theme.fontWeight.semiBold};
  letter-spacing: -0.04em;

  @media (max-width: 374px) {
    font-size: 16px;
  }
  @media (max-width: 300px) {
    font-size: 14px;
  }
`;
