"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import IntensiveCareCard from "./IntensiveCareCard";
import Banner from "./Banner";

export default function Section11() {
  const theme = useTheme() as CustomTheme;
  const title_ = `튼튼마디 중점진료질환`;
  const bg1_ = `/assets/components/pages/bstt/index/section11/bg1.png`;
  const bg2_ = `/assets/components/pages/bstt/index/section11/bg2.png`;
  const bg3_ = `/assets/components/pages/bstt/index/section11/bg3.png`;
  const bg4_ = `/assets/components/pages/bstt/index/section11/bg4.png`;
  const intensive_card_data_ = [
    {
      img: bg1_,
      title: "관절질환",
      desc: "퇴행성관절염, 연골연화증, 반월상연골파열, 회전근개파열, 오십견, 손가락관절염 등",
    },
    {
      img: bg2_,
      title: "척추질환",
      desc: "척추관협착증, 허리디스크, 척추전방전위증, 척추측만증, 일자목·거북목, 목디스크 등",
    },
    {
      img: bg3_,
      title: "자가면역",
      desc: "류마티스관절염, 강직성척추염, 건선성관절염, 섬유근육통 ",
    },
    {
      img: bg4_,
      title: "만성통증",
      desc: "족저근막염, 지간신경종, 손목터널증후군, 엘보, 교통사고후유증, 수술후유증 등",
    },
  ];
  const banner1_ = `/assets/components/pages/bstt/index/section11/banner1.png`;
  const banner2_ = `/assets/components/pages/bstt/index/section11/banner2.png`;
  const banner_data_ = [
    {
      img: banner1_,
      text: [`소아성장`, <br key="1" className="mo" />, `클리닉`],
    },
    {
      img: banner2_,
      text: [`다이어트`, <br key="1" className="mo" />, `클리닉`],
    },
  ];
  return (
    <div css={wrap}>
      <SectionTitleSimple text={title_} color={theme.colors.mono.black} />
      <div css={content_wrap}>
        <div css={intensive_card_wrap}>
          {intensive_card_data_.map((item, idx) => (
            <IntensiveCareCard
              key={idx}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        <div css={banner_wrap}>
          {banner_data_.map((item, idx) => (
            <Banner key={idx} img={item.img} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  width: 100%;
  padding-top: 180px;
  flex-direction: column;
  align-items: center;
  gap: 54px;

  @media (max-width: 960px) {
    padding-top: 80px;
    gap: 24px;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 960px) {
    gap: 10px;
  }
`;

const intensive_card_wrap = css`
  display: flex;
  align-items: start;
  gap: 6px;

  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (max-width: 960px) {
    gap: 10px;
  }
`;

const banner_wrap = css`
  display: flex;
  align-items: start;
  gap: 6px;

  width: 100%;

  @media (max-width: 960px) {
    gap: 0;
  }
`;
