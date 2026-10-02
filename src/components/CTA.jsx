import { Camera, ArrowUpRightFromSquare } from "@gravity-ui/icons";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-20 max-md:py-14">
      <div className="max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#CFE4DC] bg-[#EAF6F2] px-8 py-16 text-center max-md:px-6 max-md:py-12 max-sm:px-4">
          {/* Decorative Circles */}
          <div className="absolute -left-20 -top-16 h-48 w-48 rounded-full border border-[#D7EAE3]"></div>

          <div className="absolute -bottom-24 -left-10 h-56 w-56 rounded-full border border-[#D7EAE3]"></div>

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#D7EAE3]"></div>

          <div className="absolute -bottom-28 right-8 h-48 w-48 rounded-full border border-[#D7EAE3]"></div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#15805D]">
              NEXT: SCAN YOUR DRAIN
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#17211D] max-md:text-3xl max-sm:text-2xl">
              Turn a Drainage Photo Into
              <br className="hidden sm:block" />
              Actionable Insight
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#68766F] max-md:text-sm max-md:leading-6">
              Upload a drainage image and let FlowScan AI analyze blockage,
              drainage condition, live weather context, and localized flood risk
              in seconds.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex items-center justify-center gap-4 max-sm:flex-col">
              <Link
                to={"/scan"}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#15805D] px-5 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#106C4E] max-sm:w-full"
              >
                <Camera width={17} height={17} />
                Start a Drain Scan
              </Link>

              <Link
                to={"/"}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#C9DCD5] bg-white px-5 py-3 text-base font-semibold text-[#17211D] shadow-sm transition hover:bg-[#F8FCFA] max-sm:w-full"
              >
                Read Documentation
                <ArrowUpRightFromSquare width={17} height={17} />
              </Link>
            </div>

            {/* Bottom Text */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#7C8A84]">
              <span>Account required</span>
              <span className="max-sm:hidden">•</span>
              <span>Mobile friendly</span>
              <span className="max-sm:hidden">•</span>
              <span>Fast AI analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
