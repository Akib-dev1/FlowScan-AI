import ReportCard from "./ReportCard";
import { Plus } from "@gravity-ui/icons";
import { ArrowRight } from "@gravity-ui/icons";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <div className="hero-section flex items-center gap-8 max-lg:flex-col max-lg:items-stretch max-md:gap-6">
        {/* Left Section */}
        <div className="left-section w-full flex-1">
          <div className="px-4 py-2 max-h-fit text-[#15805D] font-semibold flex items-center gap-2 rounded-full border bg-[#15805D]/10 max-w-fit text-sm max-sm:text-xs max-sm:px-3 max-sm:py-1.5">
            <span className="inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-[#15805D] opacity-75"></span>
            AI-powered Drainage Risk Assessment
          </div>

          <div>
            <h1 className="text-7xl max-w-2xl font-semibold mt-4 leading-[1.05] max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
              See the Risk Before the{" "}
              <span className="text-[#15805D]">Flood.</span>
            </h1>

            <p className="text-xl text-[#4E5C56] max-w-2xl my-4 leading-relaxed max-lg:text-lg max-md:text-base max-sm:text-sm">
              FlowScan AI analyzes municipal drainage photos alongside real-time
              Doppler weather to detect blockage severity, calculate flash flood
              risks, and recommend prioritized maintenance in seconds.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 my-4 flex-wrap max-sm:flex-col max-sm:items-stretch">
              <Link to={"/scan"} className="flex cursor-pointer items-center justify-center gap-2 px-4 py-2 shadow-md bg-[#15805D] text-white text-lg font-semibold rounded-xl max-md:text-base max-sm:w-full">
                <Plus />
                Analyze a Drain
              </Link>

              <Link
                to={"/#how-it-works"}
                className="flex items-center justify-center cursor-pointer gap-2 px-4 py-2 text-lg font-semibold shadow-sm border border-gray-200 rounded-xl max-md:text-base max-sm:w-full"
              >
                See How It Works
                <ArrowRight />
              </Link>
            </div>

            {/* Features */}
            <div className="max-w-2/3 max-lg:max-w-full">
              <div className="pt-4 border-t flex flex-wrap gap-y-3 gap-x-6 text-xs sm:text-sm font-medium text-content-secondary">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#15805D] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>

                  <span>Computer Vision Blockage Meter</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#15805D] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>

                  <span>Live Weather Rainfall Context</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#15805D] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>

                  <span>Actionable Dispatch Severity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Card */}
        <div className="w-full flex-1 max-lg:max-w-full">
          <ReportCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
