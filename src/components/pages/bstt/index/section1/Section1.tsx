/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import FloatingButtonsContainer from "@/components/ui/container/FloatingButtonsContainer";

export default function Section1() {
  const theme = useTheme() as CustomTheme;

  const bg1 = "/assets/components/pages/bstt/index/section1/bg1.png";
  const text1_ =
    "어떻게 하면 더 젊게, 더 건강하게, 더 안 아프게  살 수 있을까?";
  const text2_ = [
    `건강한 백년을 위한`,
    <br key="1" />,
    <span key="2" className="highlight">
      튼튼한 약속
    </span>,
  ];
  const text3_ = [
    `관절척추 백년대계,  `,
    <span key="3" className="bold">
      튼튼마디한의원
    </span>,
  ];

  return (
    <div css={wrap}>
      <ImageContainer maxWidth="100%">
        <img src={bg1} alt="bg1" />
      </ImageContainer>
      <div css={text_wrap}>
        <p css={text1_style(theme)}>{text1_}</p>
        <p css={text2_style(theme)}>{text2_}</p>
        <p css={text3_style(theme)}>{text3_}</p>
      </div>
      <FloatingButtonsContainer
        branch={"bstt"}
        page={"main"}
        section={"section1"}
      />
    </div>
  );
}

const wrap = css`
  width: 100%;
  position: relative;
`;

const text_wrap = css`
  position: absolute;
  top: 310px;
  left: 160px;
`;

const text1_style = (theme: CustomTheme) => css`
  margin-bottom: 38px;

  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  line-height: 150%;
  letter-spacing: -0.48px;
`;
const text2_style = (theme: CustomTheme) => css`
  margin-bottom: 10px;

  position: relative;
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.tt};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.3;
  letter-spacing: -1.3px;

  .highlight {
    display: inline-block;
    position: relative;
    z-index: 1;
    background-color: #31915d;
    padding: 0 0.25em;
    display: inline-block;
    width: auto;
  }
`;

const text3_style = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.xl};
  letter-spacing: -0.02em;

  .bold {
    font-weight: ${theme.fontWeight.bold};
  }
`;
