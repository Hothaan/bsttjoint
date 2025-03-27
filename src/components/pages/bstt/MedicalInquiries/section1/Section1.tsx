"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import SectionTitleSimple from "@/components/ui/text/SectionTitleSimple";
import ContentsContainer from "@/components/ui/container/ContentsContainer";
import StepContainer from "./StepContainer";
import { useState, useRef } from "react";
import Radio from "@/assets/components/pages/bstt/MedicalInquiries/section1/radio.svg";
import { branch_data } from "@/datas/menuData";
import ArrowBottom from "@/assets/components/pages/bstt/MedicalInquiries/section1/arrowBottom.svg";
import Check from "@/assets/components/pages/bstt/MedicalInquiries/section1/check.svg";
import CheckBox from "@/components/ui/form/input/CheckBox";

interface IformData {
  step1: string | null;
  step2: string | null;
  step3: {
    name: string;
    phone: string;
    check: { [key: string]: boolean };
  };
}

export default function Section1() {
  const theme = useTheme() as CustomTheme;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IformData>({
    step1: null,
    step2: null,
    step3: {
      name: ``,
      phone: ``,
      check: {
        check1: false,
        check2: false,
        check3: false,
      },
    },
  });
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const section_title_simple_ = {
    text: [`진료·예약 문의`],
    color: theme.colors.mono.black,
    align: "left",
  };
  const step_data_ = [
    {
      step: 1,
      title: `1. 어떤 치료가 필요하신가요? (1개 선택)`,
    },
    {
      step: 2,
      title: `가장 가까운 지점을 선택하세요`,
    },
    {
      step: 3,
      title: `신청자 정보 입력`,
    },
  ];
  const step1_input_data_1 = [
    `관절 질환 치료`,
    `척추 질환 치료`,
    `류마티스 치료`,
    `기타 통증 치료`,
  ];
  const step1_input_data_2 = [`소아성장 클리닉`, `다이어트 클리닉`, `기타`];
  const step2_map_ = `/assets/components/pages/bstt/MedicalInquiries/section1/map1_pc.png`;
  const step3_input_check_box_data_ = [
    {
      key: "check1",
      required: true,
      label: `상담 및 진료를 위한 개인정보활용에 동의합니다. (필수)`,
    },
    {
      key: "check2",
      required: true,
      label: `진료안내 또는 예약처리를 위한 개인정보 제3자 제공 및 메세지 수신 및 에 동의합니다 (필수)`,
    },
    {
      key: "check3",
      required: false,
      label: `건강의료생활정보 또는 의료성광고정보 수신에 동의합니다 (선택)`,
    },
  ];
  function handleChangeStep1(step1: string) {
    setFormData({ ...formData, step1: step1 });
  }
  function handleChangeStep2(step2: string) {
    setFormData({ ...formData, step2: step2 });
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      step3: { ...formData.step3, name: e.target.value },
    });
  }
  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      step3: { ...formData.step3, phone: e.target.value },
    });
  }
  function handleChangeStep3(key: string) {
    setFormData({
      ...formData,
      step3: {
        ...formData.step3,
        check: { ...formData.step3.check, [key]: !formData.step3.check[key] },
      },
    });
  }
  return (
    <ContentsContainer>
      <div css={wrap}>
        <SectionTitleSimple {...section_title_simple_} />
        <div css={step_wrap}>
          <StepContainer
            isAvailable={true}
            isDone={formData.step1 !== null}
            step={step_data_[0].step}
            title={step_data_[0].title}
          >
            <form css={form_container}>
              <div css={form_inner_container}>
                {step1_input_data_1.map((item, idx) => {
                  return (
                    <div key={idx + item} css={input_radio_container}>
                      <div
                        css={fake_radio_container(formData.step1 === item)}
                        onClick={() => inputRef1.current?.click()}
                      >
                        <Radio />
                      </div>
                      <input
                        type="radio"
                        name="step1"
                        id={item}
                        css={hidden_input_radio}
                        ref={inputRef1}
                        onClick={() => {
                          handleChangeStep1(item);
                        }}
                      />
                      <label htmlFor={item} css={label_text}>
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div css={form_inner_container}>
                {step1_input_data_2.map((item, idx) => {
                  return (
                    <div key={idx + item} css={input_radio_container}>
                      <div
                        css={fake_radio_container(formData.step1 === item)}
                        onClick={() => inputRef2.current?.click()}
                      >
                        <Radio />
                      </div>
                      <input
                        type="radio"
                        name="step1"
                        id={item}
                        css={hidden_input_radio}
                        ref={inputRef2}
                        onClick={() => {
                          handleChangeStep1(item);
                        }}
                      />
                      <label htmlFor={item} css={label_text}>
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            </form>
          </StepContainer>
          <div css={icon_container(formData.step1 !== null)}>
            <ArrowBottom />
          </div>
          <StepContainer
            isAvailable={formData.step1 !== null}
            isDone={formData.step2 !== null}
            step={step_data_[1].step}
            title={step_data_[1].title}
          >
            <form css={form_container}>
              <div css={branch_form_container}>
                <div css={branch_container}>
                  {branch_data.map((item, idx) => (
                    <div css={branch_wrap} key={idx + item.depth1}>
                      <div css={branch_depth1_wrap}>
                        <p css={branch_text}>{item.depth1}</p>
                        <span css={stroke}></span>
                      </div>
                      <div css={branch_item_wrap}>
                        {item.depth2.map((item, idx) => {
                          return (
                            <div
                              key={idx + item.text}
                              css={input_radio_container}
                            >
                              <div
                                css={fake_radio_container(
                                  formData.step2 === item.text
                                )}
                                onClick={() => inputRef3.current?.click()}
                              >
                                <Radio />
                              </div>
                              <input
                                type="radio"
                                name="step1"
                                id={item.text}
                                css={hidden_input_radio}
                                ref={inputRef3}
                                onClick={() => {
                                  handleChangeStep2(item.text);
                                }}
                              />
                              <label htmlFor={item.text} css={label_text}>
                                {item.text}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <div css={image_container}>
                  <img src={step2_map_} alt="map" />
                </div>
              </div>
            </form>
          </StepContainer>
          <div css={icon_container(formData.step2 !== null)}>
            <ArrowBottom />
          </div>
          <StepContainer
            isAvailable={formData.step2 !== null}
            isDone={
              formData.step3.name !== `` &&
              formData.step3.phone !== `` &&
              formData.step3.check.check1 === true &&
              formData.step3.check.check2 === true
            }
            step={step_data_[2].step}
            title={step_data_[2].title}
          >
            <form css={form_container}>
              <div css={input_text_wrap}>
                <div css={input_text_container}>
                  <label htmlFor="name" css={input_text_label}>
                    <p css={input_text_label_text}>이름</p>
                    <p css={input_text_label_red}>*</p>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="이름을 입력해 주세요."
                    css={input_text}
                    value={formData.step3.name}
                    onChange={(e) => handleNameChange(e)}
                  />
                </div>
                <div css={input_text_container}>
                  <label htmlFor="phone" css={input_text_label}>
                    <p css={input_text_label_text}>전화번호</p>
                    <p css={input_text_label_red}>*</p>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="전화번호를 입력해 주세요."
                    css={input_text}
                    value={formData.step3.phone}
                    onChange={(e) => handlePhoneChange(e)}
                  />
                </div>
              </div>
              <div css={input_check_box_wrap}>
                {step3_input_check_box_data_.map((item, idx) => {
                  return (
                    <CheckBox
                      label={item.label}
                      required={item.required}
                      isChecked={formData.step3.check[item.key]}
                      onClick={() => handleChangeStep3(item.key)}
                      key={idx + item.key}
                    />
                  );
                })}
              </div>
            </form>
          </StepContainer>
        </div>
      </div>
    </ContentsContainer>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 54px;
`;
const step_wrap = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const icon_container = (isDone: boolean) => css`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;

    path {
      stroke: ${isDone ? "#018C3B" : "gray"};
    }
  }
`;

const form_container = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 34px 0;
`;

const branch_form_container = css`
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const branch_container = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 34px 0;

  @media (max-width: 1800px) {
    gap: 20px;
  }
  @media (max-width: 1600px) {
    gap: 18px;
  }
  @media (max-width: 960px) {
    order: 2;
    gap: 20px;
  }
`;

const image_container = css`
  width: 641px;
  height: auto;
  aspect-ratio: 641 / 478;
  flex-shrink: 0;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 1800px) {
    width: 540px;
  }
  @media (max-width: 1600px) {
    width: 480px;
  }
  @media (max-width: 1400px) {
    width: 360px;
  }
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 1100px) {
    width: 240px;
  }
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
  }
`;

const input_text_wrap = css`
  display: flex;
  gap: 20px;

  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const input_check_box_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const form_inner_container = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 24px;
`;

const input_text_container = css`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  @media (max-width: 374px) {
    flex-direction: column;
  }
`;

const input_text_label = css`
  display: flex;
  width: 150px;
  height: 55px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 5px;
  background: #ededed;

  @media (max-width: 1400px) {
    width: 100px;
    height: 48px;
    flex-shrink: 0;
  }
  @media (max-width: 374px) {
    width: 100%;
    flex-shrink: 0;
  }
`;
const input_text_label_text = css`
  color: #121212;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1400px) {
    font-size: 17px;
  }
`;
const input_text_label_red = css`
  color: #ea1014;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const input_text = css`
  display: flex;
  height: 55px;
  padding: 16px 14px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background: #fff;
  align-self: stretch;

  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  &:placeholder {
    color: #bcbcbc;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }

  @media (max-width: 1400px) {
    width: calc(100% - 100px - 12px);
  }
  @media (max-width: 374px) {
    width: 100%;
  }
`;

const branch_wrap = css`
  display: flex;
  align-items: start;
  gap: 24px;

  @media (max-width: 1800px) {
    gap: 20px;
  }
  @media (max-width: 1600px) {
    gap: 18px;
  }
  @media (max-width: 1400px) {
    gap: 16px;
  }
  @media (max-width: 960px) {
    gap: 20px;
  }
`;

const branch_depth1_wrap = css`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1800px) {
    gap: 20px;
  }
  @media (max-width: 1600px) {
    gap: 18px;
  }
  @media (max-width: 1400px) {
    gap: 16px;
  }
  @media (max-width: 960px) {
    gap: 20px;
  }
`;

const branch_item_wrap = css`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1800px) {
    gap: 20px;
  }
  @media (max-width: 1600px) {
    gap: 18px;
  }
  @media (max-width: 1400px) {
    gap: 16px;
  }
  @media (max-width: 960px) {
    gap: 20px;
    flex-wrap: wrap;
  }
`;

const branch_text = css`
  color: #808080;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.6px;

  white-space: nowrap;

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
`;

const stroke = css`
  width: 1px;
  height: 1em;
  background-color: #dbdbdb;
  display: block;
`;

const input_radio_container = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const hidden_input_radio = css`
  display: none;
`;

const fake_radio_container = (isChecked: boolean) => css`
  width: 22px;
  height: 22px;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;

    transition: 0.3s ease-out;

    rect:first-child {
      stroke: ${isChecked ? "#018C3B" : "#E5E5EC"};
    }
    rect:last-child {
      stroke: ${isChecked ? "#018C3B" : "#E5E5EC"};
      fill: ${isChecked ? "#018C3B" : "#E5E5EC"};
    }
  }
`;

const label_text = css`
  color: var(--black-text, #3c3c3c);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.6px;

  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
