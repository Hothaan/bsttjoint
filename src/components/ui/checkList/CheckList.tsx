/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Check from "@/assets/components/ui/checklist/check.svg";

interface ICheckList {
  color: "white" | "black";
  checkListData: string[];
}
export default function CheckList(prop: ICheckList) {
  const { checkListData, color } = prop;

  const theme = useTheme() as CustomTheme;

  return (
    <ul css={wrap}>
      {checkListData.map((item) => (
        <li key={item} css={list_item}>
          <Check />
          <p css={item_text(theme, color)}>{item}</p>
        </li>
      ))}
    </ul>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
`;

const list_item = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const item_text = (theme: CustomTheme, color: "white" | "black") => css`
  color: ${color === "white"
    ? theme.colors.mono.white
    : theme.colors.mono.text};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: -0.04em;
`;
