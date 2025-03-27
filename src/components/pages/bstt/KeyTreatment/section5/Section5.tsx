"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import Card from "./Card";

export default function Section5() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }
  const section_title_simple_ = {
    text: [`핵심치료`],
    color: theme.colors.mono.black,
    align: "center",
  };
  const card_data_ = [
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section5/card1_pc.png`,
      isMain: true,
      content: {
        name: `백절탕`,
        sub1: {
          title: `· 연골한약 백절탕`,
          desc: [
            `20년 가까이 발전하여 현재 3세대까지 연구개발된 튼튼마디 대표처방 SCI급 국제학술지에서 작용기전과 치료적`,
            <br key="1" />,
            `효능을 과학적으로 입증 튼튼마디에서 비수술적 치료를 가능케 하는 핵심적인 치료수단`,
          ],
        },
        sub2: {
          title: `· 주요효능`,
          list: [
            { main: `염증억제, 부종감소` },
            { main: `면역세포의 활성도조절` },
            { main: `결합조직 분해효소억제` },
            { main: `연골·인대의 구성성분증가` },
            { main: `관절척추조직의 퇴행개선` },
          ],
        },
      },
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section5/card2_pc.png`,
      isMain: false,
      content: {
        name: `녹용한약`,
        sub1: {
          title: `· 튼튼마디 녹용한약`,
          desc: [
            `생체이용률을 높여 녹용의 약효를 온전히 담아낸 보약이자 치료한약 원기강화와 면역력`,
            <br key="1" />,
            `강화에 의한 자연치유력 향상에 특화된 처방으로서 고령자와 극허약자의 치료 전단계`,
            <br key="1" />,
            `처방 또는 수술전후 보약으로 자주 사용`,
          ],
        },
        sub2: {
          title: `· 주요효능`,
          list: [
            { main: `원기회복, 면역력강화` },
            { main: `손상세포재생, 조직복구` },
            { main: `노화억제, 성장촉진` },
            { main: `근골격계강화, 상처치유` },
            { main: `신경보호, 뇌기능향상` },
          ],
        },
      },
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section5/card3_pc.png`,
      isMain: true,
      content: {
        name: `약침시술`,
        sub1: {
          title: `· 약침이란?`,
          desc: [
            `다양한 약재로부터 유효성분을 추출·정제하여 약침이라는 주사제 형태로 반복 주입하여`,
            <br key="1" />,
            `치료효과를 극대화 하는 방법 (대표종류 : 봉약침, 자하거(태반)약침, 산삼약침, 별갑약침 등)`,
          ],
        },
        sub2: {
          title: `· 주요효능`,
          list: [
            { main: `전신 면역조절작용으로 빠른 치료효과` },
            { main: `국소적인 염증반응을 효과적으로 조절` },
            { main: `손상조직의 재구축 및 회복 촉진을 유도` },
            {
              main: `봉약침, 태반약침(자하거), 산삼약침, 별갑약침 외 수십여종`,
            },
            { main: `환자의 상황과 질병상황에 따라 여러 약침을 조합하여 사용` },
            {
              main: `필요시 깊은곳에 있는 경혈을 초음파유도하에 안전하고 정확하게 시술`,
            },
          ],
        },
      },
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section5/card4_pc.png`,
      isMain: false,
      content: {
        name: `도침시술`,
        sub1: {
          title: `· 도침이란?`,
          desc: [
            `끝이 미세하게 납작한 모양의 특수침으로서 고대부터 외과적 수술에 사용된 침을`,
            <br key="1" />,
            `수술용 메스와 결합하여 현대적으로 개발한 것`,
          ],
        },
        sub2: {
          title: `· 주요효능`,
          list: [
            { main: `최소침습에 의한 한방 고유의 외과적 시술방법` },
            { main: `정체된 체액의 소통을 유도하여 염증과 통증을 완화` },
            { main: `유착과 경결을 미세하게 박리·절개 하여 병소를 직접 치료` },
            { main: `조직재생인자의 분비를 촉진하여 손상조직의 복구를 유도` },
            { main: `한약처방이나 약침요법과 병행시 치료효과 극대화` },
          ],
        },
      },
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section5/card5_pc.png`,
      isMain: false,
      content: {
        name: `추나요법`,
        sub1: {
          title: `· 체형 교정치료란?`,
          desc: [
            `추나요법, 침치료, 교정보조장치 등의 방법을 결합하여 환자의 골격의 비틀림을 교정하고`,
            <br key="1" />,
            `근긴장도의 불균형을 해소하는 치료방법`,
          ],
        },
        sub2: {
          title: `· 주요효능`,
          list: [
            { main: `체형교정 자체가 목적이 되기도 하고 통증완화에도 도움` },
            {
              main: `한방내과적 치료(내장기추나), 한방신경정신과적치료(FCST)에도 응용`,
            },
            {
              main: `한의사의 이학적검사 또는 체형진단기기에 의한 비틀림의 원인분석`,
            },
            {
              main: `주치의가 직접 시행하는 수기요법, 침치료에 의한 심부근육 지극술으로 정밀한 교정`,
            },
            {
              main: `필요 시 체형교정 보조장치를 통하여 변형이 돌아오는 것을 방지`,
            },
          ],
        },
      },
    },
    {
      img: `/assets/components/pages/bstt/KeyTreatment/section5/card6_pc.png`,
      isMain: false,
      content: {
        name: `체중감량`,
        sub1: {
          title: `· 다이어트한약`,
          desc: [
            `과체중자의 관절·척추질환 치료와 관리, 재발방지를 위해 한약을 통해 부작용과`,
            <br key="1" />,
            ,
            `요요현상을 최소화하는 체중감량방법`,
          ],
        },
        sub2: {
          title: `· 주요효능`,
          list: [
            { main: `20대부터 80대 고령자까지 가능한 체질개선 다이어트` },
            { main: `체중감량을 통히여 만성 관절척추질환 재발률을 최소화 함` },
            {
              main: `당뇨, 혈압, 고지혈증, 지방간 등 대사증후군 개선에 큰 도움`,
              caption: `(체중감량만을 위한 것이 아닌 건강한 아름다움을 위한 치료방법)`,
            },
            {
              main: `피부미인 다이어트, 내장지방 다이어트, 체질개선 다이어트, 부작용DOWN 다이어트 등`,
            },
          ],
        },
      },
    },
  ];

  return (
    <ContentsContainer>
      <div css={wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={card_wrap}>
          {card_data_.map((item, idx) => {
            const newData_ = {
              ...item,
              idx: idx,
              lastIdx: card_data_.length - 1,
            };
            return <Card {...newData_} key={idx + "section5 card"} />;
          })}
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px) {
    gap: 80px;
  }
  @media (max-width: 1400px) {
    gap: 70px;
  }
  @media (max-width: 1200px) {
    gap: 60px;
  }
  @media (max-width: 960px) {
    align-items: start;
    gap: 50px;
  }
`;

const card_wrap = css``;
