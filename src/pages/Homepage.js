import AccommodationList from "../components/AccommodationList";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Main from "../components/Main";
import PageNav from "../components/PageNav";

function Homepage({ accommodations }) {
  return (
    <div>
      <PageNav />
      <HeroBanner />
      <Main>
        <AccommodationList accommodations={accommodations}></AccommodationList>
      </Main>
      <Footer />
    </div>
  );
}

export default Homepage;
