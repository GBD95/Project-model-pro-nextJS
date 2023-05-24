import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { flagRs, flagGb } from "@/public";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("sr");

  const handleLanguageChange = (event) => {
    const newLanguage = event.currentTarget.getAttribute("data-value");
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className='flex flex-wrap gap-4 md:border-l-2 p-2'>
      <div className='flex gap-2 cursor-pointer' onClick={handleLanguageChange} data-value='sr'>
        <img
          className='rounded-full w-8 md:w-6'
          src={`${flagRs.src}`}
          alt='Flag of Republic of Serbia'
          onClick={handleLanguageChange}
          data-value='sr'
        />
        <button
          className={`${language === "sr" ? "text-secondary" : "text-white"} md:text-base`}
          data-value='sr'
        >
          SR
        </button>
      </div>
      <div className='flex gap-2 cursor-pointer' onClick={handleLanguageChange} data-value='en'>
        <img
          className='rounded-full w-8 md:w-6'
          src={`${flagGb.src}`}
          alt='Flag of United Kingdom'
          onClick={handleLanguageChange}
          data-value='en'
        />
        <button
          className={`${language === "en" ? "text-secondary" : "text-white"} md:text-base`}
          data-value='en'
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
