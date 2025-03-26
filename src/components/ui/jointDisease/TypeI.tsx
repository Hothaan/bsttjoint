"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import Star from "@/assets/components/pages/bstt/index/section9/star.svg";
import Left from "@/assets/components/pages/bstt/index/section9/left.svg";
import Right from "@/assets/components/pages/bstt/index/section9/right.svg";
import AcademicJournalCard from "./TypeIcard";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import { renderWidthKeys } from "@/hooks/renderWidthKey";

export default function TypeI() {
  const theme = useTheme() as CustomTheme;
  const { width } = useWindowSizeContext();
  const bg1 = "/assets/components/pages/bstt/index/section9/bg1.png";
  const title_ = [
    `튼튼마디 백절탕 연구논문`,
    <br key="1" className="mo" />,
    `SCI급 국제학술지 등재`,
  ];
  const desc_ = [
    `경희대 연구팀과의 공동연구로 연골한약`,
    <br key="1" className="mo" />,
    ,
    `백절탕의 작용기전과`,
    <br key="1" className="pc" />,
    `치료적 효능이`,
    <br key="1" className="mo" />,
    ,
    `여러 국제논문에서 입증되었습니다.`,
  ];
  const journal1 = "/assets/components/pages/bstt/index/section9/journal1.png";
  const journal2 = "/assets/components/pages/bstt/index/section9/journal2.png";
  const journal3 = "/assets/components/pages/bstt/index/section9/journal3.png";
  const academic_journal_card_data = [
    {
      img: journal1,
      isScie: true,
      title: [`Arthritis Research`, <br key="1" />, `& Therapy `],
      desc: [`(영국의`, <br key="1" className="mo" />, `관절전문학술지)`],
    },
    {
      img: journal2,
      isScie: true,
      title: [`Phytotherapy`, <br key="1" className="mo" />, `Research`],
      desc: [`(천역약물학전문 학술지)`],
    },
    {
      img: journal3,
      isScie: false,
      title: [`TANG`],
      desc: [
        `(류마티스관절염`,
        <br key="1" className="mo" />,
        `대체의학전문 학술지)`,
      ],
    },
  ];
  return (
    <div css={wrap(bg1)}>
      <div css={title_wrap}>
        <div css={star_wrap(width)}>
          <Star />
        </div>
        <SectionTitleSimple text={title_} color={"white"} align="center" />
        <p css={desc_text(theme)}>{renderWidthKeys(desc_)}</p>
        <div css={left_wrap(width)}>
          <Left />
        </div>
        <div css={right_wrap(width)}>
          <Right />
        </div>
      </div>
      {width > 960 && (
        <div css={card_wrap}>
          {academic_journal_card_data.map((item, idx) => (
            <AcademicJournalCard
              key={idx + "TypeI card item"}
              img={item.img}
              isScie={item.isScie}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      )}
      {width < 960 && (
        <div css={card_wrap_mo}>
          {
            <AcademicJournalCard
              img={academic_journal_card_data[0].img}
              isScie={academic_journal_card_data[0].isScie}
              title={academic_journal_card_data[0].title}
              desc={academic_journal_card_data[0].desc}
            />
          }
          <div css={card_wrap}>
            {academic_journal_card_data.slice(1, 3).map((item, idx) => (
              <AcademicJournalCard
                key={idx + "TypeI card item"}
                img={item.img}
                isScie={item.isScie}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const wrap = (img: string) => css`
  width: 100%;
  padding: 154px 0 180px;

  display: flex;
  flex-direction: column;
  gap: 106px;

  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    gap: 80px;
  }
  @media (max-width: 960px) {
    gap: 30px;
  }
`;

const title_wrap = css`
  width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 27px;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 960px) {
    gap: 20px;
  }
`;

const star_wrap = (width: number) => css`
  width: 183px;
  height: 35px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    width: 125px;
    height: 25px;
  }
`;
const left_wrap = (width: number) => css`
  position: absolute;
  right: 100%;
  top: 27px;
  transform: translateX(-20px);

  width: ${width / 15.3 < 88 ? 88 : width / 15.3}px;
  height: ${width / 11.2 < 108 ? 108 : width / 11.2}px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    width: 68px;
    height: 88px;

    top: 48px;
    transform: translateX(0px);
  }
  @media (max-width: 600px) {
    transform: translateX(20px);
  }
  @media (max-width: 370px) {
    display: none;
  }
`;
const right_wrap = (width: number) => css`
  position: absolute;
  left: 100%;
  top: 27px;
  transform: translateX(20px);

  width: ${width / 15.3 < 88 ? 88 : width / 15.3}px;
  height: ${width / 11.2 < 108 ? 108 : width / 11.2}px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    width: 68px;
    height: 88px;

    top: 48px;
    transform: translateX(0px);
  }
  @media (max-width: 600px) {
    transform: translateX(-20px);
  }
  @media (max-width: 370px) {
    display: none;
  }
`;

const desc_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-weight: ${theme.fontWeight.semiBold};
  line-height: 140%;
  font-size: ${theme.fontSize.ml};
  text-align: center;

  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 370px) {
    font-size: 16px;
  }
`;

const card_wrap = css`
  margin: 0 auto;
  display: flex;
  gap: 120px;
  align-items: start;
  justify-content: center;

  @media (max-width: 1600px) {
    gap: 100px;
  }
  @media (max-width: 1400px) {
    gap: 80px;
  }
  @media (max-width: 1200px) {
    gap: 60px;
  }
  @media (max-width: 1000px) {
    gap: 40px;
  }
  @media (max-width: 960px) {
    gap: 20px;
  }
`;
const card_wrap_mo = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;
