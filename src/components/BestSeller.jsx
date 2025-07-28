import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ProductDetail from "./ProductComponents/ProductDetail";

const BestSeller = () =>
{
  return (
    <article className=" px-4 mb-30">
      <section className="w-full flex justify-between items-center mb-5">
        <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Best Sellers</h2>

        <div className="flex gap-10 items-center-safe justify-center-safe ">
          <button className="flex gap-2 items-center-safe justify-center-safe ring-1 ring-[#DE57C4] py-2 px-2 rounded-full font-semibold">
            View All (+40)
            <GoArrowRight className="hidden md:block size-6" />
            <MdArrowForwardIos className="block md:hidden" />
          </button>

          <div className="hidden md:block">
            <button className="ring-1 ring-black/10 p-2 rounded-full bg-black/3 mr-4">
              <MdArrowBackIosNew className="size-7 text-gray-400" />
            </button>
            <button className="ring-1 ring-black/10 p-2 rounded-full ">
              <MdArrowForwardIos className="size-7 " />
            </button>
          </div>
        </div>
      </section>

      <section className="mt-2">
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar">
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>


        </div>
      </section>
    </article>
  );
};

export default BestSeller;