import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRandomPosts = createAsyncThunk(
    'randomiser/getRandomPosts',
    async () => {
        const response = await fetch('https://random-word-form.herokuapp.com/random/noun');
        const word = await response.json();
        const data = await fetch(`https://www.reddit.com/search.json?q=${word[0]}&limit=3`)
        const json = await data.json();
        return json.data.children;
    }
);

export const randomiserSlice = createSlice({
    name: 'randomiser',
    initialState: {
        isLoading: false,
        errorLoading: false,
        posts: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRandomPosts.pending, (state) => {
                state.isLoading = true;
                state.errorLoading = false;
            })
            .addCase(getRandomPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errorLoading = false;
                state.posts = action.payload;
            })
            .addCase(getRandomPosts.rejected, (state) => {
                state.isLoading = false;
                state.errorLoading = true;
            })
    }
});

export const selectRandomPosts = (state) => state.randomiser.posts;
export const isLoading = (state) => state.randomiser.isLoading;
export default randomiserSlice.reducer;