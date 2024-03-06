import { useState } from "react";
import styles from "./GallerySlider.module.css";

function GallerySlider({ images, title }) {
  const [index, setIndex] = useState(1);

  function handleLeftClick() {
    setIndex((curIndex) => (curIndex !== 0 ? curIndex - 1 : (curIndex = images.length - 1)));
  }
  function handleRightClick() {
    setIndex((curIndex) => (curIndex !== images.length - 1 ? curIndex + 1 : 0));
  }

  return (
    <div className={styles.gallerySlider}>
      <img src={images[index]} alt={title} />
      <div className={styles.chevrons}>
        <div className={styles.sliderLeft} onClick={handleLeftClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 96 960 960" width="50">
            <path fill="white" d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className={styles.sliderRight} onClick={handleRightClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 96 960 960" width="50">
            <path fill="white" d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className={styles.imageIndex}>
        {index + 1}/{images.length}
      </div>
    </div>
  );
}

export default GallerySlider;
