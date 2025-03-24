"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import FloatingButtonsContainer from "@/components/ui/float/FloatingButtonsContainer";

export default function FloatingButtons() {
  return <FloatingButtonsContainer branch={`bstt`} page={`main`} />;
}
