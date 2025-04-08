"use client";
/** @jsxImportSource @emotion/react */
import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HeaderFooterProvider } from "@/components/ui/provider/HeaderFooterProvider";
import { WindowSizeProvider } from "@/components/ui/provider/WindowSizeProvider";
import HeaderPc from "@/components/ui/header/pc/Header";
import HeaderMo from "@/components/ui/header/mo/Header";
import Footer from "@/components/ui/footer/Footer";
import { css } from "@emotion/react";
import FloatingButtonsContainer from "@/components/ui/float/FloatingButtonsContainer";

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <WindowSizeProvider>
      <HeaderFooterProvider>
        <HeaderPc />
        <HeaderMo />
        <ContentWrapper>
          <FloatingButtonsContainer
            branch={`bstt`}
            page={router.pathname.split("/").length === 2 ? `main` : `sub`}
          />
          {children}
        </ContentWrapper>
        <Footer />
      </HeaderFooterProvider>
    </WindowSizeProvider>
  );
}

function ContentWrapper(prop: Container) {
  const { children } = prop;

  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (!header || !footer) return;

    const updateHeights = () => {
      setHeaderHeight(header.getBoundingClientRect().height);
      setFooterHeight(footer.getBoundingClientRect().height);
    };

    updateHeights();

    const headerObserver = new ResizeObserver(updateHeights);
    const footerObserver = new ResizeObserver(updateHeights);

    headerObserver.observe(header);
    footerObserver.observe(footer);

    return () => {
      headerObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return <main css={wrap(footerHeight, headerHeight)}>{children}</main>;
}

const wrap = (footerHeight: number, headerHeight?: number) => css`
  height: 100%;
  min-height: calc(100vh - ${headerHeight}px - ${footerHeight}px);

  @media (min-width: 1921px) {
    margin-top: 125px;
  }
  @media (max-width: 1920px) {
    margin-top: 95px;
  }
  @media (max-width: 1800px) {
    margin-top: 85px;
  }
  @media (max-width: 1600px) {
    margin-top: 80px;
  }
  @media (max-width: 1400px) {
    margin-top: 70px;
  }
  @media (max-width: 1200px) {
    margin-top: 60px;
  }
  @media (max-width: 960px) {
    margin-top: 73px;
  }
  @media (max-width: 375px) {
    margin-top: 70px;
  }
  @media (max-width: 374px) {
    margin-top: 64px;
  }
`;
