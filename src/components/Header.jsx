import React from 'react';
import Logo from '/Logo.png';
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";

const Header = () =>
{
  return (
    <header className='max-auto py-3 shadow-xs shadow-black/10'>
      <nav className='w-full flex justify-between  items-center-safe px-4 lg:px-8 flex-wrap lg:flex-nowrap'>
        <div className=' max-w-40 '>
          <IoMenuOutline className='size-8 block lg:hidden' />
          <img src={Logo} alt="easy mart" className='w-[100%] min-w-30 hidden lg:block' />
        </div>
        <div className='flex space-x-0.5 items-center-safe lg:ml-10 '>
          <CiLocationOn className='size-6' />
          <p className=''>10115 New York</p>
        </div>

        <div className='flex-auto flex w-full lg:w-auto items-center-safe justify-center-safe px-4 order-last lg:order-none mt-3 lg:mt-0'>
          <div className='shadow-xs shadow-black/10 w-[100%] flex items-center justify-center pl-3 px-2 rounded-full'>
            <div className='bg-[#FDEAF8] rounded-full p-1 text-[#DE57C4] flex items-center-safe justify-center order-last lg:order-none'>
              <CiSearch className='size-6' />
            </div>
            <input type="text" className='flex-auto rounded-r-full h-14 pl-2 pr-4 outline-none placeholder:text-black/60 font--medium placeholder:text-lg truncate' placeholder='Search by product name' />
          </div>
        </div>


        <div className='bg-[#A02B84] lg:bg-[#FDEAFB] flex lg:space-x-1 items-center-safe justify-center-safe lg:ml-2 py-1 px-1 lg:pr-2 rounded-full'>
          <div className='flex items-center-safe justify-center-safe lg:space-x-1 py-1 px-3 lg:px-2 lg:bg-white text-white lg:text-[#B6349A] font-semibold rounded-full text-sm'>
            <BsCartDash className='size-5 lg:' />
            <span className='hidden lg:block'>14</span>
          </div>
          <p className='hidden lg:block font-medium text-md'>Cart</p>
        </div>
        <div className='hidden lg:flex ring-1 ring-[#DE57C4] items-center-safe justify-center-safe space-x-1.5 py-2 px-8 rounded-full font-medium ml-6'>
          <MdOutlinePeopleOutline />
          <span>Login</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;