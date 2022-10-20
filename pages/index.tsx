import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import apiRequests from "../API/APIRequests";
//---------------------Importing Components---------------------------------//
import { Banner, Header } from "../components/index";
import { IMovie, Props } from "../typescript";



const Home = ({
  trendingMovies,
  netflixOriginals,
  topRated,
  actionMovies,
  scienceFictionMovies,
  fantasyMovies,
  animationMovies,
  documentaryMovies,
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#0a0118] lg:h-[140vh]">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section>{/* Row */}</section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;

// Server Side Rendering

export const getServerSideProps = async () => {
  const [
    trendingMovies,
    netflixOriginals,
    topRated,
    actionMovies,
    scienceFictionMovies,
    fantasyMovies,
    animationMovies,
    documentaryMovies,
  ] = await Promise.all([
    (await axios.get(apiRequests.getTrendingMovies)).data.results,
    (await axios.get(apiRequests.getNetflixOriginals)).data.results,
    (await axios.get(apiRequests.getTopRated)).data.results,
    (await axios.get(apiRequests.getActionMovies)).data.results,
    (await axios.get(apiRequests.getScienceFictionMovies)).data.results,
    (await axios.get(apiRequests.getFantasyMovies)).data.results,
    (await axios.get(apiRequests.getAnimationMovies)).data.results,
    (await axios.get(apiRequests.getDocumentaryMovies)).data.results,
  ]);

  return {
    props: {
      trendingMovies,
      netflixOriginals,
      topRated,
      actionMovies,
      scienceFictionMovies,
      fantasyMovies,
      animationMovies,
      documentaryMovies,
    },
  };
};
