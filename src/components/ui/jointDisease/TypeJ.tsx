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
import Check from "@/assets/components/ui/jointDisease/TypeJ/check.svg";

interface ITypeJ {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent?: IPageTitleContent;
  desc?: (string | React.ReactNode)[];
  cardData: { title: string; desc: (string | React.ReactNode)[] }[];
  bgPc: string;
  bgMo: string;
}
export default function TypeJ(prop: ITypeJ) {
  const { sectionTitleSimple, pageTitleContent, desc, cardData, bgPc, bgMo } =
    prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return (
    <ContentsContainer bgPc={bgPc} bgMo={bgMo}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          {pageTitleContent && <PageTitleContent {...pageTitleContent} />}
        </div>

        <div css={content_wrap}>
          <ul css={card_wrap}>
            {cardData.map((item, idx) => (
              <li key={idx + "TypeJ card item"} css={card_item}>
                <div css={icon_container}>
                  <Check />
                </div>
                <div css={card_item_content_wrap}>
                  <p css={card_item_title}>{item.title}</p>
                  <p css={card_item_desc}>{renderWidthKeys(item.desc)}</p>
                </div>
              </li>
            ))}
          </ul>
          {desc && <p css={desc_text}>{renderWidthKeys(desc)}</p>}
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  @media (max-width: 1600px) {
    gap: 60px;
  }
  @media (max-width: 960px) {
    gap: 30px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const content_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const card_wrap = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 840px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const card_item = css`
  display: flex;
  padding: 40px 30px;
  align-items: flex-start;
  gap: 20px;

  border-radius: 10px;
  border: 1px dashed #018c3b;
  background: #fff;

  @media (max-width: 960px) {
    padding: 30px 20px;
  }
  @media (max-width: 480px) {
    padding: 20px 15px;
    gap: 10px;
  }
`;
const card_item_content_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const icon_container = css`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: auto;
    aspect-ratio: 1 / 0.8;
  }

  @media (max-width: 1800px) {
    svg {
      width: 26px;
    }
  }
  @media (max-width: 1600px) {
    svg {
      width: 24px;
    }
  }
  @media (max-width: 1400px) {
    svg {
      width: 22px;
    }
  }
  @media (max-width: 1200px) {
    svg {
      width: 20px;
    }
  }
  @media (max-width: 960px) {
    svg {
      width: 18px;
    }
  }
`;
const card_item_title = css`
  color: var(--Black-title, #131313);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 28px */

  @media (max-width: 1800px) {
    font-size: 26px;
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
  @media (max-width: 960px) {
    font-size: 18px;
  }
`;
const card_item_desc = css`
  color: #666;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 29.7px */
  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const desc_text = css`
  color: var(--black-text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
  }
`;
