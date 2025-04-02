"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useEffect } from "react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import CoreTreatmentCard from "./TypeHcard";
import AOS from "aos";
import "aos/dist/aos.css";
export default function TypeH() {
  const theme = useTheme() as CustomTheme;
  const title_ = [`튼튼마디`, <br key="1" className="mo" />, `핵심치료 안내`];

  useEffect(() => {
    AOS.init();
  }, []);

  const bg1 = "/assets/components/pages/bstt/index/section8/bg1.png";
  const bg2 = "/assets/components/pages/bstt/index/section8/bg2.png";
  const bg3 = "/assets/components/pages/bstt/index/section8/bg3.png";
  const bg4 = "/assets/components/pages/bstt/index/section8/bg4.png";
  const bg5 = "/assets/components/pages/bstt/index/section8/bg5.png";
  const bg6 = "/assets/components/pages/bstt/index/section8/bg6.png";

  const core_treatment_card_data_ = [
    {
      img: bg1,
      defaultText: "녹용한약",
      hoverText: {
        title: `녹용한약`,
        desc: [
          `전신적인 원기강화와 면역증강에 탁월한`,
          <br key="1" className="pc" />,
          `튼튼마디 녹용한약`,
        ],
      },
    },
    {
      img: bg2,
      defaultText: "연골한약 백절탕",
      hoverText: {
        title: `연골한약 백절탕`,
        desc: [
          `국제적인 SCI급 논문에서 치료적 효과가 입증된`,
          <br key="1" className="pc" />,
          `튼튼마디 대표처방`,
        ],
      },
    },
    {
      img: bg3,
      defaultText: "약침시술",
      hoverText: {
        title: `약침시술`,
        desc: [
          `국소부위의 염증완화와 조직회복을 극대화하는 봉약침과`,
          <br key="1" className="pc" />,
          `면역약침요법`,
        ],
      },
    },
    {
      img: bg4,
      defaultText: "도침시술",
      hoverText: {
        title: `도침시술`,
        desc: [
          `치유효과를 극대화하는`,
          <br key="1" className="pc" />,
          `최소 침습 초미세 절개 시술`,
        ],
      },
    },
    {
      img: bg5,
      defaultText: "추나요법",
      hoverText: {
        title: `추나요법`,
        desc: [
          `비틀린 체형과 불균형한 긴장도를 해소하는`,
          <br key="1" className="pc" />,
          `한의사 직접시행 수기요법`,
        ],
      },
    },
    {
      img: bg6,
      defaultText: "체중감량",
      hoverText: {
        title: `체중감량`,
        desc: [
          `20대부터 80대까지 가능한`,
          <br key="1" className="pc" />,
          `튼튼마디의 다이어트 노하우`,
        ],
      },
    },
  ];
  return (
    <div css={wrap} data-aos="fade-up">
      <div css={title_wrap}>
        <SectionTitleSimple text={title_} color={theme.colors.mono.black} />
      </div>
      <div css={card_wrap}>
        {core_treatment_card_data_.map((item, idx) => (
          <CoreTreatmentCard
            key={idx}
            img={item.img}
            defaultText={item.defaultText}
            hoverText={item.hoverText}
          />
        ))}
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px 0 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 54px;
  @media (max-width: 960px) {
    padding: 80px 0 0;
    align-items: start;
  }
`;
const title_wrap = css`
  @media (max-width: 960px) {
    padding-left: 20px;
  }
`;

const card_wrap = css`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 960px) {
    gap: 8px;
  }
`;
