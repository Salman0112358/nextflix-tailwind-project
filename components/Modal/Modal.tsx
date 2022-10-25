import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atoms/modalAtom";
import {
  XMarkIcon,
  PlayIcon,
  PlusIcon,
  HandThumbUpIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";

import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";
import { IElement, IGenre } from "../../typescript";
import axios from "axios";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState<string>("");
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [muted, setMuted] = useState(true);
  const [play, setPlay] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!movie) return;

    const getMovieData = async () => {
      const movieData = await axios.get(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      );

      const response = await movieData.data;

      if (response.videos) {
        const index = response.videos.results.findIndex(
          (element: IElement) => element.type === "Trailer"
        );
        setTrailer(response.videos?.results[index]?.key);
      }

      if (response?.genres) {
        setGenres(response.genres);
      }
    };

    getMovieData();
  }, [movie]);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#18181818 hover:bg-[#50076b]">
          <XMarkIcon onClick={handleClose} className="h-6 w-6" />
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            // controls={true}
            muted={muted}
            playing={play}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button
                onClick={() => setPlay((previous) => !previous)}
                className="flex items-center gap-x-2 rounded-md bg-white px-8 text-xl font-light transition hover:bg-[#000000] text-black hover:text-white"
              >
                <PlayIcon className="h-7 w-7 transition hover:text-white" />{" "}
                Play
              </button>
              <button className="flex items-center gap-x-2 rounded-md bg-white px-8 text-xl font-light transition hover:bg-[#000000] text-black hover:text-white">
                <PlusIcon className="h-7 w-7" />
                Add To List
              </button>
              <button className="modalButton">
                <HandThumbUpIcon />
              </button>
            </div>
            <button
              className="modalButton"
              onClick={() => setMuted((previous) => !previous)}
            >
              {muted ? (
                <SpeakerXMarkIcon className="h-6 w-6" />
              ) : (
                <SpeakerWaveIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>


        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm font-semibold ">
              <p className="text-violet-500">
                {movie?.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 tiems-centre justify-center rounded-md border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="space-y-3">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm ">
                <div>
                  <span className="text-violet-400">Genres : </span>
                  {genres.map((genre) => genre.name).join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
