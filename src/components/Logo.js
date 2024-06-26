import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/homepage">
      <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Kasa logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
