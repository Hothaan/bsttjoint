"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { useEffect, useState, useRef } from "react";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import ChartCard from "./ChartCard";
import ArrowRight from "@/assets/components/pages/bstt/index/section6/arrowRight.svg";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Section6() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  useEffect(() => {
    AOS.init();
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [showSecondContent, setShowSecondContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;

      if (sectionCenter < windowCenter) {
        setShowSecondContent(true);
      } else {
        setShowSecondContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg1_pc = "/assets/components/pages/bstt/index/section6/bg1_pc.png";
  const bg1_mo = "/assets/components/pages/bstt/index/section6/bg1_mo.png";
  const chart1 = "/assets/components/pages/bstt/index/section6/chart1.png";
  const chart2 = "/assets/components/pages/bstt/index/section6/chart2.png";
  const chart3 = "/assets/components/pages/bstt/index/section6/chart3.png";
  const chat_group_pc =
    "/assets/components/pages/bstt/index/section6/chat_group_pc.png";
  const chat_group_mo =
    "/assets/components/pages/bstt/index/section6/chat_group_mo.png";

  const sectionTitleDesc_ = {
    title: `story`,
    desc: [
      `정말로 수술하지 않고`,
      <br key="1" />,
      <span key="2" className="highlight">
        치료가 가능
      </span>,
      ` 할까요?`,
    ],
  };

  const chart_data_ = [
    {
      img: chart1,
      title: "높은 호전도",
      desc: [`백절탕 3개월이상 치료환자 1498명`, <br key="1" />, `호전도 조사`],
    },
    {
      img: chart2,
      title: "높은 만족도",
      desc: [`네이버 플레이스 평가기준`, <br key="2" />, `치료만족도 조사`],
    },
    {
      img: chart3,
      title: "높은 소개율",
      desc: [`튼튼마디에 소개로`, <br key="3" />, `내원하는 환자비율 조사`],
    },
  ];

  const view_more_ = "로그인 후 치료후기 자세히보기";

  if (width === null) {
    return;
  }

  return (
    <div css={wrap(bg1_pc, bg1_mo, width)} ref={sectionRef} data-aos="fade-up">
      {width > 960 ? (
        <>
          <div
            className="content1"
            css={[contentStyle(width, showSecondContent ? 0 : 1), content_1]}
          >
            <div css={section_title_desc_wrap}>
              <SectionTitleDesc
                titleColor={theme.colors.mono.white}
                descColor={theme.colors.mono.white}
                title={sectionTitleDesc_.title}
                desc={sectionTitleDesc_.desc}
              />
            </div>

            <div css={chat_wrap_pc(width)}>
              <img src={chat_group_pc} alt="chat" />
            </div>
          </div>
          <div
            className="content2"
            css={contentStyle(width, showSecondContent ? 1 : 0)}
          >
            <div css={content_wrap(width)}>
              <div css={chart_wrap}>
                {chart_data_.map((item, idx) => (
                  <ChartCard
                    key={idx}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                  />
                ))}
              </div>

              <p css={view_more_text(theme)}>
                {view_more_}
                <ArrowRight />
              </p>
            </div>
          </div>
        </>
      ) : (
        <div css={mo_wrap}>
          <div className="content1">
            <div css={section_title_desc_wrap}>
              <SectionTitleDesc
                titleColor={theme.colors.mono.white}
                descColor={theme.colors.mono.white}
                title={sectionTitleDesc_.title}
                desc={sectionTitleDesc_.desc}
              />
            </div>
            <div css={chat_wrap_mo(width)}>
              <img src={chat_group_mo} alt="chat" />
              <p css={view_more_text(theme)}>
                {view_more_}
                <ArrowRight />
              </p>
            </div>
          </div>
          <div className="content2">
            <div css={slide_wrap}>
              <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={"auto"}
                pagination={{ clickable: true, el: ".custom-pagination" }}
                style={{ width: `100%`, marginTop: `80px` }}
              >
                {chart_data_.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <ChartCard
                      img={item.img}
                      title={item.title}
                      desc={item.desc}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div css={pagination_wrap}>
                <div className="custom-pagination" css={pagination}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mo_wrap = css`
  @media (max-width: 960px) {
    padding: 80px 0 80px 80px;
  }
  @media (max-width: 680px) {
    padding: 80px 0 80px 60px;
  }
  @media (max-width: 540px) {
    padding: 80px 0 80px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 0 80px 20px;
  }
`;
const content_1 = css`
  display: flex;
  justify-content: space-between;
`;

const contentStyle = (width: number, opacity: number) => css`
  width: 100%;
  text-align: center;

  opacity: ${opacity};
  position: ${opacity === 0 ? "absolute" : "relative"};
  pointer-events: ${opacity ? "auto" : "none"};
  transform: translate(${opacity === 0 ? "0, 50%" : "0, 0"});
  transition: opacity 0.8s ease, transform 0.8s ease;
  padding: ${width / 10.6}px ${width / 11.5}px ${width / 8.4}px ${width / 10}px;
`;

const slide_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const pagination_wrap = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const pagination = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  span {
    cursor: pointer;
  }
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: fit-content;
  }
  .swiper-pagination-bullet-active {
    background-color: #018c3b;
  }
`;

const wrap = (img1: string, img2: string, width: number) => css`
  width: 100%;
  position: relative;
  overflow: hidden;
  perspective: 1px;

  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-out;

  @media (max-width: 960px) {
    background-image: url(${img2});

    aspect-ratio: none;
  }
`;

const section_title_desc_wrap = css``;

const chat_wrap_pc = (width: number) => css`
  padding-top: 50px;
  max-width: ${width / 2.2}px;
  aspect-ratio: 871 / 507;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const chat_wrap_mo = (width: number) => css`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const content_wrap = (width: number) => css`
  display: flex;
  flex-direction: column;
  gap: 82px;

  @media (max-width: 1800px) {
    gap: ${width / 23.4}px;
  }
`;

const chart_wrap = css`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 82px;
`;

const view_more_text = (theme: CustomTheme) => css`
  display: flex;
  padding: 0px 0px 14px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semiBold};

  @media (max-width: 1800px) {
    font-size: 16px;
  }
`;
