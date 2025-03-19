import TypeE from "@/components/ui/treatment/TypeE";
import Card1 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section5/card1.svg";
import Card2 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section5/card2.svg";
import Card3 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section5/card3.svg";
import Card4 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section5/card4.svg";
import Card5 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section5/card5.svg";
import Card6 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section5/card6.svg";

export default function Section5() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AntlerHerbalMedicine/section5/bg1_pc.png`,
    bgMo: `/assets/components/pages/bstt/AntlerHerbalMedicine/section5/bg1_mo.png`,
    sectionTitleSimple: {
      text: [`녹용한약이 필요한 사람`],
      color: `#fff`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`체력 회복이 필요한 모든 분들에게 녹용한약이 필요합니다.`],
      color: `#fff`,
      align: `center`,
    },
    cardData: [
      {
        img: <Card1 />,
        title: [`기력이 약하고`, <br key="1" />, `쉽게 피곤한 사람`],
      },
      {
        img: <Card2 />,
        title: [`수술 후 회복이`, <br key="1" />, `더딘 사람`],
      },
      {
        img: <Card3 />,
        title: [`환절기마다 감기에`, <br key="1" />, `자주 걸리는 사람`],
      },
      {
        img: <Card4 />,
        title: [`관절 건강이 걱정되거나`, <br key="1" />, `뼈가 약한 사람`],
      },
      {
        img: <Card5 />,
        title: [`학습 능력 및 집중력이`, <br key="1" />, `하된 학생 및 직장인`],
      },
      {
        img: <Card6 />,
        title: [
          `갱년기 이후 활력 저하를`,
          <br key="1" />,
          `느끼는 중년 및 노년층`,
        ],
      },
    ],
  };
  return <TypeE {...data_} />;
}
