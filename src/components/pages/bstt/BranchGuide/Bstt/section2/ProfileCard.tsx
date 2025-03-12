/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

interface IProfileCard {
  img: string;
  who: string;
  list: string[];
}

export default function ProfileCard(prop: IProfileCard) {
  const { img, who, list } = prop;
  return (
    <div css={wrap}>
      <div css={img_container}>
        <img src={img} alt="profile" />
      </div>
      <div css={content_wrap}>
        <p css={who_text}>{who}</p>
        <ul css={list_container}>
          {list.map((item, idx) => (
            <li key={idx} css={list_item_wrap}>
              <span css={circle}></span>
              <p css={list_item_text}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 34px;

  @media (max-width: 1800px) {
    gap: 28px;
  }
  @media (max-width: 1600px) {
    gap: 24px;
  }
  @media (max-width: 1400px) {
    gap: 16px;
  }
`;
const content_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media (max-width: 1400px) {
    gap: 8px;
  }
`;
const img_container = css``;
const who_text = css`
  padding-left: 20px;

  color: #121212;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 1800px) {
    font-size: 28px;
    padding-left: 16px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
    padding-left: 12px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
    padding-left: 8px;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
    padding-left: 8px;
  }
`;
const list_container = css``;
const list_item_wrap = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;

  @media (max-width: 1800px) {
    padding-left: 16px;
  }
  @media (max-width: 1600px) {
    align-items: start;
    padding-left: 12px;
    gap: 8px;
  }
  @media (max-width: 1400px) {
    padding-left: 8px;
    gap: 6px;
  }
`;
const circle = css`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  display: block;
  background-color: #494949;
  flex-shrink: 0;

  margin: 0.7em 0;
`;
const list_item_text = css`
  color: #494949;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  white-space: nowrap;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1600px) {
    white-space: wrap;
    font-size: 14px;
  }
  @media (max-width: 1400px) {
  }
`;
