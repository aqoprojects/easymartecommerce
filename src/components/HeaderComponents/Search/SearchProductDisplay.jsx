
import SearchProductDetail from './SearchProductDetail';

const SearchProductDisplay = ({isMobile, isSearchActive, searchValue}) => {
  
  return (
    <div className={` ${isMobile && isSearchActive || searchValue && isSearchActive ? 'fixed top-13 bottom-0 right-0 left-0 z-90 opacity-100' : 'hidden'} bg-white  md:absolute md:top-18 opacity-0 md:h-130 md:w-126 bg-white   rounded-3xl md:shadow-sm md:shadow-black/20 transition-opacity duration-300 overflow-y-auto no-scrollbar overscroll-none`}>
        <div className={`${isSearchActive && searchValue ? 'block' : 'hidden'} w-full px-4 py-8 space-y-4 `}>
         
         <SearchProductDetail/>
         <SearchProductDetail/>
         <SearchProductDetail/>
         <SearchProductDetail/>
        </div>
      </div>
  )
}

export default SearchProductDisplay