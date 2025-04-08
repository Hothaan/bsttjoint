"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FloatingButton from "@/components/ui/float/FloatingButton";
import { floating_menu_data } from "@/datas/menuData";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface IFloatingButtonsContainer {
  branch: keyof typeof floating_menu_data;
  page: keyof (typeof floating_menu_data)[keyof typeof floating_menu_data];
}

export default function FloatingButtonsContainer(
  prop: IFloatingButtonsContainer
) {
  const { branch, page } = prop;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const menuItems_pc =
    floating_menu_data?.[branch]?.[page].filter((item) => item.type !== "mo") ||
    [];
  const menuItems_mo =
    floating_menu_data?.[branch]?.[page].filter((item) => item.type !== "pc") ||
    [];

  return (
    <div css={width > 1000 ? pc_wrap(width) : mo_wrap(width)}>
      {width > 1000
        ? menuItems_pc.map((item) => (
            <FloatingButton
              key={item.text}
              icon={item.icon}
              link={item.link}
              text={item.text}
              bg={item.bg}
            />
          ))
        : menuItems_mo.map((item) => (
            <FloatingButton
              key={item.text}
              icon={item.icon}
              link={item.link}
              text={item.text}
              bg={item.bg}
            />
          ))}
    </div>
  );
}

const pc_wrap = (width: number) => css`
  position: fixed;
  right: ${width / 27.4}px;
  bottom: ${width / 41.7}px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  z-index: 10;
`;

const mo_wrap = (width: number) => css`
  position: fixed;

  right: 14px;
  bottom: 24px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  flex-shrink: 0;

  z-index: 10;

  @media (max-width: 374px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
