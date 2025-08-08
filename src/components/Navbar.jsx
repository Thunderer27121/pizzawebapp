import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import img from "../images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowSearch(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="w-full shadow-md sticky top-0 z-50 bg-black">
      <div className="flex items-center justify-between px-4 py-3">
  
        <div className="flex items-center gap-3">
          <img src={img} alt="logo" className="h-14 w-20" />
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-white"}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-white"}>Menu</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-white"}>About</NavLink>
        </div>

        <div className="flex items-center gap-4" ref={wrapperRef}>
          <i className="ri-user-line text-xl text-white hidden md:inline"></i>
          <i className="ri-shopping-cart-2-line text-xl text-white cursor-pointer hidden md:inline" onClick={() => navigate("/cart")}></i>

          {showSearch ? (
            <input
              ref={searchRef}
              type="search"
              placeholder="Search pizza..."
              className="px-3 py-1 w-40 rounded-md bg-white text-black outline-none transition-all duration-300"
            />
          ) : (
            <i
              className="ri-search-line text-xl text-white cursor-pointer hidden md:inline"
              onClick={() => setShowSearch(true)}
            ></i>
          )}

          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line float-end"}></i>
          </div>
        </div>
      </div>

    
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-black py-4 transition-all duration-300">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-white text-lg">Home</NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)} className="text-white text-lg">Menu</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-white text-lg">About</NavLink>

          <div className="flex gap-6 mt-2">
            <i className="ri-user-line text-xl text-white"></i>
            <i className="ri-shopping-cart-2-line text-xl text-white cursor-pointer" onClick={() => navigate("/cart")}></i>
            <i
              className="ri-search-line text-xl text-white cursor-pointer"
              onClick={() => setShowSearch(true)}
            ></i>
          </div>

          <button className="bg-amber-300 px-4 py-2 mt-3 rounded-full font-medium text-sm">Order Online</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
