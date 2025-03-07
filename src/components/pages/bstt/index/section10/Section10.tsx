/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import Tab from "./Tab";

export default function Section10() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tab_data_ = [
    "결합조직 분해 억제",
    "연골·인대 구성성분 증가",
    "염증 반응 감소",
    "면역 활성 조절",
  ];
  const chart_data_ = [
    `/assets/components/pages/bstt/index/section10/chart1.png`,
    `/assets/components/pages/bstt/index/section10/chart2.png`,
    `/assets/components/pages/bstt/index/section10/chart3.png`,
    `/assets/components/pages/bstt/index/section10/chart4.png`,
  ];
  return (
    <div css={wrap}>
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
      <ImageContainer maxWidth="1157px">
        <img src={chart_data_[selectedTab]} alt="chart" />
      </ImageContainer>
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px 185px;

  display: flex;
  justify-content: space-between;

  background: #f0f1f4;
`;

const tab_wrap = css`
  display: flex;
  padding-left: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  height: fit-content;

  border-left: 1px solid #bcc6b2;
`;
