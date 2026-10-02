import CTA from "../components/CTA";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProblemsSection from "../components/ProblemsSection";
import TelementaryReport from "../components/TelementaryReport";
import Toolkit from "../components/Toolkit";
import Visiblity from "../components/Visiblity";

const Home = () => {
  return (
    <>
      <div className="my-20 max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <Hero />
      </div>
      <ProblemsSection />
      <HowItWorks id="how-it-works" />
      <Toolkit />
      <TelementaryReport />
      <Visiblity />
      <CTA />
    </>
  );
};

export default Home;
