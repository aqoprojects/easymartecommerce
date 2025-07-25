import React from 'react';

const Discount = () =>
{
  return (
    <article className='py-3 md:mt-20 px-4'>
      <section className='flex justify-between items-center-safe md:hidden bg-gray-200/40 py-5 px-5 rounded-xl'>
        <div>
           <p className='text-sm lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>Get 10% OFF On Your First Order</p>
          <h3 className='text-md  lg:text-[clamp(1.4rem,3vw,2.5rem)] font-semibold break-word mb-3'>Order Now Your Grocery!</h3>
          <div className='flex gap-2'>
            <div className=" w-9 h-8 grid place-content-center-safe rounded-md mb-1 bg-white">
              <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />
            </div>
            <div className=" w-9 h-8 grid place-content-center-safe rounded-md mb-1 bg-white ring-1 ring-[#A02894]/70">
              <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />
            </div> 
            <div className=" w-9 h-8 grid place-content-center-safe rounded-md mb-1 bg-white">
              <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />
            </div>
          </div>
        </div>
        <div className=" w-30 grid place-content-center-safe rounded-3xl mb-1">
              <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />

            </div>
      </section>


      <section className='w-full flex flex-wrap-reverse lg:flex-nowrap gap-4 justify-evenly bg-black/1 px-4 py-10 rounded-2xl'>
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory lg:overflow-visible  no-scrollbar">
          <div className="min-w-50">
            <div className="bg-white w-auto h-58 grid place-content-center-safe rounded-3xl mb-3">
              <img src="../../src/assets/images/products/orange.png" className="object-contain object-center" alt="orange" />

            </div>
            <div>
              <h4 className="text-xl font-medium mb-4">This is product a</h4>

              <div>
                <p className="text-sm font-normal">$2.71/lb</p>
                <div className="flex gap-3 text-md items-baseline mb-2">
                  <p className="font-medium text-xl">$99.99</p>
                  <p className="line-through text-gray-700">$99.99</p>
                </div>
                <div className="flex gap-8 text-md font-normal">
                  <p className="text-[#A02B84]">12 Left</p>
                  <p>12 Left</p>
                </div>
              </div>
            </div>
          </div>


          <div className="min-w-50">
            <div className="bg-white w-auto h-58 grid place-content-center-safe rounded-3xl mb-3">
              <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />

            </div>
            <div>
              <h4 className="text-xl font-medium mb-4">This is product a</h4>

              <div>
                <p className="text-sm font-normal">$2.71/lb</p>
                <div className="flex gap-3 text-md items-baseline mb-2">
                  <p className="font-medium text-xl">$99.99</p>
                  <p className="line-through text-gray-700">$99.99</p>
                </div>
                <div className="flex gap-8 text-md font-normal">
                  <p className="text-[#A02B84]">12 Left</p>
                  <p>12 Left</p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-50">
            <div className="bg-white w-auto h-58 grid place-content-center-safe rounded-3xl mb-3">
              <img src="../../src/assets/images/products/orange.png" className="object-contain object-center" alt="orange" />

            </div>
            <div>
              <h4 className="text-xl font-medium mb-4">This is product a</h4>

              <div>
                <p className="text-sm font-normal">$2.71/lb</p>
                <div className="flex gap-3 text-md items-baseline mb-2">
                  <p className="font-medium text-xl">$99.99</p>
                  <p className="line-through text-gray-700">$99.99</p>
                </div>
                <div className="flex gap-8 text-md font-normal">
                  <p className="text-[#A02B84]">12 Left</p>
                  <p>12 Left</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='w-full text-wrap'>
          <p className='text-[clamp(0.7rem,3vw,1.1rem)] lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>Get 10% OFF On Your First Order</p>
          <h3 className='text-[clamp(1.4rem,3vw,2.5rem)]  lg:text-[clamp(1.4rem,3vw,2.5rem)] font-semibold break-word'>Order Now Your Grocery!</h3>
          <div className="flex text-nowrap gap-2 overflow-auto py-1 px-1 lg:flex-wrap lg:overflow-visible lg:max-w-180 no-scrollbar">
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
            <button className="px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full">Fresh bakery</button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Discount;