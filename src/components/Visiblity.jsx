import { Eye, ChartColumn, MapPin } from "@gravity-ui/icons";

const Visiblity = () => {
  return (
    <section className="bg-[#F8FBFA] py-20 max-md:py-14">
      <div className="max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#15805D]">
            SYSTEM CITY RESILIENCE
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#17211D] max-md:text-3xl max-sm:text-2xl">
            Better Visibility. Faster Decisions.
            <br className="hidden sm:block" />
            More Resilient Cities.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-6 text-[#6B7872] max-md:text-sm">
            FlowScan helps shift drainage maintenance from reactive inspection
            to faster, risk-aware intervention using visual evidence and live
            environmental context.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Card 1 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md max-lg:last:col-span-2 max-sm:last:col-span-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7F2] text-[#15805D]">
              <Eye width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              Early Detection
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Identify blocked drains, debris accumulation, and water buildup
              before heavy rainfall turns small drainage problems into severe
              street flooding.
            </p>

            <div className="mt-6 border-t border-[#EDF1EF] pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#15805D]">
                Proactive Prevention
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF8FB] text-[#4A9DB5]">
              <ChartColumn width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              Data-Driven Decisions
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Convert real drainage photos and weather conditions into
              structured risk data that helps teams prioritize maintenance and
              emergency response.
            </p>

            <div className="mt-6 border-t border-[#EDF1EF] pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#4A9DB5]">
                Operational Clarity
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#E1E8E5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md max-lg:col-span-2 max-sm:col-span-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#D6962C]">
              <MapPin width={20} height={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
              Community Awareness
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6F7C76]">
              Improve visibility into neighborhood drainage conditions and make
              it easier for communities to identify, document, and communicate
              local flood risks.
            </p>

            <div className="mt-6 border-t border-[#EDF1EF] pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#D6962C]">
                Civic Participation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visiblity;
