import ajit from "../../public/ajit.jpg";
import styles from "./card.module.css";

import { FcApproval } from "react-icons/fc";

export default function Card() {
  return (
    <div className={styles.cardbody}>
      <img className={styles.profileimage} src={ajit} alt="Ajit Profile pic" />
      <div className={styles.namepanel}>
        <p className={styles.name}> AJIT KUMAR </p>
        <FcApproval />
      </div>
      <p className={styles.jobtitle}>Senior Developer, Seoul</p>
    </div>
  );
}
