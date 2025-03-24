"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Check from "@/assets/components/pages/bstt/MedicalInquiries/section1/check.svg";
import { useRef } from "react";

interface ICheckBox {
  label: string;
  required: boolean;
  isChecked: boolean;
  onClick: () => void;
}
export default function CheckBox(prop: ICheckBox) {
  const { label, required, isChecked, onClick } = prop;
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div css={input_check_box_container} key={label}>
      <input
        type="checkbox"
        name={label}
        id={label}
        required={required}
        css={hidden_input_check_box}
        ref={inputRef}
        onClick={onClick}
      />
      <div
        css={fake_check_box_container(isChecked)}
        onClick={() => inputRef.current?.click()}
      >
        {isChecked === true && <Check />}
      </div>
      <label htmlFor={label} css={input_check_box_label_text}>
        {label}
      </label>
    </div>
  );
}
const fake_check_box_container = (isChecked: boolean) => css`
  width: 22px;
  height: 22px;

  cursor: pointer;

  flex-shrink: 0;

  border: 1px solid ${isChecked ? "#343434" : "#acacac"};
  background: #fff;
`;

const hidden_input_check_box = css`
  display: none;
`;

const input_check_box_container = css`
  display: flex;
  align-items: start;
  gap: 8px;
  align-self: stretch;
`;

const input_check_box_label_text = css`
  color: var(--Font-02_black, #111);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
