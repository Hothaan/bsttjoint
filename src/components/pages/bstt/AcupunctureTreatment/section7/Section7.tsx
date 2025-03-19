import TypeG from "@/components/ui/treatment/TypeG";
import Card1 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card1.svg";
import Card2 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card2.svg";
import Card3 from "@/assets/components/pages/bstt/AntlerHerbalMedicine/section7/card3.svg";
import TypeM from "@/components/ui/treatment/TypeM";
export default function Section7() {
  const data_ = {
    bgPc: `/assets/components/pages/bstt/AcupunctureTreatment/section7/bg1_pc.png`,
    sectionTitleSimple: {
      text: [
        <span key="1" className="green">
          약침요법
        </span>,
        `이 특별한 이유`,
      ],
      color: `#3C3C3C`,
      align: `center`,
    },
    pageTitleContent: {
      text: [`비수술 치료로 근본적인 문제 해결이 가능합니다.`],
      color: `#666666`,
      align: `center`,
    },
    cardData: [
      {
        imgPc: ``,
        imgMo: ``,
        title: `면역력 및 체력 회복`,
        content: [
          [
            `허약 체질을 개선하고,`,
            <br key="1" className="pc" />,
            `지속적인 건강 유지`,
          ],
        ],
      },
    ],
  };

  return <TypeM {...data_} />;
}
