"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import { ISectionTitleDesc } from "@/components/ui/text/SectionTitleDesc";
import SectionTitleSimple, {
  ISectionTitleSimple,
} from "../text/SectionTitleSimple";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import PageTitleContent from "../text/PageTitleContent";
import { IPageTitleContent } from "../text/PageTitleContent";
import TypeCcard from "./TypeCcard";
import { ITypeCcard } from "./TypeCcard";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

export type Ttype = "a" | "b";

interface ITypeC {
  type?: Ttype;
  sectionTitleDesc?: ISectionTitleDesc;
  sectionTitleSimple?: ISectionTitleSimple;
  pageTitleContent?: IPageTitleContent;
  caption?: (string | React.ReactNode)[][];
  bg: string;
  cardData: ITypeCcard[];
  desc?: (string | React.ReactNode)[];
}

export default function TypeC(prop: ITypeC) {
  const {
    type,
    sectionTitleDesc,
    sectionTitleSimple,
    pageTitleContent,
    caption,
    bg,
    cardData,
    desc,
  } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return (
    <div css={type !== "b" ? wrap(bg) : wrap_b(bg)}>
      {caption === undefined ? (
        <div css={title_desc_wrap(type)}>
          {sectionTitleDesc && <SectionTitleDesc {...sectionTitleDesc} />}
          {sectionTitleSimple && <SectionTitleSimple {...sectionTitleSimple} />}
          {pageTitleContent && <PageTitleContent {...pageTitleContent} />}
        </div>
      ) : (
        <div css={caption_title_desc_wrap}>
          {sectionTitleDesc && <SectionTitleDesc {...sectionTitleDesc} />}
          <div css={caption_wrap}>
            {caption.map((item, idx) => (
              <p css={caption_text} key={idx + `TypeC caption item`}>
                {renderWidthKeys(item)}
              </p>
            ))}
          </div>
        </div>
      )}

      <div css={type !== "b" ? card_wrap(cardData.length) : card_wrap_b}>
        {cardData.map((item, idx) => {
          const newData_ = {
            ...item,
            idx: idx,
            type: type,
            isLast: cardData.length - 1 === idx,
            isOdd: cardData.length % 2 === 0 ? false : true,
          };
          return <TypeCcard key={idx + "TypeC card"} {...newData_} />;
        })}
      </div>
      {desc && <p css={desc_text}>{renderWidthKeys(desc)}</p>}
    </div>
  );
}

const caption_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const caption_text = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: nowrap;

  .bold {
    font-weight: 600;
  }

  @media (max-width: 960px) {
    white-space: wrap;
  }
`;

const caption_title_desc_wrap = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 0 180px;

  @media (max-width: 1800px) {
    padding: 0 160px;
  }
  @media (max-width: 1400px) {
    padding: 0 140px;

    width: 100%;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 0 100px;
  }
  @media (max-width: 960px) {
    padding: 0 80px;
  }
  @media (max-width: 680px) {
    padding: 0 60px;
  }
  @media (max-width: 540px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const wrap = (bg: string) => css`
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  background: ${bg};

  gap: 74px;

  @media (max-width: 1800px) {
    padding: 160px 0;
  }
  @media (max-width: 1400px) {
    padding: 140px 0;
  }
  @media (max-width: 1200px) {
    padding: 120px 0;
  }
  @media (max-width: 1000px) {
    padding: 100px 0;
  }
  @media (max-width: 960px) {
    padding: 80px 0;
  }
`;
const wrap_b = (bg: string) => css`
  gap: 74px;

  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  padding: 180px;
  margin: 0 auto;
  background: ${bg || "#fff"};

  @media (max-width: 1800px) {
    padding: 160px;
  }
  @media (max-width: 1400px) {
    padding: 140px;
    gap: 60px;
  }
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px;
    gap: 50px;
  }
  @media (max-width: 960px) {
    padding: 80px;
    gap: 40px;
  }
  @media (max-width: 680px) {
    padding: 80px 60px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px;
    gap: 30px;
  }
`;

const title_desc_wrap = (type?: Ttype) => css`
  display: flex;
  flex-direction: column;

  justify-content: ${type === "b" ? "center" : "start"};
  align-items: center;
  gap: 20px;

  padding: 0 180px;

  @media (max-width: 1800px) {
    padding: 0 160px;
  }
  @media (max-width: 1400px) {
    padding: 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 0 100px;
  }
  @media (max-width: 960px) {
    padding: 0 80px;
  }
  @media (max-width: 680px) {
    padding: 0 60px;
  }
  @media (max-width: 540px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const card_wrap = (length: number) => css`
  display: grid;
  grid-template-columns: repeat(${length}, 1fr);
  align-items: start;
  grid-gap: 0;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    .card:last-child {
      grid-column: ${length % 2 !== 0 ? "span 2" : "span 1"};
    }
  }
`;
const card_wrap_b = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  grid-gap: 30px;

  @media (max-width: 1400px) {
    grid-gap: 20px;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 14px;
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
  @media (max-width: 480px) {
    color: #018c3b;
  }
`;
