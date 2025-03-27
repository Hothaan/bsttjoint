"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import ProfileCard from "./ProfileCard";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Section2() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const section_title_simple_ = {
    text: [`의료진 소개`],
    color: theme.colors.mono.black,
    alert: "left",
  };
  const profile_card_data_pc_ = [
    {
      img: `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card1_pc.png`,
      who: `김한연 원장`,
      list: [
        `대구한의대학교 한의과대학 졸업`,
        `前 영천시보건소 한의과 진료과장`,
        `前 봉화군보건소 한의과 진료과장`,
        `現 튼튼마디한의원 부산서면점 원장`,
        `대한한의학회 정회원`,
        `척추신경추나의학회 정회원`,
        `임상약침학회 정회원`,
        `한방내과학회 정회원`,
        `동서비교한의학회 정회원`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card2_pc.png`,
      who: `박영훈 원장`,
      list: [
        `동국대학교 한의과대학 졸업`,
        `前 청도군보건소 한의과 진료과장`,
        `前 명가한의원 진료원장`,
        `前 금평한의원 원장`,
        `現 튼튼마디한의원 부산서면점 원장`,
        `대한한의학회 정회원`,
        `대한동의방약학회 정회원`,
        `한방재활의학과학회 정회원`,
        `대한침구의학회 정회원`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card3_pc.png`,
      who: `홍예임 원장`,
      list: [
        `경희대학교 한의과대학 졸업`,
        `前 명제한의원 진료원장`,
        `現 튼튼마디한의원 부산서면점 원장`,
        `한방비만학회 비만치료 전문가과정 수료`,
        `산삼비만약침&디톡스 다이어트과정 수료`,
        `대한한방내과학회 정회원`,
        `한방재활의학과학회 정회원`,
        `대한한방부인과학회 정회원`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card4_pc.png`,
      who: `신영균 원장`,
      list: [
        `동의대학교 한의과대학 졸업`,
        `前 영등포 대명한의원 부원장`,
        `現 튼튼마디한의원 부산서면점 원장`,
        `現 동의대학교 한의과대학 임상외래교수`,
        `대한침구의학회 정회원`,
        `한방재활의학과학회 정회원`,
        `한방내과학회 정회원`,
        `동서비교한의학회 정회원`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card5_pc.png`,
      who: `강은진 원장`,
      list: [
        `동의대학교 한의과대학 대학원 석사/박사 취득`,
        `대한한의사협회 한방내과 전문의`,
        `現 튼튼마디한의원 부산서면점 원장 `,
        `한방내과학 교과서 번역 및 감수`,
        `동서비교한의학회 편집위원회`,
        `대한한의학회 정회원`,
        `한방내과학회 정회원`,
        `한방비만학회 회원`,
      ],
    },
  ];
  const profile_card_data_mo_ = [
    `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card1_mo.png`,
    `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card2_mo.png`,
    `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card3_mo.png`,
    `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card4_mo.png`,
    `/assets/components/pages/bstt/BranchGuide/Bstt/section2/profile_card5_mo.png`,
  ];

  if (width === null) {
    return;
  }

  return (
    <div css={wrap}>
      <SectionTitleSimple {...section_title_simple_} />
      {width > 960 && (
        <div css={profile_container}>
          {profile_card_data_pc_.map((item, idx) => (
            <ProfileCard {...item} key={idx} />
          ))}
        </div>
      )}
      {width <= 960 && (
        <div css={slide_wrap}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            style={{ width: `100%` }}
          >
            {profile_card_data_mo_.map((item, idx) => (
              <SwiperSlide key={idx + `branch guide section2`}>
                <div css={image_container}>
                  <img src={item} alt="profile" />
                </div>
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

const wrap = css`
  width: 100%;
  padding: 0 180px 180px 180px;

  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 1800px) {
    padding: 0 160px 160px 160px;
  }
  @media (max-width: 1600px) {
    padding: 0 140px 140px 140px;
    gap: 60px;
  }
  @media (max-width: 1400px) {
    padding: 0 100px 100px 100px;
  }
  @media (max-width: 1200px) {
    padding: 0 80px 80px 80px;
    gap: 40px;
  }
  @media (max-width: 960px) {
    padding: 0 20px 80px 20px;
    gap: 34px;
  }
`;

const profile_container = css`
  width: 100%;
  display: flex;
  gap: 78px;
  flex-wrap: wrap;

  & > div {
    width: calc(33.3% - (78px * 2 / 3));
  }

  @media (max-width: 1800px) {
    gap: 56px;
    & > div {
      width: calc(33.3% - (56px * 2 / 3));
    }
  }
  @media (max-width: 1600px) {
    gap: 48px;
    & > div {
      width: calc(33.3% - (48px * 2 / 3));
    }
  }
  @media (max-width: 1400px) {
    gap: 32px;
    & > div {
      width: calc(33.3% - (32px * 2 / 3));
    }
  }
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

const image_container = css`
  width: 100%;
  height: auto;
  aspect-ratio: 284 / 602;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
