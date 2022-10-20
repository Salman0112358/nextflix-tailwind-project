/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY
  }

}
