import "reset-css";
import { Global } from "@emotion/react";
import { globalStyles } from "@/styles/globalStyles";
import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
