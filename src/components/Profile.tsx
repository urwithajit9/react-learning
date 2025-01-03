import Tagpanel from "./TagPanel";
import Card from "./Card";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <Card />
      <Tagpanel />
    </div>
  );
}
