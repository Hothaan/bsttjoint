/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface IHistory {
  year: number;
  month: number;
  content: (string | React.ReactNode)[];
}

interface IHistoryData {
  data: IHistory[];
}

export default function History(prop: IHistoryData) {
  const { data } = prop;
  return (
    <div css={history_wrap}>
      {data.map((item, idx) => (
        <div key={idx} css={history_inner_wrap}>
          <span css={big_circle}></span>
          <div key={idx} css={history_item_wrap(idx, data.length - 1 === idx)}>
            <p css={year_text}>{item.year}</p>

            <div css={content_wrap}>
              <div css={month_wrap}>
                <span css={small_circle}></span>
                <p css={month_text}>{item.month}월</p>
              </div>
              <p css={content_text}>{renderWidthKeys(item.content)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const history_wrap = css`
  width: fit-content;
`;
const history_inner_wrap = css`
  position: relative;
`;

const big_circle = css`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);

  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  mix-blend-mode: normal;

  opacity: 1;
  z-index: 2;

  @media (max-width: 960px) {
    top: 8px;
    transform: none;
  }
  @media (max-width: 500px) {
    width: 6px;
    height: 6px;
    top: 6px;
    left: 3px;
  }
`;

const history_item_wrap = (idx: number, isLast: boolean) => css`
  display: flex;
  padding: 18px 20px 18px 98px;
  align-items: center;
  gap: 24px;

  position: relative;

  cursor: pointer;

  opacity: ${1 - idx * 0.1};

  &:after {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 8px;
    height: 8px;
    background-color: #fff;
    border: 4px solid #7b7b7b;
    border-radius: 50%;

    transition: 0.3s ease-out;
  }

  &:before {
    display: ${isLast ? "none" : "block"};
    content: "";
    position: absolute;
    left: 6.5px;
    top: 50%;
    transform: translateY(6.5px);

    width: 2px;
    height: 100%;
    background-color: #7b7b7b;

    transition: 0.3s ease-out;
  }

  &:hover {
    opacity: 1;
  }

  &:hover:after {
    border: 4px solid #018c3b;
  }
  &:hover:before {
    background-color: #018c3b;
  }

  @media (max-width: 1600px) {
    padding: 18px 20px 18px 48px;
    gap: 20px;
  }
  @media (max-width: 960px) {
    padding: 0 0 20px 42px;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 16px;

    &:after {
      top: 4px;
      transform: none;
    }
    &:before {
      top: 4px;
      transform: none;
    }
  }
  @media (max-width: 500px) {
    padding: 0 0 10px 24px;
    &:after {
      top: 3px;
      width: 6px;
      height: 6px;
      border: 3px solid #7b7b7b;
    }
    &:before {
      top: 3px;
      left: 3px;
      transform: translateX(50%);
    }
    &:hover:after {
      border: 3px solid #018c3b;
    }
  }
`;
const year_text = css`
  color: var(--black-text, #3c3c3c);
  leading-trim: both;
  text-edge: cap;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  white-space: nowrap;

  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
    line-height: 1em;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const small_circle = css`
  width: 5px;
  height: 5px;

  background-color: #d0d0d0;
  border-radius: 50%;
`;

const month_text = css`
  color: #018c3b;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  white-space: nowrap;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const content_wrap = css`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 960px) {
    align-items: start;
  }
  @media (max-width: 500px) {
    gap: 8px;
  }
`;
const month_wrap = css`
  display: flex;
  position: relative;
  align-items: center;
  gap: 14px;
  @media (max-width: 500px) {
    gap: 8px;
  }
`;

const content_text = css`
  color: #111;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;

  .bold {
    font-weight: 700;
  }

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
    white-space: wrap;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
