/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FloatingButton from "@/components/ui/float/FloatingButton";
import { floating_menu_data } from "@/datas/menuData";

interface IFloatingButtonsContainer {
  branch: keyof typeof floating_menu_data;
  page: keyof (typeof floating_menu_data)[keyof typeof floating_menu_data];
  section: keyof (typeof floating_menu_data)[keyof typeof floating_menu_data][keyof (typeof floating_menu_data)[keyof typeof floating_menu_data]];
}

export default function FloatingButtonsContainer(
  prop: IFloatingButtonsContainer
) {
  const { branch, page, section } = prop;

  const menuItems = floating_menu_data?.[branch]?.[page]?.[section] || [];

  return (
    <div css={wrap}>
      {menuItems.map((item) => (
        <FloatingButton
          key={item.text}
          icon={item.icon}
          link={item.link}
          text={item.text}
          bg={item.bg}
        />
      ))}
    </div>
  );
}

const wrap = css`
  position: absolute;
  right: 90px;
  bottom: 40px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
