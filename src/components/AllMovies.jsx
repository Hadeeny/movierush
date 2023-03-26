import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";
import { getTitle } from "../features/movieSlice";

const AllMovies = ({ title, link, poster_path, loading }) => {
  const dispatch = useDispatch();
  let { pageNum } = useParams();
  return (
    <>
      <div>
        <h1>{title}</h1>
        <Link to={link}>
          <div
            onClick={() => {
              dispatch(getTitle(title));
            }}
          >
            <img src={poster_path} width="800px" height="800px" alt={title} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default AllMovies;
