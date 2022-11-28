import React from 'react'
import { useState } from 'react';

const AddPackage = (props) => {

    const {pac} = props;
    const { _id, typeOfBrand, name, image } = pac;


  return (
    <div className=" grid grid-cols-1 lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center py-3 px-7 mt-8 ">
          {pac.map((Items) => (
            <div>
              <div
                className="bg-white border border-1 border-cyan-100 w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  "
              >
                <img
                  src={Items.image}
                  alt="equipment"
                  className="object-fill h-32 mb-1 w-44 mx-6 my-auto "
                />

                <div className="p-4 my-auto">
                  <h5 className=" font-semibold text-center mb-2 text-2xl border-t-4 dark:text-white">
                    {Items.typeOfBrand}
                  </h5>

                  <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">
                    {Items.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}

export default AddPackage