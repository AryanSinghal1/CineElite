import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Slices/Slices';
import equipmentReducer from './Slices/EquipmentSlices'
const Store = configureStore({
    reducer:{
        user:userReducer,
        equipment:equipmentReducer
    }
})
export default Store;