import { useState } from "react";
import styles from "./Accordion.module.css";

function Accordion({ data }) {
  const [curOpen, setCuropen] = useState(null);
  return (
    <div className={styles.accordion}>
      {data.map((el, i) => (
        <AccordionItem curOpen={curOpen} onOpen={setCuropen} title={el.title} i={i} key={el.title}>
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ i, curOpen, onOpen, title, children }) {
  const isOpen = i === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : i);
  }
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`} onClick={handleToggle}>
      <div className={styles.top}>
        <p className={styles.title}>{title}</p>
        <p className={styles.icon}>{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className={`${styles.contentBox} ${styles.text}`}>{children}</div>}
    </div>
  );
}
