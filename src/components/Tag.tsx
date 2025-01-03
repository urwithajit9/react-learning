import styles from "./tag.module.css";
export default function Tag({ skill }: { skill: string }) {
  return (
    <div>
      <p className={styles.p}>{skill}</p>
    </div>
  );
}
