"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ArrowRight from "@/assets/components/ui/link/viewMore/arrowRight.svg";
import Link from "next/link";

interface IViewMore {
  link: string;
}
export default function ViewMore(prop: IViewMore) {
  const { link } = prop;
  const theme = useTheme() as CustomTheme;
  return (
    <Link href={link} css={wrap}>
      <p css={view_more_text(theme)}>VIEW MORE</p>
      <ArrowRight />
    </Link>
  );
}

const wrap = css`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const view_more_text = (theme: CustomTheme) => css`
  color: var(--565E6D, #3b4455);
  text-align: center;
  font-family: Jost;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
