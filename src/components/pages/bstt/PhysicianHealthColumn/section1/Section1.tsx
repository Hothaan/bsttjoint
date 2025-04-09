"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import Search from "@/components/ui/search/Search";
import HotPost from "@/components/ui/post/HotPost";
import SearchResultTypeA from "@/components/ui/search/SearchResultTypeA";

export default function Section1() {
  const [currentPage, setCurrentPage] = useState(1);
  const total = 100;
  const perPage = 10;
  const hot_post_data_ = {
    title: `인기칼럼`,
    data: [
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `먹어도 자꾸 먹고 싶은 이유는? 퇴행성 관절염의 증상을 알아봅시다 그`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `먹어도 자꾸 먹고 싶은 이유는? 퇴행성 관절염의 증상을 알아봅시다 그`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `먹어도 자꾸 먹고 싶은 이유는? 퇴행성 관절염의 증상을 알아봅시다 그`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `먹어도 자꾸 먹고 싶은 이유는? 퇴행성 관절염의 증상을 알아봅시다 그`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `먹어도 자꾸 먹고 싶은 이유는? 퇴행성 관절염의 증상을 알아봅시다 그`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `먹어도 자꾸 먹고 싶은 이유는? 퇴행성 관절염의 증상을 알아봅시다 그`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
    ],
  };
  const search_result_data_ = {
    data: [
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
      {
        img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/post1_pc.png`,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만, 기대한 만큼 낫지 못하는 경우가 흔한데요. 심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        link: ``,
        profile: {
          img: `/assets/components/pages/bstt/PhysicianHealthColumn/section1/HotPost/profile1_pc.png`,
          where: `관절척추중점진료 튼튼마디한의원`,
          who: `신영균원장`,
        },
      },
    ],
  };
  return (
    <div css={wrap}>
      <Search />
      <div css={content_wrap}>
        <HotPost title={hot_post_data_.title} data={hot_post_data_.data} />
        <SearchResultTypeA
          {...search_result_data_}
          pagination={{
            total: total,
            perPage: perPage,
            current: currentPage,
            onPageChange: setCurrentPage,
          }}
        />
      </div>
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

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 960px) {
    gap: 0;
  }
`;
