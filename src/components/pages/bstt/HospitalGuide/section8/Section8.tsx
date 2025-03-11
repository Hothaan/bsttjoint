/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import Badge from "./Badge";
import Badge1 from "@/assets/components/pages/bstt/HospitalGuide/section8/badge1.svg";
import Badge2 from "@/assets/components/pages/bstt/HospitalGuide/section8/badge2.svg";
import Badge3 from "@/assets/components/pages/bstt/HospitalGuide/section8/badge3.svg";
import PageQuote from "@/components/ui/text/PageQuote";

export default function Section8() {
  const sectionTitleDesc_ = {
    title: `Goals`,
    desc: [`튼튼마디의 유일한 목표`],
  };
  const badge_data_ = [
    {
      icon: <Badge1 />,
      title: `신뢰`,
      desc: [`믿고 맡길 수 있는 병원이`, <br key="1" />, `되겠습니다.`],
    },
    {
      icon: <Badge2 />,
      title: `혁신`,
      desc: [
        `전통을 기반으로 끝없는 혁신을`,
        <br key="1" />,
        `추구하겠습니다.`,
      ],
    },
    {
      icon: <Badge3 />,
      title: `소신`,
      desc: [`올바른 치료원칙을 소신것 `, <br key="1" />, `지키겠습니다.`],
    },
  ];
  const page_quote_ = [
    `“우리의 환자들이 `,
    <span key="1" className="green">
      건강을 회복하여 고통없이 생활하고
    </span>,
    <br key="1" />,
    <span key="1" className="green">
      꿈과 희망을 추구하며 가족과 행복한 시간
    </span>,
    `을 오래오래 보낼 수 있게 만든다.”`,
  ];
  const back_text_ = `FOR YOUR HEALTHY JOINTS FOR YOUR HEALTHY JOINTS`;
  return (
    <div css={wrap}>
      <div css={top_wrap}>
        <SectionTitleDesc
          title={sectionTitleDesc_.title}
          desc={sectionTitleDesc_.desc}
          titleColor="#018C3B"
          descColor="#121212"
          align="center"
          justify="center"
        />
        <div css={quote_container}>
          <span css={stroke}></span>
          <PageQuote text={page_quote_} />
        </div>
      </div>
      <div css={badge_container}>
        {badge_data_.map((badge_data, index) => (
          <Badge
            key={index}
            icon={badge_data.icon}
            title={badge_data.title}
            desc={badge_data.desc}
          />
        ))}
      </div>
      <p css={back_text}>{back_text_}</p>
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 44px;

  background-color: #eaf5ef;

  aspect-ratio: 1920 / 1145;

  position: relative;
`;
const top_wrap = css`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

const badge_container = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 33px;
`;

const quote_container = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const stroke = css`
  display: block;
  width: 1.5px;
  height: 64px;
  background: #018c3b;
`;

const back_text = css`
  position: absolute;

  color: #d2e9dc;
  font-family: Montserrat;
  font-size: 120px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -2.4px;

  z-index: 0;
  white-space: nowrap;
  bottom: 105px;
  left: 0;
`;
