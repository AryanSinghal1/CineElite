import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
export function Header() {
    const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
    const [burger, setBurger] = useState(false);
  const handleBurger = () => {
    setBurger(!burger);
  };

  const [dialog, setDialog] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuth();
  const checkUserStatus = () => {
     navigate("/login", { replace: true });
  };
  return (
    <nav className="bg-gray-800 px-2 py-2 sm:px-4  dark:bg-gray-900">
  <div className="w-full px-6 sm:px-8  mx-auto grid grid-flow-col py-3 sm:py-4">
     
  <button type="button" className="inline-flex items-center  ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
      onClick={() => handleBurger(true)
      }>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
    </button>
   { burger && (

<>
     <ul className=" duration-300 md:hidden fixed bg-white left-0 top-0 z-40  h-screen w-2/3 text-justify   flex-row   text-l font-medium   ">
        <li className="pb-4  pt-3 text-center block font-semibold border-b-4 text-2xl">
         Equipment
        </li>
        <li className="block p-4  text-center text-gray-700  hover:bg-gray-100 ">
          My Kit
        </li>
        <li className="p-4 block text-center text-gray-700 hover:bg-gray-100 ">
        Watchlist
        </li>
        <li className="p-4 block text-center text-gray-700 hover:bg-gray-100 ">
        Packages
        </li>
        <li className="p-4 block text-center text-gray-700 hover:bg-gray-100 ">
        History
        </li>
        <li className="p-4 block text-center text-red-600 text-gray-700 hover:bg-gray-100 ">
        <button
            
            onClick={checkUserStatus}
          >
            {token ? "LOGOUT" : "LOGIN"}
          </button>
        </li>
       
        
      </ul>
      <div   onClick={() => handleBurger(false)} className=" fixed md:hidden  w-1/3 right-0 top-0 h-screen bg-black bg-opacity-50" >
   
      </div>
      </>


   )}
 
      <Link to="/"className="col-start-2 md:col-end-3  text-2xl text-white font-medium flex items-center">Equipment</Link>
  

  <div className="hidden  w-full bg-gray-800 md:flex col-start-5 col-end-9  md:w-auto " >
    <ul className=" flex flex-row text-xl text-white font-thin  gap-10">
    <Link to="/">
            <button className="">
              Explore
            </button>
          </Link>
    <Link to="/kit" >
            <button className="">
              My Kit
            </button>
          </Link>
    <Link to="/watchlist">
            <button className="">
              Watchlist
            </button>
          </Link>
          <Link to="/watchlist">
            <button className="">
              Packages
            </button>
          </Link>
          <Link to="/watchlist">
            <button className="">
              History
            </button>
          </Link>
    </ul>
  </div>
  <button
            className="col-start-12 text-l text-white font-small"
            onClick={checkUserStatus}
          >
            {token ? "LOGOUT" : "LOGIN"}
          </button>
 

     
  
  </div>
</nav>

  );
}