"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useRef } from "react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowLeft from "@/assets/components/ui/post/HotPost/arrowLeft.svg";
import ArrowRight from "@/assets/components/ui/post/HotPost/arrowRight.svg";

interface IHotPost {
  title: string;
  data: {
    img: string;
    title: string;
    link: string;
    profile: {
      img: string;
      where: string;
      who: string;
    };
  }[];
}

export default function HotPost(prop: IHotPost) {
  const { title, data } = prop;
  const { width } = useWindowSizeContext();

  const swiperRef = useRef<SwiperClass | null>(null);
  if (width === null) {
    return;
  }
  return (
    <div css={wrap}>
      <div css={title_Wrap}>
        <p css={title_text}>{title}</p>
        {width < 960 && (
          <div css={controller_wrap}>
            <div
              className="custom-prev"
              onClick={() => swiperRef.current?.slidePrev()}
              css={controller_icon_container}
            >
              <ArrowLeft />
            </div>
            <div
              className="custom-next"
              onClick={() => swiperRef.current?.slideNext()}
              css={controller_icon_container}
            >
              <ArrowRight />
            </div>
          </div>
        )}
      </div>
      {width > 960 && (
        <ul css={host_post_wrap}>
          {data.map((item, idx) => (
            <li key={idx}>
              <Link css={hot_post_item} href={item.link}>
                <div css={img_container}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div css={content_wrap}>
                  <p css={post_title_text}>{item.title}</p>
                  <div css={profile_wrap}>
                    <div css={profile_inner_wrap}>
                      <div css={profile_img_container}>
                        <img src={item.profile.img} alt={item.profile.who} />
                      </div>
                      <p css={where_who_text}>{item.profile.where}</p>
                    </div>
                    <span css={stroke}></span>
                    <p css={[where_who_text, who_text]}>{item.profile.who}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {width < 960 && (
        <div css={slide_wrap}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            style={{ width: `100%` }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <li css={hot_post_item_wrap(width)}>
                  <Link css={hot_post_item} href={item.link}>
                    <div css={img_container}>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div css={content_wrap}>
                      <p css={post_title_text}>{item.title}</p>
                      <div css={profile_wrap}>
                        <div css={profile_inner_wrap}>
                          <div css={profile_img_container}>
                            <img
                              src={item.profile.img}
                              alt={item.profile.who}
                            />
                          </div>
                          <p css={where_who_text}>{item.profile.where}</p>
                        </div>
                        <span css={stroke}></span>
                        <p css={[where_who_text, who_text]}>
                          {item.profile.who}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
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

const title_Wrap = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const controller_wrap = css`
  display: flex;
  justify-content: center;
  gap: 24px;
`;
const controller_icon_container = css`
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

  &:hover {
    svg path {
      stroke: #018c3b;
    }
  }
`;

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 78px 0;

  border-top: 1px solid #d9d9d9;

  @media (max-width: 1800px) {
    padding: 64px 0;
  }
  @media (max-width: 1600px) {
    padding: 56px 0;
  }
  @media (max-width: 1400px) {
    padding: 40px 0;
  }
  @media (max-width: 960px) {
    padding: 60px 0 60px 20px;
  }
`;

const title_text = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const post_title_text = css`
  color: #171a1f;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;

const host_post_wrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;

  li {
    width: calc(25% - (34px * 3 / 4));
  }

  @media (max-width: 1800px) {
    gap: 24px;
    li {
      width: calc(25% - (24px * 3 / 4));
    }
  }
  @media (max-width: 1600px) {
    gap: 18px;
    li {
      width: calc(25% - (18px * 3 / 4));
    }
  }
  @media (max-width: 1400px) {
    gap: 14px;
    li {
      width: calc(25% - (14px * 3 / 4));
    }
  }
  @media (max-width: 1200px) {
    gap: 10px;
    li {
      width: calc(25% - (10px * 3 / 4));
    }
  }
`;

const hot_post_item_wrap = (width: number) => css``;

const hot_post_item = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const img_container = css`
  width: 100%;
  height: auto;
  aspect-ratio: 324.5 / 300;

  border-radius: 30px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1800px) {
    border-radius: 24px;
  }
  @media (max-width: 1600px) {
    border-radius: 20px;
  }
  @media (max-width: 1400px) {
    border-radius: 16px;
  }
  @media (max-width: 1200px) {
    border-radius: 12px;
  }
  @media (max-width: 960px) {
    border-radius: 30px;

    aspect-ratio: 284 / 270;
  }
`;

const content_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 14px;
`;

const profile_wrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: start;
    gap: 4px;
  }
  @media (max-width: 960px) {
    justify-content: start;
    gap: 8px;
    align-items: center;
    flex-direction: row;
  }
`;

const profile_inner_wrap = css`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const profile_img_container = css`
  height: 20px;
  width: 20px;
  aspect-ratio: 20 / 20;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1800px) {
    height: 16px;
    width: 16px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 960px) {
    height: 20px;
    width: 20px;
    display: block;
  }
`;

const where_who_text = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  white-space: nowrap;

  @media (max-width: 1900px) {
    font-size: 15px;
  }
  @media (max-width: 1800px) {
    font-size: 14px;
  }
  @media (max-width: 1400px) {
  }
  @media (max-width: 1200px) {
  }
`;

const who_text = css`
  @media (max-width: 1600px) {
    padding-left: 20px;
  }
  @media (max-width: 1400px) {
  }
  @media (max-width: 1200px) {
    padding: 0;
  }
`;
const stroke = css`
  display: block;
  width: 1px;
  height: 0.5em;
  background-color: #acacac;

  @media (max-width: 1800px) {
    display: none;
  }
  @media (max-width: 960px) {
    display: block;
  }
`;
