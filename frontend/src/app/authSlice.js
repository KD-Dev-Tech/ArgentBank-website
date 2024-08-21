import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({  // Créer un slice pour gérer l'authentification
    name: 'auth', 
    initialState: {  
        token: null,  // Initialiser le token à null pour indiquer qu'aucun token n'est présent
        email: '',
        password: '',
        isAuthenticated: false,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
          },
          setPassword: (state, action) => {
            state.password = action.payload;
          },
          setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = !!action.payload;
          },
          clearAuth: (state) => {
            state.email = '';
            state.password = '';
            state.token = null;
            state.isAuthenticated = false;
          },
        },
    }
);
export const { setEmail, setPassword, setToken, clearAuth } = authSlice.actions;

