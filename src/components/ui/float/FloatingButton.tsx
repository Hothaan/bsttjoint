/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface IFloatingButton {
  icon: React.ReactNode;
  link: string;
  text: string;
  bg: string;
}

export default function FloatingButton(prop: IFloatingButton) {
  const { icon, link, text, bg } = prop;

  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return (
    <div css={wrap(theme, bg, width)}>
      <Link href={link} css={inner_wrap}>
        {icon}
        <p css={button_text(theme)}>{text}</p>
      </Link>
    </div>
  );
}

const wrap = (theme: CustomTheme, bg: string, width: number) =>
  css`
    min-width: 101px;
    padding: 10px 16px;
    border-radius: 40px;

    flex-shrink: 0;

    background-color: ${bg};
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.15);

    @media (max-width: 1000px) {
      width: 101px;
      padding: 10px 12px;
    }
  `;

const inner_wrap = css`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  min-width: 81px;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 1000px) {
    gap: 4px;
    width: 81px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const button_text = (theme: CustomTheme) =>
  css`
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.mono.white};
    white-space: nowrap;

    @media (max-width: 1000px) {
      font-size: 13px;
    }
  `;
