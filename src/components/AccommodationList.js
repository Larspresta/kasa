import styles from "./AccommodationList.module.css";
import { Link } from "react-router-dom";

function AccommodationList({ accommodations }) {
  return (
    <ul className={styles.accommodationList} accommodations={accommodations}>
      {accommodations.map((accommodation) => (
        <Accommodation accommodation={accommodation} key={accommodation.id} />
      ))}
    </ul>
  );
}

function Accommodation({ accommodation }) {
  return (
    <li className={styles.accommodation}>
      <Link to={`/accommodation/${accommodation.id}`}>
        <img src={accommodation.cover} alt={accommodation.title}></img>
        <p className={styles.textOverlay}>{accommodation.title}</p>
      </Link>
    </li>
  );
}

export default AccommodationList;
