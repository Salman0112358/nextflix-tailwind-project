import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
//---------------------Importing Components---------------------------------//
import {Header} from '../components/index'

const Home: NextPage = () => {
  return (
    <div className="relative h-[200vh]">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        {/* Banner */}
        <section>{/* Row */}</section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;
