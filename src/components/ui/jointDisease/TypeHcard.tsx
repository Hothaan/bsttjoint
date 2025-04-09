"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import ArrowRight from "@/assets/components/pages/bstt/index/section8/arrowRight.svg";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface ICoreTreatmentCard {
  img: string;
  defaultText: string;
  hoverText: {
    title: string;
    desc: (string | React.ReactNode)[];
  };
}

export default function TypeHcard(prop: ICoreTreatmentCard) {
  const { img, defaultText, hoverText } = prop;

  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  return (
    <div css={wrap(img)}>
      <ImageContainer maxWidth="100%">
        <img src={img} alt="treatment" />
      </ImageContainer>
      <div css={deemed} className="deemed"></div>
      <p css={default_text(theme)} className="default_text">
        {defaultText}
      </p>

      <div css={hover_text_wrap} className="hover_text">
        <p css={hover_text_title(theme)}>
          <ArrowRight />
          {hoverText.title}
        </p>
        <p css={hover_text_desc(theme)}>{hoverText.desc}</p>
      </div>
    </div>
  );
}

const wrap = (img: string) => css`
  position: relative;
  width: calc(33.3% - 15px);

  &:hover {
    .deemed {
      opacity: 0.6;
    }
    .hover_text {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.2s;
    }
    .default_text {
      display: none;
    }
  }

  @media (max-width: 960px) {
    width: calc(50% - 4px);
  }
`;

const deemed = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: 0;
  background: #121212;
  background-blend-mode: multiply;

  transition: opacity 0.3s ease-in-out;
`;

const default_text = (theme: CustomTheme) =>
  css`
    position: absolute;
    bottom: 44px;
    left: 50px;

    color: ${theme.colors.mono.white};
    font-size: 34px;
    font-weight: ${theme.fontWeight.bold};

    @media (max-width: 1800px) {
      bottom: 24px;
      left: 24px;
      font-size: 30px;
    }
    @media (max-width: 960px) {
      bottom: 16px;
      left: 16px;
      font-size: 20px;
    }
    @media (max-width: 370px) {
      font-size: 16px;
    }
  `;

const hover_text_wrap = css`
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  opacity: 0;
  transition: opacity 0.1s ease-in-out;

  @media (max-width: 1800px) {
    padding: 20px;
  }
  @media (max-width: 960px) {
    gap: 8px;
    padding: 20px;
  }
  @media (max-width: 370px) {
    padding: 10px;
  }
`;
const hover_text_title = (theme: CustomTheme) => css`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.qu};
  font-weight: ${theme.fontWeight.bold};

  @media (max-width: 1800px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 370px) {
    font-size: 14px;
    gap: 4px;

    svg {
      display: none;
    }
  }
`;
const hover_text_desc = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  text-align: center;
  font-size: 22px;
  font-weight: ${theme.fontWeight.normal};
  line-height: 150%;
  @media (max-width: 1800px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 370px) {
    font-size: 12px;
  }
`;
