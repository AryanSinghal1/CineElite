import axios from "axios";
import { useState,useEffect } from "react";
import { HistoryCard } from "../components/HistoryCard";
import {useData} from "../context/DataContext"
import { API_URL } from "../utils";
export function History ()
{
    const {
      state: {
        history,
      
      },
       
        isLoading
      } = useData();
      const [historyData, setHistoryData] = useState([])
    
      const getHistoryData = async() =>{
        const userHistoryData =  await axios.get(`${API_URL}/history`);
        console.log(userHistoryData);
        if(userHistoryData){
         setHistoryData(userHistoryData.data.products);
        }    
       }
       useEffect(()=>{
         getHistoryData()
       },[]);
       console.log(historyData);

       if(isLoading) {
        return(
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        )
      }

return(
    <div className="w-full grid grid-cols-4 ">
      <div className=" w-fit ml-4 mt-6  col-span-1 flex-col lg:flex hidden   ">
       
        
        
      <form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-64 ml-2 mt-6">
        <div class="flex absolute inset-y-0 right-2 items-center  pointer-events-none  rounded-xl">
            <svg aria-hidden="true" class="w-7 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smart Search" required/>
    </div>
    </form>
        <div className=" ml-2 mb-3 w-64 h-fit mt-4  shadow p-5  bg-white rounded-lg">
        
    <div className="bgcolor  rounded-t-xl relative -top-5 mb-3 flex  py-3 w-64 -left-5">
      
        <span class="material-icons-outlined ml-24 text-xl text-white">
tune
</span>
      <p className="text-white text-lg font-medium">Filter</p>
    </div>
    
    
        <button type="button" 
       className="  w-full p-1  bg-gray-200 rounded   bg-white px-2  hover:text-gray-500">
                  <span className="font-small mx-16 ">My Kit</span>
                  </button>
        <button type="button" 
       className="  w-full p-1 mt-3 bg-gray-200 rounde   bg-white px-2  hover:text-gray-500">
                  <span className="font-small mx-16 ">Watchlist</span>
                  </button>
                
        <button type="button" 
       className="  w-full p-1 mt-3 bg-gray-200 rounded   bg-white px-2  hover:text-gray-500">
                  <span className="font-small mx-16 ">Certification</span>
                  </button>
                
        <button type="button" 
       className="  w-full p-1 mt-3 bg-gray-200 rounded   bg-white px-2  hover:text-gray-500">
                  <span className="font-small mx-16 ">Packages</span>
                  </button>
                
        <button type="button" 
       className="  w-full p-1 mt-3 bg-gray-200 rounded   bg-white px-2  hover:text-gray-500">
                  <span className="font-small mx-16 ">Trade</span>
                  </button>
                

               
             
              </div>
              </div>
            
    <div className="col-span-3">
    <div className="w-fit h-fit mx-16  mt-12 mb-2  ">
     <ul className="text-base text-black flex flex-cols font-small gap-12 py-1  ">
        <li className="  px-6">Date</li>
        <li className="px-6 ">Time</li>
        <li className="px-6 mr-10 ">Item</li>
        <li className="px-6  mr-64 " >Description</li>
        <li className="px-6 p">Updated by</li>
     </ul>

    </div> 
   
{historyData.length ? (
      <>
        <div className="w-full grid grid-rows-1 gap-6  ">
          {historyData.map((history) => (
            <HistoryCard product={history} key={history._id} />
          ))}
        </div>
      </>
    ) : (
    <></>
    )}

        </div>
    </div>
  

)
}