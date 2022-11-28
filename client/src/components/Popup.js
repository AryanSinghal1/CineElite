import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import  {PackageCard}  from "./PackageCard"

export function Popup({packageItem}) {
  const {
    state: {
      inventory,
      sortBy,
      sortByTypeOfBrand,
      sortByTypeOfCategory
    },
    dispatch,
    isLoading,
  } = useData();
  const getSortedData = (productList, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }

    return productList;
  };

  const getFilteredData = (
    productList,
   
  ) => {
    return productList
      
    .filter((product) =>
    sortByTypeOfCategory.length
      ? sortByTypeOfCategory.includes(product.category)
        ? product
        : false
      : product
  )
      .filter((product) =>
        sortByTypeOfBrand.length
          ? sortByTypeOfBrand.includes(product.typeOfBrand)
            ? product
            : false
          : product
      );
  };

  const sortedData = getSortedData(inventory, sortBy);
  const filteredData = getFilteredData(sortedData, {
    
  });



  return (
      <div className=" grid grid-cols-1 lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center py-3 px-7 mt-8 " >
        {isLoading ? (
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {filteredData.map((product) => (
              <PackageCard
                product={product}
                key={product._id}
                packageValue ={packageItem}
              />
            ))}
          </>
        )}
      </div>
  );
}