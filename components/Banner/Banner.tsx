import Image from "next/image";
import { useEffect, useState } from "react";
import { IMovie } from "../../typescript";
import constants from "../../constants/constants";

import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atoms/modalAtom";

interface PropsBanner {
  netflixOriginals: IMovie[];
}

const Banner = ({ netflixOriginals }: PropsBanner): JSX.Element => {

  const [movie, setMovie] = useState<IMovie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)


  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${constants.BASE_URL_IMAGE}${
            movie?.backdrop_path || movie?.poster_path
          }`}
          objectFit="cover"
        />
      </div>
      <h1 className=" text-shadow-lg text-2xl lg:text-7xl md:text-4xl font-semibold">
        {movie?.title || movie?.name || movie?.original_name}{" "}
      </h1>
      <p className=" text-shadow-md max-w-xs text-xs md:max-w-l md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <PlayIcon className="h-4 w-4 md:h-7 md:w-7" /> Play
        </button>
        <button className="bannerButton bg-white text-black" onClick={()=> {
          setCurrentMovie(movie)
          setShowModal(true)
        }}>
          <InformationCircleIcon className="h-5 w-5  md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
