import { useState } from "react";
import styles from "./AccordionAccommodation.module.css";

function AccordionAccommodation({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.accordionSection}>
      <button className={styles.title} onClick={handleToggle}>
        {title}
      </button>
      {isOpen && (
        <div className={styles.content}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AccordionAccommodation;
