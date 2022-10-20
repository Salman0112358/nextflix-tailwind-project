const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// request object that can be indexed for specific request properties 
const apiRequests = {

    getTrendingMovies : `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
    getNetflixOriginals : `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    getTopRated : `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    getActionMovies :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getScienceFictionMovies :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
    getFantasyMovies :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=14`,
    getAnimationMovies :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
    getDocumentaryMovies :`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`

}







export default apiRequests;
