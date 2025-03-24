"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import ContentsContainer from "../container/ContentsContainer";
import SectionTitleSimple from "../text/SectionTitleSimple";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ITypeM {
  bgPc: string;
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    imgPc: string;
    imgMo: string;
    title: string;
    content: (string | React.ReactNode)[][];
  }[];
}

export default function TypeM(prop: ITypeM) {
  const { bgPc, sectionTitleSimple, pageTitleContent, cardData } = prop;
  const [selectedIdx, setSelectedIdx] = useState(0);

  function handleChangeSelectedIdx(idx: number) {
    setSelectedIdx(idx);
  }
  return (
    <ContentsContainer bgPc={bgPc} bgMo={``}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <div css={content_wrap}>
          <ul css={list_wrap}>
            {cardData.map((item, idx) => (
              <li
                key={idx + "TypeM list item"}
                css={list_item(idx === selectedIdx)}
                onClick={() => {
                  handleChangeSelectedIdx(idx);
                }}
              >
                <span css={list_item_circle(idx === selectedIdx)}></span>
                <p css={list_item_text(idx === selectedIdx)}>{item.title}</p>
              </li>
            ))}
          </ul>
          <div css={selected_content_wrap}>
            <div css={image_container}>
              <img src={cardData[selectedIdx].imgPc} alt="card" />
            </div>
            <div css={selected_text_wrap}>
              <div css={idx_wrap}>
                <p css={idx_text}>0{selectedIdx + 1}</p>
                <span css={list_item_circle(true)}></span>
              </div>
              <div css={text_wrap}>
                <p css={title_text}>{cardData[selectedIdx].title}</p>
                <ul css={content_item_wrap}>
                  {cardData[selectedIdx].content.map((item, idx) => (
                    <li
                      key={idx + "TypeM card item content item"}
                      css={content_item}
                    >
                      <p css={[content_text_unit, content_text]}>- </p>
                      <p css={content_text}>{renderWidthKeys(item)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 74px;

  @media (max-width: 1600px) {
    gap: 60px;
  }
  @media (max-width: 1200px) {
    gap: 40px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const content_wrap = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 120px;

  @media (max-width: 1800px) {
    gap: 100px;
  }
  @media (max-width: 1600px) {
    gap: 80px;
  }
  @media (max-width: 1400px) {
    gap: 60px;
  }
  @media (max-width: 1200px) {
    gap: 40px;
    flex-direction: column;
  }
`;
const list_wrap = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 30px;

  @media (max-width: 1600px) {
    gap: 24px;
  }
  @media (max-width: 1400px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    gap: 16px;
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 720px) {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 374px) {
    gap: 6px;
  }
`;
const image_container = css`
  width: 50%;
  align-self: stretch;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 500 / 600;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 720px) {
    width: 100%;
    aspect-ratio: 335 / 280;
    border-radius: 5px;
  }
`;
const list_item = (isSelected: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-self: stretch;

  opacity: ${isSelected ? 1 : 0.3};
  padding-bottom: 35px;
  border-bottom: 1px solid #121212;

  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 1800px) {
    gap: 30px;
    padding-bottom: 30px;
  }
  @media (max-width: 1600px) {
    gap: 24px;
    padding-bottom: 24px;
  }
  @media (max-width: 1400px) {
    gap: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 1200px) {
    gap: 16px;
    padding-bottom: 16px;
    width: 100%;
  }
  @media (max-width: 720px) {
    gap: 10px;
    padding-bottom: 10px;
  }
  @media (max-width: 374px) {
    gap: 6px;
    padding-bottom: 6px;
  }
`;
const list_item_circle = (isSelected: boolean) => css`
  display: block;
  width: 14px;
  aspect-ratio: 1/1;
  background-color: ${isSelected ? "#018c3b" : "transparent"};
  border-radius: 50%;

  @media (max-width: 1800px) {
    width: 12px;
  }
  @media (max-width: 1600px) {
    width: 10px;
  }
  @media (max-width: 720px) {
    width: 6px;
  }
`;
const list_item_text = (isSelected: boolean) => css`
  color: #3c3c3c;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 32px */
  white-space: nowrap;

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
const selected_content_wrap = css`
  display: flex;
  gap: 65px;
  justify-content: end;

  @media (max-width: 1800px) {
    gap: 55px;
  }
  @media (max-width: 1600px) {
    gap: 45px;
  }
  @media (max-width: 1400px) {
    gap: 40px;
  }
  @media (max-width: 1200px) {
    gap: 30px;
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
const selected_text_wrap = css`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 720px) {
    justify-content: start;
    gap: 30px;
    width: 100%;
  }
`;
const idx_wrap = css`
  display: inline-flex;
  align-items: flex-end;
  gap: 10px;
`;
const idx_text = css`
  color: #3c3c3c;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 128px;
  font-style: normal;
  font-weight: 700;
  line-height: 0.7em;

  @media (max-width: 1800px) {
    font-size: 100px;
  }
  @media (max-width: 1600px) {
    font-size: 80px;
  }
  @media (max-width: 1400px) {
    font-size: 72px;
  }
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 374px) {
    font-size: 40px;
  }
`;
const text_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1600px) {
    gap: 24px;
  }
  @media (max-width: 1200px) {
    gap: 16px;
  }
  @media (max-width: 720px) {
    gap: 15px;
  }
`;
const title_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 720px) {
    font-size: 18px;
  }
`;

const content_item_wrap = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
const content_item = css`
  display: flex;
  gap: 8px;
`;
const content_text_unit = css`
  height: 1.6em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const content_text = css`
  color: #666;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  width: fit-content;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
`;
