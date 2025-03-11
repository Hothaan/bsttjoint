import React, { ReactNode } from "react";

export const renderWidthKeys = (
  elements: (string | ReactNode)[]
): ReactNode[] => {
  return elements.map((element, index) => {
    if (typeof element === "string") {
      return element;
    }

    // JSX 요소인 경우 key를 부여하여 반환
    return React.cloneElement(element as React.ReactElement, {
      key: `${index}-${crypto.randomUUID()}`,
    });
  });
};
