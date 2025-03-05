/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import CheckList from "@/components/ui/checkList/CheckList";

export default function Section3() {
  const theme = useTheme() as CustomTheme;

  const bg1 = "/assets/components/pages/bstt/index/section3/bg1.png";

  const sectionTitleDesc_ = {
    title: `Solution`,
    desc: [`이렇게 된다면 얼마나 좋을까요?`],
  };

  const check_list_data_ = [
    "아직도 튼튼한 마디마디",
    "지속가능한 치료와 평생관리",
    "질환 개선에 의한 통증완화",
    "등산, 골프, 운동 등 취미생활",
    "활동능력 유지와 건강한 노후",
  ];

  const quote_ = [`”충분히 좋아지실 수 있습니다!”`];

  const caption_ = `strong-KNIE MEDICAL CENTER`;

  return (
    <div css={wrap}>
      <ImageContainer maxWidth="100%">
        <img src={bg1} alt="bg1" />
      </ImageContainer>
      <div css={text_wrap}>
        <div css={margin_bottom(54)}>
          <SectionTitleDesc
            color="white"
            title={sectionTitleDesc_.title}
            desc={sectionTitleDesc_.desc}
          />
        </div>
        <div css={margin_bottom(84)}>
          <CheckList checkListData={check_list_data_} color="white" />
        </div>
        <div css={margin_bottom(30)}>
          <p css={quote_style(theme)}>{quote_}</p>
        </div>
        <p css={caption_style(theme)}>{caption_}</p>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  position: relative;
`;

const margin_bottom = (margin: number) =>
  css`
    margin-bottom: ${margin}px;
  `;

const text_wrap = css`
  width: 100%;
  max-width: 656px;
  position: absolute;
  top: 50%;
  left: calc(50% + 160px);
  transform: translateY(-50%);
`;

const quote_style = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.qu};
  font-weight: ${theme.fontWeight.light};
  letter-spacing: -0.02em;
`;
const caption_style = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.ml};
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -0.02em;

  opacity: 0.5;
  letter-spacing: 0.5em;
`;
