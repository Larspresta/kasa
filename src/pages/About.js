import Accordion from "../components/Accordion";
import HeroBanner from "../components/HeroBanner";
import PageNav from "../components/PageNav";
import aboutData from "../data/about.json";

function About() {
  return (
    <div>
      <PageNav />
      <HeroBanner />
      <Accordion data={aboutData} />
    </div>
  );
}

export default About;
