import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'user',
    initialState:{
        user: '',
        isLogged:false
    },
    reducers:{
        logged(state){
            return {...state, isLogged:true}
        },
        notLogged(state){
            return {...state, isLogged: false}
        }
    }
})


export const { logged, notLogged } = slice.actions;
export const loggedSelector = state => state.user.isLogged
export default slice.reducer;