"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import Search from "@/components/ui/search/Search";
import HotPost from "@/components/ui/post/HotPost";
import SearchResultTypeB from "@/components/ui/search/SearchResultTypeB";

export default function Section1() {
  const [currentPage, setCurrentPage] = useState(1);
  const total = 100;
  const perPage = 10;
  const hot_post_data_ = {
    title: `인기영상`,
    data: [
      {
        img: `/assets/components/pages/bstt/TtTv/section1/HotPost/post1_pc.png`,
        title: `[알기쉬운] 퇴행성관절염, 방치하지 마세요!`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/HotPost/post1_pc.png`,
        title: `[알기쉬운] 퇴행성관절염, 방치하지 마세요!`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/HotPost/post1_pc.png`,
        title: `[알기쉬운] 퇴행성관절염, 방치하지 마세요!`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/HotPost/post1_pc.png`,
        title: `[알기쉬운] 퇴행성관절염, 방치하지 마세요!`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
    ],
  };

  const search_result_data_ = {
    data: [
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },

      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/post1_pc.png`,
        title: `퇴행성관절염, 한방으로 치료가 되나요? 그 이유를 알아야합니다.`,
        link: ``,
        view: `7.9만회`,
        date: `2023.01.01`,
        profile: {
          img: `/assets/components/pages/bstt/TtTv/section1/SearchResultTypeB/logo1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
    ],
  };
  return (
    <div css={wrap}>
      <Search />
      <HotPost title={hot_post_data_.title} data={hot_post_data_.data} />
      <SearchResultTypeB
        {...search_result_data_}
        pagination={{
          total: total,
          perPage: perPage,
          current: currentPage,
          onPageChange: setCurrentPage,
        }}
      />
    </div>
  );
}

const wrap = css`
  padding: 120px 260px;

  @media (max-width: 1800px) {
    padding: 120px 220px;
  }
  @media (max-width: 1600px) {
    padding: 120px 180px;
  }
  @media (max-width: 1400px) {
    padding: 120px 140px;
  }
  @media (max-width: 1200px) {
    padding: 100px 100px;
  }
  @media (max-width: 960px) {
    padding: 80px;
  }
  @media (max-width: 680px) {
    padding: 80px 40px;
  }
  @media (max-width: 580px) {
    padding: 80px 20px;
  }
  @media (max-width: 500px) {
    padding: 80px 0;
  }
`;
