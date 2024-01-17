import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";


const Nav = () => {
const [isOpen, setOpen] = useState(false);


  return (
    <>
      <div className=" grid grid-cols-3">
        <div className="border flex justify-center">
          <h1 className=" font-popins text-4xl font-bold logo">pti.</h1>
        </div>
        <div className="border flex justify-center">
          <div></div>
          <div>
            <details className="dropdown">
              <summary onClick={() => setOpen(!isOpen)} className="m-1 btn uppercase bg-white flex justify-between items-center gap-10"><span className=" font-bold">Menu</span> {isOpen ? (<IoIosArrowUp className=" text-2xl text-p"/>) : (<IoIosArrowDown className=" text-2xl text-p"/>)}</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="border flex justify-center">
          <button className=" p-4 rounded-full bg-[#fd6011]">
            <GoPerson className=" text-2xl text-white bg-[#fd6011]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
