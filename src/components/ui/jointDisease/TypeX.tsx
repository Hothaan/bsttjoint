"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import SectionTitleSimple from "../text/SectionTitleSimple";
import ContentsContainer from "../container/ContentsContainer";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

interface ITypeX {
  sectionTitleSimple: ISectionTitleSimple;
  cardData: { img: string; text: (string | React.ReactNode)[] }[];
  bgColor?: string;
}

export default function TypeX(prop: ITypeX) {
  const { sectionTitleSimple, cardData, bgColor } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const bgColor_ = `#F4F4F4`;
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <ContentsContainer bgColor={bgColor || bgColor_}>
      <div css={wrap}>
        <SectionTitleSimple {...sectionTitleSimple} />
        {width > 1900 ? (
          <div css={card_wrap}>
            {cardData.map((item, idx) => (
              <div key={idx + `TypeX card item`} css={card_item}>
                <p css={idx_wrap}>
                  <span css={idx_text}>0{idx + 1}</span>
                  <span css={circle}></span>
                </p>
                <div css={image_container}>
                  <div css={gradient}></div>
                  <img src={item.img} alt="card" />
                  <div css={card_text_wrap}>
                    <p css={card_text}>{renderWidthKeys(item.text)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div css={slide_container}>
            <div css={slide_wrap}>
              <Swiper
                scrollbar={{
                  el: ".custom-scrollbar",
                  hide: false,
                  draggable: true,
                }}
                spaceBetween={20}
                slidesPerView={width > 480 ? "auto" : 1.15}
                modules={[Scrollbar]}
                style={{ width: `100%`, overflow: "visible" }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {cardData.map((item, idx) => {
                  return (
                    <SwiperSlide
                      key={idx + `TypeX card item`}
                      style={{
                        width: width > 480 ? "368px" : "auto",
                      }}
                    >
                      <div css={card_wrap}>
                        <div css={card_item}>
                          <p css={idx_wrap}>
                            <span css={idx_text}>0{idx + 1}</span>
                            <span css={circle}></span>
                          </p>
                          <div css={image_container}>
                            <div css={gradient}></div>
                            <img src={item.img} alt="card" />
                            <div css={card_text_wrap}>
                              <p css={card_text}>
                                {renderWidthKeys(item.text)}
                              </p>
                            </div>
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
        )}
      </div>
    </ContentsContainer>
  );
}

const slide_container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media (max-width: 960px) {
    gap: 24px;
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

const wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
const card_wrap = css`
  display: flex;
  gap: 22px;
`;
const card_item = css`
  position: relative;

  display: flex;
  align-items: end;

  padding-top: 30px;
`;
const idx_wrap = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: end;
  justify-content: center;
`;
const idx_text = css`
  display: block;

  color: #3c3c3c;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 84px;
  font-style: normal;
  font-weight: 700;
  line-height: 0.7em;

  @media (max-width: 374px) {
    font-size: 60px;
  }
`;
const circle = css`
  display: block;

  width: 10px;
  height: auto;
  aspect-ratio: 1/1;
  background-color: #018c3b;
  border-radius: 50%;
`;
const image_container = css`
  position: relative;

  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 368 / 520;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const gradient = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 29.17%,
    rgba(0, 0, 0, 0.36) 100%
  );
`;
const card_text_wrap = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 35px 30px;

  display: flex;
  align-items: end;

  @media (max-width: 960px) {
    padding: 30px;
  }
  @media (max-width: 374px) {
    padding: 20px;
  }
`;
const card_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
