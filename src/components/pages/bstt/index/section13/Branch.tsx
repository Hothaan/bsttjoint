/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import ArrowRight from "@/assets/components/pages/bstt/index/section13/arrowRight.svg";

interface IBranch {
  depth1: string;
  depth2: {
    text: string;
    link: string;
    isAvailable: boolean;
  }[];
}

export default function Branch(prop: IBranch) {
  const { depth1, depth2 } = prop;
  const theme = useTheme() as CustomTheme;
  return (
    <div css={wrap}>
      <p css={depth1_text(theme)}>{depth1}</p>
      {depth2.map((item, idx) => (
        <div key={idx} css={depth2_wrap}>
          {item.isAvailable ? (
            <Link href={item.link}>
              <p css={depth2_text(theme)}>{item.text}</p>
            </Link>
          ) : (
            <p css={depth2_text(theme)}>{item.text}</p>
          )}
          <ArrowRight />
        </div>
      ))}
    </div>
  );
}

const wrap = css`
  display: flex;
  padding: 20px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 15px;
  background: #fff;
`;

const depth1_text = (theme: CustomTheme) => css`
  color: #121212;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-right: 30px;
`;

const depth2_wrap = css`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 5px;
  border: 1px solid #e4e4e4;
  background: #fff;

  transition: 0.3s ease-out;

  &:hover {
    border: 1px solid var(--Color-primary, #018c3b);
    background: #f6fff6;
  }
`;

const depth2_text = (theme: CustomTheme) => css`
  color: #121212;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
`;
