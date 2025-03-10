/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

export default function Section12() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const title_ = `튼튼마디의 작은 약속`;
  const desc_ = [
    `저희를 만나시는 모든 분들이`,
    <br key="2" className="mo" />,
    `고통없이 생활하며 꿈과 희망을 되찾고`,
    <br key="1" />,
    `가족과 행복한 시간을`,
    <br key="5" className="mo" />,
    `오래오래 보내실 수 있도록 최선을 다해`,
    <br key="4" className="mo" />,
    `치료해드리겠습니다.`,
  ];
  const bg1_ = `/assets/components/pages/bstt/index/section12/bg1.png`;
  const bg1_mo = `/assets/components/pages/bstt/index/section12/bg1_mo.png`;
  const bg1_mo_short = `/assets/components/pages/bstt/index/section12/bg1_mo_short.png`;

  return (
    <div css={wrap}>
      <div css={title_desc_wrap}>
        <SectionTitleSimple
          text={title_}
          color={theme.colors.mono.black}
          align="center"
        />
        <p css={desc_text(theme)}>{desc_}</p>
      </div>
      <div css={image_wrap}>
        <img
          src={width > 960 ? bg1_ : width > 580 ? bg1_mo_short : bg1_mo}
          alt="bg"
        />
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  position: relative;
`;

const image_wrap = css`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 960px) {
    aspect-ratio: 375 / 345;
  }
  @media (max-width: 580px) {
    aspect-ratio: 375 / 500;
  }
`;

const title_desc_wrap = css`
  position: absolute;
  top: 135px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1900px) {
    top: 100px;
    gap: 16px;
  }
  @media (max-width: 1600px) {
    top: 60px;
    gap: 10px;
  }
  @media (max-width: 1200px) {
    top: 40px;
    gap: 0px;
  }
  @media (max-width: 960px) {
    top: 120px;
    gap: 20px;
  }
  @media (max-width: 860px) {
    top: 60px;
  }
  @media (max-width: 680px) {
    gap: 4px;
  }
  @media (max-width: 600px) {
    gap: 0px;
  }
  @media (max-width: 580px) {
    top: 80px;
    gap: 20px;
  }
  @media (max-width: 370px) {
    top: 40px;
    gap: 0px;
  }
`;

const desc_text = (theme: CustomTheme) => css`
  color: #3c3c3c;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media (max-width: 1900px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
    line-height: 1.5em;
    white-space: nowrap;
  }
  @media (max-width: 680px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 580px) {
    font-size: 18px;
  }
  @media (max-width: 370px) {
    font-size: 16px;
  }
`;
