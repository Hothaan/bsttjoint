import { ReactNode } from "react";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
