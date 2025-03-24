"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import ImageCard from "./ImageCard";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import PageTitleContent from "@/components/ui/text/PageTitleContent";

export default function Section3() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  const sectionTitleDesc_ = {
    title: `most important`,
    desc: [
      `궁극적으로`,
      <br key="1" className="mo" />,
      ,
      `가장 중요한 것은 바로`,
      <br key="1" />,
      <span key="2" className="green">
        만성질환 관리
      </span>,
      `와 `,
      <br key="1" className="mo" />,
      ,
      <span key="3" className="green">
        활동능력의 유지
      </span>,
    ],
  };
  const page_title_content_ = [
    `결국 튼튼마디한의원의 탄생이 불가피했던 20년전의 단 한가지 질문`,
    <br key="1" />,
    <span key="2" className="bold">
      ”어떻게 하면 가족과 함께 더 건강하고 행복한 노후를 보낼 수 있을까?”
    </span>,
  ];

  const image_card_data_ = [
    {
      img: `/assets/components/pages/bstt/HospitalGuide/section3/card1_pc.png`,
      title: `예방적 치료`,
      desc: [
        `어차피 진행되어 만성화되는 질병이라면 초기부터 미리미리 치료합니다.`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/HospitalGuide/section3/card2_pc.png`,
      title: `적극적 치료`,
      desc: [
        `관절척추의 질병은 적극적으로 치료할수록 치료율이 높고 후유증상이 적습니다. `,
      ],
    },
    {
      img: `/assets/components/pages/bstt/HospitalGuide/section3/card3_pc.png`,
      title: `근본적 회복`,
      desc: [
        `일시적인 통증억제가 아닌 질병의 개선에 의한 통증완화를 추구합니다.`,
      ],
    },
    {
      img: `/assets/components/pages/bstt/HospitalGuide/section3/card4_pc.png`,
      title: `꾸준한 관리`,
      desc: [
        `지속가능한 방식으로 치료를 해야만 재발 방지와 진행 억제까지 가능합니다.`,
      ],
    },
  ];

  return (
    <div css={wrap}>
      <div css={top_wrap}>
        <SectionTitleDesc
          titleColor={theme.colors.point.primary}
          descColor={theme.colors.mono.black}
          title={sectionTitleDesc_.title}
          desc={sectionTitleDesc_.desc}
        />
        <PageTitleContent text={page_title_content_} />
      </div>
      <div css={card_wrap}>
        <div css={card_inner_wrap}>
          {image_card_data_.map((item, idx) => (
            <ImageCard
              key={idx}
              img={item.img}
              idx={idx}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px 86px;
  margin: 0 auto;

  position: relative;

  @media (max-width: 1400px) {
    padding: 100px 40px;
  }
  @media (max-width: 960px) {
    padding: 80px 20px;
  }
`;

const top_wrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
  }
`;

const card_wrap = css`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 960px) {
    margin-top: 34px;
    gap: 12px;
  }
`;

const card_inner_wrap = css`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 960px) {
    gap: 20px;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
