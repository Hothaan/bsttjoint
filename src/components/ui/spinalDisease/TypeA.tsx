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

  if (width === null) {
    return;
  }

  return (
    <div css={bg_wrap(bgColor || bgColor_)}>
      <div css={wrap(width)}>
        <div css={text_wrap(width)}>
          <SectionTitleSimple {...sectionTitleSimple} />
          {width > 920 && (
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
          )}
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
    </div>
  );
}

const bg_wrap = (bgColor?: string) => css`
  position: relative;

  width: 100%;
  padding: 180px;
  margin: 0 auto;
  background: ${bgColor || "#fff"};

  @media (max-width: 1800px) {
    padding: 160px 160px 0 160px;
  }
  @media (max-width: 1400px) {
    padding: 140px 140px 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px 120px 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px 100px 0 100px;
  }
  @media (max-width: 960px) {
    padding: 80px;
    background: #fff;
  }
  @media (max-width: 680px) {
    padding: 80px 60px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px;
  }
`;

const wrap = (width: number) => css`
  display: flex;
  justify-content: space-between;

  height: ${width * 0.46}px;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }

  @media (max-width: 960px) {
    gap: 30px;
  }
`;
const text_wrap = (width: number) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1800px) {
    padding-bottom: 160px;
  }
  @media (max-width: 1400px) {
    padding-bottom: 140px;
  }
  @media (max-width: 1200px) {
    padding-bottom: 120px;
  }
  @media (max-width: 1000px) {
    padding-bottom: 100px;
  }
  @media (max-width: 960px) {
    padding-bottom: 0;
  }
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

  @media (max-width: 1600px) {
    padding-left: 20px;
  }
  @media (max-width: 1200px) {
    padding-left: 15px;
  }
`;
const list_item_inner_wrap = css`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 14px 20px 14px 0;

  @media (max-width: 1600px) {
    gap: 20px;
    padding: 15px 15px 15px 0;
  }
  @media (max-width: 1200px) {
    gap: 15px;
    padding: 10px 10px 10px 0;
  }
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

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;
const card_wrap = css`
  width: 50%;
  height: 100%;
  overflow-y: scroll;

  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1600px) {
    width: 55%;
    gap: 40px;
  }
  @media (max-width: 1200px) {
    width: 60%;
    gap: 50px;
  }

  @media (max-width: 920px) {
    width: 100%;
    overflow-y: visible;
    gap: 40px;
  }
  @media (max-width: 720px) {
    gap: 30px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
const card_item = css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1800px) {
    gap: 35px;
  }
  @media (max-width: 1400px) {
    gap: 30px;
  }
  @media (max-width: 1200px) {
    gap: 20px;
  }
`;
const image_container = css`
  padding-top: 40px;
  position: relative;

  img {
    border-radius: 10px;
    overflow: hidden;
  }

  @media (max-width: 920px) {
    padding-top: 30px;
    img {
      border-radius: 5px;
    }
  }
  @media (max-width: 374px) {
    padding-top: 20px;
  }
`;
const card_caption_wrap = css`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 35px 40px;

  @media (max-width: 1800px) {
    padding: 35px;
  }
  @media (max-width: 1600px) {
    padding: 30px;
  }
  @media (max-width: 1400px) {
    padding: 25px;
  }
  @media (max-width: 1000px) {
    padding: 20px;
  }
  @media (max-width: 374px) {
    padding: 10px;
  }
`;
const card_caption = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 840px) {
    font-size: 18px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
const card_content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    gap: 15px;
  }
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

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 18px;
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

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 840px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
const idx_wrap = css`
  position: absolute;
  top: 5px;
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

  @media (max-width: 1800px) {
    font-size: 110px;
  }
  @media (max-width: 1600px) {
    font-size: 100px;
  }
  @media (max-width: 1400px) {
    font-size: 90px;
  }
  @media (max-width: 1200px) {
    font-size: 80px;
  }
  @media (max-width: 1000px) {
    font-size: 70px;
  }
  @media (max-width: 960px) {
    font-size: 64px;
  }
  @media (max-width: 374px) {
    font-size: 56px;
  }
`;
const idx_circle = css`
  width: 16px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #018c3b;
  display: block;

  @media (max-width: 1800px) {
    width: 14px;
  }

  @media (max-width: 1400px) {
    width: 12px;
  }

  @media (max-width: 960px) {
    width: 10px;
  }
  @media (max-width: 374px) {
    width: 6px;
  }
`;
