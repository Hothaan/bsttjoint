/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { HeaderFooterProvider } from "@/components/ui/provider/HeaderFooterProvider";
import { useHeaderFooterHeight } from "@/components/ui/provider/HeaderFooterProvider";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import { css } from "@emotion/react";

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <HeaderFooterProvider>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </HeaderFooterProvider>
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
