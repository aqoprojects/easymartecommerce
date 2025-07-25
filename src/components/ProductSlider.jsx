import React, { useRef } from 'react'

const ProductSlider = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

    const scrollToPosition = (position) => {
    const scrollOptions = { behavior: 'smooth' };
    const refs = [row1Ref, row2Ref].filter(ref => ref.current); // Handle mobile case
    refs.forEach((ref) => {
      if (position === 'start') {
        ref.current.scrollTo({ left: 0, ...scrollOptions });
      } else if (position === 'middle') {
        const middle = ref.current.scrollWidth / 2 - ref.current.clientWidth / 2;
        ref.current.scrollTo({ left: middle, ...scrollOptions });
      } else if (position === 'end') {
        ref.current.scrollTo({ left: ref.current.scrollWidth, ...scrollOptions });
      }
    });
  };

  return (
    <article className='mt-5 flex flex-col items-center justify-center p-4 px-5'>
      <section className='w-full  space-y-4'>
        <div ref={row1Ref} className='flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:flex'>
          <img src="../../src/assets/images/special1.jpg" className='w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2' alt="product slider" />
          <img src="../../src/assets/images/special1.jpg" className='w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2' alt="product slider" />
          <img src="../../src/assets/images/special1.jpg" className='w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2' alt="product slider" />
          <img src="../../src/assets/images/special1.jpg" className='w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2' alt="product slider" />
        </div>

        <div ref={row2Ref} className='hidden md:flex overflow-x-auto snap-x snap-mandatory no-scrollbar'>
          <img src="../../src/assets/images/special1.jpg" className='w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2' alt="product slider" />
          <img src="../../src/assets/images/special1.jpg" className='w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2' alt="product slider" />
          <img src="../../src/assets/images/special1.jpg" className='w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2' alt="product slider" />
          <img src="../../src/assets/images/special1.jpg" className='w-120 h-64 object-cover rounded-lg flex-shrink-0 snap-start mx-2' alt="product slider" />
        </div>
        
      </section>

      <div className="flex gap-4 mt-6  md:hidden" >
        <button
          onClick={() => scrollToPosition('start')}
          className="px-4 py-1 bg-[#B6349A] text-white rounded-lg hover:bg-[#B6349A]"
          aria-label="Scroll to start"
        ></button>
        <button
          onClick={() => scrollToPosition('middle')}
          className="px-4 py-1 bg-[#B6349A] text-white rounded-lg hover:bg-[#B6349A]"
          aria-label="Scroll to middle"
        ></button>
        <button
          onClick={() => scrollToPosition('end')}
          className="px-4 py-1 bg-[#B6349A] text-white rounded-lg hover:bg-[#B6349A]"
          aria-label="Scroll to end"
        ></button>
      </div>
      
    </article>
  )
}

export default ProductSlider