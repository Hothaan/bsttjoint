/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import Post from "./Post";
import ViewMore from "@/components/ui/link/viewMore/ViewMore";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Section16() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const title_ = "추천영상";
  const post_ = `/assets/components/pages/bstt/index/section16/post.png`;
  const logo_ = `/assets/components/pages/bstt/index/section16/logo.png`;
  const post_data_ = [
    {
      post: {
        img: post_,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        where: `관절척추중점진료 튼튼마디한의원`,
        who: `신영균원장`,
        date: `2023.01.01`,
        view: `조회수 7.9만회`,
      },
      logo: logo_,
    },
    {
      post: {
        img: post_,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        where: `관절척추중점진료 튼튼마디한의원`,
        who: `신영균원장`,
        date: `2023.01.01`,
        view: `조회수 7.9만회`,
      },
      logo: logo_,
    },
    {
      post: {
        img: post_,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        where: `관절척추중점진료 튼튼마디한의원`,
        who: `신영균원장`,
        date: `2023.01.01`,
        view: `조회수 7.9만회`,
      },
      logo: logo_,
    },
  ];

  return (
    <div css={wrap(theme)}>
      <div css={title_wrap}>
        <SectionTitleSimple text={title_} color={theme.colors.mono.black} />
        <ViewMore link={`/bstt/TtTv`} />
      </div>
      {width > 960 && (
        <div css={content_wrap}>
          {post_data_.map((item, idx) => (
            <Post key={idx} logo={item.logo} post={item.post} />
          ))}
        </div>
      )}
      {width < 960 && (
        <div css={slide_wrap}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            style={{ width: `100%` }}
          >
            {post_data_.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Post logo={item.logo} post={item.post} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div css={pagination_wrap}>
            <div className="custom-pagination" css={pagination}></div>
          </div>
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

const wrap = (theme: CustomTheme) => css`
  display: flex;
  flex-direction: column;
  gap: 54px;

  width: 100%;
  padding: 180px;

  @media (max-width: 1800px) {
    padding: 180px 100px;
  }
  @media (max-width: 1400px) {
    padding: 180px 60px;
  }
  @media (max-width: 1200px) {
    padding: 120px 40px;
  }
  @media (max-width: 960px) {
    padding: 80px 20px;
    gap: 34px;
  }
`;

const title_wrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    align-items: start;
    gap: 16px;
    flex-direction: column;
  }
`;

const content_wrap = css`
  width: 100%;

  display: flex;
  gap: 44px;

  @media (max-width: 1420px) {
    gap: 24px;
  }
`;
