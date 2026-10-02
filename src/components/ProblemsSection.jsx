import { Cloud, Droplet, TriangleExclamation } from "@gravity-ui/icons";

const ProblemsSection = () => {
  return (
    <section className="bg-[#FAFCFB] border-t border-b border-green-700/40 py-20 md:py-24">
      <div className="max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#14825F]">
            THE URBAN REALITY
          </p>

          <h2 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
            Urban Flooding Often Starts With
            <br className="hidden sm:block" />
            Problems We Can See.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-[#74817C] sm:text-sm sm:leading-6">
            Blocked or damaged drainage systems combined with seasonal
            precipitation contribute to sudden localized waterlogging. Legacy
            municipal repair systems are often slow, reactive, and expensive to
            scale across thousands of city drains.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-lg border border-[#E0E7E4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#FFF7E8] text-[#E7A62E]">
              <Droplet width={18} height={18} />
            </div>

            <h3 className="mt-5 text-base font-semibold text-[#17211D]">
              Blocked Drainage
            </h3>

            <p className="mt-3 text-xs leading-5 text-[#71807A]">
              Poor drainage, clogged silt, and aging urban infrastructure can go
              unnoticed until water starts backing up during heavy rainfall.
            </p>

            <p className="mt-5 text-[10px] font-medium text-[#B58A32]">
              Primary source of urban flood risk
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border border-[#E0E7E4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#EFF8FB] text-[#4AA1B8]">
              <Cloud width={18} height={18} />
            </div>

            <h3 className="mt-5 text-base font-semibold text-[#17211D]">
              Water Accumulation
            </h3>

            <p className="mt-3 text-xs leading-5 text-[#71807A]">
              Standing water near drainage points indicates overflow, reduced
              flow capacity, or blocked infrastructure requiring attention.
            </p>

            <p className="mt-5 text-[10px] font-medium text-[#4A9DB5]">
              Reduced capacity & local pooling
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border border-[#E0E7E4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#FFF0EE] text-[#E67663]">
              <TriangleExclamation width={18} height={18} />
            </div>

            <h3 className="mt-5 text-base font-semibold text-[#17211D]">
              Heavy Rainfall Risk
            </h3>

            <p className="mt-3 text-xs leading-5 text-[#71807A]">
              Rainfall intensity combined with drainage condition can rapidly
              increase localized flood risk across vulnerable streets.
            </p>

            <p className="mt-5 text-[10px] font-medium text-[#D97061]">
              Dynamic high-impact risk assessment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
