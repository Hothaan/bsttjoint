/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ImageContainer from "@/components/ui/container/ImageContainer";

interface IChat {
  img: string;
  who: string;
  alphabet: string;
  chat: (string | React.ReactNode)[];
}

export default function Chat(prop: IChat) {
  const { img, who, alphabet, chat } = prop;

  const theme = useTheme() as CustomTheme;

  return (
    <div css={wrap(theme)}>
      <p css={profile_wrap}>
        <ImageContainer maxWidth="48px">
          <img src={img} alt="profile" />
        </ImageContainer>
        <p css={who_text(theme)}>{who}</p>
        <p css={alphabet_text(theme)}>{alphabet}씨</p>
      </p>
    </div>
  );
}

const wrap = (theme: CustomTheme) => css`
  display: inline-flex;
  padding: 34px;
  flex-direction: column;
  gap: 16px;

  border-radius: 30px 30px 0 30px;
  background: ${theme.colors.mono.white};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

  .image_container {
    border-radius: 50%;
    overflow: hidden;
  }
`;

const profile_wrap = css`
  display: flex;
  algin-items: center;
  gap: 8px;
`;

const who_text = (theme: CustomTheme) => css`
  color: #646464;
  font-size: 28px;
  font-weight: ${theme.fontWeight.bold};
`;

const alphabet_text = (theme: CustomTheme) => css`
  color: ${theme.colors.point.primary};
  font-size: 28px;
  font-weight: ${theme.fontWeight.black};
`;
