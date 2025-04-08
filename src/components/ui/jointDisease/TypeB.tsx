"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useEffect } from "react";
import ContentsContainer from "../container/ContentsContainer";
import SectionTitle from "@/components/ui/text/SectionTitle";
import SectionDesc from "@/components/ui/text/SectionDesc";
import NumberCard from "./TypeBcard";
import Icon1 from "@/assets/components/pages/bstt/index/section4/icon1.svg";
import Icon2 from "@/assets/components/pages/bstt/index/section4/icon2.svg";
import Icon3 from "@/assets/components/pages/bstt/index/section4/icon3.svg";
import Icon4 from "@/assets/components/pages/bstt/index/section4/icon4.svg";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TypeB() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  useEffect(() => {
    AOS.init();
  }, []);

  const bg1_pc = "/assets/components/pages/bstt/index/section4/bg1_pc.png";
  const bg1_mo = "/assets/components/pages/bstt/index/section4/bg1_mo.png";

  const section_title_ = "숫자로 보는 튼튼마디";
  const section_desc_ = [
    `한약에 교(膠)를 넣기 시작하여,`,
    <br key="3" className="mo" />,
    `만성통증 치료를 연구한지 20여년. `,
    <br key="1" />,
    `
    주변의 소중한 분들을 치료하다보니, 전국에`,
    <br key="2" className="mo" />,
    `12개 지점을 두게 되었습니다.`,
  ];

  const number_card_data_ = [
    {
      icon: <Icon1 />,
      number: 18,
      unit: "건",
      desc: [`관절척추질환 중점진료`, <br key="1" />, `튼튼마디의 탄생`],
    },
    {
      icon: <Icon2 />,
      number: 5000,
      unit: "명",
      desc: [`매년 전국 튼튼마디`, <br key="1" />, `비수술치료 환자수`],
    },
    {
      icon: <Icon3 />,
      number: 800000,
      unit: "건",
      desc: [`전지적 합산`, <br key="1" />, `누적 임상례`],
    },
    {
      icon: <Icon4 />,
      number: 4000000,
      unit: "첩",
      desc: [`지금까지 처방된`, <br key="1" />, `백절탕의 양`],
    },
  ];
  if (width === null) {
    return;
  }

  return (
    <ContentsContainer bgPc={bg1_pc} bgMo={bg1_mo}>
      <div css={wrap(bg1_pc, bg1_mo)} data-aos="fade-up">
        <div css={text_wrap}>
          <div css={title_desc_wrap(width)}>
            <SectionTitle
              text={section_title_}
              color={theme.colors.mono.white}
            />
            <SectionDesc text={section_desc_} color={theme.colors.mono.white} />
          </div>

          <div css={card_wrap(width)}>
            {number_card_data_.map((item, idx) => (
              <div css={card_container(theme, idx)} key={idx}>
                <NumberCard
                  icon={item.icon}
                  number={item.number}
                  unit={item.unit}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = (img1: string, img2: string) => css`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const text_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const title_desc_wrap = (width: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${width / 80}px;
  margin-bottom: ${width / 16}px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const card_wrap = (width: number) => css`
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${width / 17.7}px;

  @media (max-width: 960px) {
    display: grid;
    gap: 0;
    grid-template-columns: repeat(2, 2fr);
  }
`;
const card_container = (theme: CustomTheme, idx: number) => css`
  width: 100%;
  position: relative;
  margin-top: ${idx > 1 ? "34px" : "0"};
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  &:after {
    content: "";
    top: 50%;
    transform: translateY(-50%);
    left: -54px;
    display: ${idx > 0 ? "block" : "none"};
    z-index: 1;
    position: absolute;
    width: 1px;
    height: 45%;
    opacity: 0.4;
    background: ${theme.colors.mono.stroke};
  }

  @media (max-width: 960px) {
    width: 100%;
    min-width: 0;
    &:after {
      display: none;
    }
  }
`;
