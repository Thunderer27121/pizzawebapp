import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import img from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="w-full shadow-md sticky top-0 z-50 bg-black">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-3">

        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-2 md:mb-0">
          <img src={img} alt="logo" className="h-14 w-20" />
        </div>

        <div className="w-full md:w-1/3 flex justify-center space-x-6">
          <NavLink to={"/"} className={({ isActive }) => isActive ? "text-yellow-700 font-semibold" : "text-white"}>Home</NavLink>
          <NavLink to={"/menu"} className={({ isActive }) => isActive ? "text-yellow-700 font-semibold" : "text-white"}>Menu</NavLink>
          <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-yellow-700 font-semibold" : "text-white"}>About</NavLink>
        </div>

        <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-6 mt-2 md:mt-0">
          <i className="ri-user-line text-xl"></i>
          <i className="ri-shopping-cart-2-line text-xl"></i>
          <i className="ri-search-line text-xl"></i>
          <button className="bg-amber-300 px-4 py-1 rounded-full font-medium text-sm">Order Online</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
