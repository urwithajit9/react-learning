import NumberBox from "./NumberBox";
import styles from "./numberboxpanel.module.css";

export default function NumberBoxPanel() {
  let numbers: number[] = [];
  for (let i = 0; i <= 31; i++) {
    numbers.push(i);
  }
  return (
    <div>
      <div className={styles.panelheading}>
        <center>
          <h1>30 Days Of React</h1>
          <h3>Number Generator</h3>
        </center>
      </div>
      <center>
        <div className={styles.numberboxpanel}>
          {numbers.map((number) => (
            <NumberBox number={number} />
          ))}
        </div>
      </center>
    </div>
  );
}
