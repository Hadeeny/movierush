import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAuth from './movieAuth'
export const getAllMovies = createAsyncThunk(
  "getAllMovies",
  async (_, thunkAPI) => {
    try {
      return await movieAuth.allMovies();
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSingleMovie = createAsyncThunk(
  "getSingleMovie",
  async (_, thunkAPI) => {
    try {
      return await movieAuth.singleMovie();
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const searchMovie = createAsyncThunk(
  "searchMovie",
  async (query, thunkAPI) => {
    try {
      return await movieAuth.searchMovie(query);
      
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  allMovies: [],
  results: [],
  movie: {},
  result: {},
  title: '',
  message: "",
  loading: '',
  error: ''
};

export const movieSlice = createSlice({
  name: "allMovies",
  initialState,
  reducers: {
    getTitle: (state, action) => {
      state.title = action.payload;
    },
    clearResults: (state, action) => {
      state.results = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.allMovies = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(getSingleMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.results.length == 0
        ?  state.movie = action.payload.find(movie => movie.Title === state.title)
        : state.result = state.results.find(movie => movie.Title === state.title)
        
        // state.movie = movie
        
      })
      .addCase(getSingleMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.movie = null;
      })
      .addCase(searchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.results = action.payload
      })
      .addCase(searchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;        
      })
  },
});

export const {
    getTitle,
    clearResults
} = movieSlice.actions;
export default movieSlice.reducer;