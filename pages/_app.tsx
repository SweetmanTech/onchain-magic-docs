import "./layout.css";
import type { AppProps } from "next/app";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  const ComponentElement = Component as any;
  return <ComponentElement {...pageProps} />;
}
