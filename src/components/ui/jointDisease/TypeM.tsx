"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import Badge from "./TypeMbadge";
import Badge1 from "@/assets/components/pages/bstt/HospitalGuide/section8/badge1.svg";
import Badge2 from "@/assets/components/pages/bstt/HospitalGuide/section8/badge2.svg";
import Badge3 from "@/assets/components/pages/bstt/HospitalGuide/section8/badge3.svg";
import PageQuote from "@/components/ui/text/PageQuote";
import Back from "@/components/ui/text/Back";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TypeM() {
  const { width } = useWindowSizeContext();
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
        `전통을 기반으로 끝없는 `,
        <br key="1" className="mo" />,
        `혁신을`,
        <br key="1" className="pc" />,
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
      건강을 회복하여
    </span>,
    <br key="1" className="mo" />,
    <span key="1" className="green">
      고통없이 생활
    </span>,
    `하고, `,
    <br key="1" className="pc" />,
    <span key="1" className="green">
      꿈과 희망을 추구하며
    </span>,
    <br key="1" className="mo" />,
    <span key="1" className="green">
      가족과 행복한 시간
    </span>,
    `을 `,
    <br key="1" className="mo" />,
    `오래오래 보낼 수 있게 만든다.”`,
  ];
  const back_text_ = `FOR YOUR HEALTHY JOINTS FOR YOUR HEALTHY JOINTS`;

  useEffect(() => {
    AOS.init();
  }, []);

  if (!width) {
    return <></>;
  }
  return (
    <div css={wrap} data-aos="fade-up">
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
          <PageQuote text={page_quote_} align="center" />
        </div>
      </div>
      {width > 960 ? (
        <div css={badge_container_over960}>
          {badge_data_.map((badge_data, index) => (
            <Badge
              key={index}
              icon={badge_data.icon}
              title={badge_data.title}
              desc={badge_data.desc}
            />
          ))}
        </div>
      ) : (
        <div css={badge_container_under960}>
          <div css={badge_container_under960_1}>
            <Badge
              icon={badge_data_[0].icon}
              title={badge_data_[0].title}
              desc={badge_data_[0].desc}
            />
          </div>
          <div css={badge_container_under960_2}>
            {badge_data_
              .slice(badge_data_.length - 2, badge_data_.length)
              .map((badge_data, index) => (
                <Badge
                  key={index}
                  icon={badge_data.icon}
                  title={badge_data.title}
                  desc={badge_data.desc}
                />
              ))}
          </div>
        </div>
      )}
      <div css={back_text_container}>
        <Back text={back_text_} />
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px;
  display: flex;
  flex-direction: column;
  gap: 44px;

  background-color: #eaf5ef;

  aspect-ratio: 1920 / 1145;

  position: relative;

  @media (min-width: 1921px) {
    aspect-ratio: 1920 / 1000;
    padding: 100px 140px 360px;
  }
  @media (max-width: 1600px) {
    padding: 180px 140px 360px;
  }
  @media (max-width: 1400px) {
    padding: 140px 120px 280px;
  }
  @media (max-width: 1200px) {
    padding: 120px 100px 240px;
  }
  @media (max-width: 1000px) {
    padding: 100px 80px 200px;
  }
  @media (max-width: 960px) {
    padding: 80px 20px 160px;
  }
`;
const top_wrap = css`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

const badge_container_over960 = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 33px;

  @media (max-width: 1200px) {
    gap: 24px;
  }
`;
const badge_container_under960 = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const badge_container_under960_1 = css`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const badge_container_under960_2 = css`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media (max-width: 374px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const back_text_container = css`
  position: absolute;
  bottom: 105px;
  left: 0;
  z-index: 0;

  @media (max-width: 480px) {
    bottom: 80px;
  }
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

  @media (max-width: 1600px) {
    height: 56px;
  }
  @media (max-width: 1400px) {
    height: 48px;
  }
`;
