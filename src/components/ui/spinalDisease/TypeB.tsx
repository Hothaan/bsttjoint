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
import ArrowRight from "@/assets/components/pages/bstt/KeyTreatment/section2/arrowRight.svg";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

interface ITypeB {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  bg: string;
  cardData: {
    img: string;
    desc: (string | React.ReactNode)[];
  }[];
}

export default function TypeB(prop: ITypeB) {
  const { sectionTitleSimple, pageTitleContent, bg, cardData } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const swiperRef = useRef<SwiperType | null>(null);

  if (!width) {
    return <></>;
  }

  return (
    <div css={wrap(bg)}>
      <div css={title_desc_wrap}>
        <SectionTitleSimple {...sectionTitleSimple} />
        <PageTitleContent {...pageTitleContent} />
      </div>
      {width > 1200 ? (
        <div css={card_wrap(cardData.length)}>
          {cardData.map((item, idx) => {
            const new_item_ = {
              ...item,
              isOdd: idx % 2 !== 0,
              isLast: cardData.length - 1 === idx,
            };

            return (
              <div
                css={card_item(new_item_.isLast)}
                className="card"
                key={idx + `TypeB card item`}
              >
                <div css={image_container(new_item_.isLast, new_item_.isOdd)}>
                  <img src={new_item_.img} alt="card" />
                </div>

                <div css={line_wrap(idx, new_item_.isLast, new_item_.isOdd)}>
                  <div css={dot_wrap}>
                    <div css={dot} className="dot"></div>
                    <div css={dot_border} className="dot_border"></div>
                  </div>
                  <div css={icon_wrap(idx, new_item_.isLast, new_item_.isOdd)}>
                    <ArrowRight />
                  </div>
                </div>
                <div css={text_wrap}>
                  <p css={step_style}>{idx + 1}단계</p>
                  <span css={caption_style}>
                    {renderWidthKeys(new_item_.desc)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div css={slide_container}>
          <div css={slide_wrap}>
            <Swiper
              slidesPerView={width - 20 / 300 < 1.5 ? 1.5 : width / 300}
              style={{ width: `100%`, overflow: "visible" }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {cardData.map((item, idx) => {
                const new_item_ = {
                  ...item,
                  isOdd: idx % 2 !== 0,
                  isLast: cardData.length - 1 === idx,
                };

                return (
                  <SwiperSlide
                    key={idx + `TypeB card item`}
                    style={{
                      width: "auto",
                    }}
                  >
                    <div css={card_item(new_item_.isLast)} className="card">
                      <div
                        css={image_container(new_item_.isLast, new_item_.isOdd)}
                      >
                        <img src={new_item_.img} alt="card" />
                      </div>

                      <div
                        css={line_wrap(idx, new_item_.isLast, new_item_.isOdd)}
                      >
                        <div css={dot_wrap}>
                          <div css={dot} className="dot"></div>
                          <div css={dot_border} className="dot_border"></div>
                        </div>
                        <div
                          css={icon_wrap(
                            idx,
                            new_item_.isLast,
                            new_item_.isOdd
                          )}
                        >
                          <ArrowRight />
                        </div>
                      </div>
                      <div css={text_wrap}>
                        <p css={step_style}>{idx + 1}단계</p>
                        <span css={caption_style}>
                          {renderWidthKeys(new_item_.desc)}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
const wrap = (bg: string) => css`
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  background: ${bg};

  gap: 60px;

  @media (max-width: 1800px) {
    padding: 160px 0;
  }
  @media (max-width: 1400px) {
    padding: 140px 0;
  }
  @media (max-width: 1200px) {
    padding: 120px 0;
  }
  @media (max-width: 1000px) {
    padding: 100px 0;
  }
  @media (max-width: 960px) {
    padding: 80px 0;
  }
`;
const title_desc_wrap = css`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 20px;

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

    * {
      width: 100%;
      align-items: left !important;
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
  }
`;

const slide_container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 0 100px;
  }
  @media (max-width: 960px) {
    gap: 24px;
    padding: 0 80px;
  }
  @media (max-width: 680px) {
    gap: 24px;
    padding: 0 60px;
  }
  @media (max-width: 540px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
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

const card_wrap = (length: number) => css`
  display: grid;
  grid-template-columns: repeat(${length}, 1fr);
  align-items: start;
  grid-gap: 0;
`;
const card_item = (isLast?: boolean) => css`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  &:hover {
    .dot {
      width: 20px;
      height: 20px;
    }
    .dot_border {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 960px) {
    gap: 24px;

    margin-bottom: ${!isLast ? "24px" : "0"};

    &:hover {
      .dot {
        width: 14px;
        height: 14px;
      }
      .dot_border {
        width: 24px;
        height: 24px;
      }
    }
  }
  @media (max-width: 680px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    gap: 15px;
  }
`;
const image_container = (isLast?: boolean, isOdd?: boolean) => css`
  aspect-ratio: 384 / 460;
  width: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 960px) {
    aspect-ratio: ${isOdd && isLast ? "375 / 200" : "384 / 460"};
    height: ${isLast ? "50%" : "auto"};
  }
`;

const line_wrap = (idx: number, isLast?: boolean, isOdd?: boolean) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:before {
    content: "";
    display: ${idx > 0 ? "block" : isLast ? "block" : "none"};
    position: absolute;
    top: 50%;
    left: -50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background: #018c3b;
  }

  @media (max-width: 960px) {
    // &:before {
    //   display: ${idx % 2 !== 0 ? "block" : isLast ? "block" : "none"};
    //   left: ${isLast && isOdd ? "50%" : "-50%"};
    //   transform: ${
      isLast && isOdd
      //     ? "translate(-50%, -50%)"
      //     : "translateY(-50%)"};
      //   width: ${isLast && isOdd ? "50%" : "100%"};
      // }
    }
`;
const dot_wrap = css`
  position: relative;
  width: 32px;
  height: 32px;

  @media (max-width: 960px) {
    width: 24px;
    height: 24px;
  }
`;
const dot = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #018c3b;
  transition: 0.3s ease-out;
  box-sizing: content-box;

  @media (max-width: 960px) {
    width: 10px;
    height: 10px;
  }
`;
const dot_border = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #018c3b;
  opacity: 0.24;
  transition: 0.3s ease-out;

  @media (max-width: 960px) {
    width: 10px;
    height: 10px;
  }
`;

const icon_wrap = (idx: number, isLast?: boolean, isOdd?: boolean) => css`
  position: absolute;

  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);

  display: ${idx > 0 ? "block" : "none"};

  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    // display: ${idx % 2 !== 0 ? "block" : isLast && isOdd ? "block" : "none"};
    left: ${isLast && isOdd ? "calc(25% + 10px)" : "0"};
    width: 16px;
    height: 16px;
  }
`;
const text_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;
const idx_text = css`
  color: #018c3b;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 28px */

  @media (max-width: 1800px) {
    font-size: 26px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const step_style = css`
  color: #018c3b;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 540px) {
    font-size: 17px;
  }
`;

const caption_style = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-align: center;

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    padding: 0 10px;
    font-size: 12px;
  }
`;

const text_wrap_a = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 374px) {
    padding: 0 8px;
  }
`;

const content_text = css`
  color: var(--text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 30px */

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
