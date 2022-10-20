import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import apiRequests from "../API/APIRequests";
//---------------------Importing Components---------------------------------//
import { Banner, Header } from "../components/index";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#0a0118] lg:h-[140vh]">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
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
    actionMoives,
    scienceFictionMovies,
    fantasyMovies,
    animatonMovies,
    documentaryMovies,
  ] = await Promise.all([
    axios.get(apiRequests.getTrendingMovies),
    axios.get(apiRequests.getNetflixOriginals),
    axios.get(apiRequests.getTopRated),
    axios.get(apiRequests.getActionMovies),
    axios.get(apiRequests.getScienceFictionMovies),
    axios.get(apiRequests.getFantasyMovies),
    axios.get(apiRequests.getAnimationMovies),
    axios.get(apiRequests.getDocumentaryMovies),
  ]);
};
