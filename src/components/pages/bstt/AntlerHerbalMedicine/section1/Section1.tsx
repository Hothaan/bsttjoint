/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeA from "@/components/ui/treatment/TypeA";

export default function Section1() {
  const theme = useTheme() as CustomTheme;

  const section_title_simple_ = {
    text: [
      <span key="1" className="green">
        녹용한약,
      </span>,
      <br key="1" className="mo" />,
      ` 단순한 보양제가 아닙니다`,
    ],
    color: theme.colors.mono.black,
    align: "center",
  };

  return <TypeA sectionTitleSimple={section_title_simple_} />;
}
