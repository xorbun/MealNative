import {createSlice} from '@reduxjs/toolkit'

const favoritesSlice=createSlice({
    name:'favorite',
    initialState:{
        Ids:[]
    },
    reducers:{
        addFaorite:(state,action)=>{
            state.Ids.push(action.payload.id);
        },
        removeFavorite:(state,action)=>{
            state.Ids.splice(state.Ids.indexOf(action.payload.id),1)
        }
    }
});
export const addFaorite=favoritesSlice.actions.addFaorite;
export const removeFavorite=favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;