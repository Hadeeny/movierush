import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import search from '../assets/search.svg'
import movie from '../assets/movie.svg'
import {searchMovie} from '../features/movieSlice'

const Header = () => {
  const dispatch = useDispatch()
  const [query , setQuery ] = useState('')
  const [showMenu, setShowMenu] = useState(false)

  const showSearch = ()=>{
    dispatch(searchMovie(query))
    setShowMenu(false)
  }
  return (
    <div className='fixed w-full bg-black/60 backdrop-blur-sm border-y-[1px] border-gray-500 inset-x-0 top-0 py-6 '>
      <div className='flex w-11/12 mx-auto justify-between'>
      
        <Link className='flex items-center' to={'/'}>
          <span className='text-gray-100 font-bold md:text-3xl text-xl '>MovieRush</span>
          <span className='ml-4'>
            <img className='w-[2.8rem]' src={movie} alt='movie'/>
          </span>
        </Link>
        <div className='space-x-4 hidden md:flex items-center'>
          {/* <img onClick={sendQuery} className='w-[2rem] cursor-pointer' src={search} alt='search' /> */}
          <Link to={`/search/${query}`} className='w-[4rem] flex justify-center items-center bg-blue-400 rounded h-[2rem] text-gray-100'>
            <div onClick={showSearch}>
            Search
            </div>
          </Link>
          <input onChange={(e)=>{setQuery(e.target.value)}} placeholder='search...' 
          className='rounded-md text-gray-500 py-2 outline-none px-4' type='text'/>
        </div>
        <div onClick={()=>{setShowMenu(!showMenu)}} className={`flex flex-col justify-center gap-y-[6px] ${showMenu && '-space-y-[10px]'} items-center h-12 w-12 rounded-md border border-blue-400 cursor-pointer md:hidden`}>
            <div className={`w-8 duration-500 h-1 ${showMenu && '-rotate-45 '} bg-white`}/>
            <div className={`w-8 h-1 duration-500 ${showMenu && 'opacity-0'} bg-white`}/>
            <div className={`w-8 h-1 duration-500 ${showMenu && 'rotate-45'} bg-white`}/>
        </div>

      </div>
      <div className={`w-11/12 ${!showMenu && 'hidden'} mt-4 mx-auto`}>
      <div className='space-x-4 flex items-center'>
          {/* <img onClick={sendQuery} className='w-[2rem] cursor-pointer' src={search} alt='search' /> */}
          <Link to={`/search/${query}`} className='w-[4rem] flex justify-center items-center bg-blue-400 rounded h-[2rem] text-gray-100'>
            <div onClick={showSearch}>
            Search
            </div>
          </Link>
          <input onChange={(e)=>{setQuery(e.target.value)}} placeholder='search...' 
          className='rounded-md text-gray-500 py-2 outline-none px-4' type='text'/>
        </div>
      </div>
    </div>
  )
}

export default Header