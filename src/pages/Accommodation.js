import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Accommodation.module.css";

import PageNav from "../components/PageNav";
import GallerySlider from "../components/GallerySlider";
import TitleContainer from "../components/TitleContainer";
import AccordionAccommodation from "../components/AccordionAccommodation";
import Host from "../components/Host";
import Footer from "../components/Footer";
import PageNotFound from "./PageNotFound";

function Accommodation({ accommodations }) {
  let { accommodationId } = useParams();
  const [selectedAccommodation, setselectedAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = accommodations.find((el) => el.id === accommodationId);
    console.log(foundAccommodation);
    setselectedAccommodation(foundAccommodation);
  }, [accommodationId, accommodations]);

  if (!selectedAccommodation) {
    return <PageNotFound />;
  }

  return (
    <main>
      <PageNav />
      <GallerySlider images={selectedAccommodation.pictures} title={selectedAccommodation.title} />
      <div className={styles.hostContainer}>
        <TitleContainer
          title={selectedAccommodation.title}
          location={selectedAccommodation.location}
          tags={selectedAccommodation.tags}
        />
        <Host host={selectedAccommodation.host} rating={selectedAccommodation.rating} />
      </div>
      <div className={styles.infoContainer}>
        <AccordionAccommodation title="Description" content={selectedAccommodation.description} />
        <AccordionAccommodation title="Equipements" content={selectedAccommodation.Amenities} />
      </div>
      <Footer />
    </main>
  );
}

export default Accommodation;
