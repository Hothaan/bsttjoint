/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import CheckList from "@/components/ui/checkList/CheckList";

export default function Section2() {
  const theme = useTheme() as CustomTheme;

  const bg1 = "/assets/components/pages/bstt/index/section2/bg1.png";

  const sectionTitleDesc_ = {
    title: `Why problem`,
    desc: [
      `많은 통증질환 환자분들이`,
      <br key="1" />,
      `
이런 어려움을 겪고 계십니다`,
    ],
  };

  const check_list_data_ = [
    "갈수록 약해지는 마디마디",
    "그때그때 눈가림식 통증치료",
    "자꾸만 줄어드는 치료효과",
    "질병의 진행, 악화, 수술, 재발",
    "점점 견디기 힘든 통증, 불면, 우울..",
  ];

  const quote_ = [
    `”도대체 `,
    <span key="2" className="primary">
      어떻게 하면 좋을까요?”
    </span>,
  ];

  return (
    <div css={wrap}>
      <ImageContainer maxWidth="100%">
        <img src={bg1} alt="bg1" />
      </ImageContainer>
      <div css={text_wrap}>
        <div css={margin_bottom(54)}>
          <SectionTitleDesc
            color="black"
            title={sectionTitleDesc_.title}
            desc={sectionTitleDesc_.desc}
          />
        </div>
        <div css={margin_bottom(84)}>
          <CheckList checkListData={check_list_data_} color="black" />
        </div>

        <p css={quote_style(theme)}>{quote_}</p>
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
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 185px;
  transform: translateY(-50%);
`;

const quote_style = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.black};
  font-size: ${theme.fontSize.qu};
  font-weight: ${theme.fontWeight.semiBold};
  letter-spacing: -0.02em;

  .primary {
    color: ${theme.colors.point.primary};
  }
`;
