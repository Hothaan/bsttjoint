"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import TypeA from "@/components/ui/treatment/TypeA";
import TypeC from "@/components/ui/spinalDisease/TypeC";

export default function Section1() {
  const theme = useTheme() as CustomTheme;

  const section_title_simple_ = {
    text: [
      <span key="1" className="green">
        허리디스크,
      </span>,
      <br key="1" className="mo" />,
      ` 방치하면 보행 장애까지 `,
      <br key="1" className="mo" />,
      `이어질 수 있습니다`,
    ],
    color: theme.colors.mono.black,
    align: "center",
  };

  const data_ = {
    sectionTitleDesc: {
      titleColor: `#018C3B`,
      descColor: `#131313`,
      title: [`Why problem`],
      desc: [
        `목디스크, 단순한 뻐근함이`,
        <br key="1" />,
        `
아닙니다`,
      ],
    },
    desc: [
      `목디스크, `,
      <span key="1" className="bold">
        통증이 아니라 신경 문제
      </span>,
      `입니다`,
    ],
    checkList: [
      `아침에 일어나면 목이 뻣뻣하고 움직이기 힘들다.`,
      `어깨부터 팔까지 저릿한 통증이 지속된다.`,
      `손가락이 저리거나 감각이 둔해지는 느낌이 든다.`,
      `오래 앉아 있으면 목이 무겁고 두통이 자주 발생한다.`,
      `팔에 힘이 빠지고, 손에 힘이 잘 안 들어간다.`,
    ],
    captionList: [
      ` 이 중 하나라도 해당된다면, 목디스크(경추 추간판 탈출증)를 의심해야 합니다.`,
      `방치하면 신경 손상이 진행되어 손과 팔의 기능 저하로 이어질 수 있습니다.`,
    ],
    backText: `FOR YOUR HEALTHY JOINTS FOR YOUR HEALTHY JOINTS`,
    imgPc: ``,
    imgMo: ``,
  };

  return <TypeA sectionTitleSimple={section_title_simple_} />;
}
