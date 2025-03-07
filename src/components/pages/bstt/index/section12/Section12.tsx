/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import ImageContainer from "@/components/ui/container/ImageContainer";

export default function Section12() {
  const theme = useTheme() as CustomTheme;
  const title_ = `튼튼마디의 작은 약속`;
  const desc_ = [
    `저희를 만나시는 모든 분들이 고통없이 생활하며 꿈과 희망을 되찾고`,
    <br key="1" />,
    `
가족과 행복한 시간을 오래오래 보내실 수 있도록 최선을 다해 치료해드리겠습니다.`,
  ];
  const bg1_ = `/assets/components/pages/bstt/index/section12/bg1.png`;

  return (
    <div css={wrap}>
      <div css={title_desc_wrap}>
        <SectionTitleSimple text={title_} color={theme.colors.mono.black} />
        <p css={desc_text(theme)}>{desc_}</p>
      </div>
      <ImageContainer maxWidth="100%">
        <img src={bg1_} alt="bg" />
      </ImageContainer>
    </div>
  );
}

const wrap = css`
  width: 100%;
  position: relative;
`;

const title_desc_wrap = css`
  position: absolute;
  top: 135px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const desc_text = (theme: CustomTheme) => css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
`;
