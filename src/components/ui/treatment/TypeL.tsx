"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import ArrowLeft from "@/assets/components/ui/post/HotPost/arrowLeft.svg";
import ArrowRight from "@/assets/components/ui/post/HotPost/arrowRight.svg";
import TypeLCard from "./TypeLCard";
import { ISectionTitleSimple } from "@/components/ui/text/SectionTitleSimple";
import { ITypeLCard } from "./TypeLCard";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ITypeL {
  sectionTitleSimple: ISectionTitleSimple;
  cardData: ITypeLCard[];
  sectionDesc?: (string | React.ReactNode)[];
  bgColor?: string;
  bgPc?: string;
  aspectRatio?: { over960: string; under960: string };
  withIdx?: boolean;
}

export default function TypeL(prop: ITypeL) {
  const {
    sectionTitleSimple,
    cardData,
    sectionDesc,
    bgColor,
    bgPc,
    aspectRatio,
    withIdx,
  } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const swiperRef = useRef<SwiperType | null>(null);
  const cardType = cardData[0].cardType;

  useEffect(() => {
    AOS.init();
  }, []);

  if (width === null) {
    return;
  }

  const updateEdgeOpacity = (swiper: SwiperType) => {
    // requestAnimationFrame(() => {
    //   swiper.slides.forEach((slide) => {
    //     slide.classList.remove(
    //       "first-visible",
    //       "last-visible",
    //       "prev-slide",
    //       "next-slide",
    //       "active-slide"
    //     );
    //     (slide as HTMLElement).style.opacity = "";
    //   });
    //   const visibleSlides: HTMLElement[] = [];
    //   swiper.slides.forEach((slide, index) => {
    //     const slideEl = slide as HTMLElement;
    //     const slideLeft = swiper.slidesGrid[index];
    //     const slideRight = slideLeft + slideEl.offsetWidth;
    //     const viewportLeft = -swiper.translate;
    //     const viewportRight = viewportLeft + swiper.width;
    //     if (slideRight > viewportLeft && slideLeft < viewportRight) {
    //       visibleSlides.push(slideEl);
    //     }
    //   });
    //   if (visibleSlides.length > 0) {
    //     visibleSlides[0].classList.add("first-visible");
    //     visibleSlides[visibleSlides.length - 1].classList.add("last-visible");
    //   }
    //   const windowWidth = window.innerWidth;
    //   if (windowWidth <= 680) {
    //     const activeIndex = swiper.activeIndex;
    //     swiper.slides.forEach((slide, index) => {
    //       const slideEl = slide as HTMLElement;
    //       if (index === activeIndex) {
    //         slideEl.classList.add("active-slide");
    //         slideEl.style.opacity = "1";
    //       } else if (index === activeIndex - 1 || index === activeIndex + 1) {
    //         slideEl.classList.add(
    //           index < activeIndex ? "prev-slide" : "next-slide"
    //         );
    //         slideEl.style.opacity = "0.5";
    //       } else {
    //         slideEl.style.opacity = "0.2";
    //       }
    //     });
    //   }
    // });
  };

  function handleSpaceBetween(width: number) {
    if (cardType === undefined) {
      if (width > 1400) {
        return 44;
      } else if (width > 960) {
        return 34;
      } else if (width > 680) {
        return 24;
      } else {
        return 20;
      }
    } else if (cardType === "round") {
      return 25;
    }
  }
  function handleSlidesPerview(width: number) {
    if (cardType === undefined) {
      if (width > 1400) {
        return 4.5;
      } else if (width > 960) {
        return 3.5;
      } else if (width > 680) {
        return 2.5;
      } else {
        return 1.5;
      }
    } else {
      if (width > 1400) {
        return 3.5;
      } else if (width > 960) {
        return 3;
      } else if (width > 680) {
        return 2;
      } else {
        return 1.3;
      }
    }
  }
  function handleSlidesWidth(width: number) {
    if (cardType === undefined) {
      return "22% ! important";
    } else {
      if (width > 960) {
        return "30% ! important";
      } else {
        return "100%";
      }
    }
  }
  function handlecenteredSlides(width: number) {
    if (cardType === undefined) {
      return width > 680 ? false : true;
    } else {
      // return width > 960 ? false : true;
      return true;
    }
  }

  return (
    <div css={wrap(bgColor, bgPc)} data-aos="fade-up">
      <div css={title_wrap(cardType)}>
        <div css={title_inner_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          {sectionDesc && <p css={desc_text}>{renderWidthKeys(sectionDesc)}</p>}
        </div>
        <div css={controller_wrap(cardType)}>
          <div css={controller_item_wrap} className="custom-prev">
            <div css={controller_icon_container} className="controller_icon">
              <ArrowLeft />
            </div>
            <p css={controller_text} className="controller_text">
              prev
            </p>
          </div>
          <div css={controller_item_wrap} className="custom-next">
            <p css={controller_text} className="controller_text">
              next
            </p>
            <div css={controller_icon_container} className="controller_icon">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div css={slide_container}>
        <div css={content_wrap}>
          <div css={slide_wrap}>
            <Swiper
              scrollbar={{
                el: ".custom-scrollbar",
                hide: false,
                draggable: true,
              }}
              centeredSlides={handlecenteredSlides(width)}
              modules={[Navigation, Scrollbar]}
              spaceBetween={handleSpaceBetween(width)}
              slidesPerView={handleSlidesPerview(width)}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              style={{ width: `100%` }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                updateEdgeOpacity(swiper);
              }}
              onSlideChange={(swiper) => updateEdgeOpacity(swiper)}
              onResize={(swiper) => updateEdgeOpacity(swiper)}
            >
              {cardData.map((item, idx) => {
                const newData_ = {
                  ...item,
                  idx: idx,
                  aspectRatio: aspectRatio,
                  withIdx: withIdx,
                };
                return (
                  <SwiperSlide
                    key={idx + "section5 slide"}
                    style={{
                      width: handleSlidesWidth(width),
                    }}
                  >
                    <TypeLCard {...newData_} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div css={slide_bar_wrap}>
          <div className="custom-scrollbar" css={scroll_bar(theme)}></div>
        </div>
      </div>
    </div>
  );
}
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

const controller_wrap = (cardType?: string) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 1600px) {
    gap: 50px;
  }
  @media (max-width: 1400px) {
    gap: 40px;
  }
  @media (max-width: 960px) {
    gap: 32px;
    display: ${cardType !== undefined ? "none" : "flex"};
  }
  @media (max-width: 680px) {
    gap: 24px;
  }
`;

const controller_item_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  &:hover {
    .controller_text {
      color: var(--Color-primary, #018c3b);
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-skip-ink: none;
      text-decoration-thickness: auto;
      text-underline-offset: auto;
      text-underline-position: from-font;
    }
    .controller_icon {
      svg path {
        stroke: #018c3b;
      }
    }
  }

  @media (max-width: 1600px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    gap: 14px;
  }
  @media (max-width: 680px) {
    gap: 6px;
  }
`;

const controller_text = css`
  color: #121212;
  text-align: center;
  font-family: Helvetica;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  transition: 0.3s ease-out;

  cursor: pointer;

  @media (max-width: 680px) {
    font-size: 14px;
  }
`;
const controller_icon_container = css`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 100%;
    path {
      transition: 0.3s ease-out;
    }
  }

  @media (max-width: 680px) {
    width: 14px;
    height: 14px;
  }
`;

const wrap = (bgColor?: string, bgPc?: string) => css`
  display: flex;
  flex-direction: column;
  gap: 60px;
  background-color: ${bgColor ?? "#fff"};
  background-image: ${bgPc ? `url(${bgPc})` : "none"};
  background-size: cover;
  background-position: center;

  width: 100%;
  padding: 180px 0;

  @media (max-width: 1800px) {
    padding: 160px 0;
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

const slide_container = css`
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media (max-width: 960px) {
    gap: 24px;
  }
`;

const title_wrap = (cardType?: string) => css`
  display: flex;
  justify-content: space-between;
  align-items: end;

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
    align-items: end;
    justify-content: ${cardType !== undefined ? "center" : "space-between"};
    gap: 40px;
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

const title_inner_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1400px) {
    gap: 24px;
  }
  @media (max-width: 960px) {
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
`;

const content_wrap = css``;
const desc_text = css`
  color: #444;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: light;
  line-height: 160%; /* 35.2px */

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
    text-align: center;
  }
`;
