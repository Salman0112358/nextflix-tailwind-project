import { IMovie } from "../../typescript";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {Thumbnail} from '../index'
interface RowProps {
  title: string;
  movieData: IMovie[];
}

const Row = ({ title, movieData }: RowProps): JSX.Element => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold transition duration-200 hover:text-violet-400 md:text-2xl">{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hober:scale-125 group-hover:opacity-100" />
        <div className="flex flex-items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide">
            {movieData.map((movie) => (
                <Thumbnail key={movie.id} movie={movie}/>
            ))}
        </div>
        <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hober:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Row;
