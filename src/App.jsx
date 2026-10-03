import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#F7FAF8] shadow-md sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default App;
