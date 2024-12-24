import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await axios.get("https://dummyapi.online/api/movies");
    return response.data;
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        filteredMovies: [],
        status: "idle",
        error: null,
    },
    reducers: {
        filterMovies: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredMovies = state.movies.filter((movie) =>
                movie.movie.toLowerCase().includes(searchTerm)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload;
                state.filteredMovies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { filterMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
