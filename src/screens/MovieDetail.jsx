import React from 'react'
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import SkeletonLoader from '../components/SkeletonLoader';
import Movie from '../components/Movie'

const MovieDetail = () => {

  // const dispatch = useDispatch()
  const {pathname} = useLocation()
  // let { title, pageNum } = useParams();

  const movies = useSelector((state) => state.allMovie);
  const {allMovies, title} = movies

  useEffect(() => {
    window.scrollTo(0, 0);
    // fetchMovies()
  }, [pathname]);
  const movie = allMovies.find(movie => movie.Title === title)
  const { Title, Year, Size, Category, CoverPhotoLink, Description, DownloadLink} = movie
  return (
    <div className='flex flex-col mt-[7rem] justify-center items-center'>
      {false? (<SkeletonLoader/>): (
        <Movie 
        Title={Title}
        Year={Year}
        Category={Category}
        CoverPhotoLink={CoverPhotoLink}
        Description={Description}
        DownloadLink={DownloadLink}
        Size={Size}
        />
      )}
    </div>
  )
}

export default MovieDetail