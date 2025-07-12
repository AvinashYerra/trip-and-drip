"use client";

import "../styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "calc(100vh - 72px - 90px)",
          background: 'transparent'
        }}
      >
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
