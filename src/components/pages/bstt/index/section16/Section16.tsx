/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import Post from "./Post";
import ViewMore from "@/components/ui/link/viewMore/ViewMore";

export default function Section16() {
  const theme = useTheme() as CustomTheme;

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
      <div css={content_wrap}>
        {post_data_.map((item, idx) => (
          <Post key={idx} logo={item.logo} post={item.post} />
        ))}
      </div>
    </div>
  );
}

const wrap = (theme: CustomTheme) => css`
  display: flex;
  flex-direction: column;
  gap: 54px;

  width: 100%;
  padding: 180px;
`;

const title_wrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const content_wrap = css`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
