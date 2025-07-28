import Logo from '/Logo.png';
import SearchBar from '../components/HeaderComponents/Search/SearchBar'
import UserRelatedButton from '../components/HeaderComponents/UserRelatedButton'
import { CiLocationOn } from "react-icons/ci";
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

        <SearchBar/>

        <UserRelatedButton/>
      </nav>
    </header>
  );
};

export default Header;