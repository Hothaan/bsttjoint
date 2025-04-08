"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useEffect } from "react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import ContentsContainer from "../container/ContentsContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { branch_data } from "@/datas/menuData";
import Branch from "./Branch";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Map() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  useEffect(() => {
    AOS.init();
  }, []);

  if (width === null) {
    return;
  }
  const section_title_desc_ = {
    title: `place`,
    desc: [`튼튼마디한의원 `, <br key="1" />, `전국 지점 안내`],
    align: `center`,
  };
  const map_ = `/assets/components/pages/bstt/index/section13/map.png`;
  return (
    <ContentsContainer>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleDesc
            title={section_title_desc_.title}
            desc={section_title_desc_.desc}
            titleColor={theme.colors.point.primary}
            descColor={theme.colors.mono.black}
            align={width < 960 ? "start" : "center"}
          />
        </div>
        <div css={content_wrap} data-aos="fade-up">
          <div css={image_wrap(width)}>
            <img src={map_} alt="map" />
          </div>
          <div css={branch_wrap}>
            {branch_data.map((item, idx) => (
              <Branch key={idx} depth1={item.depth1} depth2={item.depth2} />
            ))}
          </div>
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 62px;
`;
const title_wrap = css`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    justify-content: start;
  }
`;

const content_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 62px;

  @media (max-width: 1800px) {
    gap: 40px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const image_wrap = (width: number) => css`
  width: 100%;
  max-width: 735px;
  height: auto;
  aspect-ratio: 735 / 639;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1800px) {
    max-width: 600px;
  }
  @media (max-width: 1800px) {
    max-width: 500px;
  }
  @media (max-width: 1200px) {
    max-width: ${width - 140}px;
  }
  @media (max-width: 960px) {
    max-width: ${width - 40}px;
  }
`;

const branch_wrap = css`
  display: flex;

  flex-direction: column;
  justify-content: start;
  align-items: start;
  @media (max-width: 1200px) {
    gap: 8px;
  }
`;
