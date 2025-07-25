import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { PiCompassThin } from "react-icons/pi";

const WeeklySold = () => {
  return (
    <article className="md:bg-gray-100/60 lg:p-20 rounded-3xl lg:mt-18">
      <section className="mx-4 pl-8 pb-8  bg-white rounded-3xl shadow-xs shadow-black/20">
          <section className="w-full flex  justify-between items-start pl-4">
            <div className="mt-4">
              <p className='block md:hidden text-sm lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>Get 10% OFF</p>
              <h2 className="text-[clamp(1rem,3vw,2rem)] font-semibold">Trending Store Favorites</h2>
              <div className="hidden lg:flex text-nowrap gap-2 overflow-auto py-1 px-1 lg:flex-wrap lg:overflow-visible lg:max-w-180 no-scrollbar">
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                  <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full bg-white">Fresh bakery</button>
                </div>
            </div>
            <div className="bg-[#6C2358] pl-5 pr-5 md:pr-15 rounded-tr-3xl rounded-bl-2xl pt-1 pb-4  ">
              <div className="flex gap-1 items-center-safe ">
                <PiCompassThin className="text-white size-6"/>
                <p className="text-[clamp(0.7rem,3dvw,1.1rem)] text-white text-nowrap font-medium">Freshness Guarantee</p>
              </div>
              <p className="text-[clamp(1rem,3dvw,1.6rem)] text-white font-semibold mb-3 text-nowrap">Weekly Sold 1K+</p>

              <button className="hidden md:flex bg-white py-1.5 px-3 rounded-2xl gap-1 items-center-safe justify-center-safe text-sm font-semibold">
                 View More
                <GoArrowRight className="hidden md:block size-4"/>
              </button>
            </div>
            
          </section>
    
          {/* <section className=" flex  justify-between items-center mb-5">
            <div className="w-full flex justify-between items-center-safe  ">
              
              
              <div className="hidden lg:block">
                <button className="ring-1 ring-black/10 p-2 rounded-full bg-black/3 mr-4">
                  <MdArrowBackIosNew className="size-7 text-gray-400" />
                  </button>
                <button className="ring-1 ring-black/10 p-2 rounded-full ">
                <MdArrowForwardIos className="size-7 " />
                </button>
              </div>
            </div>
          </section> */}
    
          
    
          <section className="mt-2 pr-5">
            <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar">
              <div className="min-w-60">
                <div className="bg-gray-100/40 w-auto h-60 grid place-content-center-safe rounded-3xl mb-3">
                  <img src="../../src/assets/images/products/orange.png" className="object-contain object-center" alt="orange" />
                  
                </div>
                <div>
                  <h4 className="text-2xl font-medium mb-4">This is product a</h4>
    
                  <div>
                    <p className="text-md font-normal">$2.71/lb</p>
                    <div className="flex gap-3 text-xl items-baseline mb-2">
                      <p className="font-light text-2xl">$99.99</p>
                      <p className="line-through text-md text-gray-700">$99.99</p>
                    </div>
                    <div className="flex gap-8 text-lg font-light">
                      <p className="text-[#A02B84]">12 Left</p>
                      <p>12 Left</p>
                    </div>
                  </div>
                </div>
              </div>
    
    
            <div className="min-w-60">
                <div className="bg-gray-100/40 w-auto h-60 grid place-content-center-safe rounded-3xl mb-3">
                  <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />
                  
                </div>
                <div>
                  <h4 className="text-2xl font-medium mb-4">This is product a</h4>
    
                  <div>
                    <p className="text-md font-normal">$2.71/lb</p>
                    <div className="flex gap-3 text-xl items-baseline mb-2">
                      <p className="font-light text-2xl">$99.99</p>
                      <p className="line-through text-md text-gray-700">$99.99</p>
                    </div>
                    <div className="flex gap-8 text-lg font-light">
                      <p className="text-[#A02B84]">12 Left</p>
                      <p>12 Left</p>
                    </div>
                  </div>
                </div>
              </div>
    
            <div className="min-w-60">
                <div className="bg-gray-100/40 w-auto h-60 grid place-content-center-safe rounded-3xl mb-3">
                  <img src="../../src/assets/images/products/orange.png" className="object-contain object-center" alt="orange" />
                  
                </div>
                <div>
                  <h4 className="text-2xl font-medium mb-4">This is product a</h4>
    
                  <div>
                    <p className="text-md font-normal">$2.71/lb</p>
                    <div className="flex gap-3 text-xl items-baseline mb-2">
                      <p className="font-light text-2xl">$99.99</p>
                      <p className="line-through text-md text-gray-700">$99.99</p>
                    </div>
                    <div className="flex gap-8 text-lg font-light">
                      <p className="text-[#A02B84]">12 Left</p>
                      <p>12 Left</p>
                    </div>
                  </div>
                </div>
              </div>
    
            <div className="min-w-60">
                <div className="bg-gray-100/40 w-auto h-60 grid place-content-center-safe rounded-3xl mb-3">
                  <img src="../../src/assets/images/products/lime.png" className="object-contain object-center" alt="orange" />
                  
                </div>
                <div>
                  <h4 className="text-2xl font-medium mb-4">This is product a</h4>
    
                  <div>
                    <p className="text-md font-normal">$2.71/lb</p>
                    <div className="flex gap-3 text-xl items-baseline mb-2">
                      <p className="font-light text-2xl">$99.99</p>
                      <p className="line-through text-md text-gray-700">$99.99</p>
                    </div>
                    <div className="flex gap-8 text-lg font-light">
                      <p className="text-[#A02B84]">12 Left</p>
                      <p>12 Left</p>
                    </div>
                  </div>
                </div>
              </div>
    
            <div className="min-w-60">
                <div className="bg-gray-100/40 w-auto h-60 grid place-content-center-safe rounded-3xl mb-3">
                  <img src="../../src/assets/images/products/orange.png" className="object-contain object-center" alt="orange" />
                  
                </div>
                <div>
                  <h4 className="text-2xl font-medium mb-4">This is product a</h4>
    
                  <div>
                    <p className="text-md font-normal">$2.71/lb</p>
                    <div className="flex gap-3 text-xl items-baseline mb-2">
                      <p className="font-light text-2xl">$99.99</p>
                      <p className="line-through text-md text-gray-700">$99.99</p>
                    </div>
                    <div className="flex gap-8 text-lg font-light">
                      <p className="text-[#A02B84]">12 Left</p>
                      <p>12 Left</p>
                    </div>
                  </div>
                </div>
              </div>
    
            <div className="min-w-60">
                <div className="bg-gray-100/40 w-auto h-60 grid place-content-center-safe rounded-3xl mb-3">
                  <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />
                  
                </div>
                <div>
                  <h4 className="text-2xl  mb-4">This is product a</h4>
    
                  <div>
                    <p className="text-lg font-normal">$2.71/lb</p>
                    <div className="flex gap-3 text-lg items-baseline mb-2">
                      <p className="font-light text-2xl">$99.99</p>
                      <p className="line-through text-gray-700">$99.99</p>
                    </div>
                    <div className="flex gap-8 text-xl font-normal">
                      <p className="text-[#A02B84]">12 Left</p>
                      <p>12 Left</p>
                    </div>
                  </div>
                </div>
              </div>
    
            <div className="min-w-60">
                <div className="bg-gray-100/40 w-auto h-60 grid place-content-center-safe rounded-3xl mb-3">
                  <img src="../../src/assets/images/products/lime.png" className="object-contain object-center" alt="orange" />
                  
                </div>
                <div>
                  <h4 className="text-2xl font-medium mb-4">This is product a</h4>
    
                  <div>
                    <p className="text-md font-normal">$2.71/lb</p>
                    <div className="flex gap-3 text-xl items-baseline mb-2">
                      <p className="font-light text-2xl">$99.99</p>
                      <p className="line-through text-md text-gray-700">$99.99</p>
                    </div>
                    <div className="flex gap-8 text-lg font-light">
                      <p className="text-[#A02B84]">12 Left</p>
                      <p>12 Left</p>
                    </div>
                  </div>
                </div>
              </div>
    
    
            </div>
          </section>
          </section>
        </article>
  )
}

export default WeeklySold