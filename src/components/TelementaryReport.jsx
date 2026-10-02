import { CircleInfo } from "@gravity-ui/icons";

const TelementaryReport = () => {
  return (
    <section className="py-20 max-md:py-14 bg-white">
      <div className="max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#15805D]">
            LIVE TELEMETRY REPORT
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#17211D] max-md:text-3xl max-sm:text-2xl">
            Comprehensive Inspection Telemetry
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-6 text-[#6B7872] max-md:text-sm">
            FlowScan combines drainage image analysis, live weather conditions,
            blockage severity, and AI confidence into one structured inspection
            report.
          </p>
        </div>

        {/* Report Container */}
        <div className="mt-12 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm max-md:p-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-4 border-b pb-4 max-lg:flex-col max-lg:items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-red-500 opacity-75"></span>

              <p className="text-sm manrope font-medium max-sm:text-xs">
                INSPECTION #FS-8042
              </p>

              <span className="text-gray-300 max-sm:hidden">|</span>

              <p className="text-sm manrope text-gray-500 max-sm:text-xs">
                GPS: 47.6062° N, 122.3321° W
              </p>
            </div>

            <span className="rounded-lg bg-red-400/20 px-3 py-1.5 text-sm font-semibold uppercase text-red-500 shadow-sm max-sm:text-xs">
              High Flood Risk
            </span>
          </div>

          {/* Main Content */}
          <div className="mt-6 grid grid-cols-[1.2fr_0.8fr] gap-6 max-xl:grid-cols-1">
            {/* Left Side */}
            <div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/drainage.png"
                  alt="drainage inspection report"
                  className="h-[420px] w-full object-cover rounded-2xl max-lg:h-[360px] max-md:h-[300px] max-sm:h-[230px]"
                />
              </div>

              {/* Metrics */}
              <div className="mt-5 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div className="manrope bg-[#F8FAF9] rounded-2xl p-4 min-h-28 shadow-sm border border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-600/70 uppercase">
                    Blockage
                  </h4>

                  <p className="text-base text-rose-500 font-semibold mt-3">
                    <span>78%</span> Obstructed
                  </p>
                </div>

                <div className="manrope bg-[#F8FAF9] rounded-2xl p-4 min-h-28 shadow-sm border border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-600/70 uppercase">
                    Drain Condition
                  </h4>

                  <p className="text-base text-orange-500 font-semibold mt-3">
                    Impaired Inlet
                  </p>
                </div>

                <div className="manrope bg-[#F8FAF9] rounded-2xl p-4 min-h-28 shadow-sm border border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-600/70 uppercase">
                    Current Weather
                  </h4>

                  <p className="text-base text-cyan-500 font-semibold mt-3">
                    14.2 mm/h Rain
                  </p>
                </div>

                <div className="manrope bg-[#F8FAF9] rounded-2xl p-4 min-h-28 shadow-sm border border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-600/70 uppercase">
                    AI Confidence
                  </h4>

                  <p className="text-base text-green-500 font-semibold mt-3">
                    <span>94.6%</span> Matched
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4">
              {/* Risk Score */}
              <div className="rounded-2xl border border-red-300/50 bg-red-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-red-400">
                      Risk Assessment
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-red-500">
                      High Flood Risk
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-semibold text-[#17211D]">84</p>
                    <p className="text-xs text-gray-500">/100</p>
                  </div>
                </div>

                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-red-200">
                  <div className="h-full w-[84%] rounded-full bg-red-500"></div>
                </div>
              </div>

              {/* Weather */}
              <div className="rounded-2xl border border-green-600/20 bg-[#F2F9F6] p-5 shadow-sm">
                <div className="flex gap-3">
                  <CircleInfo
                    width={28}
                    height={28}
                    className="shrink-0 text-green-700"
                  />

                  <div>
                    <h4 className="font-semibold text-[#17211D]">
                      Live Atmospheric Sync Active
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#59665F]">
                      Heavy rainfall is currently increasing overflow
                      probability around this drainage segment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Condition Details */}
              <div className="rounded-2xl border border-gray-200 bg-[#F8FAF9] p-5">
                <h3 className="text-sm font-semibold uppercase text-[#17211D]">
                  Inspection Findings
                </h3>

                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                    <span className="text-sm text-gray-500">
                      Drainage Blockage
                    </span>

                    <span className="text-sm font-semibold text-red-500">
                      Severe
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                    <span className="text-sm text-gray-500">Surface Water</span>

                    <span className="text-sm font-semibold text-orange-500">
                      Elevated
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                    <span className="text-sm text-gray-500">
                      Rainfall Intensity
                    </span>

                    <span className="text-sm font-semibold text-cyan-500">
                      Heavy
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-gray-500">
                      Response Priority
                    </span>

                    <span className="text-sm font-semibold text-[#15805D]">
                      Immediate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Recommendation */}
          <div className="mt-6 flex gap-3 rounded-2xl border border-green-600/20 bg-[#F2F9F6] p-5 shadow-sm max-sm:p-4">
            <CircleInfo
              width={30}
              height={30}
              className="shrink-0 text-green-700"
            />

            <p className="text-sm leading-6 text-[#45534C] max-sm:text-xs max-sm:leading-5">
              <span className="font-semibold text-[#17211D]">
                Action Priority 1:
              </span>{" "}
              Immediate manual clearance of curb throat inlet required before
              storm peak in 35 minutes to prevent lane inundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelementaryReport;
