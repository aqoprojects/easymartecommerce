import { TbReceipt } from "react-icons/tb";

const AccountOrdersPage = () => {
  return (
    <article className="px-3">
      <div className="my-5">
        <h1 className="text-3xl font-semibold">My Orders</h1>
      </div>

      <div className="mb-8">
        <button className="bg-[#FEF5FD] ring-1 ring-[#B6349A] font-medium text-[#B6349A] px-5 py-2  text-[clamp(0.8rem,3vw,1.3rem)] rounded-xl mr-2 md:mr-3">All</button>
        <button className=" ring-1 ring-black/10 font-medium text-black/70 px-5 py-2 text-[clamp(0.8rem,3vw,1.3rem)] rounded-xl mr-2 md:mr-3">In Progress</button>
        <button className=" ring-1 ring-black/10 font-medium text-black/70 px-5 py-2 text-[clamp(0.8rem,3vw,1.3rem)] rounded-xl mr-2 md:mr-3">Delivered</button>
        <button className=" ring-1 ring-black/10 font-medium text-black/70 px-5 py-2 text-[clamp(0.8rem,3vw,1.3rem)] rounded-xl  md:mr-3">Cancelled</button>
      </div>

      <section className="grid grid-cols-2  lg:grid-cols-5 gap-8 py-8  ring-1 ring-gray-200 px-6 rounded-2xl mb-6">
        <div className="">
          <h2 className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">Order Details</h2>
          <p  className="text-[clamp(0.8rem,3vw,1rem)] font-medium text-black/50">Apr 5, 2025, 10:07 AM</p>
        </div>

        <div className="order-3 lg:order-none">
          <p className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">$54</p>
          <p className="text-[clamp(0.8rem,3vw,1rem)]  font-medium text-black/50">Paid with cash</p>
        </div>

        <div className="flex items-center-safe gap-4 order-4 lg:order-none">
          <div className="bg-black/4 p-2 rounded-full">
            <TbReceipt className="size-6"/>
          </div>
          <div >
            <p className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">Items</p>
            <p className="text-[clamp(0.8rem,3vw,1rem)] font-medium text-black/50">8x</p>
          </div>
        </div>


        <div className="order-2 lg:order-none">
          <button className="ring-1 ring-green-800 bg-green-100/30 font-medium text-green-800 px-3 py-1 text-sm rounded-xl">Completed</button>
        </div>

        <div className="order-last lg:order-none">
          <p  className="text-[clamp(0.8rem,3vw,1.1rem)] font-semibold ">View Order Details</p>
        </div>

        <div className='order-5 col-span-full'>
   

          <div className='w-full flex items-baseline-last justify-between bg-gray-100/70 p-3 rounded-3xl '>
            <div className='flex items-center-safe gap-3 overflow-auto no-scrollbar '>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              
              {/* <div className=' p-4 bg-white rounded-xl'>
                <p className='font-medium text-xl'>+12</p>
              </div> */}
            </div>
            
              {/* <MdArrowForwardIos className='size-6' /> */}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2  lg:grid-cols-5 gap-8 py-8  ring-1 ring-gray-200 px-6 rounded-2xl mb-6">
        <div className="">
          <h2 className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">Order Details</h2>
          <p  className="text-[clamp(0.8rem,3vw,1rem)] font-medium text-black/50">Apr 5, 2025, 10:07 AM</p>
        </div>

        <div className="order-3 lg:order-none">
          <p className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">$54</p>
          <p className="text-[clamp(0.8rem,3vw,1rem)]  font-medium text-black/50">Paid with cash</p>
        </div>

        <div className="flex items-center-safe gap-4 order-4 lg:order-none">
          <div className="bg-black/4 p-2 rounded-full">
            <TbReceipt className="size-6"/>
          </div>
          <div >
            <p className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">Items</p>
            <p className="text-[clamp(0.8rem,3vw,1rem)] font-medium text-black/50">8x</p>
          </div>
        </div>


        <div className="order-2 lg:order-none">
          <button className="ring-1 ring-red-800 bg-red-100/30 font-medium text-red-800 px-3 py-1 text-sm rounded-xl">Cancelled</button>
        </div>

        <div className="order-last lg:order-none">
          <p  className="text-[clamp(0.8rem,3vw,1.1rem)] font-semibold ">View Order Details</p>
        </div>

        <div className='order-5 col-span-full'>
   

          <div className='w-full flex items-baseline-last justify-between bg-gray-100/70 p-3 rounded-3xl '>
            <div className='flex items-center-safe gap-3 overflow-auto no-scrollbar '>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              
              {/* <div className=' p-4 bg-white rounded-xl'>
                <p className='font-medium text-xl'>+12</p>
              </div> */}
            </div>
            
              {/* <MdArrowForwardIos className='size-6' /> */}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2  lg:grid-cols-5 gap-8 py-8  ring-1 ring-gray-200 px-6 rounded-2xl mb-6">
        <div className="">
          <h2 className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">Order Details</h2>
          <p  className="text-[clamp(0.8rem,3vw,1rem)] font-medium text-black/50">Apr 5, 2025, 10:07 AM</p>
        </div>

        <div className="order-3 lg:order-none">
          <p className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">$54</p>
          <p className="text-[clamp(0.8rem,3vw,1rem)]  font-medium text-black/50">Paid with cash</p>
        </div>

        <div className="flex items-center-safe gap-4 order-4 lg:order-none">
          <div className="bg-black/4 p-2 rounded-full">
            <TbReceipt className="size-6"/>
          </div>
          <div >
            <p className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">Items</p>
            <p className="text-[clamp(0.8rem,3vw,1rem)] font-medium text-black/50">8x</p>
          </div>
        </div>


        <div className="order-2 lg:order-none">
          <button className="ring-1 ring-[#B6349A] bg-[#FEF5FD] font-medium text-[#B6349A] px-3 py-1 text-sm rounded-xl">In Progress</button>
        </div>

        <div className="order-last lg:order-none">
          <p  className="text-[clamp(0.8rem,3vw,1.1rem)] font-semibold ">View Order Details</p>
        </div>

        <div className='order-5 col-span-full'>
   

          <div className='w-full flex items-baseline-last justify-between bg-gray-100/70 p-3 rounded-3xl '>
            <div className='flex items-center-safe gap-3 overflow-auto no-scrollbar '>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='min-w-15 max-w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              
              {/* <div className=' p-4 bg-white rounded-xl'>
                <p className='font-medium text-xl'>+12</p>
              </div> */}
            </div>
            
              {/* <MdArrowForwardIos className='size-6' /> */}
          </div>
        </div>
      </section>
 
    </article>
  )
}


