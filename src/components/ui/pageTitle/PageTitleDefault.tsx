/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Home from "@/assets/components/ui/pageTitle/home.svg";
import ArrowRight from "@/assets/components/ui/pageTitle/arrowRight.svg";

interface IPageTitleDefault {
  imgPc: string;
  imgMo: string;
  breadCrumble: string[];
  desc: string;
}

export default function PageTitleDefault(prop: IPageTitleDefault) {
  const { imgPc, imgMo, breadCrumble, desc } = prop;
  return (
    <div css={wrap(imgPc, imgMo)}>
      <div css={content_wrap}>
        <div css={bread_crumble_wrap}>
          <div css={home_icon_wrap}>
            <Home />
          </div>
          {breadCrumble.map((item, idx) => (
            <div css={bread_crumble_item_wrap} key={idx}>
              <div css={arrow_icon_wrap}>
                <ArrowRight />
              </div>
              <p css={bread_crumble_text}>{item}</p>
            </div>
          ))}
          <p></p>
        </div>
        <div css={title_desc_wrap}>
          <p css={title_text}>{breadCrumble[breadCrumble.length - 1]}</p>
          <p css={desc_text}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

const wrap = (imgPc: string, imgMo: string) =>
  css`
    width: 100%;
    padding: 171px 217px;
    aspect-ratio: 1920 / 500;

    background-image: url(${imgPc});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 960px) {
      padding: 80px 20px 80px;
      background-image: url(${imgMo});
    }
    @media (max-width: 680px) {
      padding: 80px 20px 160px;
      background-image: url(${imgMo});
    }
  `;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 54px;

  @media (max-width: 960px) {
    gap: 24px;
  }
`;

const bread_crumble_wrap = css`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 960px) {
    gap: 12px;
  }
`;
const bread_crumble_item_wrap = css`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 960px) {
    gap: 8px;
  }
`;

const bread_crumble_text = css`
  color: #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.15px;
`;

const home_icon_wrap = css`
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const arrow_icon_wrap = css`
  width: 20px;
  height: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const title_desc_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const title_text = css`
  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-size: 54px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 960px) {
    font-size: 34px;
  }
`;

const desc_text = css`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  opacity: 0.5;

  @media (max-width: 960px) {
    font-size: 13px;
  }
`;
