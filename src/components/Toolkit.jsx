import {
  Eye,
  Cloud,
  TriangleExclamation,
  FileText,
  MapPin,
  BranchesRight,
} from "@gravity-ui/icons";

const Toolkit = () => {
  return (
    <section className="bg-[#F8FBFA] py-20 max-md:py-14 border-y border-[#E8EEEB]">
      <div className="max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#15805D]">
            INTELLIGENT TOOLKIT
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#17211D] max-md:text-3xl max-sm:text-2xl">
            Smarter Drainage
            <br className="hidden sm:block" /> Assessment
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-6 text-[#6B7872] max-md:text-sm">
            FlowScan combines computer vision, weather context, and structured
            risk analysis to turn drainage images into useful field
            intelligence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Card 1 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7F2] text-[#15805D]">
              <Eye width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              AI Visual Inspection
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Detects visible blockage, debris accumulation, water buildup,
              surface condition, and signs of drainage restriction from uploaded
              images.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF8FB] text-[#4B9EB4]">
              <Cloud width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              Weather-Aware Assessment
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Adds live rainfall and atmospheric context to drainage conditions
              so local flood risk can be assessed more accurately.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1EF] text-[#D96F60]">
              <TriangleExclamation width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              Risk Categorization
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Converts inspection findings into clear Low, Medium, High, or
              Critical risk levels for easier decision-making.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3F0FF] text-[#7664C9]">
              <FileText width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              Action Recommendations
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Generates practical maintenance suggestions, response priorities,
              and follow-up actions based on the inspection result.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7E8] text-[#D99A2D]">
              <MapPin width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              Scan History & Geo Logs
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Stores inspection history with location context so drainage issues
              can be reviewed and tracked over time.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF6F4] text-[#3C8B78]">
              <BranchesRight width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              End-To-End Processing
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Connects image analysis, weather data, risk calculation, and
              report generation into one streamlined workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
