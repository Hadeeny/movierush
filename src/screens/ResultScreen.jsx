import React from 'react'
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import SkeletonLoader from '../components/SkeletonLoader';
import Movie from '../components/Movie'

const ResultScreen = () => {

  const dispatch = useDispatch()
  const {pathname} = useLocation()
  let { title, pageNum } = useParams();

  const movies = useSelector((state) => state.allMovie);
  const {result, loading} = movies
  useEffect(() => {
    window.scrollTo(0, 0);
    // fetchMovies()
  }, [pathname]);
  
  const { Title, Year, Size, Category, CoverPhotoLink, Description, DownloadLink} = result
  return (
    <div className='flex flex-col mt-[7rem] justify-center items-center'>
      {loading? (<SkeletonLoader/>): (
        <Movie 
        Title={Title}
        Year={Year}
        Category={Category}
        CoverPhotoLink={CoverPhotoLink}
        Description={Description}
        DownloadLink={DownloadLink}
        />
      )}
    </div>
  )
}

export default ResultScreen