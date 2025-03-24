"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import { ISectionTitleDesc } from "@/components/ui/text/SectionTitleDesc";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import TypeCcard from "./TypeCcard";
import { ITypeCcard } from "./TypeCcard";

interface ITypeC {
  sectionTitleDesc: ISectionTitleDesc;
  bg: string;
  cardData: ITypeCcard[];
}

export default function TypeC(prop: ITypeC) {
  const { sectionTitleDesc, bg, cardData } = prop;
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();

  return (
    <div css={wrap(bg)}>
      <div css={title_desc_wrap}>
        <SectionTitleDesc {...sectionTitleDesc} />
      </div>
      <div css={card_wrap}>
        {cardData.map((item, idx) => {
          const newData_ = { ...item, idx: idx };
          return <TypeCcard key={idx + "TypeC card"} {...newData_} />;
        })}
      </div>
    </div>
  );
}

const wrap = (bg: string) => css`
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  background: ${bg};

  gap: 74px;

  @media (max-width: 1800px) {
    padding: 160px 0;
  }
  @media (max-width: 1400px) {
    padding: 140px 0;
  }
  @media (max-width: 1200px) {
    padding: 120px 0;
  }
  @media (max-width: 1000px) {
    padding: 100px 0;
  }
  @media (max-width: 960px) {
    padding: 80px 0;
  }
`;

const title_desc_wrap = css`
  padding: 0 180px;

  @media (max-width: 1800px) {
    padding: 0 160px;
  }
  @media (max-width: 1400px) {
    padding: 0 140px;
  }
  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 1000px) {
    padding: 0 100px;
  }
  @media (max-width: 960px) {
    padding: 0 80px;
  }
  @media (max-width: 680px) {
    padding: 0 60px;
  }
  @media (max-width: 540px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const card_wrap = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  grid-gap: 0;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
