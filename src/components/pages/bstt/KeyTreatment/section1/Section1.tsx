/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import Chart from "./Chart";

export default function Section1() {
  const theme = useTheme() as CustomTheme;

  const bg1_pc_ = `/assets/components/pages/bstt/KeyTreatment/section1/bg1_pc.png`;
  const bg1_mo_ = `/assets/components/pages/bstt/KeyTreatment/section1/bg1_mo.png`;

  const section_title_simple_ = [
    `통증으로 내원하시는`,
    <br key="1" className="mo" />,
    `환자분들은`,
    <br key="1" className="mo" />,
    <span key="1" className="green">
      다음 셋 중의 하나
    </span>,
    `입니다.`,
  ];

  const section_desc_ = [
    `환자분들이 하나같이 하시는 말씀`,
    <br key="1" />,
    <span key="1" className="bold">
      “그냥 아프니까 치료받으면 되는줄 알았지
    </span>,
    <br key="1" />,
    <span key="1" className="green">
      이렇게 오래가고 안 나을지 생각도”
    </span>,
    <br key="1" className="mo" />,
    <span key="1" className="green">
      못했습니다
    </span>,
  ];

  const chart_data_ = [
    {
      imgPc: `/assets/components/pages/bstt/KeyTreatment/section1/chart1_pc.png`,
      imgMo: `/assets/components/pages/bstt/KeyTreatment/section1/chart1_pc.png`,
      text: [`이제 막 증상이 있는 분`],
    },
    {
      imgPc: `/assets/components/pages/bstt/KeyTreatment/section1/chart2_pc.png`,
      imgMo: `/assets/components/pages/bstt/KeyTreatment/section1/chart2_pc.png`,
      text: [
        `치료를 받지만`,
        <br key="1" className="mo" />,
        `자꾸 재발하는 분`,
      ],
    },
    {
      imgPc: `/assets/components/pages/bstt/KeyTreatment/section1/chart3_pc.png`,
      imgMo: `/assets/components/pages/bstt/KeyTreatment/section1/chart3_pc.png`,
      text: [
        `온갖 병원을 다 다녀도`,
        <br key="1" className="mo" />,
        ` 계속 심해지는 분`,
      ],
    },
  ];

  return (
    <ContentsContainer bgPc={bg1_pc_} bgMo={bg1_mo_}>
      <div css={wrap}>
        <div css={title_chart_wrap}>
          <SectionTitleSimple
            text={section_title_simple_}
            color={theme.colors.mono.black}
            align="center"
          />
          <div css={chart_container}>
            {chart_data_.map((item, idx) => (
              <Chart
                key={idx}
                imgPc={item.imgPc}
                imgMo={item.imgMo}
                text={item.text}
              />
            ))}
          </div>
        </div>
        <div css={dot_wrap}>
          <span css={dot(1)}></span>
          <span css={dot(0.4)}></span>
          <span css={dot(0.2)}></span>
        </div>
        <p css={section_desc_text(theme)}>{renderWidthKeys(section_desc_)}</p>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 74px;

  @media (max-width: 1600px) {
    gap: 60px;
  }
  @media (max-width: 1400px) {
    gap: 60px;
  }
  @media (max-width: 1200px) {
    gap: 50px;
  }
  @media (max-width: 960px) {
    gap: 40px;
  }
  @media (max-width: 540px) {
    gap: 30px;
  }
  @media (max-width: 480px) {
    gap: 24px;
  }
`;
const title_chart_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 54px;

  @media (max-width: 1600px) {
    gap: 50px;
  }
  @media (max-width: 1200px) {
    gap: 40px;
  }
`;

const chart_container = css`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 70px;

  @media (max-width: 1600px) {
    gap: 60px;
  }
  @media (max-width: 1400px) {
    gap: 60px;
  }
  @media (max-width: 1200px) {
    gap: 50px;
  }
  @media (max-width: 960px) {
    flex-wrap: wrap;
    gap: 40px;
  }
  @media (max-width: 840px) {
    gap: 30px;
  }
  @media (max-width: 680px) {
    gap: 20px;
  }
  @media (max-width: 540px) {
    gap: 16px;
  }
  @media (max-width: 480px) {
    gap: 12px;
  }
  @media (max-width: 400px) {
    gap: 8px;
  }
`;

const dot_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;

  @media (max-width: 960px) {
    gap: 8px;
  }
`;

const dot = (opacity: number) => css`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #111;
  opacity: ${opacity};

  @media (max-width: 960px) {
    width: 4px;
    height: 4px;
  }
`;

const section_desc_text = (theme: CustomTheme) => css`
  color: var(--black-text, #3c3c3c);
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  .bold {
    font-weight: 700;
  }
  .green {
    color: ${theme.colors.point.primary};
  }

  @media (max-width: 1600px) {
    font-size: 34px;
  }
  @media (max-width: 1400px) {
    font-size: 32px;
  }
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 960px) {
    font-size: 28px;
    line-height: 1.8;
  }
  @media (max-width: 840px) {
    font-size: 26px;
  }
  @media (max-width: 680px) {
    font-size: 24px;
  }
  @media (max-width: 540px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;
