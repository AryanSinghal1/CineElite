import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducerFunc } from "../reducer/reducer";



export const DataContext = createContext();

 const initialState = {
  inventory: [],
  
  sortBy: null,
 sortByTypeOfCategory:[],
  totalPrice: 0,
  sortByTypeOfBrand: [],
};

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const {
          data: { products },
        } = await axios.get("http://localhost:8000/products");

        dispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: products,
        });
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  

  return (
    <DataContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};