import React from "react";

const Brands = () => {
  return (
    <section className="bg-[#1F1F1F]">
      <div className=" container  w-9/12 mx-auto py-10">
        <h1 className="text-white text-center text-5xl">Working With Brands</h1>
        <div className="flex gap-5 justify-center py-10 mx-auto flex-wrap md:flex-nowrap">
          <img src="https://dummyimage.com/100x40" className="w-full" alt="" />
          <img src="https://dummyimage.com/100x40" className="w-full" alt="" />
          <img src="https://dummyimage.com/100x40" className="w-full" alt="" />
          <img src="https://dummyimage.com/100x40" className="w-full" alt="" />
          <img src="https://dummyimage.com/100x40" className="w-full" alt="" />
          <img src="https://dummyimage.com/100x40" className="w-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
