import React from 'react'
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetail = () => {
  const [singleMovie, setSingleMovie] = useState({})
  const {pathname} = useLocation()
  let { title, pageNum } = useParams();
  const fetchMovies = async()=> {
    const data = await fetch
    (`https://tfvids-node.onrender.com/getData/?page=${pageNum}&engine=nkiri,fzmovies`)
    const result=  await data.json()
    const movie = await result.find(movie => movie.Title === title);
    setSingleMovie(movie)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovies()
  }, [pathname]);
  
  const { Title, Year, Size, Category, CoverPhotoLink, Description, DownloadLink} = singleMovie
  return (
    <div>
      <div>
        <h1 className="text-2xl">{Title}</h1>
        <h2 className="text-lg">{Year}</h2>
        <h2 className="text-lg">Category: {Category}</h2>
        <h2 className="text-lg">Download Size: {Size}</h2>
        <div className="my-12 w-full">
          <img
            width="1000px"
            height="1000px"
            src={CoverPhotoLink}
          />
        </div>
        <p>{Description}</p>
          <a href={DownloadLink} target="_blank" className="bg-green-400 px-4 py-1 text-sm rounded-md inline-block">
            Download
          </a>
        
      </div>
    </div>
  )
}

export default MovieDetail