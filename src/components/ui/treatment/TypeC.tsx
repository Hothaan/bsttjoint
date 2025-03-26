"use client";
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
import Check from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section3/check.svg";

interface ITypeC {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent?: IPageTitleContent;
  imgPc: string;
  imgMo: string;
  checkData: { text: (string | React.ReactNode)[] }[];
  boxData?: {
    desc: (string | React.ReactNode)[];
    title: (string | React.ReactNode)[];
    caption: (string | React.ReactNode)[];
  };
  checkList?: {
    title: string;
    data: { title: string; desc: (string | React.ReactNode)[] }[];
  };
}

export default function TypeC(prop: ITypeC) {
  const {
    sectionTitleSimple,
    pageTitleContent,
    imgPc,
    imgMo,
    checkData,
    boxData,
    checkList,
  } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  return (
    <ContentsContainer>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          {pageTitleContent && <PageTitleContent {...pageTitleContent} />}
        </div>
        <div css={content_wrap}>
          <div css={image_container}>
            <img src={width >= 960 ? imgPc : imgMo} alt="treatment" />
          </div>
          <ul css={check_wrap}>
            {checkData.map((item, idx) => (
              <li key={idx + "TypeC check item"} css={check_item}>
                <div css={check_icon_container}>
                  <Check />
                </div>
                <p css={check_item_text}>{renderWidthKeys(item.text)}</p>
              </li>
            ))}
          </ul>
        </div>
        {boxData && (
          <div css={box_wrap}>
            <p css={box_desc}>{renderWidthKeys(boxData.desc)}</p>
            <p css={box_title}>{renderWidthKeys(boxData.title)}</p>
            <p css={box_caption}>{renderWidthKeys(boxData.caption)}</p>
          </div>
        )}
        {checkList && (
          <div css={check_list_wrap}>
            <div css={check_list_title_wrap}>
              <div css={check_icon_container}>
                <Check />
              </div>
              <p css={check_list_title_text}>{checkList.title}</p>
            </div>
            <ul css={check_list}>
              {checkList.data.map((item, idx) => (
                <li key={idx + `TypeC check list item`} css={check_list_item}>
                  <p css={check_list_title}>{item.title}</p>
                  <p css={check_list_desc}>{renderWidthKeys(item.desc)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ContentsContainer>
  );
}

const check_list_wrap = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1400px) {
    gap: 30px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
const check_list_title_wrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const check_list_title_text = css`
  color: var(--black-text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.96px;
  text-transform: uppercase;

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 720px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const check_list = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media (max-width: 374px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const check_list_item = css`
  width: 100%;

  display: flex;
  padding: 35px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  border: 1px dashed rgba(1, 140, 59, 0.8);

  @media (max-width: 1200px) {
    padding: 20px;
  }
`;
const check_list_title = css`
  color: var(--Color-primary, #018c3b);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const check_list_desc = css`
  color: #444;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
  text-align: center;

  @media (max-width: 1800px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media (max-width: 1600px) {
    gap: 50px;
  }
  @media (max-width: 960px) {
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 960px) {
    gap: 15px;
  }
`;

const image_container = css`
  width: 100%;
  height: auto;

  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const check_wrap = css`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1400px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 960px) {
    gap: 15px;
  }
`;

const box_wrap = css`
  display: flex;
  width: 100%;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 10px;
  border: 1px dashed #018c3b;
  background: #fff;

  @media (max-width: 1400px) {
    padding: 30px;
    gap: 35px;
  }
  @media (max-width: 960px) {
    padding: 20px;
    gap: 30px;
  }
  @media (max-width: 480px) {
    padding: 20px 16px;
    gap: 25px;
  }
`;

const box_desc = css`
  color: var(--Black-title, #131313);
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 44.8px */

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
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const box_title = css`
  overflow: hidden;
  color: var(--Color-primary, #018c3b);
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
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
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const box_caption = css`
  color: #444;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */

  @media (max-width: 1800px) {
    font-size: 20px;
  }
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const check_item = css`
  width: 100%;

  display: flex;
  padding: 30px 40px;
  align-items: center;
  align-self: stretch;
  gap: 40px;

  border-radius: 10px;
  background: #eff8f3;

  @media (max-width: 1600px) {
    padding: 24px 32px;
    gap: 30px;
  }
  @media (max-width: 1400px) {
    padding: 20px 28px;
    gap: 20px;
  }

  @media (max-width: 960px) {
    padding: 18px 20px;
  }

  @media (max-width: 374px) {
    padding: 10px 16px;
    gap: 16px;
  }
`;

const check_item_text = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 35.2px */

  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const check_icon_container = css`
  width: 30px;
  flex-shrink: 0;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1600px) {
    width: 28px;
  }
  @media (max-width: 1400px) {
    width: 28px;
  }
  @media (max-width: 960px) {
    width: 20px;
  }
  @media (max-width: 480px) {
    width: 18px;
  }
  @media (max-width: 374px) {
    width: 14px;
  }
`;
