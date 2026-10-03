import { useContext, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Envelope, Eye, Lock, Person } from "@gravity-ui/icons";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    emailRegister,
    authorizeWithGoogle,
    error,
    updateUser,
    setUser,
    setError,
  } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    emailRegister(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: URL })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: URL });
            setError("");
            toast.success("Registration Successful");
          })
          .catch((error) => {
            setError(error.code);
            toast.error(error.code);
          });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          setError(
            "Email address is already in use. Please use a different email or try logging in.",
          );
        } else if (e.code === "auth/invalid-email") {
          setError("Invalid email address format.");
        } else if (e.code === "auth/weak-password") {
          setError("Password is too weak. It should be at least 6 characters.");
        } else if (e.code === "auth/operation-not-allowed") {
          setError(
            "Email/password accounts are not enabled. Please contact support.",
          );
        } else if (e.code === "auth/missing-password") {
          setError("Password is required.");
        } else {
          setError(
            e.message || "An unexpected error occurred. Please try again.",
          );
        }
      });
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    authorizeWithGoogle()
      .then((result) => {
        setUser(result.user);
        setError("");
        toast.success("Registration Successful");
      })
      .catch((error) => {
        setError(error.code);
        toast.error(error.code);
      });
  };

  return (
    <>
      {/* Tabs */}
      <div className="grid grid-cols-2 rounded-xl bg-[#E7ECE9] p-1">
        <Link
          to="/auth/login"
          className="cursor-pointer rounded-lg px-4 py-3 text-center text-sm font-medium text-[#59665F] transition hover:text-[#15805D]"
        >
          Sign In
        </Link>

        <Link
          to="/auth/register"
          className="cursor-pointer rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-[#151B18] shadow-sm"
        >
          Create Account
        </Link>
      </div>

      {/* Heading */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111A16] max-sm:text-2xl">
          Create your FlowScan account
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#65736D]">
          Create an account to analyze drainage conditions and save your
          previous assessments.
        </p>
      </div>

      {/* Google */}
      <button
        className="btn mt-7 w-full cursor-pointer border-[#e5e5e5] bg-white text-black"
        onClick={handleGoogleSignIn}
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
        Continue with Google
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
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-[#1C2521]">
            Full Name
          </label>

          <div className="flex items-center rounded-lg border border-[#D5DFDA] bg-white px-4 focus-within:border-[#15805D]">
            <Person
              width={18}
              height={18}
              className="shrink-0 text-[#84918B]"
            />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

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
              placeholder="Enter your email address"
              className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-[#1C2521]">
            Password
          </label>

          <div className="flex items-center rounded-lg border border-[#D5DFDA] bg-white px-4 focus-within:border-[#15805D]">
            <Lock width={18} height={18} className="shrink-0 text-[#84918B]" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-[#84918B]"
            >
              <Eye width={18} height={18} />
            </button>
          </div>

          <p className="mt-2 text-[11px] text-[#87928D]">
            Use at least 8 characters.
          </p>
        </div>

        {/* Terms */}
        <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-[#65736D]">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#15805D]"
          />

          <span>
            I agree to the{" "}
            <button
              type="button"
              className="cursor-pointer font-medium text-[#15805D] hover:underline"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="cursor-pointer font-medium text-[#15805D] hover:underline"
            >
              Privacy Policy
            </button>
            .
          </span>
        </label>

        {error && <p className="text-base text-red-600 font-medium">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#15805D] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#106C4E]"
        >
          Create Account
          <ArrowRight width={16} height={16} />
        </button>
      </form>

      {/* Login */}
      <p className="mt-6 text-center text-xs text-[#65736D]">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="cursor-pointer font-semibold text-[#15805D] hover:underline"
        >
          Sign in
        </Link>
      </p>

      {/* Firebase */}
      <div className="mt-10 border-t border-[#E2E8E5] pt-7 text-center">
        <p className="text-[11px] text-[#8B9691]">
          Protected by Firebase Auth.
        </p>
      </div>
    </>
  );
};

export default Register;
