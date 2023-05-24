import React from "react";
import styles from "../../style";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import { phone, home, mail } from "../../../public/index";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className={`${styles.sections} `}>
      <div className=''>
        <h2 className={`${styles.heading}`}>{t("contactTitle")}</h2>
        <p
          className={`${styles.paragraph} ${styles.textPadding} text-center text-neutral-400 sm:text-xl`}
        >
          {t("contactDescr")}
        </p>
        <div className='md:flex  w-full align-middle rounded-lg bg-neutral-600'>
          <div className='w-full md:w-6/12 p-6 bg-secondary rounded-lg'>
            <div className=''>
              <h3 className='mb-4 text-lg font-bold text-neutral-900'>{t("contactInfo")}</h3>
              <div className='flex flex-col gap-10'>
                <div className='flex gap-4 mt-4'>
                  <img className='w-10 text-neutral-900' src={`${home.src}`} alt='' />
                  <div className='text-start text-neutral-900'>
                    <h3 className='font-bold'>{t("adress")}</h3>
                    <p className='font-semibold'>{t("adress1")}</p>
                  </div>
                </div>
                <div className='flex flex-wrap gap-4 text-neutral-900'>
                  <img className='w-10' src={`${phone.src}`} alt='' />
                  <div className='text-start'>
                    <h3 className='font-bold'>{t("phone")}</h3>
                    <a href='tel:+38169699239' className='font-semibold'>
                      069 699239
                    </a>
                  </div>
                </div>
                <div className='flex gap-4 text-neutral-900'>
                  <img className='w-10 ' src={`${mail.src}`} alt='' />
                  <div className='text-start'>
                    <h3 className='font-bold'>Email:</h3>
                    <a
                      className='flex flex-wrap font-semibold'
                      href='mailto:ivan.glavonjic@gmail.com'
                    >
                      <span>draganmodelpro</span>
                      <span>@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
