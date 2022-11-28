import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { API_URL } from "../utils/index";


export function WatchlistCard({ product }) {
  const {
    state: { kit, watchlist,compare },
    dispatch,
  } = useData();
  const { token } = useAuth();

  const [open, setOpen] = useState(false)
const handleOpen = () => {
  
    setOpen(!open);
  

};
const removeProductFromWatchlist = async (e) => {
  e.preventDefault();
  try {
    const {
      data: { success },
    } = await axios.delete(`${API_URL}/watchlist/${_id}`);

    if (success) {
      dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: product });
    }
  } catch (error) {
    console.error(error);
  }
};
  const navigate = useNavigate();


  const { _id, typeOfBrand,  name, image, } = product;

  const isInKit = kit?.find((kitItem) => kitItem._id === _id);
  const isInCompare = compare?.find((compareItem) => compareItem._id === _id);
  const isInWatchlist = watchlist?.find(
    (watchlistItem) => watchlistItem._id === _id
  );

  const kitHandler = async (e) => {
    
    if (!isInKit) {
    try {
    //     const {
    //       data: { success },
    //     } = await axios.post(`${API_URL}/kit`, {
    //       product: {
    //         _id,
          
    //       },
    //     });
    await axios.post(`${API_URL}/kit`, {
      product: {
        _id,
        typeOfBrand,
        name,
        image
      },
    });

        // if (success) {
          dispatch({ type: "ADD_TO_KIT", payload: product });
          
        // }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/kit");
    }
  };
  const compareHandler = async (e) => {
    
    if (!isInCompare) {
      try {
        const {
          data: { success },
        } = await axios.post(`${API_URL}/compare`, {
          product: {
            _id,
          
          },
        });

        if (success) {
          dispatch({ type: "ADD_TO_COMPARE", payload: product });
          
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/explore");
    }
  };

  const watchlistHandler = async (e) => {
    e.preventDefault();
    if (!isInWatchlist) {
      try {
        const {
          data: { success },
        } = await axios.post(`${API_URL}/watchlist`, {
          product: {
            _id,
          },
        });

        if (success) {
       
          dispatch({ type: "ADD_TO_WATCHLIST", payload: product });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/watchlist");
    }
  };

  return (
    <>

     
        
        <div className="bg-white border border1 border-gray-200 w-56 h-56 shadow-sm rounded dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
          

        <button  onMouseEnter={() => handleOpen(true)
      }><div className="bg-gray-100 mt-2 mx-2"> <img src={image} alt="equipment" className="  w-40 mx-auto  h-32 w-full p-3  "/></div>
           
        
        
           <h5 className=" font-semibold text-center mb-2 text-2xl  dark:text-white">{typeOfBrand}</h5>
              
           
           
              <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">{name}</h3>
             
      
          </button>

           {open &&(
             
             <div   onMouseLeave={() => handleOpen(false)
             }className=" absolute flex flex-col  bg-white  border-b-2 border-cyan-100 w-56 h-80 shadow-md text-center">
            <button
                 className="mx-5 mb-2 p-2 rounded-xl mt-4 hover:bg-yellow-300 hover:text-white "
                 
               >
                     
                 <div className="">
                 <Link to={`/product/${_id}`} className="link">
                 <span className="mb-2 text-l font-medium mr-2">View details</span>
                 <span className="material-icons-outlined md-light  ">
                 <span class="material-symbols-outlined">
                 open_in_new
                </span>
                 </span>
                 </Link>
                 </div>
                 
               </button>
            
             {isInKit ? (
               
                 <button
                 className=""
                 onClick={(e) => kitHandler(e)}
 
               >
              
              <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-yellow-300">
                 <span className="material-icons-outlined text-white ">
                   check
                 </span>
                 <span className="mb-2 ml-2 text-white font-medium text-m">In My Kit</span>
                 </div>
                
               </button>
             ) : (
               <button
                 className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-yellow-300 hover:text-white"
                 onClick={(e) => {
                   e.preventDefault();
                   token ? kitHandler(e) : navigate("/login");
                 }}
               >
                <div className="">
                 <span className="material-icons-outlined  ">
                   add  
                 </span>
                 <span className="mb-2 text-m font-medium ml-2 ">Add My kit</span>
                 </div>
                
               </button>
             )}
             {isInWatchlist ? (
               <button
                 className=""
               
                 onClick={(e) => removeProductFromWatchlist(e)}
               >
                 <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-yellow-300">
                 <span className="material-icons-outlined text-white ">
                   bookmark
                 </span>
                 <span className="mb-2 ml-2 text-white font-medium text-m">Remove From Watchlist</span>
                 </div>
               
               </button>
             ) : (
               <button
                 className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-yellow-300"
                 onClick={(e) => {
                   e.preventDefault();
                   token ? watchlistHandler(e) : navigate("/login");
                 }}
               >
                 <div className="">
                 <span className="material-icons-outlined md-light  ">
                   bookmark_border 
                 </span>
                 <span className="mb-2 text-l font-medium ml-2">Add Watchlist</span>
                 </div>
                 
               </button>
             )}
             <button
                 className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-yellow-300 hover:text-white "
                 
               >
                 <div className="">
                 <span className="material-icons-outlined md-light  ">
                   verified_user
                 </span>
                 <span className="mb-2 text-l font-medium  ml-2">Add Certification</span>
                 </div>
                 
               </button>
                
             {isInCompare ? (
               
               <button
               className=""
               onClick={(e) => compareHandler(e)}

             >
            
            <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-yellow-300">
               <span className="material-icons-outlined text-white ">
                 compare
               </span>
               <span className="mb-2 ml-2 text-white font-medium text-m">Compare</span>
               </div>
              
             </button>
           ) : (
             <button
               className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-yellow-300 hover:text-white"
               onClick={(e) => {
                 e.preventDefault();
                 token ? compareHandler(e) : navigate("/login");
               }}
             >
              <div className="">
               <span className="material-icons-outlined  ">
                 compare 
               </span>
               <span className="mb-2 text-m font-medium ml-2 ">Compare</span>
               </div>
              
             </button>
           )}
           </div>
           )}
        </div>
        
    </>
  );
}
