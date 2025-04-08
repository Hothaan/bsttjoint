"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeC from "@/components/ui/jointDisease/TypeC";
import PageTitleContent from "@/components/ui/text/PageTitleContent";

export default function Section20() {
  const theme = useTheme() as CustomTheme;
  const sectionTitleSimple = {
    color: theme.colors.mono.black,
    text: [
      <span key="1" className="green">
        퇴행성 관절염
      </span>,
      ` 비수술 치료 과정`,
    ],
    align: "center",
  };
  const pageTitleContent = {
    color: "#666",
    text: [`관절을 보호하고, 기능을 유지하는 것이 치료의 핵심입니다.`],
    align: "center",
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/DegenerativeArthritis/section20/card1_pc.png`,
      title: `정확한 진단`,
      caption: [`(X-ray 및 관절 기능 검사)`],
    },
    {
      img: `/assets/components/pages/bstt/DegenerativeArthritis/section20/card2_pc.png`,
      title: `염증 완화`,
      caption: [`(약침, 도침 치료)`],
    },
    {
      img: `/assets/components/pages/bstt/DegenerativeArthritis/section20/card3_pc.png`,
      title: `연골 보호 및 재생 촉진`,
      caption: [`(한약 치료 및 경혈 자극)`],
    },
    {
      img: `/assets/components/pages/bstt/DegenerativeArthritis/section20/card4_pc.png`,
      title: `관절 기능 회복`,
      caption: [`(추나요법 및 재활 치료)`],
    },
    {
      img: `/assets/components/pages/bstt/DegenerativeArthritis/section20/card5_pc.png`,
      title: `생활 습관 개선`,
      caption: [`(운동 요법 및 체중 관리)`],
    },
  ];

  const data_ = {
    sectionTitleSimple: sectionTitleSimple,
    pageTitleContent: pageTitleContent,
    bg: `#fff`,
    cardData: card_data_,
    titleCenterUnder960: true,
  };
  return <TypeC {...data_} />;
}
