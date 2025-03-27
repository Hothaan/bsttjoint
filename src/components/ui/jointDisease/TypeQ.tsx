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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ITypeQ {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    img: string;
    title: string;
    desc: (string | React.ReactNode)[];
  }[];
}

export default function TypeQ(prop: ITypeQ) {
  const { sectionTitleSimple, pageTitleContent, cardData } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  return (
    <div css={outer_wrap}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <div css={content_wrap}>
          {width > 960 ? (
            <ul css={card_wrap}>
              {cardData.map((card, index) => (
                <li css={card_item} key={index + `TypeQ card item`}>
                  <div css={image_container}>
                    <img src={card.img} alt="reason" />
                  </div>
                  <div css={card_content}>
                    <p css={title_text} className="title_text">
                      {card.title}
                    </p>
                    <p css={desc_text}>{renderWidthKeys(card.desc)}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div css={slide_wrap}>
              <Swiper
                spaceBetween={20}
                slidesPerView={1.1}
                style={{ width: `100%`, overflow: "visible" }}
              >
                {cardData.map((card, index) => (
                  <SwiperSlide
                    key={index + `TypeQ card item`}
                    style={{ overflowY: "visible" }}
                  >
                    <li css={card_item}>
                      <div css={image_container}>
                        <img src={card.img} alt="reason" />
                      </div>
                      <div css={card_content}>
                        <p css={title_text} className="title_text">
                          {card.title}
                        </p>
                        <p css={desc_text}>{renderWidthKeys(card.desc)}</p>
                      </div>
                    </li>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
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

  overflow-y: visible;
`;

const outer_wrap = css`
  position: relative;

  width: 100%;
  padding: 180px 0;
  margin: 0 auto;

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
const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: start;
  justify-content: center;

  @media (max-width: 960px) {
    gap: 70px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  }
  @media (max-width: 1000px) {
    padding: 0 100px;
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
    gap: 15px;
  }
`;

const card_wrap = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const content_wrap = css`
  width: 100%;
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
    padding: 0 0 0 80px;
  }
  @media (max-width: 680px) {
    padding: 0 0 0 60px;
  }
  @media (max-width: 540px) {
    padding: 0 0 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 0 0 20px;
  }
`;
const card_item = css`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 25px;

  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5%);
    border: 1px solid #018c3b;

    .title_text {
      color: var(--Color-primary, #018c3b);
    }
  }

  @media (max-width: 1600px) {
    padding: 20px;
  }
  @media (max-width: 960px) {
    border-radius: 5px;
  }
  @media (max-width: 374px) {
    padding: 10px;
  }
`;
const image_container = css`
  width: 100%;
  flex-shrink: 0;
  align-self: stretch;
  aspect-ratio: 254 / 200;

  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    border-radius: 5px;
  }
`;
const card_content = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;
const title_text = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */

  transition: 0.3s ease;

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
`;
const desc_text = css`
  color: #444;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 135%;

  @media (max-width: 1800px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    color: #666;
    font-size: 14px;
    line-height: 160%;
  }
`;
