"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeA from "@/components/ui/treatment/TypeA";

export default function Section1() {
  const theme = useTheme() as CustomTheme;

  const section_title_simple_ = {
    text: [
      <span key="1" className="green">
        연골·인대 파열,
      </span>,
      <br key="1" className="mo" />,
      ` 치료 시기를 놓치지 마세요`,
    ],
    color: theme.colors.mono.black,
    align: "center",
  };

  return <TypeA sectionTitleSimple={section_title_simple_} />;
}
