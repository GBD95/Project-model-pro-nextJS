import React from "react";
import styles from "../../style";

const NavLinksMobile = (props) => {
  return (
    <a onClick={props.toggle} href={`${props.path}`} className={`${styles.navLinksMobile}`}>
      {props.title}
    </a>
  );
};

export default NavLinksMobile;
