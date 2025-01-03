import reactLogo from "../assets/react.svg";
import html5logo from "../../public/html5_logo2.png";
import css3logo from "../../public/css3-logo.png";
import jslogo from "../../public/js-logo.svg";
import styles from "./frontend.module.css";

export default function Frontend() {
  return (
    <div className={styles.frontend}>
      <h1>Front End Technologies</h1>
      <img src={html5logo} className="logo HTML5" alt="HTML5 logo" />
      <img src={css3logo} className="logo CSS" alt="CSS3 logo" />
      <img src={jslogo} className="logo js" alt="js logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  );
}
