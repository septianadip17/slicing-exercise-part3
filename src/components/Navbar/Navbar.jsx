import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div className=" dark:bg-gray-900 dark:text-white">
        <div className="bg-primary/40 py-2">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={logo} alt="logo" className="w-10" />
                Shopsy
              </a>
            </div>
            {/* search bar and order button */}
            <div>
              <div className="group">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
