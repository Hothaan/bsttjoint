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
        오십견,
      </span>,
      ` 단순한`,
      <br key="1" className="mo" />,
      ` 어깨 결림이 아닙니다`,
    ],
    color: theme.colors.mono.black,
    align: "center",
  };

  return <TypeA sectionTitleSimple={section_title_simple_} />;
}
