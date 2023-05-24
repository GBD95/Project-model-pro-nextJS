import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const EmailForm = () => {
  const { t } = useTranslation();

  const [emailData, setEmailData] = useState({
    subject: "",
    fromEmail: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your EmailJS Service ID, Template ID, and User ID
    const serviceID = "service_vst9t2n";
    const templateID = "template_86w17wo";
    const userID = "og5NbyC6J0ImG5mFQ";

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmailData({ subject: "", fromEmail: "", message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className='w-full'>
      <form
        onSubmit={handleSubmit}
        className='flex-col justify-center align-middle w-full p-6 inline-block'
      >
        <label className='flex-col mb-4 block'>
          <h3 className='text-neutral-400'>Email</h3>
          <input
            className='bg-neutral-700 placeholder-neutral-500 rounded-sm p-2 w-full focus:placeholder-neutral-200 focus:text-base text-xs block'
            type='email'
            name='fromEmail'
            placeholder={t("emailPlaceholder")}
            value={emailData.fromEmail}
            onChange={handleChange}
            required
          />
        </label>
        <label className='flex-col mb-4 block '>
          <h3 className='text-neutral-400'>{t("subject")}</h3>
          <input
            className=' bg-neutral-700 placeholder-neutral-500 rounded-sm p-2 w-full text-xs block focus:placeholder-neutral-200 focus:text-base'
            placeholder={t("subject")}
            type='text'
            name='subject'
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label className='flex-col mb-4 block'>
          <h3 className='text-neutral-400'>{t("message")}</h3>
          <textarea
            className=' bg-neutral-700 placeholder-neutral-500 rounded-sm p-2 w-full text-xs h-40 block focus:placeholder-neutral-200 focus:text-base'
            placeholder={t("messagePlaceholder")}
            name='message'
            value={emailData.message}
            onChange={handleChange}
            required
          />
        </label>
        <div className='flex justify-end'>
          <button
            className=' bg-secondary text-neutral-900 rounded-md px-6 py-3 shadow-xl font-bold m-auto'
            type='submit'
          >
            {t("btnForm")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
