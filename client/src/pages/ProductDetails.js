import { useState, useEffect } from "react";

import { useParams } from "react-router";
import { useData } from "../context/DataContext";
import { API_URL } from "../utils";
import {SellCard} from "../components/SellCard"

import MapComponent from "../components/DisplayMapClass";
import axios from "axios";

export function ProductDetails() {
  const { productId } = useParams();
  const {
    state: { inventory },
    dispatch,
  } = useData();
  const product = inventory?.find((product) => product._id === productId);
  const [location, setLocation] = useState("");
  const [maplocation, setMapLocation] = useState([28.78, 77.209]);
  const [coordinates, setCoordinates] = useState({ lat: 28, lng: 79 });


  const [sale, setSale] = useState(false);
  const handleSale = () => {
    setSale(!sale);
  };
 

  const [selling, setSelling] = useState([]);
  const getKitDataAgain = async() =>{
    const userKitData =  await axios.get(`${API_URL}/kit`);
    console.log(userKitData);
    if(userKitData){
     return userKitData.data.products;
    }    
   }
   const getFilterData = async()=>{
    const currentKitData = await getKitDataAgain();

    const currentSellingData = currentKitData.filter(e=>e.SellStatus=="Selling");
    setSelling(currentSellingData);

    }

   useEffect(()=>{
     getFilterData()
   },[]);
  useEffect(() => {
    //  getDiv();/
    // getCoordinates();
  }, []);
  const getCoordinates = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `http://api.positionstack.com/v1/forward?access_key=110d84bd7c301c60f6ae030f965d8c44&query=${location.City},${location.Country},${location.State}`
      )
      .then((e) => {
        let newCoordinates = {
          lat: e.data.data[0].latitude,
          lng: e.data.data[0].longitude,
        };
        setCoordinates(newCoordinates);
        let newMapCoordinates = [];
        newMapCoordinates.push(
          e.data.data[0].latitude,
          e.data.data[0].longitude
        );
        // mapCoordinates[1] = props.coordinates.longitude;
        console.log(newMapCoordinates);
        setMapLocation(newMapCoordinates);
      })
      .catch((e) => console.log(e));
  };
  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };
  console.log(coordinates);
  return (
    <div className="bg-gray-200 w-full ">
      {product && (
        
        <>
        <div className="w-1/2 h-16">
          <div className="grid grid-cols-2 gap-6  pt-4 ">

        <h2 className="text-lg font-medium text-gray-900 ml-24">
                    {product.typeOfBrand}
                  </h2>
                  <h1 className="text-gray-900 text-lg  font-medium ">
                    {product.name}
                  </h1>
                  </div>
        </div>
          <div className=" mx-12 grid grid-cols-2 text-gray-700 bg-white border border-2 body-font  border-0 rounded-2xl  ">
           
              <div className="w-full   flex flex-row">
                <img
                  alt="ecommerce"
                  className="w-44 h-44 ml-12 mr-8 "
                  src={product.image}
                
                />
               
                  

                  <p className="leading-relaxed text-lg">
                    {product.description}
                  </p>
              
              </div>
            
           
                <div >
                  <h2 class="text-3xl font-bold tracking-tight text-gray-900  text-center sm:text-xl mb-6">
                    Manufacturer Info
                  </h2>
             
              </div>
          </div>
          <div class="">
            <div class=" mx-12 grid bg-white grid-cols-1  items-center border border-2 rounded-2xl mt-12  py-24 px-4 sm:px-6 sm:py-32  lg:grid-cols-2 lg:px-8">
              <div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>

                <dl class="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {product.details.map(({ title, text }) => (
                    <div class="border-t border-gray-200 pt-4">
                      <dt key={title} class="font-medium text-gray-900">
                        {title}
                      </dt>
                      <dd class="mt-2 text-sm text-gray-500">{text}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div class="items-center    sm:px-6  ">
                <div>
                  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Key Features
                  </h2>

                  {product.points.map(({ text }) => (
                    <dl class="mt-12 grid grid-cols-1  sm:grid-cols-2 ">
                      <div class="border-t border-gray-200 pt-1">
                        <dt class="font-medium text-gray-900">{text}</dt>
                      </div>
                    </dl>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 mx-12 grid grid-cols-3 bg-white border mb-12 border-2 body-font  rounded-2xl overflow-hidden ">
            <div className="  px-5 px-16 pb-6 w-1/3 p-5 bg-white ">
              <div className="pt-6" id="filter-section-mobile-1">
                <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mb-6">
                  show Availablity
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                      For Hire
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleSale(true);
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                      For Sale
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                      Certified Personal
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="  px-5 px-16 pb-6 w-1/3 p-5 bg-white mr-10">
              <div className="pt-6" id="filter-section-mobile-1">
                <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mb-6">
                  Filter By Geography
                </h2>
                <div className="space-y-6">
                  <form onChange={handleChange} onSubmit={getCoordinates}>
                    <div className="flex items-center mb-4">
                      <input
                        name="Country"
                        type="text"
                        className="h-4 w-13 p-2 border border-gray-300  focus:ring-indigo-500"
                        placeholder="Country"
                      />
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        name="State"
                        type="text"
                        className="h-4 w-13 p-2 border border-gray-300  focus:ring-indigo-500"
                        placeholder="State"
                      />
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        name="City"
                        type="text"
                        className="h-4 w-13 p-2 border border-gray-300  focus:ring-indigo-500"
                        placeholder="City"
                      />
                    </div>
                    <div className="flex items-center ">
                      <input
                      name="Submit"
                        type="submit"
                        className="h-8 w-13 p-2 border border-gray-300  focus:ring-indigo-500"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="rounded-sm"
              style={{
                width: 700,
                height: 300,
                zIndex:1,
                

              }}
            >
              <div id="aamp"></div>
              {/* <Maps coordinates={coordinates}/> */}
              <MapComponent coordinates={coordinates} />
            </div>
          </div>
          <div className=" ">
            <div className="mt-6 mx-12 bg-white border mb-12 border-2 body-font  rounded-2xl overflow-hidden ">
              <div className="    pb-6 pl-6 bg-white ">
                <h2 class="text-xl font-medium tracking-tight text-gray-900  mt-5 ml-4 text-left sm:text-xl ">
                  Availablity
                </h2>
                <hr className="text-gray-900 font-bold mb-8 border mx-6"></hr>                <div>
                {sale &&
                (
<>
 <div className="w-full grid grid-cols-2 gap-2">

 {selling.length ? (
     <>


         {selling.map((kit) => (
           <SellCard product={kit} key={kit._id} />
         ))}

     </>
   ) : (
    <></>
   )}
      </div>
      </>
                )

                }
                </div>
              </div>
            </div>
            
          </div>
        
        </>
      )}
      </div>
  );
}