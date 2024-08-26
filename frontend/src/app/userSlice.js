import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({ 
    name: 'user', 
    initialState: { 
        user: [],
        error: null,
    },
    reducers: {
    
        setUserProfile: (state, action) => { // ici on récupère le user
            state.user = action.payload;
            },
        setEditUserName: (state, action) => { // ici on modifie le user
            state.user = action.payload;
            },
        setError: (state, action) => { // ici on récupère l'erreur
            state.error = action.payload;
             },
        setClearUser : (state) => {
            state.user =null
            }      
        
},
});
    
export const { setUserProfile, setEditUserName, setError, setClearUser  } = userSlice.actions;