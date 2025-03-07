/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";

interface IPost {
  post: {
    img: string;
    title: string;
    where: string;
    who: string;
    date: string;
    view: string;
  };
  logo: string;
}
export default function Post(prop: IPost) {
  const { post, logo } = prop;
  const theme = useTheme() as CustomTheme;
  return (
    <div css={wrap}>
      <div css={img_container}>
        <img src={post.img} alt="post" />
      </div>
      <div css={content_wrap}>
        <ImageContainer maxWidth="50px">
          <img src={logo} alt="logo" />
        </ImageContainer>
        <div css={text_wrap}>
          <p css={title_text(theme)}>{post.title}</p>
          <div css={where_who_wrap}>
            <p css={where_who_text(theme)}>{post.where}</p>
            <span css={stroke(theme)}></span>
            <p css={where_who_text(theme)}>{post.who}</p>
          </div>
          <div css={info_wrap}>
            <p css={info_text(theme)}>{post.view}</p>
            <span css={stroke(theme)}></span>
            <p css={info_text(theme)}>{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  width: 100%;
  max-width: 494px;
`;
const img_container = css`
  width: 100%;
  max-width: 494px;
  overflow: hidden;

  border-radius: 15px;

  img {
    object-fit: cover;
  }
`;
const content_wrap = css`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
const text_wrap = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
const title_text = (theme: CustomTheme) => css`
  overflow: hidden;
  color: #3c3c3c;
  text-overflow: ellipsis;

  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const where_who_wrap = css`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: stretch;
`;
const where_who_text = (theme: CustomTheme) => css`
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

const stroke = (theme: CustomTheme) => css`
  width: 1px;
  height: 16px;
  background-color: ${theme.colors.mono.stroke};
`;

const info_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const info_text = (theme: CustomTheme) => css`
  color: var(--808080, #808080);
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 129.412% */
`;
