"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
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
import { renderWidthKeys } from "@/hooks/renderWidthKey";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Section6() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  useEffect(() => {
    AOS.init();
  }, []);

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const section_title_simple_ = {
    text: [`백절탕의 `, <br key="1" className="mo" />, `치료적 강점`],
    color: theme.colors.mono.black,
    align: "start",
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section6/card1_pc.png`,
      title: [
        <span key="1" className="green">
          높은 치료율과
        </span>,
        <br key="1" />,
        `환자 만족도`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section6/card2_pc.png`,
      title: [
        `한약에 의해 가능한`,
        <br key="1" />,
        <span key="1" className="green">
          비수술적 치료
        </span>,
      ],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section6/card3_pc.png`,
      title: [
        `자연치유력 극대화에 의한 `,
        <br key="1" />,
        <span key="1" className="green">
          손상·퇴행 개선
        </span>,
      ],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section6/card4_pc.png`,
      title: [
        <span key="1" className="green">
          고령환자도 건강상의
        </span>,
        <br key="1" />,
        `부담 없이 가능한 보존적치료`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section6/card5_pc.png`,
      title: [
        `치료 후 `,
        <span key="1" className="green">
          &nbsp;평생관리
        </span>,
        ` 및`,
        <br key="1" />,
        `퇴행억제 삶의 질 향상`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/Baekjeoltang/section6/card6_pc.png`,
      title: [
        <span key="1" className="green">
          원기회복
        </span>,
        `으로 활동`,
        <br key="1" />,

        `정상화에 의한 건강수명 연장`,
      ],
    },
  ];
  const list_data_ = [
    [
      <span className="green" key="1">
        높은 치료율
      </span>,
      `과 환자 만족도`,
    ],
    [
      `한약에 의해 가능한 `,
      <span className="green" key="1">
        비수술적 치료
      </span>,
    ],
    [
      `자연치유력 극대화에 의한 `,
      <span className="green" key="1">
        손상·퇴행 개선
      </span>,
    ],
    [
      <span className="green" key="1">
        고령환자
      </span>,
      `도 건강상의 부담 없이 가능한 보존적치료`,
    ],
    [
      `치료 후 `,
      <span className="green" key="1">
        평생관리
      </span>,
      ` 및 퇴행억제 삶의 질 향상`,
    ],
    [
      <span className="green" key="1">
        원기회복
      </span>,
      `으로  활동 정상화에 의한 건강수명 연장`,
    ],
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      setTimeout(() => {
        if (swiperRef.current) setActiveIdx(swiperRef?.current.realIndex);
      }, 0);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      setTimeout(() => {
        if (swiperRef.current) setActiveIdx(swiperRef.current.realIndex);
      }, 0);
    }
  };

  if (width === null) {
    return;
  }

  return (
    <div css={wrap} data-aos="fade-up">
      <div css={title_wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={controller_wrap}>
          <div
            css={controller_item_wrap}
            className="custom-prev-section6"
            onClick={handlePrev}
          >
            <div css={controller_icon_container} className="controller_icon">
              <ArrowLeft />
            </div>
            <p css={controller_text} className="controller_text">
              prev
            </p>
          </div>
          <div
            css={controller_item_wrap}
            className="custom-next-section6"
            onClick={handleNext}
          >
            <p css={controller_text} className="controller_text">
              next
            </p>
            <div css={controller_icon_container} className="controller_icon">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div css={content_container}>
        <ul css={list_container}>
          {list_data_.map((item, idx) => (
            <li
              key={idx + "section6 list item"}
              css={list_item}
              onClick={() => {
                setActiveIdx(idx);
                swiperRef.current?.slideTo(idx);
              }}
            >
              <div css={circle_container(idx)}>
                <span css={circle(idx, activeIdx === idx)}></span>
              </div>
              <p css={list_item_text(activeIdx === idx)}>
                {renderWidthKeys(item)}
              </p>
              <span css={stroke(idx, activeIdx === idx)}></span>
            </li>
          ))}
        </ul>
        <Swiper
          slidesPerView={width > 1200 ? 1.2 : 1.4}
          centeredSlides={width > 1200 ? false : true}
          spaceBetween={28}
          modules={[Navigation, Scrollbar]}
          navigation={{
            nextEl: ".custom-next-section6",
            prevEl: ".custom-prev-section6",
          }}
          style={{ width: `100%`, overflowY: "visible" }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {card_data_.map((item, idx) => {
            const newData_ = { ...item, idx: idx };
            return (
              <SwiperSlide
                key={idx + "section6 slide"}
                style={{ width: "20%", overflowY: "visible" }}
              >
                <Card {...newData_} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

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
  overflow-y: visible;
  gap: 60px;

  background: linear-gradient(0deg, #f6f9f7 19.2%, #eaf5ef 98.66%);

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

const content_container = css`
  display: flex;
  gap: 80px;
  overflow-y: visible;
  padding-left: 180px;

  @media (max-width: 1800px) {
    padding-left: 160px;
    gap: 70px;
  }
  @media (max-width: 1400px) {
    padding-left: 140px;
    gap: 60px;
  }
  @media (max-width: 1200px) {
    padding-left: 0;
    flex-direction: column;
    gap: 0px;
  }
`;
const list_container = css`
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media (max-width: 1600px) {
    gap: 34px;
  }
  @media (max-width: 1200px) {
    order: 2;
    gap: 24px;
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

const list_item = css`
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 1600px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    gap: 12px;
  }
  @media (max-width: 960px) {
    gap: 8px;
  }
`;
const circle_container = (idx: number) => css`
  position: relative;

  display: flex;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  @media (max-width: 960px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 374px) {
    width: 16px;
    height: 16px;
  }
`;
const circle = (idx: number, isActive: boolean) => css`
  display: block;
  width: ${isActive ? "34px" : "14px"};
  height: auto;
  aspect-ratio: 1 / 1;
  background-color: ${isActive ? "#018c3b" : "#fff"};
  border: ${isActive ? "10px solid #fff" : "3px solid #018c3b"};
  border-radius: 50%;

  transition: 0.3s ease-out;
  position: relative;
  z-index: 2;

  box-shadow: ${isActive ? "0px 4px 10px 0px rgba(0, 166, 69, 0.3)" : "none"};

  &:after {
    content: "";
    display: block;
    position: absolute;
  }

  @media (max-width: 680px) {
    width: ${isActive ? "24px" : "12px"};
    border: ${isActive ? "5px solid #fff" : "3px solid #018c3b"};
  }

  @media (max-width: 374px) {
    border: ${isActive ? "3px solid #fff" : "3px solid #018c3b"};
  }
`;
const stroke = (idx: number, isActive: boolean) => css`
  display: ${idx > 0 ? "block" : "none"};
  z-index: 1;
  position: absolute;
  bottom: 50%;
  left: 17px;
  width: 1px;
  height: calc(100% + 44px);
  background-color: #018c3b;
  opacity: 0.4;

  transform: translate(-50%, 0%);

  @media (max-width: 1600px) {
    height: calc(100% + 34px);
  }
  @media (max-width: 960px) {
    left: 12px;
    height: calc(100% + 24px);
  }
  @media (max-width: 374px) {
    left: 8px;
    height: calc(100% + 24px);
  }
`;

const list_item_text = (isActive: boolean) => css`
  color: #343434;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: ${isActive ? "900" : "600"};
  line-height: 130%;
  white-space: nowrap;

  transition: 0.3s ease-out;

  .green {
    color: #018c3b;
  }

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 680px) {
    font-size: 15px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
    white-space: wrap;
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
  @media (max-width: 374px) {
    flex-direction: column;
    align-items: start;
    gap: 24px;
  }
`;
