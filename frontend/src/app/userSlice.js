import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({ 
    name: 'user', 
    initialState: { 
        user: null,
        error: null,
    },
    reducers: {
    
        setUserProfile: (state, action) => {
            state.user = action.payload;
            },
        setEditUser: (state, action) => {
            state.user = state.user.map((user) => // ici on map sur les users pour trouver le user à modifier
            user.id === action.payload.id ? action.payload : user, // ici on modifie le user
             )},
        setError: (state, action) => {
            state.error = action.payload;
             },
        
},
});
    
export const { setUserProfile, setEditUser, setError  } = userSlice.actions;