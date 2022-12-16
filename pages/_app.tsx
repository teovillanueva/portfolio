import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import {
  DesignSystemProvider,
  darkTheme,
  globalCss,
} from "@modulz/design-system";

const globalStyles = globalCss({
  html: {
    overflowX: "hidden",
  },
  body: {
    margin: 0,
    backgroundColor: "$loContrast",
  },
  "body, button": {
    fontFamily: "$untitled",
  },
  svg: { display: "block" },
  "pre, code": { margin: 0, fontFamily: "$mono" },
  "::selection": {
    backgroundColor: "$violet5",
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: "light-theme", dark: darkTheme.className }}
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
