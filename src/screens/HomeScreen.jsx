import AllMovies from '../components/AllMovies'
import useSWR from "swr";
import {useDispatch} from 'react-redux'
import SkeletonLoader from '../components/SkeletonLoader';
import {populateMovies} from '../features/movieSlice'

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useSWR(
    "https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return (<SkeletonLoader/>);
  if(data){
    dispatch(populateMovies(data))
  }
  return (
    <main className='mt-[7rem]' id='top'>
          <h3 className='text-lg font-bold py-6'>Latest movies (Trending)</h3>
          <div className='grid gap-16 grid-cols-fluid'>
            {data.map((movie, index)=>(
              <AllMovies  
              title={movie.Title}
              key={index}
              id={index} 
              poster_path={movie.CoverPhotoLink}
              release_date = {movie.UploadDate}
              loading={isLoading}
              link = {`/${movie.Title}`}
              />
            ))} 
        </div>
      {/* <a href='#top' onClick={nextPage}>Next page</a> */}
    </main>
  )
}

export default HomeScreen