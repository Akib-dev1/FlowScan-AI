import { useContext, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Envelope,
  Eye,
  Lock,
  ShieldCheck,
} from "@gravity-ui/icons";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { emailLogin, setError, setUser, error, authorizeWithGoogle } =
    useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    emailLogin(email, password)
      .then((result) => {
        setUser(result.user);
        //navigate(state ? state : "/");
      })
      .catch((e) => {
        if (e.code === "auth/user-not-found") {
          setError("No account found with this email. Please register first.");
        } else if (e.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else if (e.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else if (e.code === "auth/too-many-requests") {
          setError(
            "Too many unsuccessful login attempts. Please try again later.",
          );
        } else if (e.code === "auth/user-disabled") {
          setError("This account has been disabled. Contact support for help.");
        } else if (e.code === "auth/invalid-credential") {
          setError(
            "Invalid credentials. Please check your email and password.",
          );
        } else {
          setError(
            e.message || "An unexpected error occurred. Please try again.",
          );
        }
      });
  };
  const handleGoogleLogin = () => {
    authorizeWithGoogle()
      .then((result) => {
        setUser(result.user);
        //navigate(state ? state : "/");
        setError("");
        toast("Login Successful");
      })
      .catch((error) => {
        setError(error.code);
        toast(error.code);
      });
  };

  return (
    <>
      {/* Tabs */}
      <div className="grid grid-cols-2 rounded-xl bg-[#E7ECE9] p-1">
        <Link
          to="/auth/login"
          className="cursor-pointer rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-[#151B18] shadow-sm"
        >
          Sign In
        </Link>

        <Link
          to="/auth/register"
          className="cursor-pointer rounded-lg px-4 py-3 text-center text-sm font-medium text-[#59665F] transition hover:text-[#15805D]"
        >
          Create Account
        </Link>
      </div>

      {/* Heading */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111A16] max-sm:text-2xl">
          Welcome to FlowScan AI
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#65736D]">
          Sign in to analyze drainage conditions and access your previous
          assessments.
        </p>
      </div>

      {/* Google */}
      <button
        className="btn mt-7 w-full cursor-pointer border-[#e5e5e5] bg-white text-black"
        onClick={handleGoogleLogin}
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>

      {/* Divider */}
      <div className="my-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#D9E1DD]" />

        <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#87928D] max-sm:text-[10px]">
          Or continue with email
        </span>

        <div className="h-px flex-1 bg-[#D9E1DD]" />
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Email */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-[#1C2521]">
            Email Address
          </label>

          <div className="flex items-center rounded-lg border border-[#D5DFDA] bg-white px-4 focus-within:border-[#15805D]">
            <Envelope
              width={18}
              height={18}
              className="shrink-0 text-[#84918B]"
            />

            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m.inspector@seattle.gov"
              className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-xs font-semibold text-[#1C2521]">
              Password
            </label>

            <button
              type="button"
              className="cursor-pointer text-xs font-medium text-[#15805D] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <div className="flex items-center rounded-lg border border-[#D5DFDA] bg-white px-4 focus-within:border-[#15805D]">
            <Lock width={18} height={18} className="shrink-0 text-[#84918B]" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-[#84918B]"
            >
              <Eye width={18} height={18} />
            </button>
          </div>
        </div>

        {/* Remember */}
        <div className="flex items-center justify-between gap-4 max-sm:items-start">
          <label className="flex cursor-pointer items-center gap-2 text-xs text-[#65736D]">
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer accent-[#15805D]"
            />
            Remember this device
          </label>

          <div className="flex items-center gap-1.5 text-xs text-[#84918B]">
            <ShieldCheck width={14} height={14} className="text-[#15805D]" />
            Secure Session
          </div>
        </div>

        {error && <p className="text-base text-red-600 font-medium">{error}</p>}
        {/* Submit */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#15805D] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#106C4E]"
        >
          Sign In
          <ArrowRight width={16} height={16} />
        </button>
      </form>

      {/* Register Link */}
      <p className="mt-6 text-center text-xs text-[#65736D]">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="cursor-pointer font-semibold text-[#15805D] hover:underline"
        >
          Create account
        </Link>
      </p>

      {/* Terms */}
      <div className="mt-10 border-t border-[#E2E8E5] pt-7 text-center">
        <p className="text-[11px] leading-5 text-[#8B9691]">
          By continuing, you agree to FlowScan AI&apos;s{" "}
          <button className="cursor-pointer underline">Terms of Service</button>{" "}
          and{" "}
          <button className="cursor-pointer underline">Privacy Policy</button>
          .
          <br />
          Protected by Firebase Auth.
        </p>
      </div>
    </>
  );
};

export default Login;
