import Accommodation from "./Accommodation";
import styles from "./AccommodationList.module.css";

function AccommodationList({ accommodations }) {
  console.log(accommodations);
  return (
    <ul className={styles.accommodationList} accommodations={accommodations}>
      {accommodations.map((accommodation) => (
        <Accommodation accommodation={accommodation} key={accommodation.id} />
      ))}
    </ul>
  );
}

export default AccommodationList;
