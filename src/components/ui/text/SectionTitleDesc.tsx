"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

export interface ISectionTitleDesc {
  titleColor: string;
  descColor: string;
  title: string | (string | React.ReactNode)[];
  desc: (string | React.ReactNode)[];
  caption?: string;
  branch?: string;
  justify?: string;
  align?: string;
}

export default function SectionTitleDesc(prop: ISectionTitleDesc) {
  const {
    title,
    desc,
    caption,
    branch,
    titleColor,
    descColor,
    justify,
    align,
  } = prop;

  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return (
    <div css={wrap(width, justify, align)}>
      <p css={title_style(theme, titleColor, width, align)}>
        {typeof title === "string" ? title : renderWidthKeys(title)}
      </p>
      <div css={desc_wrap}>
        <p css={desc_style(theme, descColor, width)}>{renderWidthKeys(desc)}</p>
        {branch && <span css={branch_text}>-{branch}</span>}
      </div>
      {caption && <p css={caption_style(theme, width)}>{caption}</p>}
    </div>
  );
}

const wrap = (width: number, justify?: string, align?: string) => css`
  // width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${justify ? justify : "start"};
  align-items: ${align ? align : "start"};
  gap: ${width / 128}px;
`;

const title_style = (
  theme: CustomTheme,
  color: string,
  width: number,
  align?: string
) => css`
  font-size: ${width / 80 < 18 ? 18 : width / 80}px;
  font-weight: ${theme.fontWeight.bold};
  color: ${color};
  z-index: 1;
  text-transform: capitalize;
  width: 100%;
  text-align: ${align || "start"};

  .green {
    color: ${theme.colors.point.primary};
  }

  @media (max-width: 960px) {
    font-size: 30px;
  }
  @media (max-width: 720px) {
    font-size: 26px;
  }
  @media (max-width: 680px) {
    font-size: 24px;
  }
  @media (max-width: 540px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const desc_wrap = css`
  display: flex;
  gap: 21px;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 8px;
  }
`;
const desc_style = (theme: CustomTheme, color: string, width: number) => css`
  font-size: ${width / 35.5 < 34 ? 34 : width / 35.5}px;
  font-weight: ${theme.fontWeight.bold};
  color: ${color};
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

  .green {
    color: #018c3b;
  }

  @media (max-width: 1800px) {
    font-size: 48px;
  }
  @media (max-width: 1600px) {
    font-size: 44px;
  }
  @media (max-width: 1400px) {
    font-size: 40px;
  }
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 1000px) {
    font-size: ${width / 35.5 < 30 ? 30 : width / 35.5}px;
  }
  @media (max-width: 374px) {
    font-size: 24px;
  }
  @media (max-width: 300px) {
    font-size: 22px;
  }
`;

const branch_text = css`
  color: #018c3b;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 18px;
  }
`;

const caption_style = (theme: CustomTheme, width: number) => css`
  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  opacity: 0.5;

  margin-top: 24px;
`;
