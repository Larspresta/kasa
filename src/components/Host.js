import styles from "./Host.module.css";

function Host({ host, rating }) {
  const ratingNum = Number(rating);
  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      i < ratingNum ? (
        <span className={styles.starFilled}>★</span>
      ) : (
        <span className={styles.starEmpty}>☆</span>
      )
    );
  }
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
