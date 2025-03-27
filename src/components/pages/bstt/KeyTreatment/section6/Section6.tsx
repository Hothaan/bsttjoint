"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import PageTitleContent from "@/components/ui/text/PageTitleContent";
import PageQuote from "@/components/ui/text/PageQuote";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Section6() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const section_title_simple_ = {
    text: [
      `현명한 치료의 `,
      <span key="1" className="green">
        기본원칙
      </span>,
    ],
    color: theme.colors.mono.black,
    align: "center",
  };
  const page_quote_ = [
    <span key="1" className="green">
      따라서,
    </span>,
  ];

  const page_title_content_1 = [
    `근골격계 통증질환은 일시적인 치료효과 만으로는`,
    <br key="1" />,
    `반복적으로 재발하며 만성화되면서 퇴행성으로 진행되기가 쉽습니다.`,
  ];

  const back_text_ = `/assets/components/pages/bstt/KeyTreatment/section6/back_text.png`;

  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section6/card1_pc.png`,
      title: `예방적 치료`,
      desc: `어차피 진행되어 만성화되는 질병이라면 초기부터 미리미리 치료합니다.`,
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section6/card2_pc.png`,
      title: `적극적 치료`,
      desc: `관절척추의 질병은 적극적으로 치료할수록 치료율이 높고 후유증상이 적습니다. `,
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section6/card3_pc.png`,
      title: `근본적 회복`,
      desc: `일시적인 통증억제가 아닌 질병의 개선에 의한 통증완화를 추구합니다.`,
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section6/card4_pc.png`,
      title: `꾸준한 관리`,
      desc: `지속가능한 방식으로 치료를 해야만 재발 방지와 진행 억제까지 가능합니다.`,
    },
  ];
  return (
    <div css={wrap}>
      <div css={title_wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={title_content_wrap}>
          <PageTitleContent text={page_title_content_1} />
          <PageQuote text={page_quote_} align="left" />
        </div>
        {width > 960 && (
          <div css={back_text_container}>
            <img src={back_text_} alt="back text" />
          </div>
        )}
      </div>
      {width > 960 && (
        <div css={card_wrap}>
          {card_data_.map((item, idx) => {
            const newData_ = { ...item, idx: idx };
            return <Card key={idx + "section6 card"} {...newData_} />;
          })}
        </div>
      )}
      {width <= 960 && (
        <div css={slide_wrap}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1.3}
            style={{ width: `100%` }}
            centeredSlides={true}
          >
            {card_data_.map((item, idx) => {
              const newData_ = { ...item, idx: idx };
              return (
                <SwiperSlide key={idx + "section6 card"}>
                  <Card {...newData_} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      {width <= 960 && (
        <div css={back_text_container_under_960}>
          <img src={back_text_} alt="back text" />
        </div>
      )}
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
`;

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 54px;

  width: 100%;
  padding: 180px 0;
  margin: 0 auto;
  background-color: #eaf5ef;

  @media (max-width: 1800px) {
    padding: 160px 0;
  }
  @media (max-width: 1400px) {
    padding: 140px 0;
    gap: 48px;
  }
  @media (max-width: 1200px) {
    padding: 120px 0;
    gap: 36px;
  }
  @media (max-width: 1000px) {
    padding: 100px 0;
  }
  @media (max-width: 960px) {
    padding: 80px 0;
    gap: 27px;
  }
  @media (max-width: 680px) {
    padding: 80px 0;
  }
  @media (max-width: 540px) {
    padding: 80px 0;
  }
  @media (max-width: 480px) {
    padding: 80px 0;
  }
`;

const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 34px;

  position: relative;

  padding-left: 180px;

  @media (max-width: 1800px) {
    padding-left: 160px;
  }
  @media (max-width: 1400px) {
    padding-left: 140px;
  }
  @media (max-width: 1200px) {
    padding-left: 120px;
  }
  @media (max-width: 1000px) {
    padding-left: 100px;
  }
  @media (max-width: 960px) {
    padding: 0 80px;
    gap: 20px;
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

const title_content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const back_text_container = css`
  position: absolute;
  top: 0;
  right: 0;

  width: 44%;
`;
const back_text_container_under_960 = css`
  width: 100%;
`;

const card_wrap = css`
  display: flex;
  gap: 24px;

  padding: 0 180px;

  @media (max-width: 1800px) {
    padding: 0 160px;
  }
  @media (max-width: 1400px) {
    padding: 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 0 120px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    padding: 020px;
  }
`;
