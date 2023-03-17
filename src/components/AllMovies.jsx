import React from 'react'
import {Link, useParams} from 'react-router-dom'
import SkeletonLoader from './SkeletonLoader';

const AllMovies = ({title, poster_path, loading}) => {
    
  let { pageNum } = useParams();
    return (
        <>
          {loading? (<SkeletonLoader/>): (
            <div>
            <h1>{title}</h1>
            <Link to={`/${pageNum}/${title}`}>
                <img src={poster_path} width="800px" height="800px" alt={title}/>
            </Link>
        </div>
          )}
        </>
    )
}

export default AllMovies