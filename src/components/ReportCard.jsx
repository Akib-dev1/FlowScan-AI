import { CircleInfo } from "@gravity-ui/icons";

const ReportCard = () => {
  return (
    <div>
      <div className="right-section">
        <div className="flex rounded-2xl flex-col gap-2 border border-gray-300 p-6">
          <div className="flex items-center gap-2 border-b pb-4 justify-between">
            <div className="flex items-center gap-2">
              <span class="inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-red-500 opacity-75"></span>{" "}
              <p className="text-sm manrope">INSPECTION #FS-8042</p>
              <p className="text-sm manrope">| GPS: 47.6062° N, 122.3321° W</p>
            </div>
            <span className="text-sm px-2 py-1 shadow-sm bg-red-400/20 text-red-400 font-semibold uppercase">
              High Flood Risk
            </span>
          </div>
          <div className="">
            <img
              src="/drainage.png"
              alt="drainage report"
              className="min-w-full rounded-2xl max-h-80 my-4"
            />
          </div>
          <div className="flex w-full items-center gap-4">
            <div className="manrope bg-[#F8FAF9] rounded-3xl p-4 max-w-fit h-28 shadow-md">
              <h4 className="text-xs font-semibold text-gray-600/70 uppercase">
                Blockage
              </h4>
              <p className="text-base text-rose-500 font-semibold mt-2">
                <span>78%</span> Obstructed
              </p>
            </div>
            <div className="manrope bg-[#F8FAF9] rounded-3xl p-4 max-w-fit h-28 shadow-md">
              <h4 className="text-xs font-semibold text-gray-600/70 uppercase">
                Drain Condition
              </h4>
              <p className="text-base text-orange-500 font-semibold mt-2">
                Impaired Inlet
              </p>
            </div>
            <div className="manrope bg-[#F8FAF9] rounded-3xl p-4 max-w-fit h-28 shadow-md">
              <h4 className="text-xs font-semibold text-gray-600/70 uppercase">
                Current Weather
              </h4>
              <p className="text-base text-cyan-500 font-semibold mt-2">
                14.2 mm/h Rain
              </p>
            </div>
            <div className="manrope bg-[#F8FAF9] rounded-3xl p-4 max-w-fit h-28 shadow-md">
              <h4 className="text-xs font-semibold text-gray-600/70 uppercase">
                AI Confidence
              </h4>
              <p className="text-base text-green-500 font-semibold mt-2">
                <span>94.6%</span> Matched
              </p>
            </div>
          </div>
          <div className="p-4 mt-4 flex gap-2 bg-[#F2F9F6] max-w-2xl shadow-sm border border-green-600/20 rounded-2xl">
            <CircleInfo width={30} height={30} className="text-green-700" />
            <p>
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
