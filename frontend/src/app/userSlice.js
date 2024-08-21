import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({ 
    name: 'user', 
    initialState: { 
        users: [],
        // loading: false,
        error: null,
    },
    reducers: {
        setUsers: (state, action) => {
        state.users = action.payload;
        },
        setEditUser: (state, action) => {
        state.users = state.users.map((user) => // ici on map sur les users pour trouver le user à modifier
        user.id === action.payload.id ? action.payload : user // ici on modifie le user
        )},
        setError: (state, action) => {
        state.error = action.payload;
        },
        // setLoading: (state, action) => {
        // state.loading = action.payload;
        // },
},
});
    
export const { setUsers, setError, setEditUser } = userSlice.actions;