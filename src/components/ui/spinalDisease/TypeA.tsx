"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import SectionTitleSimple from "../text/SectionTitleSimple";
import ContentsContainer from "../container/ContentsContainer";
import { ISectionTitleSimple } from "../text/SectionTitleSimple";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface ITypeA {
  sectionTitleSimple: ISectionTitleSimple;
  cardData: {
    img: string;
    listTitle: string;
    title: (string | React.ReactNode)[];
    desc: string;
    caption: string;
  }[];
  bgColor: string;
}

export default function TypeA(prop: ITypeA) {
  const { sectionTitleSimple, cardData, bgColor } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const bgColor_ = `#EAF5EF`;
  const [currentIdx, setCurrentIdx] = useState(0);

  function handleChangeCurrentIdx(idx: number) {
    setCurrentIdx(idx);
  }

  return (
    <ContentsContainer bgColor={bgColor || bgColor_}>
      <div css={wrap(width)}>
        <div css={text_wrap(width)}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <ul css={list_wrap}>
            {cardData.map((item, idx) => (
              <li
                key={idx + "TypeA list item"}
                css={list_item(currentIdx === idx)}
                onClick={() => handleChangeCurrentIdx(idx)}
              >
                <div css={list_item_inner_wrap}>
                  {currentIdx === idx && <span css={circle}></span>}
                  <p css={list_text(currentIdx === idx)}>0{idx + 1}</p>
                  <p css={list_text(currentIdx === idx)}>{item.listTitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul css={card_wrap}>
          {cardData.map((item, idx) => (
            <li key={idx + `TypeA card item`} css={card_item}>
              <div css={image_container}>
                <div css={idx_wrap}>
                  <p css={idx_text}>0{idx + 1}</p>
                  <span css={idx_circle}></span>
                </div>
                <img src={item.img} alt="card" />
                <div css={card_caption_wrap}>
                  <p css={card_caption}>{item.caption}</p>
                </div>
              </div>
              <div css={card_content_wrap}>
                <p css={card_title}>{renderWidthKeys(item.title)}</p>
                <p css={card_desc}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ContentsContainer>
  );
}

const wrap = (width: number) => css`
  display: flex;
  justify-content: space-between;

  height: ${width * 0.46}px;
`;
const text_wrap = (width: number) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const list_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const list_item = (isSelected: boolean) => css`
  padding-left: 25px;
  border-left: ${isSelected ? "2px solid #018c3b" : "none"};

  cursor: pointer;

  transition: 0.3s ease-in-out;
`;
const list_item_inner_wrap = css`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 14px 20px 14px 0;
`;
const circle = css`
  display: block;
  width: 8px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #018c3b;
`;
const list_text = (isSelected: boolean) => css`
  color: ${isSelected ? "#018c3b" : "#C1C1C1;"};
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 32px */
  text-transform: uppercase;

  transition: 0.3s ease-in-out;
`;
const card_wrap = css`
  width: 50%;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 80px;
`;
const card_item = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const image_container = css`
  padding-top: 40px;
  position: relative;

  img {
    border-radius: 10px;
    overflow: hidden;
  }
`;
const card_caption_wrap = css`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 35px 40px;
`;
const card_caption = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
`;
const card_content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const card_title = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;

  .green {
    color: var(--Color-primary, #018c3b);
  }
`;
const card_desc = css`
  color: #444;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  text-transform: uppercase;
`;
const idx_wrap = css`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: end;
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
`;
const idx_circle = css`
  width: 16px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #018c3b;
  display: block;
`;
