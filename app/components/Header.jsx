"use client";
import { useState } from "react";
import { logo } from "../../public/index.js";
import styles from "../style.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./UI/LanguageSwitcher.jsx";
import NavLinks from "./UI/NavLinks.jsx";
import NavLinksMobile from "./UI/NavLinksMobile.jsx";

const Header = (props) => {
  const [Toggle, setToggle] = useState(true);
  const { t } = useTranslation();

  return (
    <header
      id='home'
      className={`${styles.paragraphNormal} p-6 border-b-2 bg-neutral-800 sticky top-0`}
    >
      <div className={`flex justify-between items-center mx-auto max-w-screen-lg`}>
        <img
          className=' h-5 w-auto xs:h-6 md:h-7'
          src={`${logo.src}`}
          alt='Logo of ModelPro company'
        />
        <nav className='flex gap-20'>
          <button
            className='md:hidden flex'
            onClick={() => {
              setToggle(!Toggle);
            }}
          >
            {Toggle ? (
              <ion-icon name='menu-outline' size='large'></ion-icon>
            ) : (
              <ion-icon name='close-outline' size='large'></ion-icon>
            )}
          </button>
          <div
            onClick={() => {
              setToggle(!Toggle);
            }}
            className={`${
              Toggle ? "hidden" : "flex"
            } absolute h-screen w-full top-0 left-0 backdrop-blur-sm`}
          ></div>

          <div
            className={`${
              Toggle ? "hidden" : "flex"
            } bg-neutral-700 text-white  absolute top-0 left-0 w-5/6 h-screen flex-col z-50`}
          >
            <div className='flex justify-end items-center p-4'>
              <button
                onClick={() => {
                  setToggle(!Toggle);
                }}
              >
                <ion-icon name='close-outline' size='large'></ion-icon>
              </button>
            </div>
            {t("navLinks", { returnObjects: true }).map((link) => (
              <NavLinksMobile
                key={link.title}
                title={link.title}
                path={link.path}
                toggle={() => setToggle(!Toggle)}
              />
            ))}
            <div className='p-2'>
              <LanguageSwitcher />
            </div>
          </div>

          <div className={`hidden md:flex xs:gap-4 `}>
            {t("navLinks", { returnObjects: true }).map((link) => (
              <NavLinks key={link.title} title={link.title} path={link.path} />
            ))}

            <div>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
