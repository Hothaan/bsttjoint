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
import Question from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section8/question.svg";

interface ITypeH {
  imgPc: string;
  imgMo: string;
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    title: string;
    desc: (string | React.ReactNode)[];
  }[];
}

export default function TypeH(prop: ITypeH) {
  const { imgPc, imgMo, sectionTitleSimple, pageTitleContent, cardData } = prop;
  return (
    <div css={wrap}>
      <div css={image_container(imgPc, imgMo)}></div>
      <div css={content_wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <ul css={card_wrap}>
          {cardData.map((item, idx) => (
            <li
              key={idx + "TypeH card item"}
              css={card_item(idx === cardData.length - 1)}
            >
              <div css={card_item_title_wrap}>
                <div css={icon_container}>
                  <Question />
                </div>
                <p css={card_item_title_text}>{item.title}</p>
              </div>
              <p css={card_item_desc_text}>{renderWidthKeys(item.desc)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const image_container = (imgPc: string, imgMo: string) =>
  css`
    width: 50%;
    align-self: stretch;

    background-image: url(${imgPc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 1200px) {
      width: 40%;
    }
    @media (max-width: 960px) {
      width: 100%;
      background-image: url(${imgMo});
      height: auto;

      aspect-ratio: 375 / 420;
    }
  `;
const content_wrap = css`
  width: 50%;
  align-self: stretch;
  background: #f4f4f4;
  padding: 150px 111px;

  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1800px) {
    padding: 140px 100px;
  }
  @media (max-width: 1600px) {
    padding: 120px 80px;
  }
  @media (max-width: 1400px) {
    padding: 100px 60px;
    gap: 50px;
  }
  @media (max-width: 1200px) {
    width: 60%;
    padding: 80px 60px;
  }
  @media (max-width: 960px) {
    width: 100%;
    gap: 40px;
  }
  @media (max-width: 720px) {
    padding: 60px 40px;
  }
  @media (max-width: 480px) {
    padding: 60px 20px;
    gap: 30px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 960px) {
    gap: 15px;
    align-items: center;
    justify-content: center;

    * {
      text-align: center !important;
    }
  }
`;
const card_wrap = css`
  padding: 80px 60px;

  border-radius: 10px;
  border: 1px solid #d6d6d6;
  background: #fff;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1800px) {
    padding: 70px 50px;
  }
  @media (max-width: 1600px) {
    padding: 60px 40px;
    gap: 30px;
  }
  @media (max-width: 1400px) {
    padding: 50px 30px;
    gap: 20px;
  }
  @media (max-width: 960px) {
    padding: 30px 20px;
    gap: 15px;
  }
  @media (max-width: 374px) {
    padding: 20px 16px;
  }
`;
const card_item = (isLast: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: ${!isLast ? "40px" : 0};
  border-bottom: ${!isLast ? "1px solid rgba(1, 140, 59, 0.40)" : "none"};

  @media (max-width: 1600px) {
    padding-bottom: ${!isLast ? "30px" : 0};
    gap: 16px;
  }
  @media (max-width: 1400px) {
    padding-bottom: ${!isLast ? "20px" : 0};
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const card_item_title_wrap = css`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 480px) {
    gap: 10px;
  }
  @media (max-width: 374px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const icon_container = css`
  width: 40px;
  aspect-ratio: 1 / 1;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1600px) {
    width: 32px;
  }
  @media (max-width: 1400px) {
    width: 28px;
  }
  @media (max-width: 960px) {
    width: 24px;
  @media (max-width: 480px) {
    width: 20px;
  }
`;
const card_item_title_text = css`
  color: #222;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;

  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 374px) {
    text-align: center;
  }
`;
const card_item_desc_text = css`
  color: #666;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */

  padding-left: calc(40px + 15px);

  .bold {
    font-weight: bold;
  }

  @media (max-width: 1600px) {
    padding-left: calc(32px + 15px);
    font-size: 16px;
  }
  @media (max-width: 1400px) {
    padding-left: calc(28px + 15px);
  }
  @media (max-width: 480px) {
    padding-left: calc(20px + 10px);
    font-size: 12px;
  }
  @media (max-width: 374px) {
    padding-left: 0;
    text-align: center;
  }
`;
