import React from "react";



export function PackageCard({product,packageValue}) {

  const { _id, typeOfBrand, name, image } = product;

    const addToPackageHandler = () => {
        packageValue(current=> [...current,product])
    }

  return (
    <>
      <div>
        <div onClick={addToPackageHandler} className="bg-white border border-1 border-cyan-100 w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
          <img
            src={image}
            alt="equipment"
            className="object-fill h-32 mb-1 w-44 mx-6 my-auto "
          />

          <div className="p-4 my-auto">
            <h5 className=" font-semibold text-center mb-2 text-2xl border-t-4 dark:text-white">
              {typeOfBrand}
            </h5>

            <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">
              {name}
            </h3>
          </div>
        </div> 
      </div>
    </>
  );
}
