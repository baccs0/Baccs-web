import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <head>
        <title>Baccs | Home</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://baccs.org/wp-content/uploads/2020/07/Logo-final.svg"
        />
      </head>
      <Component {...pageProps} />
    </>
  ) : null;
}
