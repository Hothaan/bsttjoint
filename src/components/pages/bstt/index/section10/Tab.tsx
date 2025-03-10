/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { SetStateAction } from "react";

interface ITab {
  text: string;
  idx: number;
  isSelected: boolean;
  setSelectedTab: React.Dispatch<SetStateAction<number>>;
}

export default function Tab(prop: ITab) {
  const { text, idx, isSelected, setSelectedTab } = prop;
  const theme = useTheme() as CustomTheme;

  return isSelected ? (
    <p
      css={selected_text_style(theme)}
      onClick={() => {
        setSelectedTab(idx);
      }}
    >
      {text}
    </p>
  ) : (
    <p
      css={text_style(theme)}
      onClick={() => {
        setSelectedTab(idx);
      }}
    >
      {text}
    </p>
  );
}

const selected_text_style = (theme: CustomTheme) => css`
  padding: 20px;

  border-radius: 50px;
  background: ${theme.colors.point.primary};

  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.black};
  line-height: 100%;
  text-align: center;

  margin-bottom: 4px;

  cursor: pointer;

  transition: 0.3s ease-out;

  white-space: nowrap;

  @media (max-width: 1800px) {
    padding: 16px;
    font-size: 20px;
  }
  @media (max-width: 960px) {
    padding: 14px 20px;
    font-size: 16px;
  }
`;
const text_style = (theme: CustomTheme) => css`
  color: #072130);

  font-size: ${theme.fontSize.lg};
  font-weight: 600;
  line-height: 100%;;

  cursor: pointer;

  transition: 0.3s ease-out;

  white-space: nowrap;

  @media(max-width:1800px){
    font-size: 20px;
  }
  @media(max-width:960px){
    padding: 14px 20px;
    font-size: 14px;
  }
`;
