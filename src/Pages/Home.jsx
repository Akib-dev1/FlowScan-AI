import { useLocation } from "react-router";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProblemsSection from "../components/ProblemsSection";
import TelementaryReport from "../components/TelementaryReport";
import Toolkit from "../components/Toolkit";
import Visiblity from "../components/Visiblity";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);
  return (
    <>
      <div className="my-20 max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <Hero />
      </div>
      <div id="impact">
        <ProblemsSection />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="features">
        <Toolkit />
      </div>
      <div id="telemetry">
        <TelementaryReport />
      </div>
      <Visiblity />
      <CTA />
    </>
  );
};

export default Home;
