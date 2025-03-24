"use client";
/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { HeaderFooterProvider } from "@/components/ui/provider/HeaderFooterProvider";
import { useHeaderFooterHeight } from "@/components/ui/provider/HeaderFooterProvider";
import { WindowSizeProvider } from "@/components/ui/provider/WindowSizeProvider";
import HeaderPc from "@/components/ui/header/pc/Header";
import HeaderMo from "@/components/ui/header/mo/Header";
import Footer from "@/components/ui/footer/Footer";
import { css } from "@emotion/react";

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <WindowSizeProvider>
      <HeaderFooterProvider>
        <HeaderPc />
        <HeaderMo />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </HeaderFooterProvider>
    </WindowSizeProvider>
  );
}

function ContentWrapper(prop: Container) {
  const { children } = prop;
  const { headerHeight, footerHeight } = useHeaderFooterHeight();
  return <main css={wrap(headerHeight, footerHeight)}>{children}</main>;
}

const wrap = (headerHeight: number, footerHeight: number) => css`
  margin-top: ${headerHeight}px;
  height: 100%;
  min-height: calc(100vh - ${headerHeight}px - ${footerHeight}px);
`;
