const Footer = () => {
  return (
    <footer className="bg-[#F7FAF9] text-[#17211D] px-8 md:px-10 py-10">
      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img src="/screen.png" alt="logo" className="max-w-48" />

          <p className="text-[15px] leading-6 text-[#4E5C56] max-w-sm">
            AI-powered drainage inspection and localized flood-risk assessment
            combining mobile computer vision with live atmospheric feeds.
          </p>

          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#B7DDD0] bg-[#EAF7F2] text-[#14825F] text-xs font-semibold">
              ♥ Built for Hack for Humanity
            </span>
          </div>
        </div>

        {/* Platform */}
        <nav className="flex flex-col gap-3">
          <h6 className="text-xs font-bold uppercase tracking-wide text-black mb-1">
            Platform
          </h6>

          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            How It Works
          </a>
          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Computer Vision
          </a>
          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Weather Sync
          </a>
          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Risk Indexing
          </a>
        </nav>

        {/* Solutions */}
        <nav className="flex flex-col gap-3">
          <h6 className="text-xs font-bold uppercase tracking-wide text-black mb-1">
            Solutions
          </h6>

          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Municipal Public Works
          </a>
          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Stormwater Authorities
          </a>
          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Civic Volunteer Teams
          </a>
          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Emergency Response
          </a>
        </nav>

        {/* Open Initiatives */}
        <nav className="flex flex-col gap-3">
          <h6 className="text-xs font-bold uppercase tracking-wide text-black mb-1">
            Open Initiatives
          </h6>

          <a
            href="#"
            className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer"
          >
            GitHub Repository ↗
          </a>

          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Dataset Documentation
          </a>

          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Privacy Policy
          </a>

          <a className="text-sm text-[#56635E] hover:text-[#14825F] cursor-pointer">
            Terms of Service
          </a>
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-[#DDE5E1] mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Copyright */}
          <p className="text-xs text-[#81908A]">
            © 2026 FlowScan AI. Urban Flood Prevention and Drainage
            Infrastructure Intelligence.
          </p>

          {/* Status */}
          <div className="flex items-center gap-4 text-xs text-[#81908A]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20966E]"></span>
              System Operational
            </span>

            <span className="text-[#A8B2AE]">•</span>

            <span>Doppler API Connected</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
