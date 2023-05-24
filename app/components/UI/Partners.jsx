import React from "react";
import styles from "../../style";
import { useTranslation } from "react-i18next";
import { tervo, yugoimport } from "../../../public/index";
import sigitUrl from "../../../public/images/logo_sigit_top.png";
import osirideUrl from "../../../public/images/logo_temp.png";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id='partners' className={`${styles.sections}`}>
      <h2 className={`${styles.heading}`}>{t("partnersTitle")}</h2>
      <div className=''>
        <div className='flex flex-wrap gap-4 justify-center items-center'>
          <img
            className={`${styles.partnersImages}`}
            src={sigitUrl.src}
            alt='Logo of a partner company named Sigit'
          />
          <img
            className={`${styles.partnersImages}`}
            src={`${yugoimport.src}`}
            alt='Logo of a partner company named Yugoimport'
          />
          <img
            className={`${styles.partnersImages}`}
            src={osirideUrl.src}
            alt='Logo of a partner company named Becchis Osiride'
          />
          <img
            className={`${styles.partnersImages}`}
            src={`${tervo.src}`}
            alt='Logo of a partner company named Zastava Tervo'
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
