/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import ImageContainer from "@/components/ui/container/ImageContainer";
import Chat from "@/components/ui/chat/Chat";
import ChartCard from "./ChartCard";
import ArrowRight from "@/assets/components/pages/bstt/index/section6/arrowRight.svg";

export default function Section6() {
  const theme = useTheme() as CustomTheme;

  const bg1 = "/assets/components/pages/bstt/index/section6/bg1.png";
  const profile1 = "/assets/components/pages/bstt/index/section6/profile1.png";
  const profile2 = "/assets/components/pages/bstt/index/section6/profile2.png";
  const profile3 = "/assets/components/pages/bstt/index/section6/profile3.png";
  const chart1 = "/assets/components/pages/bstt/index/section6/chart1.png";
  const chart2 = "/assets/components/pages/bstt/index/section6/chart2.png";
  const chart3 = "/assets/components/pages/bstt/index/section6/chart3.png";

  const sectionTitleDesc_ = {
    title: `story`,
    desc: [
      `정말로 수술하지 않고`,
      <br key="1" />,
      <span key="2" className="highlight">
        치료가 가능
      </span>,
      ` 할까요?`,
    ],
  };

  const chat_data_ = [
    {
      img: profile1,
      who: "50대 관절염 환자",
      alphabet: "A",
      chat: [
        <span key="1" className="bold">
          다시 걸을 수 있다는게
        </span>,
        `얼마나 감사한 일인지 몰라요`,
      ],
      top: 0,
      right: 248,
    },
    {
      img: profile2,
      who: "60대 척추측만증 환자",
      alphabet: "B",
      chat: [
        `이제는 여행같은거 못갈줄 알았는데 `,
        <span key="2" className="bold">
          꿈만 같아요
        </span>,
      ],
      top: 140,
      right: 0,
    },
    {
      img: profile3,
      who: "70대 골다공증 환자",
      alphabet: "C",
      chat: [
        `자신감이 생기죠 일단.. `,
        <span key="3" className="bold">
          어디를 가더라도 아픈게 없으니까
        </span>,
      ],
      top: 339,
      right: 192,
    },
  ];

  const chart_data_ = [
    {
      img: chart1,
      title: "높은 호전도",
      desc: [`백절탕 3개월이상 치료환자 1498명`, <br key="1" />, `호전도 조사`],
    },
    {
      img: chart2,
      title: "높은 만족도",
      desc: [`네이버 플레이스 평가기준`, <br key="2" />, `치료만족도 조사`],
    },
    {
      img: chart3,
      title: "높은 소개율",
      desc: [`튼튼마디에 소개로`, <br key="3" />, `내원하는 환자비율 조사`],
    },
  ];

  const view_more_ = "로그인 후 치료후기 자세히보기";

  return (
    <div css={wrap}>
      <div css={section_title_desc_wrap}>
        <SectionTitleDesc
          color="white"
          title={sectionTitleDesc_.title}
          desc={sectionTitleDesc_.desc}
        />
      </div>
      <ImageContainer maxWidth="100%">
        <img src={bg1} alt="bg1" />
      </ImageContainer>
      <div css={chat_wrap}>
        {chat_data_.map((item, idx) => (
          <Chat
            key={idx}
            img={item.img}
            who={item.who}
            alphabet={item.alphabet}
            chat={item.chat}
            top={item.top}
            right={item.right}
          />
        ))}
      </div>
      <div css={chart_wrap}>
        {chart_data_.map((item, idx) => (
          <ChartCard
            key={idx}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <p css={view_more_text(theme)}>
        {view_more_}
        <ArrowRight />
      </p>
    </div>
  );
}

const wrap = css`
  width: 100%;
  position: relative;
`;

const section_title_desc_wrap = css`
  position: absolute;
  top: 180px;
  left: 192px;
`;

const chat_wrap = css`
  position: absolute;
  top: 230px;
  right: 166px;
  width: 100%;
`;

const chart_wrap = css`
  position: absolute;
  top: 960px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 82px;
`;

const view_more_text = (theme: CustomTheme) => css`
  position: absolute;
  bottom: 227px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  padding: 0px 0px 14px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${theme.colors.mono.white};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semiBold};
`;
