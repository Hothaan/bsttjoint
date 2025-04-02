"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState, useEffect } from "react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import AOS from "aos";
import "aos/dist/aos.css";

import Tab from "./Tab";

export default function Section10() {
  const { width } = useWindowSizeContext();

  useEffect(() => {
    AOS.init();
  }, []);

  const [selectedTab, setSelectedTab] = useState(0);
  const tab_data_ = [
    "결합조직 분해 억제",
    "연골·인대 구성성분 증가",
    "염증 반응 감소",
    "면역 활성 조절",
  ];
  const chart_data_pc = [
    `/assets/components/pages/bstt/index/section10/chart1.png`,
    `/assets/components/pages/bstt/index/section10/chart2.png`,
    `/assets/components/pages/bstt/index/section10/chart3.png`,
    `/assets/components/pages/bstt/index/section10/chart4.png`,
  ];
  const chart_data_mo = [
    `/assets/components/pages/bstt/index/section10/chart1_mo.png`,
    `/assets/components/pages/bstt/index/section10/chart2_mo.png`,
    `/assets/components/pages/bstt/index/section10/chart3_mo.png`,
    `/assets/components/pages/bstt/index/section10/chart4_mo.png`,
  ];

  if (width === null) {
    return;
  }

  return (
    <div css={wrap} data-aos="fade-up">
      <div css={tab_wrap}>
        {tab_data_.map((item, idx) => (
          <Tab
            key={idx}
            idx={idx}
            text={item}
            isSelected={idx === selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
      <div css={image_container} data-aos="fade-up">
        <img
          src={
            width > 960
              ? chart_data_pc[selectedTab]
              : chart_data_mo[selectedTab]
          }
          alt="chart"
        />
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px 185px;

  display: flex;
  gap: 143px;

  background: #f0f1f4;

  @media (min-width: 1920px) {
    gap: 0;
    justify-content: space-between;
  }
  @media (max-width: 1800px) {
    padding: 150px;
    gap: 120px;
  }
  @media (max-width: 1600px) {
    padding: 130px;
    gap: 100px;
  }
  @media (max-width: 1400px) {
    padding: 110px;
    gap: 80px;
  }
  @media (max-width: 1200px) {
    padding: 90px;
    gap: 60px;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;
    padding: 80px 20px;
  }
`;

const tab_wrap = css`
  display: flex;
  padding-left: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  height: fit-content;

  border-left: 1px solid #bcc6b2;

  @media (max-width: 1400px) {
    gap: 32px;
  }
  @media (max-width: 1000px) {
    gap: 24px;
  }
  @media (max-width: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    border-left: none;
    padding-left: 0;
  }
  @media (max-width: 600px) {
    gap: 0;
  }
`;

const image_container = css`
  width: 100%;
  max-width: 1157px;
  height: auto;
  aspect-ratio: 1157 / 710;
  border-radius: 30px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 960px) {
    max-width: 600px;
    aspect-ratio: auto;
  }
`;
