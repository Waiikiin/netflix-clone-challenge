const API_KEY = "952d147677e421ebef0f028a3181aeb7"

const requests = {
    tvs: {
        fetchTrendingTVs: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginalsTVs: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRatedTVs: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionAndAdventureTVs: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
        fetchComedyTVs: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        fetchDocumentaryTVs: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        fetchScienceFictionTVs: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
        fetchAnimationTVs: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
        fetchCrimeTVs: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
        fetchDramaTVs: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
        fetchKidsTVs: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    },
    movies: {
        fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginalsMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
        fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
        fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
        fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
        fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
        fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    },
    latest: {
        fetchUpComing: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    },
    kids: {
        fetchKidsTVs: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    },
}

export default requests;

