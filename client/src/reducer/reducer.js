export const reducerFunc = (state, action) => {
    switch (action.type) {
      case "INITIALIZE_PRODUCTS":
        return {
          ...state,
          inventory: action.payload,
        };
  
      case "INITIALIZE_KIT":
        return {
          ...state,
          kit: action.payload,
        };
  
      case "INITIALIZE_WATCHLIST":
        return {
          ...state,
          watchlist: action.payload,
        };
      case "INITIALIZE_COMPARE":
        return {
          ...state,
          compare: action.payload,
        };
      case "INITIALIZE_CERTIFIED":
        return {
          ...state,
          compare: action.payload,
        };
  
      case "ADD_TO_KIT":
        return { ...state, kit: [  action.payload] };
  
      
        case "REMOVE_FROM_KIT":
          return {
            ...state,
            kit: state.kit.filter(
              (currentKitItem) =>
                currentKitItem._id !== action.payload._id
            ),
          };
  

  
  
  
      case "ADD_TO_WATCHLIST":
        return { ...state, watchlist: [...state.watchlist, action.payload] };
  
      case "REMOVE_FROM_WATCHLIST":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (currentWatchlistItem) =>
              currentWatchlistItem._id !== action.payload._id
          ),
        };
      case "ADD_TO_COMPARE":
        return { ...state, compare: [...state.compare, action.payload] };
  
      case "REMOVE_FROM_COMPARE":
        return {
          ...state,
          compare: state.compare.filter(
            (currentCompareItem) =>
              currentCompareItem._id !== action.payload._id
          ),
        };
      case "ADD_TO_HISTORY":
        return { ...state, history: [...state.history, action.payload] };
  
      case "REMOVE_FROM_HISTORY":
        return {
          ...state,
          history: state.history.filter(
            (currentHistoryItem) =>
              currentHistoryItem._id !== action.payload._id
          ),
        };
      case "ADD_TO_CERTIFIED":
        return { ...state, certified: [...state.certified, action.payload] };
  
      case "REMOVE_FROM_CERTIFIED":
        return {
          ...state,
          certified: state.certified.filter(
            (currentCertifiedItem) =>
              currentCertifiedItem._id !== action.payload._id
          ),
        };
  
      case "SORT":
        return { ...state, sortBy: action.payload };
  
      case "TOGGLE_INVENTORY":
        return { ...state, showInventoryAll: !state.showInventoryAll };
  
      case "TOGGLE_CATEGORY":
        return {
        ...state,
        sortByTypeOfCategory: state.sortByTypeOfCategory.includes(action.payload)
          ? state.sortByTypeOfCategory.filter(
              (category) => category !== action.payload
            )
          : [...state.sortByTypeOfCategory, action.payload],
      };
  
      case "TOGGLE_BRAND":
        return {
          ...state,
          sortByTypeOfBrand: state.sortByTypeOfBrand.includes(action.payload)
            ? state.sortByTypeOfBrand.filter(
                (typeOfBrand) => typeOfBrand !== action.payload
              )
            : [...state.sortByTypeOfBrand, action.payload],
        };
  
      case "RESET":
        return {
          ...state,
          kit: [],
          watchlist: [],
          compare:[],
          history:[],
          sortBy: null,
          showFastDeliveryOnly: false,
          showInventoryAll: false,
          totalPrice: 0,
        };
  
      default:
        return state;
    }
  };