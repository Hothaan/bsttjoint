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
  return (
    <ContentsContainer bgPc={bgPc}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <div css={content_wrap}>
          <div css={list_wrap}></div>
          <div css={image_container}>
            <img src={cardData[selectedIdx].imgPc} alt="card" />
          </div>
          <div css={selected_conent_wrap}>
            <p css={idx_text}>
              0{selectedIdx + 1}
              <span className="green">.</span>
            </p>
            <ul css={text_wrap}>
              {cardData[selectedIdx].content.map((item, idx) => (
                <li key={idx + "TypeM card item"}></li>
              ))}
            </ul>
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
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const content_wrap = css``;
const list_wrap = css``;
const image_container = css``;
const list_item = (isSelected: boolean) => css``;
const list_item_text = (isSelected: boolean) => css``;
const selected_conent_wrap = css``;
const idx_text = css``;
const text_wrap = css``;
const title_text = css``;
const content_text = css``;
