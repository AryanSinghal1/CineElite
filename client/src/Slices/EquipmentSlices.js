import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inventory: [],
  sortBy: null,
 sortByTypeOfCategory:[],
  totalPrice: 0,
  sortByTypeOfBrand: [],
    category:'',
    brand:'',
    kit:[],
    watchlist:[],
    compare:[],
    history:[],
    certified:[]
};
const slice = createSlice({
    name:'equipment',
    initialState,
    reducers:{
        category(state, action){
        state.category = action.payload;
    },
    addToKit(state, action){
        state.kit = [...state.kit, action.payload];
    },
    addToCompare(state, action){
        state.compare = [...state.compare, action.payload];
    },
    addToWatchlist(state, action){
        state.watchlist = [...state.watchlist, action.payload];
    },
    initializeProducts(state, action){
        state.inventory =  action.payload;
    },
    initializeKit(state, action){
        state.kit =  action.payload;
    },
    initializeWatchlist(state, action){
        state.watchlist =  action.payload;
    },
    initializeCompare(state, action){
        state.compare =  action.payload;
    },
    initializeCertified(state, action){
        state.certified =  action.payload;
    },
    initializeHistory(state, action){
        state.history =  action.payload;
    },
    addToHistory(state, action){
        state.history = action.payload;
    },
    addToCertified(state, action){
        state.certified = action.payload;
    },
        brand(state, action){
        state.brand = action.payload;
    },
    removeFromCompare(state, action){
        state.compare =  state.compare.filter(
            (currentCompareItem) =>
              currentCompareItem._id !== action.payload._id
          )
}
}
})
export const {category, brand, initializeProducts, initializeCertified, removeFromCompare ,initializeCompare, initializeHistory, initializeKit, initializeWatchlist, addToKit, addToCertified, addToCompare, addToHistory, addToWatchlist} = slice.actions;
export default slice.reducer;