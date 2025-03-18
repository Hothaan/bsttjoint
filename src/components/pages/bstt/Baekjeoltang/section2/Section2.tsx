/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import PageTitleContent from "@/components/ui/text/PageTitleContent";
import { renderWidthKeys } from "@/hooks/renderWidthKey";
import Plus from "@/assets/components/pages/bstt/Baekjeoltang/section2/plus.svg";
import ArrowRightSmall from "@/assets/components/pages/bstt/Baekjeoltang/section2/arrow_right_small.svg";
import ArrowRightBig from "@/assets/components/pages/bstt/Baekjeoltang/section2/arrow_right_big.svg";

export default function Section2() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const bgPc__ = `/assets/components/pages/bstt/Baekjeoltang/section2/bg1_pc.png`;
  const bgMo_ = `/assets/components/pages/bstt/Baekjeoltang/section2/bg1_mo.png`;

  const section_title_simple_ = {
    text: [`연골한약이란?`],
    color: theme.colors.mono.white,
    align: "center",
  };
  const page_title_content_ = {
    text: [
      `녹각교와 약용 아교 등 동물성 한약재를 장시간`,
      <br key="1" className="mo" />,
      `고아서 고급 교질을 고농도로 추출한 후`,
      <br key="1" />,
      <span className="bold" key="1">
        관절척추 결합조직세포의 기질과 유사한 성분의
      </span>,
      <br key="1" className="mo" />,
      <span className="bold" key="1">
        “동물성 교제”를 만듭니다.
      </span>,
    ],
    color: theme.colors.mono.white,
    align: "center",
  };
  const circle_data_ = [
    {
      width: `calc((100% - 20px - 34px) / 2)`,
      bg: `rgba(1,140,59,.7)`,
      text: [`동물성`, <br key="1" />, `교제`],
    },
    {
      width: `calc((100% - 20px - 34px) / 2)`,
      bg: `rgba(35,71,43,.7)`,
      text: [`여러가지`, <br key="1" />, `우수한 처방`],
    },
    {
      width: `31%`,
      bg: `rgba(0,112,47,1)`,
      text: [
        `최적화 비율로`,
        <br key="1" />,
        `배합하여`,
        <br key="1" />,
        `연구개발`,
      ],
    },
    {
      width: `23.5%`,
      bg: theme.colors.point.primary,
      text: [`튼튼마디`, <br key="1" />, `연골한약`],
    },
  ];

  return (
    <ContentsContainer bgPc={bgPc__} bgMo={bgMo_}>
      <div css={wrap}>
        <div css={title_wrap}>
          <SectionTitleSimple {...section_title_simple_} />
          <PageTitleContent {...page_title_content_} />
        </div>
        <div css={circle_wrap}>
          <div css={circle_outer_wrap}>
            <div css={circle_inner_wrap}>
              <div
                css={[
                  circle_width_small,
                  circle(circle_data_[0].width, circle_data_[0].bg),
                  circle_text_small,
                ]}
              >
                {renderWidthKeys(circle_data_[0].text)}
              </div>
              <div css={plus_icon_container}>
                <Plus />
              </div>
              <div
                css={[
                  circle_width_small,
                  circle(circle_data_[1].width, circle_data_[1].bg),
                  circle_text_small,
                ]}
              >
                {renderWidthKeys(circle_data_[1].text)}
              </div>
            </div>
            <div css={arrow_right_small_icon_container}>
              <ArrowRightSmall />
            </div>
            <div
              css={[
                circle_width_mid,
                circle(circle_data_[2].width, circle_data_[2].bg),
                circle_text_small,
              ]}
            >
              {renderWidthKeys(circle_data_[2].text)}
            </div>
          </div>
          <div css={arrow_right_big_icon_container}>
            <ArrowRightBig />
          </div>
          <div
            css={[
              circle_width_big,
              circle(circle_data_[3].width, circle_data_[3].bg),
              circle_text_big,
            ]}
          >
            {renderWidthKeys(circle_data_[3].text)}
          </div>
        </div>
      </div>
    </ContentsContainer>
  );
}
const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  @media (max-width: 960px) {
    gap: 60px;
  }
  @media (max-width: 480px) {
    gap: 34px;
  }
`;

const title_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 960px) {
    .page_title_content {
      line-height: 2em;
    }
    gap: 20px;
  }
`;

const circle_wrap = css`
  width: 86%;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1600px) {
    width: 95%;
  }
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (max-width: 680px) {
    gap: 0;
  }
`;

const circle = (width: string, bg: string) => css`
  height: auto;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  background-color: ${bg};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;

const circle_width_small = css`
  width: 42.5%;

  @media (max-width: 960px) {
    width: 45%;
  }
  @media (max-width: 374px) {
    width: 60%;
  }
`;
const circle_width_mid = css`
  width: 28%;
  @media (max-width: 960px) {
    width: 50%;
  }
  @media (max-width: 680px) {
    width: 60%;
  }
`;
const circle_width_big = css`
  width: 23.5%;
  @media (max-width: 960px) {
    width: 50%;
  }
  @media (max-width: 680px) {
    width: 60%;
  }
`;

const circle_outer_wrap = css`
  width: 100%;

  display: flex;
  padding: 34px 30px;
  align-items: center;
  gap: 10px;

  border-radius: 300px;
  background: rgba(236, 255, 244, 0.1);

  @media (max-width: 1600px) {
    padding: 20px;
  }
  @media (max-width: 1400px) {
    padding: 14px;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 20px;
    border-radius: 30px;
  }
  @media (max-width: 680px) {
    gap: 8px;
  }
`;
const circle_inner_wrap = css`
  width: 100%;

  display: flex;
  padding: 20px 18px;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 200px;
  background: rgba(236, 255, 244, 0.2);

  @media (max-width: 1600px) {
    padding: 14px;
  }
  @media (max-width: 1400px) {
    padding: 12px;
  }
  @media (max-width: 960px) {
    padding: 20px 18px;
    border-radius: 180px;
  }
  @media (max-width: 680px) {
    gap: 0;
  }
  @media (max-width: 374px) {
    flex-direction: column;
    border-radius: 15px;
    gap: 10px;
  }
`;

const plus_icon_container = css`
  width: 34px;
  height: 34px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1400px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 960px) {
    width: 34px;
    height: 34px;
  }
  @media (max-width: 680px) {
    width: 24px;
    height: 24px;
  }
`;
const arrow_right_small_icon_container = css`
  width: 44px;
  height: 44px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1400px) {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 960px) {
    width: 44px;
    height: 44px;

    transform: rotate(90deg);
  }
`;
const arrow_right_big_icon_container = css`
  width: 74px;
  height: 74px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1800px) {
    width: 64px;
    height: 64px;
  }
  @media (max-width: 1600px) {
    width: 54px;
    height: 54px;
  }
  @media (max-width: 1400px) {
    width: 44px;
    height: 44px;
  }

  @media (max-width: 960px) {
    width: 74px;
    height: 74px;

    transform: rotate(90deg);
  }
  @media (max-width: 680px) {
    padding: 10px;
  }
  @media (max-width: 480px) {
    padding: 14px;
  }
`;
const circle_text_big = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 32px;
  }
  @media (max-width: 1600px) {
    font-size: 30px;
  }
  @media (max-width: 1400px) {
    font-size: 28px;
  }
  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 960px) {
    font-size: 34px;
  }
  @media (max-width: 680px) {
    font-size: 24px;
  }
  @media (max-width: 374px) {
    font-size: 20px;
  }
`;

const circle_text_small = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 1800px) {
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 24px;
  }
  @media (max-width: 680px) {
    font-size: 17px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
