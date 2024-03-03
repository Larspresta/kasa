import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Main from "../components/Main";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <HeroBanner />
      <Main></Main>
      <Footer />
    </div>
  );
}

export default Homepage;
