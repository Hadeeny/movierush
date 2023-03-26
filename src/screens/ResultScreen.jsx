import React from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoader from "../components/SkeletonLoader";
import Movie from "../components/Movie";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  let { title, pageNum } = useParams();

  const movies = useSelector((state) => state.allMovie);
  const { results } = movies;
  useEffect(() => {
    window.scrollTo(0, 0);
    // fetchMovies()
  }, [pathname]);

  const result = results.find((movie) => movie.Title === title);

  const {
    Title,
    Year,
    Size,
    Category,
    CoverPhotoLink,
    Description,
    DownloadLink,
  } = result;
  return (
    <div className="flex flex-col mt-[7rem] justify-center items-center">
      {false ? (
        <SkeletonLoader />
      ) : (
        <Movie
          Title={Title}
          Year={Year}
          Size={Size}
          Category={Category}
          CoverPhotoLink={CoverPhotoLink}
          Description={Description}
          DownloadLink={DownloadLink}
        />
      )}
    </div>
  );
};

export default ResultScreen;
