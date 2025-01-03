import styles from "./subscribe.module.css";
export default function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <form action="/action_page.php">
        <input
          className={styles.input}
          type="text"
          id="fname"
          name="fname"
          placeholder="First name"
        />
        <input
          className={styles.input}
          type="text"
          id="fname"
          name="fname"
          placeholder="Last name"
        />
        <input
          className={styles.input}
          type="text"
          id="lname"
          name="lname"
          placeholder="Email"
        />{" "}
        <br />
        <br />
        <button className={styles.button}>Subscribe</button>
      </form>
    </div>
  );
}
