import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{}
};
const slice = createSlice({
    name:'user',
    initialState,
    reducers:{loginUser(state, action){
        state.user = action.payload;
    }
}
})
export const {loginUser} = slice.actions;
export default slice.reducer;