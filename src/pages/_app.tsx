import "@/styles/globalStyles";
import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/DefaultLayout";
import "reset-css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
