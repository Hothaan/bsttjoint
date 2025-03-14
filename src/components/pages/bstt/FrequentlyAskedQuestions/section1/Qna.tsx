/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import { useState } from "react";
import ArrowBottom from "@/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/arrowBottom.svg";
import ArrowTop from "@/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/arrowTop.svg";

interface IQna {
  data: {
    q: string;
    a: {
      img: string;
      text: (string | React.ReactNode)[];
    };
  }[];
}

export default function Qna(prop: IQna) {
  const [openedIdx, setOpendIdx] = useState(0);
  const { data } = prop;

  function handleChangeOpenedIdx(idx: number) {
    setOpendIdx(idx);
  }
  return (
    <ul css={wrap}>
      {data.map((item, idx) => (
        <li
          key={idx + "qna item"}
          css={item_wrap}
          onClick={() => {
            handleChangeOpenedIdx(idx);
          }}
        >
          <div css={item_question_wrap}>
            <div css={item_question_inner_wrap}>
              <p css={question_mark_text}>Q.</p>
              <p css={question_text}>{item.q}</p>
            </div>
            <div css={icon_container}>
              {openedIdx === idx ? <ArrowTop /> : <ArrowBottom />}
            </div>
          </div>
          {openedIdx === idx && (
            <div css={item_answer_wrap}>
              <p css={answer_mark_text}>A.</p>
              <div css={item_answer_inner_wrap}>
                <div css={image_container}>
                  <img src={item.a.img} alt="answer" />
                </div>
                <p css={answer_text}>{renderWidthKeys(item.a.text)}</p>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

const wrap = css`
  border-top: 1px solid var(--Black-strock, #d9d9d9);
`;

const item_wrap = css`
  cursor: pointer;
`;

const item_question_wrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  padding: 34px 10px;

  border-bottom: 1px solid var(--Black-strock, #d9d9d9);

  @media (max-width: 1600px) {
    padding: 30px 10px;
  }
  @media (max-width: 1400px) {
    padding: 26px 10px;
  }
  @media (max-width: 1200px) {
    padding: 24px 10px;
  }
  @media (max-width: 480px) {
    padding: 24px 0;
  }
  @media (max-width: 374px) {
    padding: 16px 0;
  }
`;
const item_question_inner_wrap = css`
  display: flex;
  align-items: start;
  gap: 34px;

  @media (max-width: 960px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const icon_container = css`
  width: 24px;
  height: 24px;

  flex-shrink: 0;
  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 374px) {
    width: 20px;
    height: 20px;
  }
`;
const question_mark_text = css`
  color: #018c3b;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
const question_text = css`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
const item_answer_wrap = css`
  display: flex;
  gap: 34px;
  border-bottom: 1px solid var(--Black-strock, #d9d9d9);
  padding: 34px 10px;

  @media (max-width: 1600px) {
    padding: 30px 10px;
  }
  @media (max-width: 1400px) {
    padding: 26px 10px;
  }
  @media (max-width: 1200px) {
    padding: 24px 10px;
  }
  @media (max-width: 480px) {
    padding: 24px 0;
    gap: 14px;
  }
  @media (max-width: 374px) {
    padding: 16px 0;
  }
`;
const item_answer_inner_wrap = css`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 24px;

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    gap: 14px;
  }
`;
const image_container = css`
  width: 214px;
  height: auto;
  aspect-ratio: 214 / 200;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1600px) {
    width: 200px;
  }
  @media (max-width: 1400px) {
    width: 180px;
  }
  @media (max-width: 1200px) {
    width: 160px;
  }
  @media (max-width: 960px) {
    width: 140px;
  }
  @media (max-width: 680px) {
    width: 120px;
  }
  @media (max-width: 480px) {
    width: 60px;
  }
`;

const answer_mark_text = css`
  color: #888;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
const answer_text = css`
  color: #646464;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
