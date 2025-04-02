"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ArrowRight from "@/assets/components/pages/bstt/index/section5/arrowRight.svg";
import { SetStateAction } from "react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface IHoverCard {
  width: number;
  img: string;
  idx: number;
  defaultText: (string | React.ReactNode)[];
  hoverText: {
    title: (string | React.ReactNode)[];
    desc: (string | React.ReactNode)[];
  };
  onHover: React.Dispatch<SetStateAction<number | null>>;
  onLeave: React.Dispatch<SetStateAction<number | null>>;
}

export default function TypeAcard(prop: IHoverCard) {
  const { width, img, idx, defaultText, hoverText, onHover, onLeave } = prop;

  const theme = useTheme() as CustomTheme;

  return (
    <div
      css={wrap(width, img)}
      onMouseEnter={() => {
        onHover(idx);
      }}
      onMouseLeave={() => {
        onLeave(null);
      }}
    >
      <div css={deemed} className="deemed"></div>
      <div css={gradient} className="gradient"></div>
      <div css={default_text_wrap} className="default_text">
        <p css={default_text(theme)}>{renderWidthKeys(defaultText)}</p>
      </div>
      <div css={hover_text_wrap} className="hover_text">
        <ArrowRight />
        <p css={hover_text_title(theme)}>{hoverText.title}</p>
        <p css={hover_text_desc(theme)}>{hoverText.desc}</p>
      </div>
    </div>
  );
}

const wrap = (width: number, img: string) => css`
  width: calc(${width}% - ${40 / 3}px);
  position: relative;
  height: 460px;

  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 15px;

  transition: 0.5s ease-in-out;

  &:hover {
    border-radius: 30px 30px 30px 0px;
    .gradient {
      display: none;
    }
    .deemed {
      opacity: 0.9;
    }
    .default_text {
      display: none;
    }
    .hover_text {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.5s;
    }
  }

  @media (max-width: 960px) {
    width: calc(${width}% - 10px);
    height: auto;
    aspect-ratio: 163.5 / 200;
    border-radius: 10px;
  }
`;

const gradient = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 15px;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #343434 87.5%);

  background-blend-mode: multiply;

  @media (max-width: 960px) {
    border-radius: 10px;
  }
`;

const deemed = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 30px 30px 30px 0px;
  opacity: 0;
  background: #018c3b;

  transition: 0.3s ease-in-out;

  @media (max-width: 960px) {
    border-radius: 10px 10px 10px 0;
  }
`;

const default_text_wrap = css`
  position: absolute;

  bottom: 50px;
  left: 34px;

  @media (max-width: 1400px) {
    bottom: 30px;
    left: 20px;
  }
  @media (max-width: 960px) {
    bottom: 16px;
    left: 16px;
  }
`;

const default_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: 34px;
  line-height: normal;
  font-weight: ${theme.fontWeight.bold};

  .highlight {
    color: ${theme.colors.point.extraHighlight};
  }
  @media (max-width: 1900px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 960px) {
    font-size: 17px;
  }
`;

const hover_text_wrap = css`
  position: relative;
  z-index: 1;
  padding: 118px 40px 118px 80px;

  svg {
    width: 24px;
    height: 24px;
  }

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;

  @media (max-width: 1400px) {
    padding: 100px 20px 100px 40px;
  }
  @media (max-width: 960px) {
    padding: 19px 16px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const hover_text_title = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: 34px;
  line-height: normal;
  font-weight: ${theme.fontWeight.bold};

  margin-top: 14px;
  margin-bottom: 20px;

  word-break: keep-all;

  @media (max-width: 1900px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;
const hover_text_desc = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.light};
  line-height: 1.4em;

  @media (max-width: 1900px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
`;
