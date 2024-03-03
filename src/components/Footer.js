import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/logo-white.png" alt="kasa logo"></img>
      <p>&copy; Copyright {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
