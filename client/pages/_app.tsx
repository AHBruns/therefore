import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
