import constants from '../../constants/constants'
import React from 'react'
import { IMovie } from '../../typescript'
import Image from 'next/image'
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../../atoms/modalAtom';

interface ThumbnailProps {
    movie : IMovie;
    onClick: () => void
}

const Thumbnail = ({movie, onClick} : ThumbnailProps) => {

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
        <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path }`}
        layout="fill"
        className='rounded-lg object-cover'
        onClick={()=> {
          setCurrentMovie(movie)
          setShowModal(true)
        }}
        />
    </div>
  )
}

export default Thumbnail