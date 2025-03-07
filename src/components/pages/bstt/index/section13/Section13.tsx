/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import ImageContainer from "@/components/ui/container/ImageContainer";
import { branch_data } from "@/datas/menuData";
import Branch from "./Branch";

export default function Section13() {
  const section_title_desc_ = {
    title: `story`,
    desc: [`튼튼마디한의원 전국 지점 안내`],
  };
  const map_ = `/assets/components/pages/bstt/index/section13/map.png`;
  return (
    <div css={wrap}>
      <SectionTitleDesc
        title={section_title_desc_.title}
        desc={section_title_desc_.desc}
        color={"green"}
      />
      <div css={content_wrap}>
        <ImageContainer maxWidth="735px">
          <img src={map_} alt="map" />
        </ImageContainer>
        <div css={branch_wrap}>
          {branch_data.map((item, idx) => (
            <Branch key={idx} depth1={item.depth1} depth2={item.depth2} />
          ))}
        </div>
      </div>
    </div>
  );
}

const wrap = css`
  padding: 180px 0;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 62px;
`;

const content_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 62px;
`;

const branch_wrap = css`
  display: flex;

  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
