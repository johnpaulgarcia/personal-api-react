import React, { Component } from 'react';
import { getMovieInformation, apiSuffix } from '../../api';
import Loading from '../../components/Loading';
import { getDataFn,getTrailerFn } from '../../actions/data';
import { posterImage,getTrailer,trailerSuffix } from '../../api';
class MoviesInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieInformation: [],
            avatar: [],
            genres: [],
            loading: false,
            imdb_id: '',
            trailer: ''
        }
    }

   componentWillMount(){
       let { match: { params: {id} } } = this.props;
       this.setState({loading: true})
        getDataFn(getMovieInformation+id+apiSuffix)
            .then(response=>{
                this.setState({
                    movieInformation: response,
                    avatar: posterImage+response.poster_path,
                    genres: response.genres,
                    loading: false,
                    imdb_id: response.imdb_id
                });

               getTrailerFn(getTrailer+response.imdb_id+trailerSuffix)
                    .then(response=>{
                             let data = response.data.data.movies[0].trailer.qualities[0].videoURL;
                                this.setState({
                                    trailer: data
                                })
                            }).catch(err=>{
                                this.setState({
                                    trailer: ''
                                })
                            })
            })
            ;
    }

    render(){
        let { movieInformation,avatar,genres,trailer } = this.state;
       
        return(      
            <div className="mi">
                {this.state.loading && <Loading />}
              {!this.state.loading && <div className="mi-container">
                    <div style={{backgroundImage: `url('${avatar}')`,backgroundSize: 'cover'}} className="movie-logo">
                    </div>

                    <div className="properties">
                        <div className="movie-title movie-tag">{movieInformation.original_title}</div>
                        <div className="movie-tag">Genres: 
                            {
                                genres.map(genre=>{
                                    return(
                                        <a class="genre" href="#">
                                           {genre.name}
                                        </a>
                                    );
                                })
                            }
                        </div>
                        <div className="movie-tag">Released: {movieInformation.release_date}</div>
                        <div className="movie-tag">Language : {movieInformation.original_language}</div>
                        <div className="movie-tag">Popularity: {movieInformation.popularity}</div>
                        <div className="movie-tag">Released: {movieInformation.release_date}</div>
                        <div className="movie-tag">Length: {movieInformation.runtime} minutes</div>
                    </div>

                    <div className="movie-description">
                        { movieInformation.overview }
                    </div>

                    {
                        trailer && <div class="video">
                        <video preload="auto" width="100%" height="100%" controls autoplay="true">
                             <source src={`${trailer}`} type="video/mp4"></source>
                          Your browser does not support HTML5 video.
                        </video>
   
                    </div>
                    }
               </div>
                        }
               </div> 
            
        );
    }
}
export default MoviesInformation;