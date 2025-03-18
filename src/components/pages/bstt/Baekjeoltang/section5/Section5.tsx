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
import Card from "./Card";

export default function Section5() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const swiperRef = useRef<SwiperType | null>(null);

  const section_title_simple_ = {
    text: [`백절탕의`, <br key="1" className="mo" />, `치료범위`],
    color: theme.colors.mono.black,
    align: "start",
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card1_pc.png`,
      title: `퇴행성질환`,
      desc: [
        `퇴행성관절염, 척추관협착증, 퇴행성디스크, `,
        <br key="1" />,
        `목디스크 등`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card2_pc.png`,
      title: `손상성질환`,
      desc: [
        `반월상연골파열, 관절인대파열, 회전근개파열, `,
        <br key="1" />,
        `외상성디스크 등`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card3_pc.png`,
      title: `자가면역성질환`,
      desc: [
        `류마티스관절염, 강직성척추염, 건선성관절염, `,
        <br key="1" />,
        `섬유근육통 등`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card4_pc.png`,
      title: `만성통증질환`,
      desc: [`족저근막염, 지간신경종, 손목터널증후군, 엘보 등`],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card5_pc.png`,
      title: `수술전후치료`,
      desc: [`수술전치료, 수술후재활치료, 수술후유증치료 등`],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section5/card6_pc.png`,
      title: `예방적치료`,
      desc: [
        `관절척추질환 진행예방, 치료후 재발방지를 위한 `,
        <br key="1" />,
        `보수적 치료`,
      ],
    },
  ];

  const updateEdgeOpacity = (swiper: SwiperType) => {
    requestAnimationFrame(() => {
      swiper.slides.forEach((slide) => {
        slide.classList.remove(
          "first-visible",
          "last-visible",
          "prev-slide",
          "next-slide",
          "active-slide"
        );
        (slide as HTMLElement).style.opacity = "";
      });

      const visibleSlides: HTMLElement[] = [];

      swiper.slides.forEach((slide, index) => {
        const slideEl = slide as HTMLElement;
        const slideLeft = swiper.slidesGrid[index];
        const slideRight = slideLeft + slideEl.offsetWidth;

        const viewportLeft = -swiper.translate;
        const viewportRight = viewportLeft + swiper.width;

        if (slideRight > viewportLeft && slideLeft < viewportRight) {
          visibleSlides.push(slideEl);
        }
      });

      if (visibleSlides.length > 0) {
        visibleSlides[0].classList.add("first-visible");
        visibleSlides[visibleSlides.length - 1].classList.add("last-visible");
      }

      const windowWidth = window.innerWidth;

      if (windowWidth <= 680) {
        const activeIndex = swiper.activeIndex;

        swiper.slides.forEach((slide, index) => {
          const slideEl = slide as HTMLElement;
          if (index === activeIndex) {
            slideEl.classList.add("active-slide");
            slideEl.style.opacity = "1";
          } else if (index === activeIndex - 1 || index === activeIndex + 1) {
            slideEl.classList.add(
              index < activeIndex ? "prev-slide" : "next-slide"
            );
            slideEl.style.opacity = "0.5";
          } else {
            slideEl.style.opacity = "0.2";
          }
        });
      }
      /** ✅ 추가 부분 끝 */
    });
  };

  function handleSpaceBetween(width: number) {
    if (width > 1400) {
      return 44;
    } else if (width > 960) {
      return 34;
    } else if (width > 680) {
      return 24;
    } else {
      return 20;
    }
  }
  function handleSlidesPerview(width: number) {
    if (width > 1400) {
      return 4.5;
    } else if (width > 960) {
      return 3.5;
    } else if (width > 680) {
      return 2.5;
    } else {
      return 1.5;
    }
  }

  return (
    <div css={wrap}>
      <div css={title_wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={controller_wrap}>
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
              centeredSlides={width > 680 ? false : true}
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
              {card_data_.map((item, idx) => {
                const newData_ = { ...item, idx: idx };
                return (
                  <SwiperSlide
                    key={idx + "section5 slide"}
                    style={{ width: "22% ! important" }}
                  >
                    <Card {...newData_} />
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
  background: #eee;
  border-radius: 10px;

  .swiper-scrollbar-drag {
    background-color: ${theme.colors.point.primary};
  }
`;

const controller_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

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

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 60px;

  width: 100%;
  padding: 180px 0;

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

const slide_container = css`
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media (max-width: 960px) {
    gap: 24px;
  }
`;

const title_wrap = css`
  display: flex;
  justify-content: space-between;

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

const content_wrap = css``;
