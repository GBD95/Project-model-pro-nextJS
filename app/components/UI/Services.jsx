import React from "react";
import ServiceCards from "./ServiceCards";
import styles from "../../style";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id='services' className={`${styles.sections}`}>
      <div className='flex-col w-full'>
        <div>
          <h2 className={`${styles.heading}`}>{t("servicesTitle")}</h2>
        </div>
        <div className='w-full flex flex-wrap justify-center items-center gap-4 my-4'>
          <ServiceCards
            key={t("services.0.title")}
            title={t("services.0.title")}
            background={"bg-service-0"}
          />
          <ServiceCards
            key={t("services.1.title")}
            title={t("services.1.title")}
            background={"bg-service-1"}
          />
          <ServiceCards
            key={t("services.2.title")}
            title={t("services.2.title")}
            background={"bg-service-2"}
          />
          <ServiceCards
            key={t("services.3.title")}
            title={t("services.3.title")}
            background={"bg-service-3"}
          />
          <ServiceCards
            key={t("services.4.title")}
            title={t("services.4.title")}
            background={"bg-service-4"}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
