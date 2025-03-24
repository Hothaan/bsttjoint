"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import ArrowRight from "@/assets/components/pages/bstt/KeyTreatment/section5/arrow_right.svg";
import Check from "@/assets/components/pages/bstt/KeyTreatment/section5/check.svg";

interface ICard {
  img: string;
  isMain: boolean;
  idx: number;
  lastIdx: number;
  content: {
    name: string;
    sub1: {
      title: string;
      desc: (string | React.ReactNode)[];
    };
    sub2: {
      title: string;
      list: { main: string; caption?: string }[];
    };
  };
}

export default function Card(prop: ICard) {
  const { img, isMain, idx, lastIdx, content } = prop;
  return (
    <div css={wrap(idx === lastIdx)}>
      <div css={image_container(isMain, idx)}>
        {isMain && <span css={main_tag}>대표시술</span>}
        <img src={img} alt="card" />
      </div>
      <div css={content_wrap(idx)}>
        <div css={name_wrap}>
          <div css={arrow_right_icon_container}>
            <ArrowRight />
          </div>
          <p css={name_text}>{content.name}</p>
        </div>
        <div css={sub_wrap}>
          <div css={sub1_wrap}>
            <p css={sub_title_text}>{content.sub1.title}</p>
            <p css={sub1_desc_text}>{renderWidthKeys(content.sub1.desc)}</p>
          </div>
          <div css={sub2_wrap}>
            <p css={sub_title_text}>{content.sub2.title}</p>
            <ul css={sub2_list_wrap}>
              {content.sub2.list.map((item, idx) => (
                <li key={idx} css={sub2_list_item_wrap}>
                  <div css={check_icon_container}>
                    <Check />
                  </div>
                  <div css={sub2_list_item_text_wrap}>
                    <p css={sub2_list_item_text}>{item.main}</p>
                    {item.caption !== undefined && (
                      <p css={sub2_list_item_caption}>{item.caption}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const wrap = (isLast: boolean) => css`
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;

  padding-bottom: ${isLast ? "0" : "80px"};
  margin-bottom: ${isLast ? "0" : "80px"};
  border-bottom: ${isLast ? "none" : "1px solid #d9d9d9"};

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
    padding-bottom: ${isLast ? "0" : "60px"};
    margin-bottom: ${isLast ? "0" : "60px"};
  }
  @media (max-width: 960px) {
    gap: 34px;
    padding-bottom: ${isLast ? "0" : "50px"};
    margin-bottom: ${isLast ? "0" : "50px"};
  }
  @media (max-width: 640px) {
    gap: 24px;
    padding-bottom: ${isLast ? "0" : "40px"};
    margin-bottom: ${isLast ? "0" : "40px"};
  }
  @media (max-width: 480px) {
    padding-bottom: ${isLast ? "0" : "34px"};
    margin-bottom: ${isLast ? "0" : "34px"};
  }
`;
const image_container = (isMain: boolean, idx: number) =>
  css`
    order: ${idx % 2 === 0 ? 1 : 2};

    position: relative;
    width: 40%;
    flex-shrink: 0;

    border: ${isMain ? "3px solid var(--Color-primary, #018C3B)" : "none"};

    filter: ${isMain
      ? "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.10))"
      : "none"};

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    @media (max-width: 1600px) {
      width: 50%;
    }
    @media (max-width: 1200px) {
      width: 100%;
      order: 1;
    }
  `;
const main_tag = css`
  position: absolute;
  top: 23px;
  left: 20px;

  display: flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  background: var(--Color-primary, #018c3b);

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;

  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 960px) {
    top: 16px;
    left: 16px;
    font-size: 20px;
  }
  @media (max-width: 780px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    top: 12px;
    left: 12px;
    font-size: 14px;
  }
`;
const content_wrap = (idx: number) => css`
  order: ${idx % 2 === 0 ? 2 : 1};

  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (max-width: 1800px) {
    gap: 24px;
  }
  @media (max-width: 1600px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    order: 2;
  }
`;
const name_wrap = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const arrow_right_icon_container = css`
  width: 30px;
  height: 30px;
  background-color: rgba(236, 247, 235, 1);
  border-radius: 50%;

  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1800px) {
    width: 26px;
    height: 26px;
  }
  @media (max-width: 1600px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 1200px) {
    width: 20px;
    height: 20px;
  }
`;
const name_text = css`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  letter-spacing: -0.25px;

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
`;
const sub_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const sub1_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const sub2_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const sub_title_text = css`
  overflow: hidden;
  color: var(--Color-primary, #018c3b);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
`;
const sub1_desc_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 32px */
  letter-spacing: -0.5px;

  opacity: 0.8;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 17px;
  }
`;
const sub2_list_wrap = css`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 1800px) {
    gap: 18px;
  }
  @media (max-width: 1600px) {
    gap: 16px;
  }
`;
const sub2_list_item_wrap = css`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 10px;

  @media (max-width: 960px) {
    gap: 8px;
  }
`;
const sub2_list_item_text_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const check_icon_container = css`
  height: 100%;
  padding-top: 3px;
  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 1800px) {
    padding-top: 2px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  @media (max-width: 1600px) {
    padding-top: 0;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const sub2_list_item_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
`;
const sub2_list_item_caption = css`
  color: #808080;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;

  @media (max-width: 1800px) {
    font-size: 16px;
  }
  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;
