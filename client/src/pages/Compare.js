import { Link } from "react-router-dom";
import {useData} from "../context/DataContext"
import { CompareBody } from "../components/CompareBody"
import { CompareCard } from "../components/CompareCard";

export function Compare(){
    const {
        state: {
          compare
         
        },
       
        isLoading
      } = useData();

      if(isLoading) {
        return(
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        )
      }
    return(
        <div className="w-full ">
{compare.length ? (
      <>
        <div className="w-full grid grid-cols-4 gap-6  ">
          {compare.map((compare) => (
            <CompareBody product={compare} key={compare._id} />
          ))}
        </div>
      </>
    ) : (
      <div className="flex flex-col mx-auto  my-auto items-center pb-10">
    
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">You don't have any item to compare !</h5>
        <span className="text-m text-gray-500 dark:text-gray-400 py-4">Looks like you haven't added anything to compare</span>
       
            <Link to ="/explore" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore Item</Link>
          
        
    </div>
    )}

        </div>

    )
}