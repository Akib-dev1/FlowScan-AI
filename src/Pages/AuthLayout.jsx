import { Outlet, useNavigate } from "react-router";
import { ArrowLeft, ShieldCheck, Lock } from "@gravity-ui/icons";

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#F8FAF9]">
      <div className="grid min-h-screen grid-cols-2 max-lg:grid-cols-1">
        {/* ================= LEFT SIDE ================= */}
        <section className="relative overflow-hidden border-r border-[#E3E9E6] bg-[#F2F8F5] max-lg:hidden">
          {/* Dotted Background */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(#B9D1C7 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-screen w-[76%] flex-col py-16">
            {/* Logo + Back */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#15805D] text-white">
                  <span className="text-lg font-bold">⌗</span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-[#111A16]">
                  FlowScan.<span className="text-[#15805D]">ai</span>
                </h1>
              </div>

              <button
                onClick={() => navigate("/")}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#E1E7E4] bg-white px-4 py-2 text-sm font-medium text-[#52615B] shadow-sm transition hover:bg-gray-50"
              >
                <ArrowLeft width={16} height={16} />
                Back
              </button>
            </div>

            {/* Main Copy */}
            <div className="mt-20">
              <div className="flex w-fit items-center gap-2 rounded-full border border-[#BBDCCE] bg-[#EAF7F2] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15805D]" />

                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#25342E]">
                  Civic Infrastructure AI
                </span>
              </div>

              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#15201B] xl:text-5xl">
                Smarter Drainage
                <br />
                Insights Start Here.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#65736D] xl:text-lg">
                FlowScan AI evaluates roadside drainage imagery alongside
                real-time Doppler radar conditions to detect obstruction,
                calculate acute flood vulnerability, and recommend preventive
                civic dispatch.
              </p>
            </div>

            {/* Inspection Card */}
            <div className="mt-auto max-w-lg rounded-xl border border-[#D7E2DD] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E7ECEA] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />

                  <p className="font-mono text-xs font-semibold tracking-wide text-[#17211D]">
                    INSPECTION #FS-2025-0881
                  </p>
                </div>

                <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[10px] font-semibold text-red-500">
                  HIGH RISK
                </span>
              </div>

              <div className="flex gap-4 py-4">
                <img
                  src="/drainage.png"
                  alt="Drain inspection"
                  className="h-20 w-28 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="text-[#66736D]">Blockage:</span>

                    <span className="font-mono font-semibold text-red-500">
                      78% Obstructed
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-red-100">
                    <div className="h-full w-[78%] rounded-full bg-red-500" />
                  </div>

                  <p className="mt-3 text-xs font-medium text-sky-600">
                    14.2 mm/h Radar Inflow Active
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#E7ECEA] pt-4">
                <div className="flex items-center gap-2 text-xs text-[#617069]">
                  <ShieldCheck
                    width={14}
                    height={14}
                    className="text-[#15805D]"
                  />
                  Verified Municipal Dispatch Protocol
                </div>

                <span className="text-xs font-medium text-[#15805D]">
                  Ready
                </span>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-24 flex items-center justify-between border-t border-[#DDE6E2] pt-4 text-xs text-[#7A8781]">
              <div className="flex items-center gap-2">
                <Lock width={14} height={14} className="text-[#15805D]" />
                Firebase Municipal IAM • 256-bit TLS
              </div>

              <span>Hack for Humanity 2026</span>
            </div>
          </div>
        </section>

        {/* ================= RIGHT SIDE ================= */}
        <section className="flex min-h-screen items-center justify-center bg-[#FBFCFC] px-6 py-12 max-sm:px-4">
          <div className="w-full max-w-125">
            {/* Mobile Header */}
            <div className="mb-10 hidden items-center justify-between max-lg:flex">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#15805D] text-white">
                  <span className="font-bold">⌗</span>
                </div>

                <h1 className="text-xl font-bold text-[#111A16]">
                  FlowScan.<span className="text-[#15805D]">ai</span>
                </h1>
              </div>

              <button
                onClick={() => navigate("/")}
                className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600"
              >
                <ArrowLeft width={15} height={15} />
                Back
              </button>
            </div>

            {/* Login/Register goes here */}
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthLayout;
