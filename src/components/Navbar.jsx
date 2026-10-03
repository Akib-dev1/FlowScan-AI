import { Link } from "react-router";
import { Camera } from "@gravity-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const NavMenu = (
    <>
      <li className="text-base font-semibold text-[#17211D]">
        <Link to={"/#how-it-works"}>How it works</Link>
      </li>
      <li className="text-base font-semibold text-[#17211D]">
        <Link to={"/#features"}>Features</Link>
      </li>
      <li className="text-base font-semibold text-[#17211D]">
        <Link to={"/#telemetry"}>Telemetry Preview</Link>
      </li>
      <li className="text-base font-semibold text-[#17211D]">
        <Link to={"/#impact"}>Impact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-inherit max-w-9/12 max-md:max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavMenu}
            </ul>
          </div>
          <Link to={"/"} className="max-w-48">
            <img src="/screen.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavMenu}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/auth/login"
            className="btn btn-ghost btn-link text-[#17211D] no-underline hover:underline text-base mr-2"
          >
            Login
          </Link>
          <Link
            to={"/scan"}
            className="btn rounded-lg bg-[#15805D] text-base flex items-center text-white"
          >
            <Camera /> Analyze a Drain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
