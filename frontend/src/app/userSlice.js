import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({ 
    name: 'user', 
    initialState: { 
        user: [],
        error: null,
    },
    reducers: {
    
        setUserProfile: (state, action) => { 
            state.user = action.payload;
            },
        setEditUserName: (state, action) => { 
            state.user = action.payload;
            },
        setError: (state, action) => { 
            state.error = action.payload;
             },
        setClearUser : (state) => {
            state.user =null
            }      
        
},
});
    
export const { setUserProfile, setEditUserName, setError, setClearUser  } = userSlice.actions;