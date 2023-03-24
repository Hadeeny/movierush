import React from 'react'

const Movie = ({Title, Year, Category, Size, CoverPhotoLink, Description, DownloadLink}) => {
  return (
    <div>
        <h1 className="text-2xl">{Title}</h1>
        <h2 className="text-lg">{Year}</h2>
        <h2 className="text-lg">Category: {Category}</h2>
        <h2 className="text-lg">Download Size: {Size}</h2>
        <div className="my-12 w-full">
          <img
            width="500px" 
            height="500px"
            src={CoverPhotoLink}
          />
        </div>
        <p className='max-w-md mx-auto text-center'>{Description}</p>
          <div className='flex justify-center my-6'>
          <a href={DownloadLink} target='_blank' className="bg-green-400 text-center px-6 py-2 text-sm rounded-md">
            Download
          </a>
          </div>
      </div>
  )
}

export default Movie