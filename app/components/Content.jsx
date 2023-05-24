import React from "react";
import AboutUs from "./UI/AboutUs";
import ContactUs from "./UI/ContactUs";
import Partners from "./UI/Partners";
import Services from "./UI/Services";

const Content = () => {
  return (
    <div className='bg-neutral-900'>
      <Services />
      <AboutUs />
      <Partners />
      <ContactUs />
    </div>
  );
};

export default Content;
