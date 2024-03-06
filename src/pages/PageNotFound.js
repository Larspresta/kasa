import styles from "./PageNotFound.module.css";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <PageNav />
      <h1>404</h1>
      <h2>Oops! It looks like this page doesn’t exist.</h2>
      <NavLink to="/homepage">Go back to home page</NavLink>
      <Footer />
    </div>
  );
}

export default PageNotFound;
