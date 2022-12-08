import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    currInviteUser:{
        email:'',role:'',refBy:''
    }
};
const slice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser(state, action){
        state.user = action.payload;
    },
        inviteUserCurr(state, action){
        state.currInviteUser.email = action.payload.email;
        state.currInviteUser.role = action.payload.role;
        state.currInviteUser.refBy = action.payload.refId;
    },
        refUser(state, action){
        state.user = action.payload;
    }
}
})
export const {loginUser, inviteUserCurr} = slice.actions;
export default slice.reducer;