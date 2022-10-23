import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import apiRequests from "../API/APIRequests";
//---------------------Importing Components---------------------------------//
import { Banner, Header, Row } from "../components/index";
import useAuth from "../hooks/useAuth";
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

  const {logout, loading} = useAuth()

  if (loading) return null

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className=" md:space-y-24">
          <Row  movieData = {trendingMovies} title="Trending Movies"></Row>
          <Row movieData={topRated} title= "Top Rated Movies"></Row>
          <Row movieData={actionMovies} title = " Action Movies"></Row>
          <Row movieData={scienceFictionMovies} title = "Sci-Fi Movies"></Row>
          <Row movieData={fantasyMovies} title = "Fantasy Movies"></Row>
          <Row movieData={animationMovies} title = "Animatied Movies"></Row>
          <Row movieData={documentaryMovies} title = "Documentaries"></Row>
          </section>
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
