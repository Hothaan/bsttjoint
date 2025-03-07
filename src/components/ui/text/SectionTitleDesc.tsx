/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

type Tcolor = "white" | "black" | "green";

interface ISectionTitleDesc {
  color: Tcolor;
  title: string;
  desc: (string | React.ReactNode)[];
}

export default function SectionTitleDesc(prop: ISectionTitleDesc) {
  const { title, desc, color } = prop;

  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return (
    <div css={wrap(color, width)}>
      <p css={title_style(theme, color, width)}>{title}</p>
      <p css={desc_style(theme, color, width)}>{desc}</p>
    </div>
  );
}

const wrap = (color: Tcolor, width: number) => css`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: ${color === "green" ? "center" : "start"};
  align-items: ${color === "green" ? "center" : "start"};
  gap: ${width / 128}px;
`;

const title_style = (theme: CustomTheme, color: Tcolor, width: number) => css`
  font-size: ${width / 80 < 18 ? 18 : width / 80}px;
  font-weight: ${theme.fontWeight.bold};
  color: ${color === "white"
    ? theme.colors.mono.white
    : color === "black"
    ? theme.colors.point.primary
    : "#9CE419"};
  z-index: 1;

  @media (max-width: 960px) {
    font-size: ${width / 20 < 16 ? 16 : width / 20}px;
  }
`;
const desc_style = (theme: CustomTheme, color: Tcolor, width: number) => css`
  font-size: ${width / 35.5 < 34 ? 34 : width / 35.5}px;
  font-weight: ${theme.fontWeight.bold};
  color: ${color === "white"
    ? theme.colors.mono.white
    : theme.colors.mono.black};
  white-space: nowrap;
  z-index: 1;

  text-align: ${color === "green" ? "center" : "left"};

  .highlight {
    display: inline-block;
    position: relative;
    z-index: 1;
    background-color: #31915d;
    padding: 0 0.1em;
    display: inline-block;
    width: auto;
  }

  @media (max-width: 1400px) {
    // white-space: wrap;
  }
  @media (max-width: 1000px) {
    font-size: ${width / 35.5 < 30 ? 30 : width / 35.5}px;
  }
  @media (max-width: 374px) {
    font-size: 24px;
  }
  @media (max-width: 300px) {
    font-size: 20px;
  }
`;
