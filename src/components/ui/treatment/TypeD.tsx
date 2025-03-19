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

interface ITypeD {
  sectionTitleSimple: ISectionTitleSimple;
  pageTitleContent: IPageTitleContent;
  cardData: {
    imgPc: string;
    imgMo: string;
    title: string;
    descList: string[];
  }[];
}

export default function TypeD(prop: ITypeD) {
  const { sectionTitleSimple, pageTitleContent, cardData } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  return (
    <ContentsContainer bgColor="rgba(244, 244, 244, 1)">
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...sectionTitleSimple} />
          <PageTitleContent {...pageTitleContent} />
        </div>
        <ul css={card_wrap}>
          {cardData.map((item, idx) => (
            <li
              key={idx + "TypeD card item"}
              css={card_item(item.imgPc, item.imgMo)}
            >
              <div css={content_wrap}>
                <div css={default_content_wrap}>
                  <p css={idx_text}>0{idx + 1}</p>
                  <p css={title_text}>{item.title}</p>
                </div>
                <div css={hover_content_wrap} className="hover_content_wrap">
                  <span css={stroke}></span>
                  <ul>
                    {item.descList.map((item, idx) => (
                      <li
                        key={idx + `TypeD card item descList item`}
                        css={desc_list_item}
                      >
                        <div css={circle_wrap}>
                          <span css={circle}></span>
                        </div>
                        <p css={desc_list_item_text}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div css={hover_gradient} className="hover_gradient"></div>
            </li>
          ))}
        </ul>
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

  @media (max-width: 1600px) {
    gap: 80px;
  }
  @media (max-width: 1400px) {
    gap: 60px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1400px) {
    gap: 20px;
  }
`;
const card_wrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  width: 100%;

  @media (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;
const card_item = (imgPc: string, imgMo: string) => css`
  border-radius: 10px;
  overflow: hidden;

  cursor: pointer;

  width: 100%;
  height: auto;
  aspect-ratio: 368 / 520;

  position: relative;

  background-image: url(${imgPc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: end;

  padding: 40px 32px;

  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5%);
    .hover_gradient {
      opacity: 1;
    }
    .hover_content_wrap {
      display: flex;
    }
  }

  @media (max-width: 1400px) {
    width: calc(50% - (26px / 2));
    &:hover {
      transform: none;
    }
  }
  @media (max-width: 960px) {
    width: 100%;
    aspect-ratio: 335 / 200;
    background-image: url(${imgMo});
  }
  @media (max-width: 680px) {
    padding: 20px;
    &:hover {
      aspect-ratio: 335 / 300;
    }
  }
  @media (max-width: 374px) {
    &:hover {
      aspect-ratio: 335 / 335;
    }
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  z-index: 1;

  @media (max-width: 1800px) {
    gap: 24px;
  }
  @media (max-width: 1600px) {
    gap: 20px;
  }
  @media (max-width: 1400px) {
    gap: 15px;
  }
  @media (max-width: 374px) {
    gap: 10px;
  }
`;

const default_content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const hover_content_wrap = css`
  display: none;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1800px) {
    gap: 24px;
  }
  @media (max-width: 1600px) {
    gap: 20px;
  }
  @media (max-width: 1400px) {
    gap: 15px;
  }
  @media (max-width: 374px) {
    gap: 10px;
  }
`;

const desc_list_item = css`
  display: flex;
  gap: 12px;
`;

const desc_list_item_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */

  @media (max-width: 1800px) {
    font-size: 16px;
  }

  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;

const stroke = css`
  width: 26px;
  height: 1px;
  flex-shrink: 0;

  background: #fff;
`;

const circle_wrap = css`
  display: flex;
  align-items: center;
  height: 1.75em;

  @media (max-width: 680px) {
    height: 1.5em;
  }

  @media (max-width: 374px) {
    height: 1.25em;
  }
`;

const circle = css`
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
`;

const hover_gradient = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  transition: 0.2s ease-out;

  background: linear-gradient(
    0deg,
    rgba(1, 140, 59, 0.8) 0%,
    rgba(1, 140, 59, 0.8) 100%
  );
`;

const idx_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  text-transform: capitalize;

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
const title_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25em;
  text-transform: capitalize;
  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
