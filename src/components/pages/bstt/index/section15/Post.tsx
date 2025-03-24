"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import ImageContainer from "@/components/ui/container/ImageContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface IPost {
  idx: number;
  link: string;
  profile: { img: string; where: string; who: string };
  post: {
    img: string;
    title: string;
    desc: (string | React.ReactNode)[];
  };
}

export default function Post(prop: IPost) {
  const { idx, profile, post, link } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return width > 960 ? (
    <Link css={wrap} href={link}>
      <div css={content_wrap}>
        <div css={profile_wrap}>
          <ImageContainer maxWidth="34px">
            <img src={prop.profile.img} alt="profile" />
          </ImageContainer>
          <div css={profile_info}>
            <p css={profile_text(theme)}>{prop.profile.where}</p>
            <span css={stroke(theme)}></span>
            <p css={profile_text(theme)}>{prop.profile.who}</p>
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
    </Link>
  ) : (
    <div css={wrap}>
      <div css={content_wrap}>
        <div css={profile_wrap}>
          <ImageContainer maxWidth="20px">
            <img src={prop.profile.img} alt="profile" />
          </ImageContainer>
          <div css={profile_info}>
            <p css={profile_text(theme)}>{prop.profile.where}</p>
            <span css={stroke(theme)}></span>
            <p css={profile_text(theme)}>{prop.profile.who}</p>
          </div>
        </div>
        <div css={post_wrap}>
          <p css={title_text(theme)}>{prop.post.title}</p>
        </div>
      </div>
      <div css={post_wrap_mo}>
        <p css={desc_text(theme)}>{prop.post.desc}</p>
        <div css={post_img_wrap}>
          <img src={prop.post.img} alt="post" />
        </div>
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
  cursor: pointer;

  @media (max-width: 1200px) {
    gap: 40px;
  }
  @media (max-width: 960px) {
    padding: 20px;
    border-bottom: 1px solid #e8e8e8;
    align-items: start;

    gap: 16px;
    flex-direction: column;
  }
  @media (max-width: 370px) {
    gap: 10px;
  }
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
  @media (max-width: 1600px) {
    gap: 8px;
  }
  @media (max-width: 340px) {
    align-items: start;
  }
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

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 12px;
  }
`;
const profile_info = css`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 340px) {
    flex-direction: column;
    align-items: start;
    gap: 4px;
  }
`;
const stroke = (theme: CustomTheme) => css`
  width: 1px;
  height: 16px;
  background-color: ${theme.colors.mono.stroke};
  @media (max-width: 340px) {
    display: none;
  }
`;
const post_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 960px) {
    gap: 12px;
  }
`;
const post_wrap_mo = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const title_text = (theme: CustomTheme) => css`
  color: #3c3c3c;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;
const desc_text = (theme: CustomTheme) => css`
  color: var(--text, #3c3c3c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  @media (max-width: 1600px) {
    font-size: 16px;
  }
`;

const post_img_wrap = css`
  border-radius: 15px;
  max-width: 153px;
  overflow: hidden;
  img {
    object-fit: cover;
  }

  @media (max-width: 960px) {
    max-width: 61px;
    border-radius: 5px;
  }
`;
