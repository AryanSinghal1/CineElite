import axios from "axios";
import { useDispatch } from "react-redux";
import { API_URL } from "../utils/constants";


export function CompareCard({product}){
  const dispatch = useDispatch();
      const { _id, typeOfBrand,  name} = product;

      const removeProductFromCompare = async (e) => {
        e.preventDefault();
        try {
          const {
            data: { success },
          } = await axios.delete(`${API_URL}/compare/${_id}`);
    
          if (success) {
            dispatch(removeProductFromCompare(product));
          }
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <div  
        className="bg-gray-200  rounded-xl border border-1  w-56 h-fit shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        

         <h5 className=" font-medium text-left ml-2 text-xl dark:text-white">{typeOfBrand} </h5>
         <span onClick={(e) => removeProductFromCompare(e)} class="material-icons-outlined relative  -right-48 cursor-pointer hover:text-gray-700 top-0  ">close</span>
             <h3 className="relative -top-5 ml-2 mr-8 text-sm text-left font-normal tracking-tight    dark:text-white">{name}</h3>
            
         
             
          


       
        </div>
    )
}