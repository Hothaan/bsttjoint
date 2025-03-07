/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";

export default function Info() {
  const theme = useTheme() as CustomTheme;

  const caption1_ = [
    `사업자 : 튼튼마디한의원 (부산서면점) 165-95-00754`,
    <br key="1" />,
    `주소 : 부산광역시 부산진구 가야대로 783, 성원메디컬빌딩 6층`,
  ];
  const caption2_ = [
    `연락처 `,
    <span className="bold" key="2">
      051-744-5888
    </span>,
  ];
  const copyright_ = `Copyright 2024. Korea Expressway Corporation Service Co., Ltd. All Rights Reserved.`;

  return (
    <div css={wrap(theme)}>
      <div>
        <p css={caption_text(theme)}>{caption1_}</p>
        <p css={caption_text(theme)}>{caption2_}</p>
      </div>
      <p css={copyright_text(theme)}>{copyright_}</p>
    </div>
  );
}

const wrap = (theme: CustomTheme) =>
  css`
    width: 100%;
    padding: 64px 260px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    border-top: 1px solid ${theme.colors.mono.stroke};

    @media (max-width: 1400px) {
      padding: 64px 160px;
    }
    @media (max-width: 1000px) {
      padding: 40px 100px;
    }
    @media (max-width: 800px) {
      padding: 40px 80px;
    }
    @media (max-width: 500px) {
      padding: 40px;
    }
  `;

const caption_text = (theme: CustomTheme) =>
  css`
    color: ${theme.colors.mono.text};
    font-size: ${theme.fontSize.md};
    line-height: 150%;
    letter-spacing: -0.15px;

    .bold {
      font-weight: ${theme.fontWeight.bold};
    }

    @media (max-width: 800px) {
      font-size: ${theme.fontSize.xs};
    }
  `;
const copyright_text = (theme: CustomTheme) =>
  css`
    color: ${theme.colors.mono.text};
    font-size: ${theme.fontSize.md};
    line-height: 150%;
    letter-spacing: -0.15px;

    opacity: 0.5;

    @media (max-width: 800px) {
      font-size: ${theme.fontSize.xs};
    }
  `;
