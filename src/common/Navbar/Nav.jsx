import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const navLink = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Details</a>
      </li>
      <li>
        <a>Category</a>
      </li>
      <li>
        <a>My Favorites</a>
      </li>
      <li>
        <a>Profile</a>
      </li>
      <li>
        <a>Log In/Sign Up</a>
      </li>
    </>
  );

  return (
    <>
      <div className=" grid grid-cols-5 lg:grid-cols-4 bg-transparent mt-3 justify-between border-b-2 md:border-b-0 pb-3 pr-5 md:pr-0">
        <div className=" flex justify-center items-center">
          <h1 className=" font-popins text-2xl md:text-4xl font-bold logo">
            pti.
          </h1>
        </div>
        <div className=" flex justify-center items-center lg:col-span-2 md:col-span-3 col-span-4 lg:gap-2">
          <div className=" flex items-center md:w-9/12 bg-white rounded-lg">
            <CiSearch className="text-2xl text-p relative left-3" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Audionbook"
              className=" rounded-md md:rounded-lg text-xs md:text-sm py-2 md:py-3 w-full pl-4 outline-none"
            />
          </div>
          {/* Menu section */}
          <div className=" md:w-3/12 w-1/3">
            <details className="dropdown w-full">
              <summary
                onClick={() => setOpen(!isOpen)}
                className="m-1 active:opacity-40 active:ease-in hover:text-[#fd6011] rounded-md md:rounded-lg uppercase bg-white flex justify-between p-2 md:p-3 flex-row items-center w-full"
              >
                <span className=" font-bold text-xs md:text-sm">Menu</span>{" "}
                {isOpen ? (
                  <IoIosArrowUp className=" lg:text-xl md:text-lg text-p" />
                ) : (
                  <IoIosArrowDown className=" lg:text-xl md:text-lg text-p" />
                )}
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md">
                {navLink}
              </ul>
            </details>
          </div>
        </div>
        <div className=" flex justify-center">
          <button className=" hidden md:block p-4 rounded-full bg-[#fd6011]">
            <GoPerson className=" text-2xl text-white bg-[#fd6011]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
