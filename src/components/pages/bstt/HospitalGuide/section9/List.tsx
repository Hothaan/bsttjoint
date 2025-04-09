"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

interface IList {
  data: (string | React.ReactNode)[][];
}

export default function List(prop: IList) {
  const { data } = prop;
  return (
    <ul css={wrap}>
      {data.map((item, idx) => (
        <li key={idx + `list item`} css={list_item}>
          {idx !== data.length - 1 && <span css={circle}></span>}
          <p css={text_style}>{renderWidthKeys(item)}</p>
        </li>
      ))}
    </ul>
  );
}

const wrap = css`
  position: relative;

  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    gap: 20px;
  }
`;

const list_item = css`
  padding-left: 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1400px) {
    gap: 10px;
    padding-left: 10px;
  }
  @media (max-width: 1200px) {
    gap: 8px;
    padding-left: 8px;
  }
  @media (max-width: 960px) {
    gap: 16px;
    padding-left: 10px;
    align-items: start;
  }
  @media (max-width: 500px) {
    gap: 10px;
    padding-left: 0;
    align-items: start;
  }
`;

const circle = css`
  display: block;

  width: 4px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 50%;

  @media (max-width: 960px) {
    margin: 0.9em 0;
    flex-shrink: 0;
  }
  @media (max-width: 500px) {
    margin: 0.8em 0;
  }
`;

const text_style = css`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 260%;
  white-space: nowrap;

  .bold {
    font-weight: 700;
  }

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
    white-space: wrap;
    line-height: 1.4em;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
