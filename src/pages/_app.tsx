import "reset-css";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "@/styles/globalStyles";
import DefaultLayout from "@/layouts/DefaultLayout";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}
