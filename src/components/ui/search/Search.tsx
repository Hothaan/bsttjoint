"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import SearchIcon from "@/assets/components/ui/search/search.svg";
import ArrowLeft from "@/assets/components/ui/search/arrowLeft.svg";
import ArrowRight from "@/assets/components/ui/search/arrowRight.svg";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Search() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const section_title_simple_ = {
    text: [`검색`],
    color: theme.colors.mono.black,
    align: "center",
  };
  const desc_ = `관심 내용을 검색하세요`;
  const placeholder_ = `검색어를 입력하여 주십시오.`;
  const category_data_ = [
    `퇴행성관절염`,
    `허리디스크`,
    `연골한약`,
    `추나요법`,
    `허리디스크`,
    `연골한약`,
    `추나요법`,
  ];
  return (
    <div css={wrap}>
      <div css={title_wrap}>
        <SectionTitleSimple
          text={section_title_simple_.text}
          color={section_title_simple_.color}
          align={section_title_simple_.align}
        />
        <p css={desc}>{desc_}</p>
      </div>
      <div css={search_wrap}>
        <form css={search_bar_wrap}>
          <label htmlFor="search" css={label}></label>
          <input
            type="text"
            placeholder={placeholder_}
            css={input_text}
            id="search"
          />
          <button css={search_icon_container}>
            <SearchIcon />
          </button>
        </form>
        {width > 960 && (
          <div css={category_wrap}>
            <div css={arrow_icon_container}>
              <ArrowLeft />
            </div>
            <ul css={category_list_wrap}>
              {category_data_.map((item, idx) => (
                <li key={idx} css={category_item}>
                  <p css={category_item_text}>#{item}</p>
                </li>
              ))}
            </ul>
            <div css={arrow_icon_container}>
              <ArrowRight />
            </div>
          </div>
        )}
        {width < 960 && (
          <div css={slide_wrap}>
            <Swiper
              spaceBetween={8}
              slidesPerView={"auto"}
              style={{ width: `100%` }}
            >
              {category_data_.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div css={category_item}>
                    <p css={category_item_text}>#{item}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
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

  @media (max-width: 960px) {
    padding: 0 20px;
  }
`;

const wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 34px;

  padding-bottom: 80px;
`;

const desc = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
`;

const search_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 960px) {
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 0 20px;
  }
`;

const search_bar_wrap = css`
  width: 100%;
  display: flex;
  padding: 20px 54px;
  align-items: center;
  gap: 10px;

  background: var(--Color-bg02, #f6f6f6);

  @media (max-width: 960px) {
    padding: 20px 34px;
  }
`;

const label = css`
  display: none;
`;

const input_text = css`
  display: flex;
  padding: 16px 14px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 4px;
  border: 1px solid var(--d9d9d9, #d9d9d9);
  background: var(--FFFFFF, #fff);

  &:placeholder {
    color: var(--graytext, #bcbcbc);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }

  color: #111;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

const search_icon_container = css`
  padding: 0;
  border: none;

  flex-shrink: 0;
  width: 50px;
  height: 50px;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const category_wrap = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 34px;

  @media (max-width: 1800px) {
    gap: 24px;
  }
  @media (max-width: 1600px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    gap: 16px;
  }
`;

const category_item = css`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;

  border-radius: 5px;
  border: 1px solid #cecece;
  background: #fff;

  cursor: pointer;

  &:hover {
    border-radius: 5px;
    border: 1px solid #018c3b;
    background: #fff;
    box-shadow: 0px 6px 15px 0px rgba(224, 212, 233, 0.5);

    p {
      color: #018c3b;
    }
  }

  @media (max-width: 1800px) {
    padding: 18px;
  }
  @media (max-width: 1600px) {
    padding: 16px;
  }
  @media (max-width: 1200px) {
    padding: 14px;
  }
`;

const category_list_wrap = css`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const category_item_text = css`
  color: #111;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

const arrow_icon_container = css`
  flex-shrink: 0;
  width: 24px;
  height: 24px;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1800px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1600px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 1200px) {
    width: 16px;
    height: 16px;
  }
`;
