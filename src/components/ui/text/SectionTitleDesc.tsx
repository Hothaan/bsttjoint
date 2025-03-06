/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface ISectionTitleDesc {
  color: "white" | "black";
  title: string;
  desc: (string | React.ReactNode)[];
}

export default function SectionTitleDesc(prop: ISectionTitleDesc) {
  const { title, desc, color } = prop;

  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap}>
      <p css={title_style(theme, color)}>{title}</p>
      <p css={desc_style(theme, color)}>{desc}</p>
    </div>
  );
}

const wrap = css`
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const title_style = (theme: CustomTheme, color: "white" | "black") => css`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  color: ${color === "white"
    ? theme.colors.mono.white
    : theme.colors.point.primary};
`;
const desc_style = (theme: CustomTheme, color: "white" | "black") => css`
  font-size: ${theme.fontSize.st};
  font-weight: ${theme.fontWeight.bold};
  color: ${color === "white"
    ? theme.colors.mono.white
    : theme.colors.mono.black};
  white-space: nowrap;

  .highlight {
    display: inline-block;
    position: relative;
    z-index: 1;
    background-color: #31915d;
    padding: 0 0.1em;
    display: inline-block;
    width: auto;
  }
`;
