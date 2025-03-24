"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import TreatmentCard from "./TypeAcard";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import ArrowLeft from "@/assets/components/pages/bstt/index/section7/arrowLeft.svg";
import ArrowRight from "@/assets/components/pages/bstt/index/section7/arrowRight.svg";
export default function TypeA() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const [isClicked, setIsClicked] = useState(false);
  function handleChangeisClicked() {
    setIsClicked(!isClicked);
  }
  const sectionTitleDesc_1 = {
    title: `story`,
    desc: [`병원에 많이 다녔는데`, <br key="1" />, `왜 자꾸 재발을 할까요?`],
  };
  const sectionTitleDesc_2 = {
    title: `story`,
    desc: [`그렇다면, 보다 현명한`, <br key="1" />, `치료란 어떤 것일까요?`],
  };
  const treatment1_ =
    "/assets/components/pages/bstt/index/section7/treatment1.png";
  const treatment2_ =
    "/assets/components/pages/bstt/index/section7/treatment2.png";
  const treatment3_ =
    "/assets/components/pages/bstt/index/section7/treatment3.png";
  const treatment4_ =
    "/assets/components/pages/bstt/index/section7/treatment4.png";
  const view1 = "/assets/components/pages/bstt/index/section7/view1.png";
  const view2 = "/assets/components/pages/bstt/index/section7/view2.png";
  const view3 = "/assets/components/pages/bstt/index/section7/view3.png";
  const view4 = "/assets/components/pages/bstt/index/section7/view4.png";

  const treatment_card_data = [
    {
      img: treatment1_,
      title: `사후적 치료`,
      desc: `질병초기에는 자연회복을 기다리다가 결국 한참 진행되고 나서야 치료를 시작함`,
    },
    {
      img: treatment2_,
      title: `소극적 치료`,
      desc: `치료목표를 당장의 통증 완화에만 두고 상당히 심해지기 전까지는 소극적으로 치료함`,
    },
    {
      img: treatment3_,
      title: `대증적 치료`,
      desc: `질병부위의 개선이나 신체 복원력의 강화보다는
눈앞의 통증만 해결하면 되는것으로 인식`,
    },
    {
      img: treatment4_,
      title: `일회성 치료`,
      desc: `빠른 통증 완화만을 추구한 나머지, 통증이 줄면 다 나은것으로 생각함`,
    },
  ];
  const view_card_data = [
    {
      img: view1,
      title: `예방적 치료`,
      desc: `어차피 진행되어 만성화되는 질병이라면 초기부터 미리미리 치료합니다.`,
    },
    {
      img: view2,
      title: `적극적 대응`,
      desc: `관절척추의 질병은 적극적으로 치료할수록 치료율이 높고 후유증상이 적습니다.`,
    },
    {
      img: view3,
      title: `근본적 회복`,
      desc: `일시적인 통증억제가 아닌 질병의 개선에 의한
통증완화를 추구합니다.`,
    },
    {
      img: view4,
      title: `꾸준한 관리`,
      desc: `지속가능한 방식으로 치료를 해야만 재발 방지와
진행 억제까지 가능합니다.`,
    },
  ];

  const caption_1 = `“이렇게 해서는 끝이 나지 않습니다.”`;
  const caption_2 = `”빠른 치료보다는 바른 치료를 하겠습니다.”`;
  return (
    <div css={wrap(width, isClicked)}>
      <SectionTitleDesc
        titleColor={
          isClicked ? theme.colors.mono.white : theme.colors.point.primary
        }
        descColor={
          isClicked ? theme.colors.mono.white : theme.colors.mono.black
        }
        title={sectionTitleDesc_1.title}
        desc={isClicked ? sectionTitleDesc_2.desc : sectionTitleDesc_1.desc}
      />
      <div css={content_wrap}>
        <div css={card_wrap}>
          {isClicked
            ? view_card_data.map((item, idx) => (
                <TreatmentCard
                  isClicked={isClicked}
                  key={idx}
                  idx={idx + 1}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              ))
            : treatment_card_data.map((item, idx) => (
                <TreatmentCard
                  isClicked={isClicked}
                  key={idx}
                  idx={idx + 1}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
          <p css={caption_1text(theme, isClicked)}>
            {isClicked ? caption_2 : caption_1}
          </p>
        </div>
        <div
          css={
            width > 960
              ? button_over_960(isClicked, width)
              : button_under_960(isClicked)
          }
          onClick={handleChangeisClicked}
        >
          {isClicked ? (
            <>
              <p css={button_text_big}>BACK</p>
              <ArrowLeft />
            </>
          ) : (
            <>
              <div css={text_wrap}>
                <p css={button_text}>그렇다면,</p>
                <p css={button_text_big}>CLICK</p>
              </div>
              <ArrowRight />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const text_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const wrap = (width: number, isClicked: boolean) => css`
  width: 100%;
  position: relative;

  display: flex;
  gap: ${width / 10}px;
  padding: ${width / 10.6}px ${width / 12}px;

  background: ${isClicked ? "#13763C" : "#d9eed6"};

  transition: background 0.3s ease-in-out;

  @media (max-width: 1200px) {
    padding: 40px;
  }
  @media (max-width: 960px) {
    padding: 80px 20px;
    flex-direction: column;
  }
`;

const button_over_960 = (isClicked: boolean, width: number) => css`
  position: absolute;
  bottom: ${width / 10.6}px;
  left: ${width / 12}px;

  display: flex;
  width: 180px;
  height: 180px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: visible;

  border-radius: 200px;
  background: ${isClicked ? "#35184D" : "#018c3b"};

  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;
const button_under_960 = (isClicked: boolean) => css`
  display: flex;
  width: 180px;
  height: 180px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: visible;

  border-radius: 200px;
  background: ${isClicked ? "#35184D" : "#018c3b"};

  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

const button_text = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
`;
const button_text_big = css`
  color: #fff;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const card_wrap = css`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 960px) {
    flex-wrap: no-wrap;
    flex-direction: column;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const caption_1text = (theme: CustomTheme, isClicked: boolean) => css`
  width: 100%;

  color: ${isClicked ? theme.colors.mono.white : theme.colors.point.primary};
  text-align: center;
  font-size: ${theme.fontSize.qu};
  font-weight: ${theme.fontWeight.semiBold};
  text-decoration-line: underline;

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1200px) {
    font-size: 19px;
    white-space: nowrap;
  }
`;
