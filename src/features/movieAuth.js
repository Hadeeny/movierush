import axios from "axios";

// Get all music file
const allMovies = async () => {
  const { data } = await axios.get(`https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`);
  return data;
};

const singleMovie = async () => {
  const { data } = await axios.get(`https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`);
  return data;
};

const searchMovie = async (query) => {
  const { data } = await axios.get(`https://tfvids.onrender.com/search?query=${query}&engine=fzmovies`);
  return data;
};



const movieAuth = {
  allMovies,
  singleMovie,
  searchMovie
};

export default movieAuth;