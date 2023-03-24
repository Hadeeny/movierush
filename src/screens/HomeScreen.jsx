import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import AllMovies from '../components/AllMovies'
import {getAllMovies, clearResults}from '../features/movieSlice'

import { useNavigate, useParams } from "react-router-dom";
const HomeScreen = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    
    let { pageNum } = useParams();
    const movies = useSelector((state) => state.allMovie);
    const {allMovies, loading} = movies
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getAllMovies())
    dispatch(clearResults())
  }, [])

    const nextPage = ()=>{
        setPage(page=>page+1)
    }
  return (
    <main className='mt-[7rem]' id='top'>
      
      <div className='grid gap-16 grid-cols-fluid'>
      {allMovies.map((movie, index)=>(
        <AllMovies  
        title={movie.Title}
        key={index}
        id={index} 
        poster_path={movie.CoverPhotoLink}
        release_date = {movie.UploadDate}
        loading={loading}
        link = {`/${movie.Title}`}
        />
      ))} 
      </div>
      <a href='#top' onClick={nextPage}>Next page</a>
    </main>
  )
}

export default HomeScreen