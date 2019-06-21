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

// get actual movie information
exports.apiSuffix = `?api_key=${apiKey}&language=en-US`;
exports.getMovieInformation  = `https://api.themoviedb.org/3/movie/`;

// get videos
exports.trailerSuffix = `&token=0e3c0283-e1e1-442c-8551-bebcb72a5699&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&trailers=1&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&goofs=0&keyword=0&quotes=0&fullSize=0&companyCredits=0&filmingLocations=0&directors=1&writers=1`;
exports.getTrailer = `https://cors-anywhere.herokuapp.com/https://www.myapifilms.com/imdb/idIMDB?idIMDB=`;