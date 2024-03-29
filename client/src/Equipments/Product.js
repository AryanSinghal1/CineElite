import { ProductCard } from "./Components/ProductCard";
// import { useData } from "../context/DataContext";
import { API_URL } from "./utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CompareCard } from "./Components/CompareCard";
import { useDispatch, useSelector } from "react-redux";
import { brand, category, initializeCertified, initializeCompare, initializeHistory, initializeKit, initializeProducts, initializeWatchlist } from "../Slices/EquipmentSlices";
import axios from "axios";
import { Header } from "./Components/Header";

export function Products() {
    const dispatch = useDispatch();
    const isLoading = false;
  const inventory = useSelector(state=>state.equipment.inventory);
  const sortBy = useSelector(state=>state.equipment.sortBy);
  const sortByTypeOfBrand = useSelector(state=>state.equipment.sortByTypeOfBrand);
  const sortByTypeOfCategory = useSelector(state=>state.equipment.sortByTypeOfCategory);
  const compare = useSelector(state=>state.equipment.compare);
  const [categoryMenu, setCategoryMenu] = useState(false);
  const handleCategory = () => {
    setCategoryMenu(!categoryMenu);
  };
  const [brandMenu, setBrandMenu] = useState(false);
  const handleBrand = () => {
    setBrandMenu(!brandMenu);
  };
  const [suggest, setSuggest] = useState(false);
  const handleSuggest = () => {
    setSuggest(!suggest);
  };
  
  const fetchData = async () => {
    try {
      const {
        data: { products },
      } = await axios.get(`${API_URL}/products`);
      console.log(products);
      dispatch(initializeProducts(products));
  const {
      data: { kit },
  } = await axios.post(`${API_URL}/kit`,{user:"6368ec6041d2eea1df2fb29a"});
  console.log(kit);
  
  dispatch(initializeKit(kit));
    
    const {
      data: { watchlist },
    } = await axios.get(`${API_URL}/watchlist`);
    dispatch(initializeWatchlist(watchlist));
    const {
      data: { compare },
    } = await axios.get(`${API_URL}/compare`);
    dispatch(initializeCompare(compare));
    const {
      data: { history },
    } = await axios.get(`${API_URL}/history`);
    dispatch(initializeHistory(history));
    const {
      data: { certified },
    } = await axios.get(`${API_URL}/certified`);
    dispatch(initializeCertified(certified));
  }catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
    fetchData();
  }, []);


  const getSortedData = (productList, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }

    return productList;
  };

  const getFilteredData = (productList) => {
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
  const filteredData = getFilteredData(sortedData, {});

  return (
    <>
    <Header/>
    <div className="grid grid-cols-4 w-full min-h-screen bg-gray-200 ">
      <div className=" w-full flex-col ml-8 mt-12 lg:flex hidden   ">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-64 ml-2 r  ">
            <div className="flex absolute inset-y-2 right-2 items-center  pointer-events-none  ">
              <svg
                aria-hidden="true"
                className="w-10 h-9 font-light text-gray-300 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-full border-1  focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Smart Search"
              required
            />
          </div>
        </form>
        <div className=" ml-2 mb-3 w-64 h-fit shadow p-5 border-x border-b border-t-0  border-gray-800  bg-white rounded-t-2xl rounded-lg">
          <div className="bgcolor relative w-64 -top-5 rounded-t-xl py-4 -left-5 mb-2 flex gap-2">
            <span className="material-icons-outlined ml-24 text-xl text-white">
              tune
            </span>
            <p className="text-white text-lg font-medium">Filter</p>
          </div>

          <button
            type="button"
            onClick={() => handleCategory()}
            className="flex  w-fit p-1  bg-gray-200 rounded-lg mb-2 w-40 mx-auto items-center justify-between bg-white  py-2 text-gray-400 hover:text-gray-500"
          >
            <span className="font-medium mx-auto text-gray-900">Category</span>
          </button>
          {categoryMenu && (
            <div className="pt-6" id="filter-section-mobile-1">
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={() =>{
                        dispatch(category("cine"))
                    }
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 min-w-0 flex-1 text-gray-500">
                    Cine
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={() =>{
                        dispatch(category("broadcast"))
                    }
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 min-w-0 flex-1 text-gray-500">
                    Broadcast
                  </label>
                </div>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={() => handleBrand()}
            className="flex  w-fit p-1 mt-2 bg-gray-200 rounded-lg  mx-auto w-40 items-center justify-between bg-white  py-2 text-gray-400 hover:text-gray-500"
          >
            <span className="font-medium  mx-auto text-gray-900">Brand</span>
          </button>
          {brandMenu && (
            <div className="pt-6" id="filter-section-mobile-1">
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={() =>{
                        dispatch(brand("Canon"));
                    }
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 min-w-0 flex-1 text-gray-500">
                    Canon
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={() =>{
                        dispatch(brand("Panasonic"));
                    }
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 min-w-0 flex-1 text-gray-500">
                    Panasonic
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                  onChange={() =>{
                    dispatch(brand("DJI"));
                }
                }
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 min-w-0 flex-1 text-gray-500">
                    DJI
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" ml-2 mb-3 w-64 h-fit shadow p-5 border-x border-b border-t-0  border-gray-800  bg-white rounded-lg rounded-t-2xl">
          <div className="bgcolor relative w-64 -top-5 rounded-t-xl py-4 -left-5 mb-6 flex gap-2">
            <span className="material-icons-outlined ml-16 text-xl text-white">
              compare
            </span>
            <p className="text-white text-lg font-medium">Comparison</p>
          </div>
          <>
            <div className=" grid grid-rows-1 gap-6 place-items-center mb-6   ">
              {compare.map((compare) => (
                <CompareCard product={compare} key={compare._id} />
              ))}
            </div>
          </>

          <Link to="/compare">
            <button
              type="button"
              className=" w-fit mx-12 px-6 mt-2 bg-yellow-300 rounded-lg  flex justify-between   py-2 text-gray-400 hover:text-gray-500"
            >
              <span className="font-medium text-center  text-gray-900">
                Compare
              </span>
            </button>
          </Link>
        </div>
        <div className="">
          <button
            onClick={() => handleSuggest(true)}
            type="button"
            className="flex  w-64 px-2 py-1 ml-2 mt-2  bg-yellow-300 rounded-lg  items-center justify-between  text-gray-400 hover:text-gray-500"
          >
            <span className="font-medium ml-12 text-black">
              Suggest Missing Item
            </span>
          </button>
        </div>
        {suggest && (
          <div
            className="dialog-content-container "
            onClick={() => handleSuggest(false)}
          >
            <section className="dialog-content text-xl  font-medium text-black text-center">
              <p className="text-black  text-lg mx-10  mb-6 font-medium">
                Suggest Missing Equipment
              </p>

              <div className="flex px-6 ">
                <ul className=" list-outside text-base font-medium ml-2  ">
                  <li className=" mb-3 whitespace-nowrap ">Product Brand</li>
                  <li className=" mb-6 py-12 ">Description</li>
                  <li className=" mb-3 whitespace-nowrap ">Website Link</li>
                </ul>
                <form className=" list-outside text-base font-medium   mb-4">
                  <input
                    type="text"
                    id="simple-search"
                    className=" ml-4  border border-gray-300 text-gray-900  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input
                    type="text"
                    id="simple-search"
                    className=" ml-4  border border-gray-300 text-gray-900 py-12 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input
                    type="text"
                    id="simple-search"
                    className=" ml-4  border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </form>
              </div>

              <button
                type="button"
                className="flex   w-36 p-2 mx-auto mt-2  bg-yellow-300 rounded-2xl  items-center justify-between   text-gray-400 hover:text-gray-500"
              >
                <span className="font-medium  mx-auto text-gray-900">Send</span>
              </button>
            </section>
          </div>
        )}
      </div>
      <div className=" grid grid-rows-3 lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  place-items-start gap-6   mt-12  ">
        {isLoading ? (
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {filteredData.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </>
        )}
      </div>
    </div>
    </>
  );
}
