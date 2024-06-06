import React, {useState} from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
//import {}

const Navbar = () => {
const [nav,setNav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/*Left side*/}
      <div className="flex items-center">
        <div onClick={()=> setNav(!nav)}className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="p-1 text-white bg-black rounded-full">Delivery</p>
          <p>Pickup</p>
        </div>
      </div>

      {/* search input*/}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="w-full p-4 bg-transparent"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/*cart button*/}
      <button className="items-center hidden py-2 text-white bg-black rounded-full md:flex sm:flex">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/*mobile menu*/}
      {/*overlay*/}
      {nav ? <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/70"></div> :''}
      {/* side drawer menu*/}
      <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose
            onClick={() => setNav(!nav)}
          size={25}
          className="absolute cursor-pointer right-4 top-4"
        />
        <h2 className="p-4 text-2xl">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul>
            <li className="flex py-4 mr-4 text-xl ">
              <TbTruckDelivery size={25} className="4" />
              Orders
            </li>
            <li className="flex py-4 mr-4 text-xl ">
              <MdFavorite size={25} className="4" />
              Favorites
            </li>
            <li className="flex py-4 mr-4 text-xl ">
              <FaWallet size={25} className="4" />
              Wallet
            </li>
            <li className="flex py-4 mr-4 text-xl ">
              <MdHelp size={25} className="4" />
              Help
            </li>
            <li className="flex py-4 mr-4 text-xl ">
              <AiFillTag size={25} className="4" />
              Promotions
            </li>
            <li className="flex py-4 mr-4 text-xl ">
              <BsFillSaveFill size={25} className="4" />
              Best Ones
            </li>
            <li className="flex py-4 mr-4 text-xl ">
              <FaUserFriends size={25} className="4" />
              Invite Friends
            </li>bg-red-200
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
