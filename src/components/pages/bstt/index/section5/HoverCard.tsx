/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import ArrowRight from "@/assets/components/pages/bstt/index/section5/arrowRight.svg";

interface IHoverCard {
  width: string;
  img: string;
  defaultText: (string | React.ReactNode)[];
  hoverText: {
    title: (string | React.ReactNode)[];
    desc: (string | React.ReactNode)[];
  };
}

export default function HoverCard(prop: IHoverCard) {
  const { width, img, defaultText, hoverText } = prop;

  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap(width, img)}>
      {/* <div css={image_container}>
        
        <img src={img} alt="card" />
      </div> */}

      <div css={default_text_wrap}>
        <p css={default_text(theme)}>{defaultText}</p>
      </div>
      <div css={hover_text_wrap}>
        <ArrowRight />
        <p css={hover_text_title(theme)}>{hoverText.title}</p>
        <p css={hover_text_desc(theme)}>{hoverText.desc}</p>
      </div>
    </div>
  );
}

const wrap = (width: string, img: string) => css`
  width: ${width};
  position: relative;
  height: 460px;

  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const default_text_wrap = css`
  position: absolute;

  bottom: 50px;
  left: 34px;
`;

// const image_container = (img: string) => css`
//   img {
//     object-fit: cover;
//     height: 100%;
//     width: auto;
//   }
// `;

const default_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};

  .highlight {
    color: ${theme.colors.point.extraHighlight};
  }
`;

const hover_text_wrap = css`
  display: none;

  position: absolute;
`;

const hover_text_title = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
`;
const hover_text_desc = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semiBold};
`;