//  <section className="grid  grid-cols-5 gap-8 py-8  ring-1 ring-gray-200 px-6 rounded-2xl mb-6">
    //     <div className=" col-start-1 col-end-5 md:col-1 row-1">
    //       <h2 className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">Order Details</h2>
    //       <p  className="text-[clamp(0.8rem,3vw,1rem)] font-medium text-black/50">Apr 5, 2025, 10:07 AM</p>
    //     </div>

    //     <div className="row-start-2 col-start-1 col-end-4 md:col-2 md:row-1">
    //       <p className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">$54</p>
    //       <p className="text-[clamp(0.8rem,3vw,1rem)]  font-medium text-black/50">Paid with cash</p>
    //     </div>

    //     <div className="flex items-center-safe gap-4 row-start-2 col-start-4  col-end-5 md:col-3 md:row-1">
    //       <div className="bg-black/4 p-2 rounded-full">
    //         <TbReceipt className="size-6"/>
    //       </div>
    //       <div >
    //         <p className="text-[clamp(1rem,3vw,1.3rem)] font-semibold">Items</p>
    //         <p className="text-[clamp(0.8rem,3vw,1rem)] font-medium text-black/50">8x</p>
    //       </div>
    //     </div>


    //     <div className=" col-start-4 col-5 md:col-4 row-1 ">
    //       <button className="ring-1 ring-red-800  font-medium text-red-800 px-3 py-1 text-sm rounded-xl">Cancelled</button>
    //     </div>

    //     <div className="row-start-4 col-start-1 col-end-5 md:row-1 md:col-5">
    //       <p  className="text-[clamp(0.8rem,3vw,1.1rem)] font-semibold ">View Order Details</p>
    //     </div>

    //     <div className='col-span-full'>
   

    //       <div className='w-full flex items-baseline-last justify-between bg-gray-100/70 p-3 rounded-3xl '>
    //         <div className='flex items-center-safe gap-3 overflow-auto no-scrollbar '>
    //           <div className='w-18 p-2 bg-white rounded-xl'>
    //             <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
    //           </div>
    //           <div className='w-18 p-2 bg-white rounded-xl'>
    //             <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
    //           </div>
    //           <div className='w-18 p-2 bg-white rounded-xl'>
    //             <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
    //           </div>
    //           <div className='w-18 p-2 bg-white rounded-xl'>
    //             <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
    //           </div>
    //           <div className='w-18 p-2 bg-white rounded-xl'>
    //             <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
    //           </div>
    //           <div className='w-18 p-2 bg-white rounded-xl'>
    //             <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
    //           </div>
    //           <div className='w-18 p-2 bg-white rounded-xl'>
    //             <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
    //           </div>
              
    //           {/* <div className=' p-4 bg-white rounded-xl'>
    //             <p className='font-medium text-xl'>+12</p>
    //           </div> */}
    //         </div>
            
    //           {/* <MdArrowForwardIos className='size-6' /> */}
    //       </div>
    //     </div>
    //   </section>
export default AccountOrdersPage