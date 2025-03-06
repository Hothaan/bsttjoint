/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import ImageContainer from "@/components/ui/container/ImageContainer";
import Chat from "@/components/ui/chat/Chat";

export default function Section6() {
  const theme = useTheme() as CustomTheme;

  const bg1 = "/assets/components/pages/bstt/index/section6/bg1.png";
  const profile1 = "/assets/components/pages/bstt/index/section6/profile1.png";
  const profile2 = "/assets/components/pages/bstt/index/section6/profile2.png";
  const profile3 = "/assets/components/pages/bstt/index/section6/profile3.png";

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
    },
  ];

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
          />
        ))}
      </div>
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
  right: 288px;
`;
