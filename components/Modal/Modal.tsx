import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atoms/modalAtom";
import { XMarkIcon, PlayIcon } from "@heroicons/react/24/solid";

import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";
import { IElement, IGenre } from "../../typescript";
import axios from "axios";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState<string>("");
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [muted, setMuted] = useState(false);

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
    <MuiModal open={showModal} onClose={handleClose}>
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
            controls={true}
            muted={muted}
          />
        </div>
        <div>
          <div>
            <button className="flex items-center gap-x-2 rounded">
              <PlayIcon className="h-7 w-7 " />
            </button>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
