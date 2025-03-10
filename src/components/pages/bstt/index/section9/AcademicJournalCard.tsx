/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import Scie from "@/assets/components/pages/bstt/index/section9/scie.svg";

interface IAcademicJournalCard {
  img: string;
  isScie: boolean;
  title: (string | React.ReactNode)[];
  desc: (string | React.ReactNode)[];
}

export default function AcademicJournalCard(prop: IAcademicJournalCard) {
  const { img, isScie, title, desc } = prop;
  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap}>
      <div css={image_wrap}>
        <img src={img} alt="journal" />
        {isScie && (
          <div css={scie_wrap}>
            <Scie />
          </div>
        )}
      </div>
      <div css={content_wrap}>
        <p css={title_text(theme)}>{title}</p>
        <p css={desc_text(theme)}>{desc}</p>
      </div>
    </div>
  );
}

const wrap = css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const image_wrap = css`
  width: 100%;
  max-width: 202px;
  position: relative;

  @media (max-width: 1600px) {
    max-width: 180px;
  }
  @media (max-width: 1400px) {
    max-width: 140px;
  }
  @media (max-width: 1200px) {
    max-width: 120px;
  }
  @media (max-width: 1000px) {
    max-width: 100px;
  }
`;
const scie_wrap = css`
  position: absolute;
  top: 0;
  right: -20px;

  @media (max-width: 1200px) {
    svg {
      width: auto;
      height: 20px;
    }
  }
`;
const content_wrap = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (max-width: 1200px) {
    gap: 4px;
  }
`;
const title_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  text-align: center;
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};
  line-height: normal;

  height: 76px;

  @media (max-width: 1800px) {
    font-size: 28px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 13px;
    height: auto;
  }
`;
const desc_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.ml};
  line-height: 140%;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 12px;
  }
`;
