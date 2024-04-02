import { createSlice } from '@reduxjs/toolkit';

export const searchBarReducer = createSlice({
    name: 'searchBar',
    initialState: {
        searchResults: [],
        loading: false,
        error: null,
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },  
        setError: (state, action) => {
            state.error = action.payload;
        },
    },

});

export default searchBarReducer;
export const { setSearchResults } = searchBarReducer.actions;