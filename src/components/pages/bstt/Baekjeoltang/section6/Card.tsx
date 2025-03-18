/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface ICard {
  img: string;
  idx: number;
  title: (string | React.ReactNode)[];
}

export default function Card(prop: ICard) {
  const { img, idx, title } = prop;
  return (
    <div css={wrap}>
      <div css={image_container}>
        <img src={img} alt="card" />
      </div>
      <div css={content_container}>
        <div css={title_wrap}>
          <div css={idx_wrap}>
            <p css={idx_text}>0{idx + 1}</p>
          </div>
          <p css={title_text}>{title}</p>
        </div>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  margin-bottom: 140px;
  position: relative;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);
`;

const image_container = css`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const content_container = css`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 100%;
  transform: translateY(-50%);

  width: 58%;
  display: flex;
  padding: 34px 30px;
  flex-direction: column;
  align-items: flex-start;

  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1600px) {
    width: 65%;
    padding: 24px;
  }
  @media (max-width: 1400px) {
    width: 80%;
    padding: 20px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const idx_wrap = css`
  display: flex;
  width: 50px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 80px;
  background: #ecf7eb;

  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1400px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
  @media (max-width: 960px) {
  z}
`;
const idx_text = css`
  color: var(--Color-primary, #018c3b);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;
const title_text = css`
  color: #343434;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  .green {
    color: var(--Color-primary, #018c3b);
  }

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 680px) {
    font-size: 20px;
  }
`;
