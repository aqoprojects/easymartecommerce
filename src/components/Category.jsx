import { PiDotsThreeOutlineThin } from "react-icons/pi";


const Category = () => {
  return (
    <section className='py-2 mx-auto px-4 mt-3 mb-12'>
      <div className='w-full justify-evenly md:justify-center-safe flex-wrap md:flex-nowrap  items-center flex md:overflow-x-auto snap-x snap-mandatory no-scrollbar  space-x-2 space-y-1.5'>
        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/bread.png" alt="bread" />
          <span className='font-medium text-md'>Bread</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/cheese.png" alt="cheese" />
          <span className='font-medium text-md'>Cheese</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/alcohol.png" alt="alcohol" />
          <span className='font-medium text-md'>Alcohol</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/yogurt.png" alt="yogurt" />
          <span className='font-medium text-md'>Yogurt</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/fruit.png" alt="fruit" />
          <span className='font-medium text-md'>Fruit</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/watermelon.png" alt="watermelon" />
          <span className='font-medium text-md'>Watermelon</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/snacks.png" alt="snacks" />
          <span className='font-medium text-md'>Snacks</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/cake.png" alt="cake" />
          <span className='font-medium text-md'>Cake</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row'>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/candy.png" alt="candy" />
          <span className='font-medium text-md'>Candy</span>
        </div>

        <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row '>
          <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/vegetable.png" alt="vegetable" />
          <span className='font-medium text-md'>Vegetable</span>
        </div>

        <div className='md:bg-black/5 md:hidden  flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row '>
          <PiDotsThreeOutlineThin className="size-6" />
          <span className='font-medium text-md'>View all</span>
        </div>
      </div>
    </section>
  )
}

export default Category