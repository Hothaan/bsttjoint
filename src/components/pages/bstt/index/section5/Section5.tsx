/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import HoverCard from "./HoverCard";

export default function Section5() {
  const theme = useTheme() as CustomTheme;

  const sectionTitleDesc_ = {
    title: `story`,
    desc: [`튼튼마디한의원은 어떤 곳일까요?`],
  };

  const hover_card_data_ = [
    {
      width: "15%",
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
      hoverText: { title: [``], desc: [``] },
    },
  ];

  return (
    <div css={wrap}>
      <SectionTitleDesc
        color="black"
        title={sectionTitleDesc_.title}
        desc={sectionTitleDesc_.desc}
      />
      {hover_card_data_.map((item, idx) => (
        <HoverCard
          key={idx}
          width={item.width}
          img={item.img}
          defaultText={item.defaultText}
          hoverText={item.hoverText}
        />
      ))}
    </div>
  );
}

const wrap = css`
  width: 100%;
  padding: 180px 86px;
  margin: 0 auto;

  position: relative;
`;
