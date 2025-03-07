/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import Star from "@/assets/components/pages/bstt/index/section9/star.svg";
import Left from "@/assets/components/pages/bstt/index/section9/left.svg";
import Right from "@/assets/components/pages/bstt/index/section9/right.svg";
import AcademicJournalCard from "./AcademicJournalCard";
export default function Section9() {
  const theme = useTheme() as CustomTheme;
  const bg1 = "/assets/components/pages/bstt/index/section9/bg1.png";
  const title_ = "튼튼마디 백절탕 연구논문 SCI급 국제학술지 등재";
  const desc_ = [
    `경희대 연구팀과의 공동연구로 연골한약 백절탕의 작용기전과`,
    <br key="1" />,
    `치료적 효능이 여러 국제논문에서 입증되었습니다.`,
  ];
  const journal1 = "/assets/components/pages/bstt/index/section9/journal1.png";
  const journal2 = "/assets/components/pages/bstt/index/section9/journal2.png";
  const journal3 = "/assets/components/pages/bstt/index/section9/journal3.png";
  const academic_journal_card_data = [
    {
      img: journal1,
      isScie: true,
      title: [`Arthritis Research`, <br key="1" />, `& Therapy `],
      desc: `(영국의 관절전문학술지)`,
    },
    {
      img: journal2,
      isScie: true,
      title: [`Phytotherapy`, <br key="1" />, `Research`],
      desc: `(천역약물학전문 학술지)`,
    },
    {
      img: journal3,
      isScie: false,
      title: [`TANG`],
      desc: `(류마티스관절염 대체의학전문 학술지)`,
    },
  ];
  return (
    <div css={wrap(bg1)}>
      <div css={title_wrap}>
        <Star />
        <SectionTitleSimple text={title_} color={"white"} />
        <p css={desc_text(theme)}>{desc_}</p>
        <div css={left_wrap}>
          <Left />
        </div>
        <div css={right_wrap}>
          <Right />
        </div>
      </div>
      <div css={card_wrap}>
        {academic_journal_card_data.map((item, idx) => (
          <AcademicJournalCard
            key={idx}
            img={item.img}
            isScie={item.isScie}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
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
`;

const left_wrap = css`
  position: absolute;
  right: 100%;
  top: 27px;
  transform: translateX(-20px);
`;
const right_wrap = css`
  position: absolute;
  left: 100%;
  top: 27px;
  transform: translateX(20px);
`;

const desc_text = (theme: CustomTheme) => css`
  color: ${theme.colors.mono.white};
  font-weight: ${theme.fontWeight.semiBold};
  line-height: 140%;
  font-size: ${theme.fontSize.ml};
  text-align: center;
`;

const card_wrap = css`
  margin: 0 auto;
  display: flex;
  gap: 120px;
  align-items: start;
`;
