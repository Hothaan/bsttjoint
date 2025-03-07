/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import ArrowRight from "@/assets/components/pages/bstt/index/section14/arrowRight.svg";

export default function Section14() {
  const theme = useTheme() as CustomTheme;
  const bg1 = `/assets/components/pages/bstt/index/section14/bg1.png`;
  const content_ = {
    title: [
      `튼튼한 백년을 위한 `,
      <span key="1" className="green">
        현명한 선택
      </span>,
    ],
    desc: [
      `관절척추 중점진료`,
      <br key="1" />,
      <span key="2" className="highlight">
        튼튼마디 한의원
      </span>,
    ],
    quote: `”당신과 함께 걷고 싶습니다”`,
  };

  const link_button_ = {
    text: "진료문의",
    link: "/bstt/MedicalInquiries",
  };
  return (
    <div css={wrap(bg1)}>
      <div css={content_wrap}>
        <div css={title_desc_qoute_wrap}>
          <p css={title_text(theme)}>{content_.title}</p>
          <p css={desc_text(theme)}>{content_.desc}</p>
          <p css={quote_text(theme)}>{content_.quote}</p>
        </div>

        <Link href={link_button_.link} css={link_button(theme)}>
          <p css={link_text(theme)}>{link_button_.text}</p>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

const wrap = (img: string) => css`
  position: relative;
  width: 100%;
  aspect-ratio: 1920 / 683;

  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 54px;

  position: absolute;
  left: 350px;
  top: 50%;
  transform: translateY(-50%);
`;
const title_desc_qoute_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const title_text = (theme: CustomTheme) => css`
  color: #121212;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  .green {
    color: var(--Color-primary, #018c3b);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const desc_text = (theme: CustomTheme) => css`
  color: #121212;
  font-family: Pretendard;
  font-size: 54px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  .highlight {
    color: #fff;
    font-family: Pretendard;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    padding: 6px 14px;
    display: inline-block;
    background-color: var(--Color-primary, #018c3b);
  }
`;

const quote_text = (theme: CustomTheme) => css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 47.6px */
`;

const link_button = (theme: CustomTheme) => css`
  width: fit-content;

  display: flex;
  padding: 20px 34px;
  align-items: center;
  gap: 10px;
  border-radius: 80px;
  background: #fff;
`;
const link_text = (theme: CustomTheme) => css`
  color: #121212;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
