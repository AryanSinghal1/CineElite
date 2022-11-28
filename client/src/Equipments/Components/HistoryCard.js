
import { useData } from "../context/DataContext";




export function HistoryCard({product}) {
    const {
  
        dispatch
      } = useData();
      const {  Model,Description,Date,Time} = product;
   

   return(
    <div className="w-fit h-fit mx-16 bg-gray-200 mx-6  rounded-lg ">
     <ul className="text-base flex flex-cols font-small py-1  ">
        <li className=" pt-6  pb-6 whitespace-nowrap px-6">{Date}</li>
        <li className="px-6 pt-6 whitespace-nowrap pb-6">{Time}</li>
        <li className="px-6 pt-6  whitespace-nowrap text-justify pb-6 ">{Model}</li>
        <li className="px-6 text-sm text-justify" >{Description}</li>
        <li className="px-16 pt-6 mx-4 pb-6">Admin</li>
     </ul>

    </div>
   )

}