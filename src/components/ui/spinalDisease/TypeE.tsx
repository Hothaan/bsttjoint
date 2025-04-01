"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "../container/ContentsContainer";
import SectionTitleSimple from "../text/SectionTitleSimple";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

interface ITypeE {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    imgPc: string;
    imgMo: string;
    title: string | (string | React.ReactNode)[];
    content: string[][];
  }[];
}

export default function TypeE(prop: ITypeE) {
  const { sectionTitleSimple, pageTitleContent, cardData } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const swiperRef = useRef<SwiperType | null>(null);

  if (width === null) {
    return;
  }

  return (
    <div css={wrap}>
      <div css={title_wrap}>
        <SectionTitleSimple {...sectionTitleSimple} />
        <PageTitleContent {...pageTitleContent} />
      </div>
      <div css={slide_container}>
        <div css={slide_wrap}>
          <Swiper
            scrollbar={{
              el: ".custom-scrollbar",
              hide: false,
              draggable: true,
            }}
            spaceBetween={width > 960 ? 30 : 20}
            centeredSlides={true}
            slidesPerView={width > 960 ? 1.5 : 1.3}
            modules={[Scrollbar]}
            style={{ width: `100%` }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {cardData.map((item, idx) => {
              return (
                <SwiperSlide
                  key={idx + "TypeE slide item"}
                  style={{
                    width: "100%",
                  }}
                >
                  <div css={card_wrap(item.imgPc, item.imgMo)}>
                    <div css={gradient}></div>
                    <div css={card_content_wrap}>
                      <div css={card_idx_wrap}>
                        <p css={card_idx_text}>0{idx + 1}</p>
                        <span css={card_idx_circle}></span>
                      </div>
                      <div css={card_content}>
                        <p css={card_title_text}>
                          {typeof item.title === "string"
                            ? item.title
                            : renderWidthKeys(item.title)}
                        </p>

                        <ul css={content_wrap}>
                          {item.content.map((item, idx) => (
                            <li
                              key={idx + "TypeP card content item"}
                              css={card_content_item}
                            >
                              <p css={card_content_text}>-</p>
                              <p css={card_content_text}>{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div css={slide_bar_wrap}>
          <div className="custom-scrollbar" css={scroll_bar(theme)}></div>
        </div>
      </div>
    </div>
  );
}

const content_wrap = css`
  display: flex;
  flex-direction: column;
`;

const slide_container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media (max-width: 960px) {
    gap: 24px;
  }
`;

const card_wrap = (imgPc: string, imgMo: string) => css`
  position: relative;

  background-image: url(${imgPc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  aspect-ratio: 1300 / 450;

  display: flex;
  align-items: end;

  @media (max-width: 1400px) {
    aspect-ratio: 1300 / 550;
  }
  @media (max-width: 960px) {
    background-image: url(${imgMo});
    aspect-ratio: 280 / 360;
  }
`;

const gradient = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  background: linear-gradient(
    262deg,
    rgba(0, 0, 0, 0) 46.16%,
    rgba(0, 0, 0, 0.4) 78.31%
  );
`;

const card_content_wrap = css`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 50px 65px;

  @media (max-width: 1800px) {
    padding: 50px;
  }
  @media (max-width: 1600px) {
    padding: 40px;
  }
  @media (max-width: 1400px) {
    padding: 32px;
  }
  @media (max-width: 1200px) {
    padding: 28px;
  }
  @media (max-width: 960px) {
    padding: 40px;
  }
  @media (max-width: 840px) {
    padding: 32px;
  }
  @media (max-width: 640px) {
    padding: 28px;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const card_idx_wrap = css`
  display: flex;
  gap: 8px;
  align-items: end;

  @media (max-width: 1800px) {
    left: 50px;
  }
  @media (max-width: 1600px) {
    left: 40px;
  }
  @media (max-width: 1400px) {
    left: 30px;
  }
  @media (max-width: 960px) {
    left: 25px;
    gap: 5px;
  }
  @media (max-width: 374px) {
    left: 20px;
  }
`;
const card_idx_text = css`
  color: #fff;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 128px;
  font-style: normal;
  font-weight: 700;
  line-height: 0.7;

  @media (max-width: 1800px) {
    font-size: 100px;
  }
  @media (max-width: 1600px) {
    font-size: 80px;
  }
  @media (max-width: 1400px) {
    font-size: 60px;
  }
  @media (max-width: 960px) {
    font-size: 84px;
  }
  @media (max-width: 720px) {
    font-size: 64px;
  }
  @media (max-width: 374px) {
    font-size: 50px;
  }
`;
const card_idx_circle = css`
  display: block;
  width: 16px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #018c3b;
  flex-shrink: 0;

  @media (max-width: 1800px) {
    width: 14px;
  }
  @media (max-width: 1600px) {
    width: 12px;
  }
  @media (max-width: 1400px) {
    width: 10px;
  }
  @media (max-width: 960px) {
    width: 8px;
  }
`;
const card_content = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1600px) {
    gap: 15px;
  }
  @media (max-width: 1200px) {
    gap: 12px;
  }
  @media (max-width: 374px) {
    gap: 10px;
  }
`;
const card_content_item = css`
  display: flex;
  gap: 8px;
`;

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 90px;

  width: 100%;
  padding: 180px 0;

  @media (max-width: 1800px) {
    padding: 160px 0;
    gap: 60px;
  }
  @media (max-width: 1400px) {
    padding: 140px 0;
    gap: 40px;
  }
  @media (max-width: 1200px) {
    padding: 120px 0;
  }
  @media (max-width: 1000px) {
    padding: 100px 0;
  }
  @media (max-width: 960px) {
    padding: 80px 0;
    background-image: none;
    gap: 30px;
  }
`;

const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  padding: 0 180px;

  @media (max-width: 1800px) {
    padding: 0 160px;
  }
  @media (max-width: 1400px) {
    padding: 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 0 120px;
    gap: 20px;
  }
  @media (max-width: 1000px) {
    padding: 0 100px;
  }
  @media (max-width: 960px) {
    padding: 0 80px;

    * {
      width: 100%;
      align-items: start !important;
      text-align: left !important;
    }
  }
  @media (max-width: 680px) {
    padding: 0 60px;
  }
  @media (max-width: 540px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
    gap: 15px;
  }
`;

const card_title_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 1800px) {
    font-size: 32px;
  }
  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 720px) {
    font-size: 18px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;

const card_content_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;

const slide_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .swiper-slide.first-visible,
  .swiper-slide.last-visible {
    opacity: 0.4;
  }
`;

const slide_bar_wrap = css`
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 0 180px;

  @media (max-width: 1800px) {
    padding: 0 160px;
  }
  @media (max-width: 1400px) {
    padding: 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 0 100px;
  }
  @media (max-width: 960px) {
    padding: 0 80px;
  }
  @media (max-width: 680px) {
    padding: 0 60px;
  }
  @media (max-width: 540px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const scroll_bar = (theme: CustomTheme) => css`
  width: 100%;

  height: 3px;
  background: #d9d9d9;
  border-radius: 10px;

  .swiper-scrollbar-drag {
    background-color: ${theme.colors.point.primary};
  }
`;
