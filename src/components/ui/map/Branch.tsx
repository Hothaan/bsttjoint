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
      <div css={depth2_container}>
        {depth2.map((item, idx) => (
          <div key={idx} css={depth2_wrap(item.isAvailable)}>
            {item.isAvailable ? (
              <Link href={item.link}>
                <p css={depth2_text(theme, item.isAvailable)}>{item.text}</p>
              </Link>
            ) : (
              <p css={depth2_text(theme, item.isAvailable)}>{item.text}</p>
            )}
            <ArrowRight />
          </div>
        ))}
      </div>
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

  @media (max-width: 1800px) {
    padding: 16px 28px;
    gap: 8px;
  }
  @media (max-width: 1600px) {
    padding: 14px 24px;
    gap: 6px;
  }
  @media (max-width: 1200px) {
    padding: 6px 12px;
  }
  @media (max-width: 960px) {
    justify-content: start;
    align-items: start;
    padding: 0;
  }
`;

const depth2_container = css`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
  @media (max-width: 375px) {
    gap: 6px;
  }
`;

const depth1_text = (theme: CustomTheme) => css`
  color: #121212;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-right: 30px;
  white-space: nowrap;

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
    height: 44px;
    line-height: 44px;
    margin-right: 16px;
  }
  @media (max-width: 370px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const depth2_wrap = (isAvailable: boolean) => css`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 5px;
  border: 1px solid #e4e4e4;
  background: ${isAvailable ? "#fff" : "#F3F3F3;"};

  transition: 0.3s ease-out;

  &:hover {
    border: ${isAvailable ? "1px solid #018c3b" : "1px solid #e4e4e4"};
    background: ${isAvailable ? "#f6fff6" : "#F3F3F3"};
  }

  @media (max-width: 1800px) {
    padding: 8px 16px;
  }
  @media (max-width: 1600px) {
    padding: 6px 12px;
  }
  @media (max-width: 1200px) {
    width: 136px;
    justify-content: space-between;
    height: 44px;
  }
  @media (max-width: 374px) {
    width: auto;
    padding: 4px 8px;
  }
`;

const depth2_text = (theme: CustomTheme, isAvailable: boolean) => css`
  color: ${isAvailable ? "#121212" : "#545454"};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  white-space: nowrap;

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
