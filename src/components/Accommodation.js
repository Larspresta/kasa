import styles from "./Accommodation.module.css";

function Accommodation({ accommodation }) {
  console.log(accommodation);
  return (
    <li className={styles.accommodation}>
      <img src={accommodation.cover} alt={accommodation.title}></img>
      <p className={styles.textOverlay}>{accommodation.title}</p>
    </li>
  );
}

export default Accommodation;
