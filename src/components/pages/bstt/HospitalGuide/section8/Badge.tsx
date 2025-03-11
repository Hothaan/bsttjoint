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
  padding: 68px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 160px;
  background: #018c3b;
`;

const icon_container = css`
  height: 54px;
  width: auto;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const title_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const desc_text = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
`;
