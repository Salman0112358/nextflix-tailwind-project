import Image from "next/image";
import { IMovie } from "../../typescript";

interface PropsBanner {
  netflixOriginals: IMovie[];
}

const Banner = ({ netflixOriginals }: PropsBanner): JSX.Element => {
  return <div>{/* <Image/> */}</div>;
};

export default Banner;
