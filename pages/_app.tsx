import LandingLayout from "@/components/layouts/landing-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LandingLayout>
      <Component {...pageProps} />
    </LandingLayout>
  );
}
