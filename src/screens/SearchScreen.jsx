import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AllMovies from '../components/AllMovies'
import SkeletonLoader from '../components/SkeletonLoader'

const SearchScreen = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.allMovie);
  const {results, loading} = movies
    
  return (
    <div className=''>
        {loading? (<SkeletonLoader/>): (
          <div className='grid mt-[7rem] gap-16 grid-cols-fluid'>
          {results.map((movie, index)=>(
            <AllMovies  
            title={movie.Title}
            key={index}
            id={index} 
            poster_path={movie.CoverPhotoLink}
            release_date = {movie.UploadDate}
            loading={loading}
            link = {`/search/${movie.Title}/details`}
            />
          ))} 
          </div>
        )}
    </div>
  )
}

export default SearchScreen