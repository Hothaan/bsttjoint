import React, { createContext, useContext, useEffect, useState } from "react";

interface HeaderFooterContextType {
  headerHeight: number;
  footerHeight: number;
}

const HeaderFooterHeightContext = createContext<
  HeaderFooterContextType | undefined
>(undefined);

export const HeaderFooterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeights = () => {
      const header = document.querySelector("header");
      const footer = document.querySelector("footer");

      setHeaderHeight((prevHeight) =>
        header ? parseFloat(window.getComputedStyle(header).height) : prevHeight
      );

      setFooterHeight((prevHeight) =>
        footer ? parseFloat(window.getComputedStyle(footer).height) : prevHeight
      );
    };

    // 초기 실행 및 윈도우 리사이즈 감지
    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <HeaderFooterHeightContext.Provider value={{ headerHeight, footerHeight }}>
      {children}
    </HeaderFooterHeightContext.Provider>
  );
};

export const useHeaderFooterHeight = () => {
  const context = useContext(HeaderFooterHeightContext);
  if (!context) {
    throw new Error(
      "useHeaderFooterHeight must be used within a <HeaderFooterProvider>"
    );
  }
  return context;
};
