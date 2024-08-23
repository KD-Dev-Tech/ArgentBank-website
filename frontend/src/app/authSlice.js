import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({  
    name: 'auth', 
    initialState: {  
        token: null,  
        email: '',
        isAuthenticated: false,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
          },
          setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = !!action.payload;
          },
          clearAuth: (state) => {
            state.email = '';
            state.token = null;
            state.isAuthenticated = false;
          },
        },
    }
);
export const { setEmail, setPassword, setToken, clearAuth } = authSlice.actions;

