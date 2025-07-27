"use client";
import { useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
