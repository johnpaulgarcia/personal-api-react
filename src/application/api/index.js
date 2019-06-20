const apiKey = "f9165a1158394cba9f390c1eb6f7b13d";

// getting movies from the tmdb api

exports.getPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`;
exports.getTopRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=`;
exports.getNowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=`;
exports.getUpcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=`;
exports.getLatestMovies = `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`;
exports.posterImage = "http://image.tmdb.org/t/p/w342/";
exports.getMoviesByGenre = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=`;
// getting genres of the movies

exports.getGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

// searching movies

exports.searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=`;