import React from "react";

const NavLinksFooter = (props) => {
  return (
    <a className={``} href={`${props.path}`}>
      {props.title}
    </a>
  );
};

export default NavLinksFooter;
