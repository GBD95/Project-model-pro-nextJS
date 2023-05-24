import React from "react";
import styles from "../style";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      className={`${styles.flexCenter} flex-col  h-screen bg-hero-section bg-cover bg-center`}
    >
      <h1
        className={`font-inter mb-14tracking-tight font-extrabold text-center text-white my-4 px-4 text-4xl max-w-screen-lg sm:text-6xl`}
      >
        {t("heroTitle")}
      </h1>
      <p className={`${styles.paragraphNormal} text-2xl px-4 max-w-screen-lg sm:text-3xl my-4`}>
        {t("heroSubtitle")}
      </p>
    </section>
  );
};

export default Hero;
