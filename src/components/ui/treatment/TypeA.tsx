"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { ISectionTitleSimple } from "@/components/ui/text/SectionTitleSimple";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ItypeA {
  sectionTitleSimple: ISectionTitleSimple;
}

export default function TypeA(prop: ItypeA) {
  const { sectionTitleSimple } = prop;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div css={wrap} data-aos="fade-up">
      <div css={container}>
        <SectionTitleSimple {...sectionTitleSimple} />
        <span css={stroke}></span>
      </div>
    </div>
  );
}

const wrap = css`
  padding: 180px 180px 0 180px;

  @media (max-width: 1800px) {
    padding: 160px 160px 0 180px;
  }
  @media (max-width: 1400px) {
    padding: 140px 140px 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 120px 120px 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 100px 100px 0 100px;
  }
  @media (max-width: 960px) {
    padding: 80px 80px 0 80px;
  }
  @media (max-width: 680px) {
    padding: 80px 60px 0 60px;
  }
  @media (max-width: 540px) {
    padding: 80px 40px 0 40px;
  }
  @media (max-width: 480px) {
    padding: 80px 20px 0 20px;
  }
`;

const container = css`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px) {
    gap: 90px;
  }
  @media (max-width: 1400px) {
    gap: 68px;
  }
  @media (max-width: 1200px) {
    gap: 56px;
  }
  @media (max-width: 960px) {
    gap: 48px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

const stroke = css`
  display: block;

  width: 1px;
  height: 150px;

  background: #018c3b;

  @media (max-width: 1600px) {
    height: 140px;
  }
  @media (max-width: 1400px) {
    height: 124px;
  }
  @media (max-width: 1200px) {
    height: 100px;
  }
  @media (max-width: 960px) {
    height: 84px;
  }
  @media (max-width: 480px) {
    height: 75px;
  }
`;
