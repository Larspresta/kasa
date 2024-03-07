import styles from "./Host.module.css";

function Host({ host, rating }) {
  const ratingNum = Number(rating);

  const stars = Array.from({ length: 5 }, (_, i) => {
    return (
      <span key={i} className={i < ratingNum ? styles.starFilled : styles.starEmpty}>
        {i < ratingNum ? "★" : "☆"}
      </span>
    );
  });
  return (
    <div>
      <div className={styles.hostInfo}>
        <span> {host.name}</span>
        <img className={styles.hostImage} src={host.picture} alt={host.name} />
      </div>
      <div>{stars}</div>
    </div>
  );
}

export default Host;
