/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import HoverCard from "./HoverCard";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

export default function Section5() {
  const theme = useTheme() as CustomTheme;
  const [hoverdIndex1, sethoverdIndex1] = useState<number | null>(null);
  const [hoverdIndex2, sethoverdIndex2] = useState<number | null>(null);
  const { width } = useWindowSizeContext();

  const baseWidths1 = [25, 45, 30];
  const baseWidths2 = [35, 35, 30];
  const getHoverWidth = (width: number) => (width > 30 ? 1.05 : 1.4);

  const getWidths1 = () => {
    if (hoverdIndex1 === null) return baseWidths1;

    const hoverWidth = getHoverWidth(baseWidths1[hoverdIndex1]);

    const newWidths = baseWidths1.map((width, idx) => {
      if (idx === hoverdIndex1) {
        return width * hoverWidth;
      }
      const remainingTotal = 100 - baseWidths1[hoverdIndex1] * hoverWidth;
      const remainingCards = baseWidths1.length - 1;
      return remainingTotal / remainingCards;
    });

    return newWidths;
  };

  const getWidths2 = () => {
    if (hoverdIndex2 === null) return baseWidths2;

    const hoverWidth = getHoverWidth(baseWidths2[hoverdIndex2]);

    const newWidths = baseWidths2.map((width, idx) => {
      if (idx === hoverdIndex2) {
        return width * hoverWidth;
      }
      const remainingTotal = 100 - baseWidths2[hoverdIndex2] * hoverWidth;
      const remainingCards = baseWidths2.length - 1;
      return remainingTotal / remainingCards;
    });

    return newWidths;
  };

  const widths1 = getWidths1();
  const widths2 = getWidths2();

  const sectionTitleDesc_ = {
    title: `story`,
    desc: [`튼튼마디한의원은`, <br key="1" className="mo" />, `어떤 곳일까요?`],
  };

  const hover_card_data1_ = [
    {
      img: "/assets/components/pages/bstt/index/section5/bg1.png",
      defaultText: [
        `전국 12개 지점,`,
        <br key="1" />,
        <span key="2" className="highlight">
          연구중심 네트워크
        </span>,
        <br key="3" />,
        `한의원`,
      ],
      hoverText: {
        title: [`전국 12개 지점`, <br key="4" />, `연구중심 네트워크 한의원`],
        desc: [
          `전국의 의료진들이 치료 노하우를 공유하고`,
          <br key="5" />,
          `임상경험을 토대로 함께 연구합니다.`,
        ],
      },
    },
    {
      img: "/assets/components/pages/bstt/index/section5/bg2.png",
      defaultText: [
        `비수술 관절척추질환`,
        <br key="1" />,
        <span key="2" className="highlight">
          중점진료 의료기관
        </span>,
      ],
      hoverText: {
        title: [`비수술 관절척추질환`, <br key="4" />, `중점진료 의료기관`],
        desc: [
          `비수술 치료에서 체계적이고 재현가능한`,
          <br key="5" />,
          `시스템으로 진료의 전문성을 추구합니다.`,
        ],
      },
    },
    {
      img: "/assets/components/pages/bstt/index/section5/bg3.png",
      defaultText: [
        `20년 연구의 결실,`,
        <br key="1" />,
        `3세대 `,
        <span key="2" className="highlight">
          연골한약
        </span>,
        <br key="3" className="mo" />,
        <span key="4" className="highlight">
          백절탕
        </span>,
      ],
      hoverText: {
        title: [`30년 연구의 결실,`, <br key="4" />, `3세대 연골한약 백절탕`],
        desc: [
          `튼튼마디의 자부심 백절탕이, 더 높은`,
          <br key="5" />,
          `치료율로 또 한번의 혁신을 이루었습니다.`,
        ],
      },
    },
  ];
  const hover_card_data2_ = [
    {
      img: "/assets/components/pages/bstt/index/section5/bg4.png",
      defaultText: [
        `체계적인 5-way`,
        <br key="1" />,
        <span key="2" className="highlight">
          집중치료관리
        </span>,
        <br key="1" className="mo" />,
        `프로그램`,
      ],
      hoverText: {
        title: [`체계적인 5-way`, `집중치료관리`, , `프로그램`],
        desc: [
          `회복에 큰 영향을 끼치는 복약, 내원, 운동, 식이,`,
          <br key="1" />,
          `수면을 체계적으로 관리하여 호전도를 극대화합니다.`,
        ],
      },
    },
    {
      img: "/assets/components/pages/bstt/index/section5/bg5.png",
      defaultText: [
        `관절척추 평생관리,`,
        <br key="1" />,
        <span key="2" className="highlight">
          튼튼백세 솔루션
        </span>,
      ],
      hoverText: {
        title: [`관절척추 평생관리, 튼튼백세 솔루션`],
        desc: [
          `일시적인 통증완화가 아닌 건강수명 연장을 위해`,
          <br key="5" />,
          `지속가능한 방식으로 질병회복을 유도합니다.`,
        ],
      },
    },
    {
      img: "/assets/components/pages/bstt/index/section5/bg6.png",
      defaultText: [
        `온가족`,
        <span key="3" className="highlight">
          평생
        </span>,
        <br key="1" />,
        <span key="2" className="highlight">
          주치의 제도,
        </span>,
      ],
      hoverText: {
        title: [`온가족 평생주치의 제도`],
        desc: [
          `가족 중 누가 아프더라도 언제나 찾고 의지할 수 있는`,
          <br key="5" />,
          `일차병원으로서의 역할을 다 하겠습니다.`,
        ],
      },
    },
  ];

  return (
    <div css={wrap}>
      <SectionTitleDesc
        titleColor={theme.colors.point.primary}
        descColor={theme.colors.mono.black}
        title={sectionTitleDesc_.title}
        desc={sectionTitleDesc_.desc}
      />
      {width > 960 ? (
        <div css={card_wrap}>
          <div css={card_inner_wrap}>
            {hover_card_data1_.map((item, idx) => (
              <HoverCard
                key={idx}
                width={widths1[idx]}
                img={item.img}
                idx={idx}
                defaultText={item.defaultText}
                hoverText={item.hoverText}
                onHover={() => sethoverdIndex1(idx)}
                onLeave={() => sethoverdIndex1(null)}
              />
            ))}
          </div>
          <div css={card_inner_wrap}>
            {hover_card_data2_.map((item, idx) => (
              <HoverCard
                key={idx}
                width={widths2[idx]}
                img={item.img}
                idx={idx}
                defaultText={item.defaultText}
                hoverText={item.hoverText}
                onHover={() => sethoverdIndex2(idx)}
                onLeave={() => sethoverdIndex2(null)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div css={card_wrap}>
          <div css={card_inner_wrap}>
            {[...hover_card_data1_, ...hover_card_data2_].map((item, idx) => (
              <HoverCard
                key={idx}
                width={width > 374 ? 50 : 100}
                img={item.img}
                idx={idx}
                defaultText={item.defaultText}
                hoverText={item.hoverText}
                onHover={() => sethoverdIndex1(idx)}
                onLeave={() => sethoverdIndex1(null)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px 86px;
  margin: 0 auto;

  position: relative;

  @media (max-width: 960px) {
    padding: 100px 20px;
  }
`;

const card_wrap = css`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 960px) {
    margin-top: 34px;
    gap: 12px;
  }
`;

const card_inner_wrap = css`
  width: calc(100% + 12px);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 960px) {
    gap: 12px;
  }
`;
