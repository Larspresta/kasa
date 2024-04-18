import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={process.env.PUBLIC_URL + "/logo-white.png"} alt="kasa logo" />
      <p>&copy; Copyright {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
