"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeA from "@/components/ui/jointDisease/TypeA";

export default function Section1() {
  const theme = useTheme() as CustomTheme;

  return <TypeA />;
}
