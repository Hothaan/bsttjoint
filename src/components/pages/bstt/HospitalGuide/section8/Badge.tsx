/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface IBadge {
  icon: React.ReactNode;
  title: string;
  desc: (string | React.ReactNode)[];
}

export default function Badge(prop: IBadge) {
  const { icon, title, desc } = prop;
  return (
    <div css={wrap}>
      <div css={icon_container}>{icon}</div>
      <p css={title_text}>{title}</p>
      <p css={desc_text}>{desc}</p>
    </div>
  );
}

const wrap = css`
  display: flex;
  width: 320px;
  height: 320px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 50%;
  background: #018c3b;

  @media (max-width: 1600px) {
    width: 280px;
    height: 280px;
  }
  @media (max-width: 1400px) {
    width: 240px;
    height: 240px;
  }
  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 960px) {
    width: 180px;
    height: 180px;
    gap: 6px;
  }
  @media (max-width: 480px) {
    width: 163.5px;
    height: 163.5px;
    gap: 4px;
  }
`;

const icon_container = css`
  height: 54px;
  width: auto;
  overflow: visible;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1600px) {
    height: 50px;
  }
  @media (max-width: 1400px) {
    height: 46px;
  }
  @media (max-width: 1200px) {
    height: 42px;
  }
  @media (max-width: 960px) {
    height: 32px;
  }
  @media (max-width: 480px) {
    height: 24px;
  }
`;

const title_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1600px) {
    font-size: 30px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const desc_text = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
