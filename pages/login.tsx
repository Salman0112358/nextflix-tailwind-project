import React from "react";
import Head from "next/head";
import Image from "next/image";

const login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Salman's Flix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://cdn.wallpapersafari.com/43/24/owPJtp.jpg"
        layout="fill"
        objectFit="cover"
        className="-z-10 !hidden opacity-60 sm:!inline"
      />

      <img
        src="https://fontmeme.com/permalink/221020/6a07ca75a3c1b9e24d3b3346fc06771c.png"
        width={300}
        height={300}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 "
      />

      <form className="relative mt-24 space-y-8 rounded-lg bg-black/75 py-10 lx-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold"> Log In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full" >
            <input className="input" type="email" placeholder="Enter Your Email"/>
          </label>
          <label className="inline-block w-full" >
            <input className="input" type="password" placeholder="Enter Your Password"/>
          </label>
          <button className=" font-semibold w-full rounded-md bg-[#2c023f]">Sign In</button>

          <div className="text-slate-200"> 
            First Time Here?{" "}
            <button type="submit" className="hover:underline font-semibold"> Make An Account</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
