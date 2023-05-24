import React from "react";
import styles from "../../style";

const ServiceCards = (props) => {
  return (
    <div
      className={`w-[250px] h-[375px] bg-neutral-700 flex gap-4 justify-center items-end rounded-lg ${props.background}`}
    >
      <div className='w-full bg-opacity-70 h-24 bg-neutral-900 flex justify-center items-center'>
        <h3 className={`${styles.serviceTitle} p-2 uppercase`}>{props.title}</h3>
      </div>
    </div>
  );
};

export default ServiceCards;
