"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import SectionTitleSimple from "../text/SectionTitleSimple";
import ContentsContainer from "../container/ContentsContainer";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { useState } from "react";

interface ITypeJ {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  title: (string | React.ReactNode)[];
  cardData: { img: string; desc: (string | React.ReactNode)[] }[];
  bgPc: string;
}
export default function TypeS(prop: ITypeJ) {
  const { sectionTitleSimple, pageTitleContent, title, cardData, bgPc } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const [currentIdx, setCurrentIdx] = useState(0);

  function handleChangeCurrentIdx(idx: number) {
    setCurrentIdx(idx);
  }
  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgPc}>
      <div css={wrap}>
        <div css={title_desc_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <div css={content_wrap}>
          <div css={content_text_wrap}>
            <div css={title_wrap}>
              <span css={circle}></span>
              <p css={title_text}>{renderWidthKeys(title)}</p>
            </div>
            {width > 960 && (
              <ul css={desc_wrap}>
                {cardData.map((item, idx) => (
                  <li
                    key={idx + "TypeS card item"}
                    css={desc_item}
                    onClick={() => handleChangeCurrentIdx(idx)}
                  >
                    {currentIdx === idx && (
                      <p css={desc_text(idx === currentIdx)}>-</p>
                    )}
                    {currentIdx !== idx && (
                      <p css={desc_text(idx === currentIdx)}>&nbsp;</p>
                    )}
                    <p css={desc_text(idx === currentIdx)}>
                      {renderWidthKeys(item.desc)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div css={slide_container}>
            <div css={slide_wrap}>
              {cardData.map((item, idx) => {
                const isCurrent = idx === currentIdx;
                const relativeIndex = isCurrent
                  ? 0
                  : idx < currentIdx
                  ? idx + 1
                  : idx;

                return (
                  <div
                    key={idx + "TypeS card item"}
                    css={slide_item(isCurrent, relativeIndex, cardData.length)}
                    onClick={() => handleChangeCurrentIdx(idx)}
                  >
                    <div css={image_container}>
                      <img src={item.img} alt="slide" />
                    </div>
                  </div>
                );
              })}
              <div css={pagination_wrap(cardData.length)}>
                <p css={current_idx}>0{currentIdx + 1}</p>
                <span css={stroke}></span>
                <p css={total_idx}>0{cardData.length}</p>
              </div>
            </div>
          </div>
          {width <= 960 && (
            <ul css={desc_wrap}>
              {cardData.map((item, idx) => (
                <li
                  key={idx + "TypeS card item"}
                  css={desc_item}
                  onClick={() => handleChangeCurrentIdx(idx)}
                >
                  {currentIdx === idx && (
                    <p css={desc_text(idx === currentIdx)}>-</p>
                  )}
                  {currentIdx !== idx && (
                    <p css={desc_text(idx === currentIdx)}>&nbsp;</p>
                  )}
                  <p css={desc_text(idx === currentIdx)}>
                    {renderWidthKeys(item.desc)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 90px;
`;
const title_desc_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const content_wrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 60px;
    justify-content: start;
    align-items: center;
  }
  @media (max-width: 480px) {
    align-items: start;
  }
`;
const content_text_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const title_wrap = css`
  display: flex;
`;
const title_text = css`
  padding: 16px 18px;
  white-space: nowrap;

  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 64.8px */

  .bold {
    font-weight: 700;
  }

  @media (max-width: 1800px) {
    font-size: 44px;
  }
  @media (max-width: 1600px) {
    padding: 12px 14px;
    font-size: 40px;
  }
  @media (max-width: 1400px) {
    font-size: 36px;
  }
  @media (max-width: 1200px) {
    font-size: 32px;
    padding: 8px 14px;
  }
  @media (max-width: 960px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    padding: 5px 13px;
  }
  @media (max-width: 374px) {
    font-size: 20px;
    padding: 4px 8px;
  }
`;
const circle = css`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #018c3b;
  aspect-ratio: 1 / 1;

  @media (max-width: 1400px) {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 960px) {
    width: 12px;
    height: 12px;
  }
  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;
const desc_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 1400px) {
    gap: 15px;
  }
  @media (max-width: 960px) {
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;
const desc_item = css`
  display: flex;
  gap: 20px;

  @media (max-width: 1400px) {
    gap: 15px;
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;
const desc_text = (isSelected: boolean) => css`
  color: ${isSelected ? "#018c3b" : "#aeaeae"};
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  white-space: nowrap;

  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--Color-primary, #018c3b);
  }

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;

const slide_container = css`
  width: 34%;

  @media (max-width: 960px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const slide_wrap = css`
  width: 100%;
  position: relative;
  aspect-ratio: 530 / 666;

  @media (max-width: 960px) {
    width: 50%;
  }
  @media (max-width: 840px) {
    width: 55%;
  }
  @media (max-width: 720px) {
    width: 60%;
  }
  @media (max-width: 640px) {
    width: 70%;
  }
  @media (max-width: 540px) {
    width: 75%;
  }
  @media (max-width: 480px) {
    width: 80%;
    transform: translateX(2.5%);
  }
  @media (max-width: 374px) {
    width: 65%;
  }
`;
const slide_item = (
  isCurrent: boolean,
  positionIdx: number,
  total: number
) => css`
  width: 88%;
  aspect-ratio: 470 / 600;

  position: absolute;
  bottom: ${positionIdx * 22}px;
  left: ${positionIdx * 20}px;
  z-index: ${isCurrent
    ? total + 1
    : total - positionIdx}; // current가 항상 제일 위
  opacity: ${isCurrent ? 1 : 1 - positionIdx * 0.2};

  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: rotate(-1deg);
    transform-origin: bottom left;
  }
`;

const image_container = css`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const pagination_wrap = (length: number) => css`
  position: absolute;
  z-index: ${length + 1};
  left: 0;
  bottom: 0;
  transform: translateX(-68%);

  display: flex;
  align-items: end;
  gap: 18px;

  @media (max-width: 1400px) {
    gap: 10px;
  }
  @media (max-width: 960px) {
    transform: translate(-25%, 45%);
  }
`;
const current_idx = css`
  color: var(--black-text, #3c3c3c);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 128px;
  font-style: normal;
  font-weight: 700;
  line-height: 0.7em;

  @media (max-width: 1800px) {
    font-size: 120px;
  }
  @media (max-width: 1600px) {
    font-size: 112px;
  }
  @media (max-width: 1400px) {
    font-size: 80px;
  }
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 960px) {
    font-size: 90px;
  }
  @media (max-width: 720px) {
    font-size: 86px;
  }
  @media (max-width: 480px) {
    font-size: 82px;
  }
`;
const stroke = css`
  width: 40px;
  height: 2px;
  margin: 8px 0;
  background-color: #3c3c3c;

  @media (max-width: 1800px) {
    width: 38px;
  }
  @media (max-width: 1600px) {
    width: 34px;
  }
  @media (max-width: 1400px) {
    width: 32px;
  }
  @media (max-width: 1200px) {
    width: 28px;
  }
  @media (max-width: 960px) {
    width: 26px;
  }
  @media (max-width: 720px) {
    width: 22px;
  }
  @media (max-width: 480px) {
    width: 20px;
  }
`;
const total_idx = css`
  color: var(--black-text, #3c3c3c);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 0.7em;

  @media (max-width: 1800px) {
    font-size: 34px;
  }
  @media (max-width: 1600px) {
    font-size: 32px;
  }
  @media (max-width: 1400px) {
    font-size: 30px;
  }
  @media (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
