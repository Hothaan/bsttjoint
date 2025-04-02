"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import ViewMore from "@/components/ui/link/viewMore/ViewMore";
import Post from "./Post";

export default function Section15() {
  const theme = useTheme() as CustomTheme;

  const title_ = "인기글";

  const profile_ = `/assets/components/pages/bstt/index/section15/profile.png`;
  const post_ = `/assets/components/pages/bstt/index/section15/post.png`;
  const post_data_ = [
    {
      link: ``,
      profile: {
        img: profile_,
        where: `관절척추중점진료 튼튼마디한의원`,
        who: `신영균원장`,
      },
      post: {
        img: post_,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: [
          `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만,`,
          <br key="1" />,
          `기대한 만큼 낫지 못하는 경우가 흔한데요.`,
          <br key="2" />,
          `심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        ],
      },
    },
    {
      link: ``,
      profile: {
        img: profile_,
        where: `관절척추중점진료 튼튼마디한의원`,
        who: `신영균원장`,
      },
      post: {
        img: post_,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: [
          `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만,`,
          <br key="1" />,
          `기대한 만큼 낫지 못하는 경우가 흔한데요.`,
          <br key="2" />,
          `심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        ],
      },
    },
    {
      link: ``,
      profile: {
        img: profile_,
        where: `관절척추중점진료 튼튼마디한의원`,
        who: `신영균원장`,
      },
      post: {
        img: post_,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: [
          `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만,`,
          <br key="1" />,
          `기대한 만큼 낫지 못하는 경우가 흔한데요.`,
          <br key="2" />,
          `심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        ],
      },
    },
    {
      link: ``,
      profile: {
        img: profile_,
        where: `관절척추중점진료 튼튼마디한의원`,
        who: `신영균원장`,
      },
      post: {
        img: post_,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: [
          `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만,`,
          <br key="1" />,
          `기대한 만큼 낫지 못하는 경우가 흔한데요.`,
          <br key="2" />,
          `심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        ],
      },
    },
    {
      link: ``,
      profile: {
        img: profile_,
        where: `관절척추중점진료 튼튼마디한의원`,
        who: `신영균원장`,
      },
      post: {
        img: post_,
        title: `부산관절병원 무릎 관절염 악화되기 전에 치료`,
        desc: [
          `매년 많은 환자분들이 부산관절병원과 한의원을 방문하며 치료와 관리를 위해 노력하고 계시지만,`,
          <br key="1" />,
          `기대한 만큼 낫지 못하는 경우가 흔한데요.`,
          <br key="2" />,
          `심지어 증상이 더 악화되는 경우도 있어 환자분들의 고민이 더욱 깊어지고 ...`,
        ],
      },
    },
  ];

  return (
    <ContentsContainer>
      <div css={wrap(theme)}>
        <div css={inner_wrap(theme)}>
          <SectionTitleSimple text={title_} color={theme.colors.mono.black} />
          <div css={content_wrap}>
            {post_data_.map((item, idx) => (
              <Post
                key={idx}
                profile={item.profile}
                post={item.post}
                idx={idx + 1}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <div css={view_more_wrap}>
          <ViewMore link={`/bstt/PhysicianHealthColumn`} />
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = (theme: CustomTheme) => css`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    gap: 30px;
  }
`;
const inner_wrap = (theme: CustomTheme) => css`
  display: flex;
  gap: 300px;
  width: 100%;
  max-width: 1920px;
  justify-content: center;

  @media (max-width: 1919px) {
    gap: 0;
    justify-content: space-between;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const content_wrap = css`
  width: 80%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 20px;
    border-top: 2px solid #000;
    gap: 0;
  }
`;

const view_more_wrap = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;
