import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import img from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[calc(100vh-90vh)] 
     flex items-center justify-center ">
      <div  className="w-[33%] h-full p-2 ">
        <img src={img} alt="logo" className="h-14 w-20"/>
      </div>
      <div className="w-[33%] h-full p-2 flex items-center justify-evenly">
        <NavLink to={"/"} className={({ isActive }) => isActive ? "text-yellow-700" : ""}>Home</NavLink>
      <NavLink to={"/products"} className={({ isActive }) => isActive ? "text-yellow-700" : ""}>Menu</NavLink>
      <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-yellow-700" : ""}>About</NavLink>
      </div>
      <div className="w-[33%] h-full p-2 flex items-center justify-center gap-14">
        <i className="ri-user-line"></i>
        <i className="ri-shopping-cart-2-line"></i>
        <i className="ri-search-line"></i>
        <button className="rounded-4xl bg-amber-300 p-2">Order online</button>
      </div>
      
    </div>
  );
};

export default Navbar;
