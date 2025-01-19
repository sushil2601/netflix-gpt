import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addPopularMovies : null,
    trailerVideo : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies : (state,action) =>{
      state.addPopularMovies = action.payload;
    },
    addTrailerVideo : (state,action) =>{
        state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies , addPopularMovies , addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;