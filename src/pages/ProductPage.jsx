import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const ProductPage = () => {
  return (
    <article className='min-h-100'>
      <section className='w-full'>
        <div className='text-gray-600 font-medium text-lg flex gap-1 items-center-safe'>
          <a href="">Home</a> 
          <MdOutlineKeyboardArrowRight className="text-gray-300"/>
          <a href="">Product</a>
          <MdOutlineKeyboardArrowRight className="text-gray-300"/>
          <a href="" className="text-[#A02B84]">Orange</a>
        </div>
      </section>
    </article>
  )
}

export default ProductPage