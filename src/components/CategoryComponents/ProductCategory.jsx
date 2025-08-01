import React from 'react';

const ProductCategory = ({truncate}) =>
{
  return (
    <div className='md:bg-black/5 flex space-x-1.5 px-3 py-1 w-auto max-w-40 rounded-full items-center justify-center flex-col md:flex-row '>
      <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/bread.png" alt="bread" />
      <span className={`font-medium text-md pr-2 ${truncate && truncate} `} >Bread</span>
    </div>
  );
};

export default ProductCategory;