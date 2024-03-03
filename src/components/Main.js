import styles from "./Main.module.css";

function Main({ children }) {
  return <main className={styles.main}>{children}Main container</main>;
}

export default Main;
