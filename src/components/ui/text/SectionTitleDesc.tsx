/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ISectionTitleDesc {
  titleColor: string;
  descColor: string;
  title: string;
  desc: (string | React.ReactNode)[];
  caption?: string;
  justify?: string;
  align?: string;
}

export default function SectionTitleDesc(prop: ISectionTitleDesc) {
  const { title, desc, caption, titleColor, descColor, justify, align } = prop;

  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return (
    <div css={wrap(width, justify, align)}>
      <p css={title_style(theme, titleColor, width)}>{title}</p>
      <p css={desc_style(theme, descColor, width)}>{renderWidthKeys(desc)}</p>
      {caption && <p css={caption_style(theme, width)}>{caption}</p>}
    </div>
  );
}

const wrap = (width: number, justify?: string, align?: string) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${justify ? justify : "start"};
  align-items: ${align ? align : "start"};
  gap: ${width / 128}px;
`;

const title_style = (theme: CustomTheme, color: string, width: number) => css`
  font-size: ${width / 80 < 18 ? 18 : width / 80}px;
  font-weight: ${theme.fontWeight.bold};
  color: ${color};
  z-index: 1;
  text-transform: capitalize;

  @media (max-width: 960px) {
    font-size: ${width / 20 < 16 ? 16 : width / 20}px;
  }
`;
const desc_style = (theme: CustomTheme, color: string, width: number) => css`
  font-size: ${width / 35.5 < 34 ? 34 : width / 35.5}px;
  font-weight: ${theme.fontWeight.bold};
  color: ${color};
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
    font-size: 20px;
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
