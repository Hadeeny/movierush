import React from "react";
import useSWR from "swr";

import { useDispatch, useSelector } from "react-redux";
import AllMovies from "../components/AllMovies";
import SkeletonLoader from "../components/SkeletonLoader";
import { populateResults } from "../features/movieSlice";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SearchScreen = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.allMovie);
  const { query } = movies;
  const { data, error, isLoading } = useSWR(
    `https://tfvids.onrender.com/search?query=${query}&engine=fzmovies`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading)
    return (
      <div className="mt-[7rem] grid gap-16 grid-cols-fluidMob sm:grid-cols-fluid">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  if (data) {
    dispatch(populateResults(data));
  }
  return (
    <div className="">
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid gap-16 grid-cols-fluidMob sm:grid-cols-fluid">
          {data.map((movie, index) => (
            <AllMovies
              title={movie.Title}
              key={index}
              id={index}
              poster_path={movie.CoverPhotoLink}
              release_date={movie.UploadDate}
              loading={isLoading}
              link={`/search/${movie.Title}/details`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchScreen;
