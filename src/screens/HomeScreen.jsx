import {useEffect, useState} from 'react'
import AllMovies from '../components/AllMovies'
import { useNavigate, useParams } from "react-router-dom";
const HomeScreen = () => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    let { pageNum } = useParams();

    const fetchMovies = async()=> {
        setLoading(true)
        const data = await fetch
        (`https://tfvids-node.onrender.com/getData/?page=${page}&engine=nkiri,fzmovies`)
        const result=  await data.json()
        setMovies(result)
        setLoading(false)
      }
    useEffect(() => {
    navigate(`/${page}`) 
    fetchMovies()
    }, [page])

    const nextPage = ()=>{
        setPage(page=>page+1)
    }
  return (
    <main id='top'>
      
      <div className='grid gap-16 grid-cols-fluid'>
      {movies.map((movie, index)=>(
        <AllMovies  
        title={movie.Title}
        key={index}
        id={index} 
        poster_path={movie.CoverPhotoLink}
        release_date = {movie.UploadDate}
        loading={loading}
        />
      ))} 
      </div>
      <a href='#top' onClick={nextPage}>Next page</a>
    </main>
  )
}

export default HomeScreen