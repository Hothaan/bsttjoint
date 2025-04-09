"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IStepContainer extends Container {
  step: number;
  title: string;
  isDone: boolean;
  isAvailable: boolean;
}

export default function StepContainer(prop: IStepContainer) {
  const { children, step, title, isDone, isAvailable } = prop;
  return (
    <div css={wrap}>
      <div css={title_wrap}>
        <p css={step_number_text(isAvailable)}>step0{step}</p>
        <p css={step_title_text}>{title}</p>
      </div>
      <div>{children}</div>
      <div css={button_wrap}>
        <button css={button_prev}>이전</button>
        <button css={button_next(isDone)}>다음</button>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 40px 54px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1600px) {
    padding: 40px;
  }
  @media (max-width: 1400px) {
    padding: 32px;
  }
  @media (max-width: 1200px) {
    padding: 28px;
  }
  @media (max-width: 960px) {
    padding: 24px;
  }
  @media (max-width: 480px) {
    padding: 24px 20px 32px 20px;
    border-radius: 15px;
  }
`;

const button_wrap = css`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 1600px) {
    gap: 12px;
  }
`;
const button_prev = css`
  display: flex;
  min-width: 160px;

  padding: 20px;
  justify-content: center;
  align-items: center;

  border-radius: 54px;
  border: 1px solid #000;
  background-color: #fff;

  transition: 0.3s ease-in-out;

  cursor: pointer;

  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;

  &:hover {
    background-color: #d5d5d5;
  }

  @media (max-width: 1600px) {
    padding: 16px;
    min-width: 140px;
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    padding: 14px;
    font-size: 14px;
  }
  @media (max-width: 374px) {
    min-width: auto;
    width: 100%;
    font-size: 12px;
  }
`;
const button_next = (isDone: boolean) => css`
  display: flex;
  min-width: 160px;

  padding: 20px;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: 0.3s ease-in-out;

  border-radius: 54px;
  border: none;
  background-color: ${isDone ? "#018c3b" : "#ACACAC;"};

  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 1600px) {
    padding: 16px;
    min-width: 140px;
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    padding: 14px;
    font-size: 14px;
  }
  @media (max-width: 374px) {
    min-width: auto;
    width: 100%;
    font-size: 12px;
  }
`;
const title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const step_number_text = (isAvailable: boolean) => css`
  color: ${isAvailable ? "#018c3b" : "#808080;"};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;
const step_title_text = css`
  color: #111;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding-bottom: 20px;
  border-bottom: 1px solid #dbdbdb;

  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
`;
