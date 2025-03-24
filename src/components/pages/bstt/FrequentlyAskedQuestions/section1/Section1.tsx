"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import Qna from "./Qna";
export default function Section1() {
  const theme = useTheme() as CustomTheme;
  const section_title_simple_ = {
    text: [`Q&A`],
    color: theme.colors.mono.black,
    align: "left",
  };
  const qna_data_ = [
    {
      q: `치료하면 완치되나요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `수술을 안하고 어떻게 나을 수가 있나요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `약을 꼭 먹어야만 하나요? 침을 꼭 맞아야만 하나요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `기저질환이 있는데 한약을 먹어도 될까요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `입원하지 않고 일상생활을 하면서 치료받을 수 있나요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `부모님 연세가 많으신데도 치료가 가능할까요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `당장 통증이 심한데 빨리 나을 수 있나요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `치료기간과 비용이 어떻게 되나요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `방문이 어려운데 진찰, 처방이 가능할까요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
    {
      q: `MRI나 CT 등 검사를 하지 않고 가도 되나요?`,
      a: {
        img: `/assets/components/pages/bstt/FrequentlyAskedQuestions/section1/Qna/answer1_pc.png`,
        text: [
          `연골한약을 통해 손상된 관절을 보강하면 충분히 호전될 수 있습니다.`,
          <br key="1" />,
          <br key="2" />,
          `퇴행성 관절염이 장기간 진행되어 수술을 권유받았다가 지푸라기라도 잡는 심정으로 한의원을 찾으시고 실제 치료 효과를 본 분들이 많이 계십니다. 증상이 심할 경우 치료에 상당한 시일이 걸릴 수 있으니, 우선 한의원을 방문하셔서  연골의 손상유무를 파악한 후, 꾸준한 치료를 통해 개선해나가야 합니다.  `,
        ],
      },
    },
  ];
  return (
    <ContentsContainer>
      <div css={wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <Qna data={qna_data_} />
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
