/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import Scie from "@/assets/components/pages/bstt/index/section9/scie.svg";

interface IAcademicJournalCard {
  img: string;
  isScie: boolean;
  title: (string | React.ReactNode)[];
  desc: string;
}

export default function AcademicJournalCard(prop: IAcademicJournalCard) {
  const { img, isScie, title, desc } = prop;
  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap}>
      <ImageContainer maxWidth="200px">
        <img src={img} alt="journal" />
        {isScie && (
          <div css={scie_wrap}>
            <Scie />
          </div>
        )}
      </ImageContainer>
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
const scie_wrap = css`
  position: absolute;
  top: 0;
  right: -20px;
`;
const content_wrap = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const title_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  text-align: center;
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};
  line-height: normal;

  height: 76px;
`;
const desc_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.ml};
  line-height: 140%;
`;
