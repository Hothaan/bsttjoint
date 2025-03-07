/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";

interface IPost {
  profile: { img: string; where: string; who: string };
  post: { img: string; title: string; desc: (string | React.ReactNode)[] };
}

export default function Post(prop: IPost) {
  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap}>
      <div css={content_wrap}>
        <div css={profile_wrap}>
          <ImageContainer maxWidth="34px">
            <img src={prop.profile.img} alt="profile" />
          </ImageContainer>
          <div css={profile_info}>
            <p css={profile_text(theme)}>{prop.profile.where}</p>
            <span css={stroke(theme)}></span>
            <p>{prop.profile.who}</p>
          </div>
        </div>
        <div css={post_wrap}>
          <p css={title_text(theme)}>{prop.post.title}</p>
          <p css={desc_text(theme)}>{prop.post.desc}</p>
        </div>
      </div>
      <div css={post_img_wrap}>
        <img src={prop.post.img} alt="post" />
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  width: 100%;
  max-width: 1100px;
  justify-content: space-between;
  align-items: flex-end;
`;
const content_wrap = css`
  width: 100%;
  max-width: 756px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
const profile_wrap = css`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const profile_text = (theme: CustomTheme) => css`
  color: var(--Black-title, #131313);
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;
const profile_info = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const stroke = (theme: CustomTheme) => css`
  width: 1px;
  height: 16px;
  background-color: ${theme.colors.mono.stroke};
`;
const post_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const title_text = (theme: CustomTheme) => css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const desc_text = (theme: CustomTheme) => css`
  color: var(--text, #3c3c3c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
`;
const post_img_wrap = css`
  border-radius: 15px;
  max-width: 153px;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;
