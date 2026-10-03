import { CircleInfo } from "@gravity-ui/icons";

const ReportCard = () => {
  return (
    <div className="w-full">
      <div className="right-section w-full">
        <div className="flex w-full flex-col gap-2 rounded-2xl border border-gray-300 p-6 max-md:p-4 max-sm:p-3">
          {/* Top Header */}
          <div className="flex items-center justify-between gap-4 border-b pb-4 max-md:flex-col max-md:items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex h-2.5 w-2.5 shrink-0 animate-ping rounded-full bg-red-500 opacity-75"></span>

              <p className="manrope text-sm max-sm:text-xs">
                INSPECTION #FS-8042
              </p>

              <p className="manrope text-sm text-gray-600 max-sm:w-full max-sm:text-xs">
                <span className="max-sm:hidden">| </span>
                GPS: 47.6062° N, 122.3321° W
              </p>
            </div>

            <span className="whitespace-nowrap rounded-md bg-red-400/20 px-2 py-1 text-sm font-semibold uppercase text-red-400 shadow-sm max-sm:text-xs">
              High Flood Risk
            </span>
          </div>

          {/* Image */}
          <div className="my-4 w-full overflow-hidden rounded-2xl">
            <img
              src="/drainage.png"
              alt="drainage report"
              className="h-80 w-full rounded-2xl object-cover max-md:h-64 max-sm:h-52"
            />
          </div>

          {/* Information Cards */}
          <div className="grid w-full grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {/* Blockage */}
            <div className="manrope min-h-28 rounded-2xl bg-[#F8FAF9] p-4 shadow-md">
              <h4 className="text-xs font-semibold uppercase text-gray-600/70">
                Blockage
              </h4>

              <p className="mt-2 text-base font-semibold text-rose-500 max-sm:text-sm">
                <span>78%</span> Obstructed
              </p>
            </div>

            {/* Drain Condition */}
            <div className="manrope min-h-28 rounded-2xl bg-[#F8FAF9] p-4 shadow-md">
              <h4 className="text-xs font-semibold uppercase text-gray-600/70">
                Drain Condition
              </h4>

              <p className="mt-2 text-base font-semibold text-orange-500 max-sm:text-sm">
                Impaired Inlet
              </p>
            </div>

            {/* Weather */}
            <div className="manrope min-h-28 rounded-2xl bg-[#F8FAF9] p-4 shadow-md">
              <h4 className="text-xs font-semibold uppercase text-gray-600/70">
                Current Weather
              </h4>

              <p className="mt-2 text-base font-semibold text-cyan-500 max-sm:text-sm">
                14.2 mm/h Rain
              </p>
            </div>

            {/* AI Confidence */}
            <div className="manrope min-h-28 rounded-2xl bg-[#F8FAF9] p-4 shadow-md">
              <h4 className="text-xs font-semibold uppercase text-gray-600/70">
                AI Confidence
              </h4>

              <p className="mt-2 text-base font-semibold text-green-500 max-sm:text-sm">
                <span>94.6%</span> Matched
              </p>
            </div>
          </div>

          {/* Action Priority */}
          <div className="mt-4 flex max-w-2xl gap-3 rounded-2xl border border-green-600/20 bg-[#F2F9F6] p-4 shadow-sm max-sm:p-3">
            <CircleInfo
              width={30}
              height={30}
              className="shrink-0 text-green-700 max-sm:w-5"
            />

            <p className="text-sm leading-6 max-sm:text-xs max-sm:leading-5">
              <span className="font-semibold">Action Priority 1:</span>{" "}
              Immediate manual clearance of curb throat inlet required before
              storm peak in 35 minutes to prevent lane inundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
