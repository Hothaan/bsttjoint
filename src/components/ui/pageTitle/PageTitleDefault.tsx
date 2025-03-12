/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Home from "@/assets/components/ui/pageTitle/home.svg";
import ArrowRight from "@/assets/components/ui/pageTitle/arrowRight.svg";
import Play from "@/assets/components/ui/pageTitle/play.svg";
import { menu_data } from "@/datas/menuData";

interface IPageTitleDefault {
  imgPc: string;
  imgMo: string;
  desc: string;
  depth1: string;
  depth2: string;
  depth3?: string;
  button?: {
    text: string;
    link: string;
  };
}

export default function PageTitleDefault(prop: IPageTitleDefault) {
  const { imgPc, imgMo, desc, depth1, depth2, depth3, button } = prop;
  const router = useRouter();

  function makeBreadCrumble(depth1: string, depth2: string, depth3?: string) {
    const depth2_crumble_ = menu_data
      .filter((item) => item.depth1 === depth1)[0]
      .depth2.filter((item) => router.pathname.includes(item.link))[0];
    if (depth3 === undefined) {
      return [depth1, depth2_crumble_.text];
    } else {
      const depth3_crumble_ =
        depth2_crumble_?.depth3 !== undefined
          ? depth2_crumble_.depth3?.filter(
              (item) => item.link === router.pathname
            )[0]
          : { text: `` };
      return [depth1, depth2_crumble_?.text, depth3_crumble_?.text];
    }
  }

  const breadCrumble_ = makeBreadCrumble(depth1, depth2, depth3);

  return (
    <div css={wrap(imgPc, imgMo)}>
      <div css={content_wrap}>
        <div css={bread_crumble_wrap}>
          <div css={home_icon_wrap}>
            <Home />
          </div>
          <div css={bread_crumble_inner_wrap}>
            {breadCrumble_.map((item, idx) => (
              <div css={bread_crumble_item_wrap} key={idx}>
                {idx > 0 && (
                  <div css={arrow_icon_wrap}>
                    <ArrowRight />
                  </div>
                )}
                <p css={bread_crumble_text}>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div css={title_desc_wrap}>
          <p css={title_text}>{breadCrumble_[breadCrumble_.length - 1]}</p>
          <p css={desc_text}>{desc}</p>
        </div>
      </div>
      {button && (
        <Link href={button.link} css={button_wrap}>
          <div css={play_icon_wrap}>
            <Play />
          </div>
          <p css={button_text}>{button.text}</p>
        </Link>
      )}
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

    display: flex;
    align-items: center;
    gap: 96px;

    @media (max-width: 1600px) {
      padding: 100px 200px;
    }
    @media (max-width: 1400px) {
      padding: 80px 160px;
    }
    @media (max-width: 1200px) {
      padding: 80px 140px;
    }
    @media (max-width: 960px) {
      padding: 80px 20px 80px;
      background-image: url(${imgMo});

      flex-direction: column;
      align-items: start;
      gap: 16px;
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

const bread_crumble_inner_wrap = css`
  display: flex;
  align-items: center;
  gap: 8px;
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

  white-space: nowrap;
`;

const home_icon_wrap = css`
  width: 24px;
  height: 24px;

  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    width: 20px;
    height: 20px;
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

const button_wrap = css`
  display: flex;
  padding: 20px 24px;
  border-radius: 80px;
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media (max-width: 1600px) {
    padding: 16px 20px;
    gap: 8px;
  }
  @media (max-width: 960px) {
    padding: 14px;
    gap: 6px;
  }
`;
const play_icon_wrap = css`
  width: 30px;
  height: 30px;

  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1600px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 960px) {
    width: 20px;
    height: 20px;
  }
`;
const button_text = css`
  color: #121212;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
`;
