import styles from "./TitleContainer.module.css";

function TitleContainer({ title, location, tags }) {
  return (
    <div className={styles.titleContainer}>
      <Title title={title} location={location} />
      <Tag tags={tags} />
    </div>
  );
}
export default TitleContainer;

function Tag({ tags }) {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag, index) => (
        <div key={index} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  );
}

function Title({ title, location }) {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <h3>{location}</h3>
    </div>
  );
}
