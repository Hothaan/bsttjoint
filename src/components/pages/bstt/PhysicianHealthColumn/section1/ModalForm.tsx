/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { useState } from "react";
import { css, useTheme } from "@emotion/react";
import ModalContainer from "@/components/ui/modal/ModalContainer";
import { SetStateAction } from "react";
import CheckBox from "@/components/ui/form/input/CheckBox";

interface IModalContainer extends Container {
  onClick: React.Dispatch<SetStateAction<boolean>>;
}

export default function ModalForm(prop: IModalContainer) {
  const { onClick } = prop;
  const [formData, setFormData] = useState({
    check1: false,
    check2: false,
    check3: false,
  });

  const check_box_data_ = [
    {
      label: `이름 동의`,
      required: true,
      isChecked: formData.check1,
      onClick: () => {
        setFormData({ ...formData, check1: !formData.check1 });
      },
    },
    {
      label: `전화번호 동의`,
      required: true,
      isChecked: formData.check2,
      onClick: () => {
        setFormData({ ...formData, check2: !formData.check2 });
      },
    },
    {
      label: `개인정보 동의`,
      required: true,
      isChecked: formData.check3,
      onClick: () => {
        setFormData({ ...formData, check3: !formData.check3 });
      },
    },
  ];

  const check_box_all_data_ = {
    label: `모두 동의`,
    required: false,
    isChecked: formData.check1 && formData.check2 && formData.check3,
    onClick: () => {
      const isAllChecked =
        formData.check1 && formData.check2 && formData.check3;
      setFormData({
        check1: !isAllChecked,
        check2: !isAllChecked,
        check3: !isAllChecked,
      });
    },
  };
  return (
    <ModalContainer onClick={onClick}>
      <div css={modal_wrap}>
        <p css={modal_title_text}>이름, 전화번호, 개인정보동의</p>
        <div css={content_wrap}>
          <div css={title_desc_wrap}>
            <p css={content_title_text}>1. 개인정보취급방침</p>
            <p css={content_desc_text}>
              '튼튼마디한의원'은 (이하 '회사'는) 개인정보보호법 제 30조에 따라
              고객님의 개인정보를 중요시하며 정보통신망 이용촉진 등에 관한 법률
              및 개인정보보호 규정 및 방송통신위원회의 개인정보의 기술적, 관리적
              보호조치 기준 고시를 준수하고 있습니다. 회사는 개인정보취급방침을
              통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로
              이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지
              알려드립니다.다음 개인정보 처리 방침은 시행일로부터 적용되며, 법령
              및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있을 경우에는
              변경사항의 시행 전에 웹사이트 공지사항 (또는 개별공지)을 통하여
              공지할 것입니다.
            </p>
          </div>
          <form css={form_wrap}>
            {check_box_data_.map((item, idx) => (
              <CheckBox key={item.label} {...item} />
            ))}
          </form>
          <form css={all_form_wrap}>
            <CheckBox {...check_box_all_data_} />
          </form>
        </div>
      </div>
    </ModalContainer>
  );
}

const modal_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 1800px) {
    gap: 60px;
  }
  @media (max-width: 1600px) {
    gap: 40px;
  }
  @media (max-width: 1400px) {
    gap: 40px;
  }
  @media (max-width: 1200px) {
    gap: 30px;
  }
`;

const modal_title_text = css`
  color: #121212;

  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1800px) {
    font-size: 32px;
  }
  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 374px) {
    font-size: 16px;
  }
`;

const content_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (max-width: 680px) {
    gap: 16px;
  }
  @media (max-width: 374px) {
    gap: 10px;
  }
`;
const title_desc_wrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 374px) {
    gap: 10px;
  }
`;

const form_wrap = css`
  display: flex;
  gap: 30px;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
  @media (max-width: 374px) {
    gap: 16px;
  }
`;

const all_form_wrap = css`
  display: flex;
  width: 100%;
  padding: 18px 15px;
  gap: 10px;
  border-radius: 8px;
  background: #f4f4f4;

  @media (max-width: 480px) {
    padding: 12px;
  }
  @media (max-width: 374px) {
    padding: 6px;
  }
`;

const content_title_text = css`
  padding-bottom: 14px;

  color: #121212;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border-bottom: 1px solid #535353;

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

const content_desc_text = css`
  color: #3c3c3c;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;

  @media (max-width: 680px) {
    max-height: 200px;
    overflow-y: scroll;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
