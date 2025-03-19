/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "../container/ContentsContainer";
import SectionTitleSimple from "../text/SectionTitleSimple";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import Call from "@/assets/components/ui/treatment/TypeK/call.svg";

interface ITypeK {
  bgPc: string;
  bgMo: string;
  small: (string | React.ReactNode)[];
  big: (string | React.ReactNode)[];
}

export default function TypeK(prop: ITypeK) {
  const { bgPc, bgMo, small, big } = prop;
  return (
    <div css={bg_wrap(bgPc, bgMo)}>
      <div css={wrap}>
        <div css={title_wrap}>
          <p css={small_title_text}>{small}</p>
          <p css={big_title_text}>{renderWidthKeys(big)}</p>
        </div>
        <div css={call_wrap}>
          <div css={icon_container}>
            <Call />
          </div>
          <p css={call_text}>1566.9055</p>
        </div>
      </div>
    </div>
  );
}
const bg_wrap = (bgPc: string, bgMo: string) => css`
  position: relative;

  width: 100%;
  padding: 150px 180px;
  margin: 0 auto;
  overflow: hidden;

  background-image: url(${bgPc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1800px) {
    padding: 140px 160px;
  }
  @media (max-width: 1400px) {
    padding: 120px 140px;
  }
  @media (max-width: 1200px) {
    padding: 100px 120px;
  }
  @media (max-width: 1000px) {
    padding: 80px 100px;
  }
  @media (max-width: 960px) {
    background-image: url(${bgMo});
    padding: 116px 80px;
  }
  @media (max-width: 680px) {
    padding: 116px 60px;
  }
  @media (max-width: 540px) {
    padding: 116px 40px;
  }
  @media (max-width: 480px) {
    padding: 116px 20px;
  }
`;
const wrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;
const small_title_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  text-transform: uppercase;

  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 680px) {
    font-size: 16px;
  }
`;
const big_title_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 72.9px */
  text-transform: uppercase;

  @media (max-width: 1600px) {
    font-size: 48px;
  }
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 680px) {
    font-size: 34px;
  }
`;
const call_wrap = css`
  display: flex;
  padding: 22.5px 40px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(15px);

  @media (max-width: 960px) {
    padding: 15.5px 20px;
    border-radius: 5px;
  }
`;
const icon_container = css`
  height: 40px;
  aspect-ratio: 1 / 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1600px) {
    height: 32px;
  }
  @media (max-width: 1200px) {
    height: 24px;
  }
`;

const call_text = css`
  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: 1600px) {
    font-size: 32px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
`;
