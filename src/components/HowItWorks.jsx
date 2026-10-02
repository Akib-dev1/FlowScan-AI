import { ChartColumn, Cloud, Sparkles, Camera } from "@gravity-ui/icons";

const HowItWorks = () => {
  return (
    <section className="py-20 max-md:py-14">
      <div className="max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#15805D]">
            STANDARD OPERATING PIPELINE
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#17211D] max-md:text-3xl max-sm:text-2xl">
            From Drain Image to
            <br className="hidden sm:block" /> Actionable Insight
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-6 text-[#6B7872] max-md:text-sm">
            Our multi-modal assessment connects raw street-level visual capture
            with local weather context in four simple automated steps.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Step 1 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-[#FAFCFB] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="text-sm font-semibold text-[#15805D]">01</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#E6ECE9] text-[#74817C]">
                <Camera width={18} height={18} />
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#17211D]">
              Capture or Upload
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Take a clear photo of any roadside drain, gutter, culvert, or
              waterlogged area using your phone or upload an existing image.
            </p>

            <p className="mt-6 text-xs font-medium text-[#D47A6A]">
              JPG, PNG, WEBP supported
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-[#FAFCFB] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="text-sm font-semibold text-[#15805D]">02</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#E6ECE9] text-[#74817C]">
                <Sparkles width={18} height={18} />
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#17211D]">
              AI Inspection
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Computer vision analyzes visible blockage, debris, water level,
              drain condition, and other signs of restricted flow.
            </p>

            <p className="mt-6 text-xs font-medium text-[#D47A6A]">
              AI-powered image analysis
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-[#FAFCFB] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="text-sm font-semibold text-[#15805D]">03</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#E6ECE9] text-[#74817C]">
                <Cloud width={18} height={18} />
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#17211D]">
              Weather Context
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Live weather conditions such as rainfall, humidity, and
              precipitation intensity are added to the inspection context.
            </p>

            <p className="mt-6 text-xs font-medium text-[#D47A6A]">
              Live atmospheric data
            </p>
          </div>

          {/* Step 4 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-[#FAFCFB] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="text-sm font-semibold text-[#15805D]">04</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#E6ECE9] text-[#74817C]">
                <ChartColumn width={18} height={18} />
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#17211D]">
              Risk & Action
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              FlowScan combines image findings and weather data into a
              flood-risk assessment with prioritized recommended actions.
            </p>

            <p className="mt-6 text-xs font-medium text-[#D47A6A]">
              Actionable risk output
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
