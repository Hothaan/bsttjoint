"use client";
"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme, keyframes } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

export default function Section2() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  const bg1_pc =
    "/assets/components/pages/bstt/HospitalGuide/section2/bg1_pc.png";
  const bg1_mo =
    "/assets/components/pages/bstt/HospitalGuide/section2/bg1_mo.png";

  const chart1_pc =
    "/assets/components/pages/bstt/HospitalGuide/section2/chart1_pc.png";
  const chart2_pc =
    "/assets/components/pages/bstt/HospitalGuide/section2/chart2_pc.png";
  const chart1_mo =
    "/assets/components/pages/bstt/HospitalGuide/section2/chart1_mo.png";
  const chart2_mo =
    "/assets/components/pages/bstt/HospitalGuide/section2/chart2_mo.png";
  const chat_group_pc =
    "/assets/components/pages/bstt/HospitalGuide/section2/chat_group_pc.png";
  const chat_group_mo1 =
    "/assets/components/pages/bstt/HospitalGuide/section2/chat_group_mo1.png";
  const chat_group_mo2 =
    "/assets/components/pages/bstt/HospitalGuide/section2/chat_group_mo2.png";

  const sectionTitleDesc_ = {
    title: `painful disease`,
    desc: [
      `이런 현실에서`,
      <br key="1" />,
      `아직도 많은 분들의`,
      <br key="1" />,
      `통증질환에 대한 생각`,
    ],
    caption: `strong-KNIE MEDICAL CENTER`,
  };
  const chart_title__ = `그 결과는?`;
  const chart_tag_ = `* 2023년 보건의료통계`;
  const chart_desc_ = [
    `관절·척추의 손상과 퇴행은`,
    <br key="1" />,
    <span key="1" className="green">
      단순히 눈앞의 통증만 해결한다고
    </span>,
    <br key="2" />,
    <span key="3" className="green">
      해서 끝나지 않는 것이 현실
    </span>,
    `입니다.`,
  ];

  return (
    <div css={wrap(bg1_pc, bg1_mo, width)}>
      <div css={top_wrap}>
        <div css={section_title_desc_wrap}>
          <SectionTitleDesc
            titleColor={"#01E05E"}
            descColor={theme.colors.mono.white}
            title={sectionTitleDesc_.title}
            desc={sectionTitleDesc_.desc}
            caption={sectionTitleDesc_.caption}
          />
        </div>
        {width > 960 ? (
          <div css={chat_wrap_pc(width)}>
            <img src={chat_group_pc} alt="chat" />
          </div>
        ) : (
          <div css={chat_wrap_mo(width)}>
            <div css={chat_flow_wrap_left(width)}>
              <img src={chat_group_mo1} alt="chat" />
              <img src={chat_group_mo1} alt="chat" />
              <img src={chat_group_mo1} alt="chat" />
            </div>
            <div css={chat_flow_wrap_right(width)}>
              <img src={chat_group_mo2} alt="chat" />
              <img src={chat_group_mo2} alt="chat" />
              <img src={chat_group_mo2} alt="chat" />
            </div>
          </div>
        )}
      </div>
      <div css={chart_container}>
        <p css={chart_title}>{chart_title__}</p>
        <div css={chart_image_wrap}>
          <div css={chart_image_container}>
            <img src={width > 960 ? chart1_pc : chart1_mo} alt="chart" />
          </div>
          <span css={stroke}></span>
          <div css={chart_image_container}>
            <img src={width > 960 ? chart2_pc : chart2_mo} alt="chart" />
          </div>
          <p css={chart_tag}>{chart_tag_}</p>
        </div>
        <p css={chart_desc}>{renderWidthKeys(chart_desc_)}</p>
      </div>
    </div>
  );
}

const chart_container = css`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  gap: 67px;

  @media (max-width: 1600px) {
    gap: 56px;
  }
  @media (max-width: 1400px) {
    gap: 48px;
  }
  @media (max-width: 960px) {
    margin-top: 80px;
  }
`;

const chart_title = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.08px;

  @media (max-width: 1600px) {
    font-size: 48px;
  }
  @media (max-width: 1400px) {
    font-size: 32px;
  }
`;

const stroke = css`
  width: 1px;
  height: 50%;

  opacity: 0.4;
  background: #fff;

  margin: 0 99px;

  @media (max-width: 960px) {
    display: none;
  }
`;

const chart_image_wrap = css`
  display: flex;
  padding: 0px 34px;
  justify-content: center;
  align-items: center;
  gap: 44px;

  position: relative;

  @media (max-width: 1600px) {
    gap: 32px;
  }
  @media (max-width: 1400px) {
    gap: 28px;
  }
  @media (max-width: 960px) {
    gap: 8px;
    padding: 0 34px 68px;
  }
`;

const chart_image_container = css`
  display: flex;
  padding: 0px 34px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    width: 100%;
    max-width: 287px;
    height: auto;
    aspect-ratio: 287 / 336;
  }

  @media (max-width: 1600px) {
    padding: 0px 28px;
    img {
      max-width: 240px;
    }
  }
  @media (max-width: 1400px) {
    padding: 0px 20px;
    img {
      max-width: 200px;
    }
  }
  @media (max-width: 960px) {
    padding: 0;
    img {
      min-width: 164px;
      aspect-ratio: 164 / 208;
    }
  }
  @media (max-width: 374px) {
    padding: 0;
    img {
      min-width: 124px;
    }
  }
`;

const chart_tag = css`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  display: flex;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 80px;
  background: #121212;

  color: #e8e8e8;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1600px) {
    padding: 6px 12px;
    font-size: 16px;
  }
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 960px) {
    padding: 10px 12px;
  }
`;

const chart_desc = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  .green {
    color: #01e05e;
    font-weight: 700;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }

  @media (max-width: 1600px) {
    font-size: 32px;
  }
  @media (max-width: 1400px) {
    font-size: 28px;
  }
  @media (max-width: 960px) {
    line-height: 200%;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;

const wrap = (img1: string, img2: string, width: number) => css`
  width: 100%;
  height: 100%;
  position: relative;

  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;

  aspect-ratio: 1920 / 1882;

  padding: ${width / 10.6}px ${width / 11.5}px ${width / 8.4}px ${width / 10}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    background-image: url(${img2});
    padding: 80px 20px;
    aspect-ratio: auto;
  }
`;

const top_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const section_title_desc_wrap = css``;

const chat_wrap_pc = (width: number) => css`
  width: 100%;
  max-width: ${width / 2.2}px;
  aspect-ratio: 873 / 650;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const rollingAnimation_left = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;
const rollingAnimation_right = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

const chat_wrap_mo = (width: number) => css`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  overflow: hidden;
  white-space: nowrap;

  width: ${width}px;
  transform: translateX(-20px);
  padding: 34px 0;
`;
const chat_flow_wrap_left = (width: number) => css`
  width: auto;
  display: flex;
  height: 132px;
  aspect-ratio: 677 / 132;
  gap: 20px;
  animation: ${rollingAnimation_left} 10s linear infinite;
  img {
    height: 100%;
    width: auto;
  }
`;
const chat_flow_wrap_right = (width: number) => css`
  width: auto;
  display: flex;
  height: 132px;
  aspect-ratio: 677 / 132;
  gap: 20px;
  animation: ${rollingAnimation_right} 10s linear infinite;
  img {
    height: 100%;
    width: auto;
  }
`;
