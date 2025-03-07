/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleDesc from "@/components/ui/text/SectionTitleDesc";
import TreatmentCard from "./TreatmentCard";

export default function Section7() {
  const theme = useTheme() as CustomTheme;
  const sectionTitleDesc_ = {
    title: `story`,
    desc: [`병원에 많이 다녔는데`, <br key="1" />, `왜 자꾸 재발을 할까요?`],
  };
  const treatment1_ =
    "/assets/components/pages/bstt/index/section7/treatment1.png";
  const treatment2_ =
    "/assets/components/pages/bstt/index/section7/treatment2.png";
  const treatment3_ =
    "/assets/components/pages/bstt/index/section7/treatment3.png";
  const treatment4_ =
    "/assets/components/pages/bstt/index/section7/treatment4.png";
  const treatment_card_data_ = [
    {
      img: treatment1_,
      title: `사후적 치료`,
      desc: `질병초기에는 자연회복을 기다리다가 결국 한참 진행되고 나서야 치료를 시작함`,
    },
    {
      img: treatment2_,
      title: `소극적 치료`,
      desc: `치료목표를 당장의 통증 완화에만 두고 상당히 심해지기 전까지는 소극적으로 치료함`,
    },
    {
      img: treatment3_,
      title: `대증적 치료`,
      desc: `질병부위의 개선이나 신체 복원력의 강화보다는
눈앞의 통증만 해결하면 되는것으로 인식`,
    },
    {
      img: treatment4_,
      title: `일회성 치료`,
      desc: `빠른 통증 완화만을 추구한 나머지, 통증이 줄면 다 나은것으로 생각함`,
    },
  ];

  const caption_ = `“이렇게 해서는 끝이 나지 않습니다.”`;
  return (
    <div css={wrap}>
      <SectionTitleDesc
        color="black"
        title={sectionTitleDesc_.title}
        desc={sectionTitleDesc_.desc}
      />
      <div css={content_wrap}>
        <div css={card_wrap}>
          {treatment_card_data_.map((item, idx) => (
            <TreatmentCard
              key={idx}
              idx={idx + 1}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
          <p css={caption_text(theme)}>{caption_}</p>
        </div>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;

  display: flex;
  padding: 180px 160px;

  background: #d9eed6;
`;

const card_wrap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;
`;

const caption_text = (theme: CustomTheme) => css`
  width: 100%;

  color: ${theme.colors.point.primary};
  text-align: center;
  font-size: ${theme.fontSize.qu};
  font-weight: ${theme.fontWeight.semiBold};
  text-decoration-line: underline;
`;
