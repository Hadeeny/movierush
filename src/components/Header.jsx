import React from 'react'
import {Link} from 'react-router-dom'
import search from '../assets/search.svg'
import movie from '../assets/movie.svg'

const Header = ({searchQuery, sendQuery, setSearchQuery}) => {
  return (
    <div className=' fixed w-full bg-white/60 backdrop-blur-sm border-y-[1px] border-gray-500 inset-x-0 top-0 py-6 flex justify-between'>
      <Link className='flex items-center' to={'/'}>
        <span className='text-gray-100 hidden md:block font-bold md:text-3xl text-xl '>MovieRush</span>
        <span className='ml-4'>
          <img className='w-[2.8rem]' src={movie} alt='movie'/>
        </span>
      </Link>
      <div className='flex space-x-4 items-center'>
        <img onClick={sendQuery} className='w-[2rem] cursor-pointer' src={search} alt='search' />
      <input onChange={(e)=>{setSearchQuery(e.target.value)}} placeholder='search...' 
      className='rounded-md text-gray-500 py-2 outline-none px-4' type='text'/>
      </div>
    </div>
  )
}

export default Header