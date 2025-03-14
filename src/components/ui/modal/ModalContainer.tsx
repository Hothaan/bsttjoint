/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Close from "@/assets/components/ui/modal/ModalContainer/close.svg";
import { SetStateAction } from "react";

interface IModalContainer extends Container {
  onClick: React.Dispatch<SetStateAction<boolean>>;
}

export default function ModalContainer(prop: IModalContainer) {
  const { children, onClick } = prop;
  return (
    <div css={bg} className="modal" onClick={() => onClick(false)}>
      <div css={wrap} onClick={(e) => e.stopPropagation()}>
        <div css={close_icon_container} onClick={() => onClick(false)}>
          <Close />
        </div>
        {children}
      </div>
    </div>
  );
}

const bg = css`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 250px 280px;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1800px) {
    padding: 200px;
  }
  @media (max-width: 1600px) {
    padding: 180px;
  }
  @media (max-width: 1400px) {
    padding: 140px;
  }
  @media (max-width: 1200px) {
    padding: 100px;
  }
  @media (max-width: 960px) {
    padding: 120px 80px;
  }
  @media (max-width: 680px) {
    padding: 110px 60px;
  }
  @media (max-width: 480px) {
    padding: 110px 32px;
  }
  @media (max-width: 374px) {
    padding: 40px 20px;
  }
`;
const wrap = css`
  position: relative;
  width: 100%;
  padding: 60px;

  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1800px) {
    padding: 50px;
  }
  @media (max-width: 1600px) {
    padding: 40px;
  }
  @media (max-width: 1400px) {
    padding: 32px;
  }
  @media (max-width: 1200px) {
    padding: 28px;
  }
  @media (max-width: 960px) {
    padding: 24px;
    border-radius: 15px;
  }
  @media (max-width: 680px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 14px 20px;
  }
  @media (max-width: 374px) {
    padding: 14px;
  }
`;

const close_icon_container = css`
  position: absolute;
  top: 60px;
  right: 60px;
  width: 36px;
  height: auto;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1800px) {
    top: 50px;
    right: 50px;
    width: 32px;
  }
  @media (max-width: 1600px) {
    top: 40px;
    right: 40px;
    width: 28px;
  }
  @media (max-width: 1400px) {
    top: 32px;
    right: 32px;
    width: 24px;
  }
  @media (max-width: 1200px) {
    top: 28px;
    right: 28px;
    width: 20px;
  }
  @media (max-width: 960px) {
    top: 24px;
    right: 24px;
  }
  @media (max-width: 680px) {
    top: 20px;
    right: 20px;
  }
  @media (max-width: 480px) {
    top: 14px;
    right: 20px;
  }
  @media (max-width: 374px) {
    width: 16px;
    top: 14px;
    right: 14px;
  }
`;
