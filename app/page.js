"use client";
import React, { useState } from "react";

import Header from "./components/Header.jsx";
import "./i18n/i18n";
import Hero from "./components/Hero.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("srb");
  return (
    <div className={` bg-neutral-900 text-white `}>
      <Header />
      <Hero />
      <div className=' mx-auto max-w-[1400px]'>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
