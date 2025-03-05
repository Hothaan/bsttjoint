/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";

interface IFloatingButton {
  icon: React.ReactNode;
  link: string;
  text: string;
  bg: string;
}

export default function FloatingButton(prop: IFloatingButton) {
  const { icon, link, text, bg } = prop;

  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap(theme, bg)}>
      <Link href={link} css={inner_wrap}>
        {icon}
        <p css={button_text(theme)}>{text}</p>
      </Link>
    </div>
  );
}

const wrap = (theme: CustomTheme, bg: string) =>
  css`
    width: fit-content;

    padding: 10px 16px;
    border-radius: 40px;

    background-color: ${bg};
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.15);
  `;

const inner_wrap = css`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const button_text = (theme: CustomTheme) =>
  css`
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.mono.white};
  `;
