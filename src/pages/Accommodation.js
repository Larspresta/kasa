import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PageNav from "../components/PageNav";
import GallerySlider from "../components/GallerySlider";
import TitleContainer from "../components/TitleContainer";
import Host from "../components/Host";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

function Accommodation({ accommodations }) {
  let { accommodationId } = useParams();
  const [selectedAccommodation, setselectedAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = accommodations.find((el) => el.id === accommodationId);
    console.log(foundAccommodation);
    setselectedAccommodation(foundAccommodation);
  }, [accommodationId, accommodations]);

  if (!selectedAccommodation) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <PageNav />
      {/* <GallerySlider images={selectedAccommodation.pictures} /> */}
      <div>
        <TitleContainer
          title={selectedAccommodation.title}
          location={selectedAccommodation.location}
          tags={selectedAccommodation.tags}
        />
        <Host host={selectedAccommodation.host} />
      </div>
      <div>
        {/* <Accordion description={selectedAccommodation.description} />
        <Accordion equipements={selectedAccommodation.Amenities} /> */}
      </div>
      <Footer />
    </main>
  );
}

export default Accommodation;
