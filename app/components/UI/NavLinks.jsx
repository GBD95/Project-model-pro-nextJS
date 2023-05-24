import styles from "../../style";

const navLinks = (props) => {
  return (
    <a className={`${styles.navLinks}`} href={`${props.path}`}>
      {props.title}
    </a>
  );
};

export default navLinks;
