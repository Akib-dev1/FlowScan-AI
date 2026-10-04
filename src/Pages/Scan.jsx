import { useRef, useState } from "react";
import {
  ArrowLeft,
  Camera,
  Cloud,
  Xmark,
  FileArrowUp,
  LocationArrow,
  ShieldCheck,
  Sparkles,
} from "@gravity-ui/icons";
import { useNavigate } from "react-router";

const Scan = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [location, setLocation] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleImage = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleFileChange = (e) => {
    handleImage(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    handleImage(e.dataTransfer.files[0]);
  };

  const removeImage = () => {
    setImage(null);

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(
          `${position.coords.latitude.toFixed(
            6,
          )}, ${position.coords.longitude.toFixed(6)}`,
        );
      },
      () => {
        alert("Unable to get your location.");
      },
    );
  };

  const handleAnalyze = async () => {
    if (!image) return;

    setAnalyzing(true);

    try {
      // Later send the image to your n8n webhook here.
      //
      const formData = new FormData();
      formData.append("image", image);
      formData.append("location", location);

      const response = await fetch(
        "https://n8n.srv1106977.hstgr.cloud/webhook/36e5f96e-aff5-4792-8de7-f3a105cdf4d5",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      console.log({
        image,
        location,
        response: data,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAF9] py-10 max-md:py-6">
      <div className="max-w-9/12 mx-auto max-md:max-w-10/12 max-sm:max-w-11/12">
        {/* Top */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#DDE5E1] bg-white px-4 py-2 text-sm font-medium text-[#53615B] shadow-sm transition hover:bg-[#F5F8F7]"
          >
            <ArrowLeft width={16} height={16} />
            Back
          </button>

          <div className="flex items-center gap-2 text-xs text-[#74817B] max-sm:hidden">
            <ShieldCheck width={16} height={16} className="text-[#15805D]" />
            Secure AI Inspection
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-12 max-w-2xl text-center max-md:mt-8">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#BBDCCE] bg-[#EAF7F2] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#15805D]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#15805D]">
              New Drainage Inspection
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#17211D] max-md:text-3xl max-sm:text-2xl">
            Analyze a Drain
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6B7872]">
            Upload a clear drainage photo. FlowScan AI will inspect visible
            obstruction and combine the findings with environmental context to
            assess localized flood risk.
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#DCE5E1] bg-white p-7 shadow-sm max-md:p-5 max-sm:p-4">
          {/* Step */}
          <div className="flex items-center justify-between gap-4 border-b border-[#E8EDEB] pb-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#15805D]">
                Step 01
              </p>

              <h2 className="mt-1 text-xl font-semibold text-[#17211D]">
                Drainage Image
              </h2>
            </div>

            <div className="rounded-lg bg-[#EAF7F2] px-3 py-1.5 text-xs font-medium text-[#15805D]">
              JPG · PNG · WEBP
            </div>
          </div>

          {/* Upload / Preview */}
          {!preview ? (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`mt-6 flex min-h-80 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 text-center transition max-sm:min-h-64 ${
                isDragging
                  ? "border-[#15805D] bg-[#F0F8F5]"
                  : "border-[#CDD9D4] bg-[#FAFCFB] hover:border-[#15805D] hover:bg-[#F7FBF9]"
              }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5F0] text-[#15805D]">
                <FileArrowUp width={26} height={26} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#17211D]">
                Upload drainage image
              </h3>

              <p className="mt-2 text-sm text-[#77837E]">
                Drag and drop your photo here or click to browse
              </p>

              <button
                type="button"
                className="mt-5 flex cursor-pointer items-center gap-2 rounded-lg bg-[#15805D] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#106C4E]"
              >
                <Camera width={17} height={17} />
                Choose Image
              </button>

              <p className="mt-4 text-[11px] text-[#97A19D]">
                For best results, keep the drain clearly visible and avoid
                heavily blurred images.
              </p>
            </div>
          ) : (
            <div className="relative mt-6 overflow-hidden rounded-2xl bg-[#EEF3F1]">
              <img
                src={preview}
                alt="Drain preview"
                className="h-105 w-full object-contain max-md:h-80 max-sm:h-64"
              />

              <button
                type="button"
                onClick={removeImage}
                className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-[#53615B] shadow-md transition hover:bg-red-50 hover:text-red-500"
              >
                <Xmark width={16} height={16} />
              </button>

              <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-2 text-xs text-white backdrop-blur-sm">
                {image?.name}
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Location */}
          <div className="mt-7">
            <div className="flex items-end justify-between gap-4 max-sm:items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#15805D]">
                  Step 02
                </p>

                <h2 className="mt-1 text-lg font-semibold text-[#17211D]">
                  Inspection Location
                </h2>
              </div>

              <span className="text-xs text-[#8A9690]">Optional</span>
            </div>

            <div className="mt-4 flex gap-3 max-sm:flex-col">
              <div className="flex flex-1 items-center rounded-xl border border-[#D5DFDA] bg-white px-4 focus-within:border-[#15805D]">
                <LocationArrow
                  width={18}
                  height={18}
                  className="shrink-0 text-[#84918B]"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Latitude, longitude or location"
                  className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-[#A0AAA5]"
                />
              </div>

              <button
                type="button"
                onClick={getLocation}
                className="cursor-pointer rounded-xl border border-[#D5DFDA] bg-white px-5 py-3 text-sm font-semibold text-[#15805D] transition hover:bg-[#F2F8F5] max-sm:w-full"
              >
                Use My Location
              </button>
            </div>
          </div>

          {/* What happens */}
          <div className="mt-7 grid grid-cols-3 gap-3 max-md:grid-cols-1">
            <div className="rounded-xl border border-[#E3EAE7] bg-[#FAFCFB] p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF7F2] text-[#15805D]">
                <Sparkles width={16} height={16} />
              </div>

              <p className="mt-3 text-sm font-semibold text-[#17211D]">
                AI Inspection
              </p>

              <p className="mt-1 text-xs leading-5 text-[#7A8781]">
                Detect blockage and visible drainage conditions.
              </p>
            </div>

            <div className="rounded-xl border border-[#E3EAE7] bg-[#FAFCFB] p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EDF7FA] text-cyan-600">
                <Cloud width={16} height={16} />
              </div>

              <p className="mt-3 text-sm font-semibold text-[#17211D]">
                Weather Context
              </p>

              <p className="mt-1 text-xs leading-5 text-[#7A8781]">
                Combine inspection data with current weather conditions.
              </p>
            </div>

            <div className="rounded-xl border border-[#E3EAE7] bg-[#FAFCFB] p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF1EF] text-red-500">
                <ShieldCheck width={16} height={16} />
              </div>

              <p className="mt-3 text-sm font-semibold text-[#17211D]">
                Risk Assessment
              </p>

              <p className="mt-1 text-xs leading-5 text-[#7A8781]">
                Generate flood risk and prioritized recommended actions.
              </p>
            </div>
          </div>

          {/* Analyze */}
          <div className="mt-7 border-t border-[#E5EBE8] pt-6">
            <button
              type="button"
              disabled={!image || analyzing}
              onClick={handleAnalyze}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#15805D] px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#106C4E] disabled:cursor-not-allowed disabled:bg-[#A8BDB5]"
            >
              <Sparkles width={18} height={18} />

              {analyzing ? "Analyzing Drainage..." : "Analyze Drainage"}
            </button>

            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#8A9690]">
              <ShieldCheck width={13} height={13} className="text-[#15805D]" />
              Your image is processed securely for drainage assessment.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Scan;
