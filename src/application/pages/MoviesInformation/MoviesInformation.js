import React, { Component } from 'react';
import { getMovieInformation, apiSuffix } from '../../api';
import { Link } from 'react-router-dom';
import { getDataFn } from '../../actions/data';
import { posterImage } from '../../api';
class MoviesInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieInformation: [],
            avatar: [],
            genres: []
        }
    }

    componentWillMount(){
       let { match: { params: {id} } } = this.props;
        getDataFn(getMovieInformation+id+apiSuffix)
            .then(response=>{
                this.setState({
                    movieInformation: response,
                    avatar: posterImage+response.poster_path,
                    genres: response.genres
                });
                console.log(response);
            });
    }

    render(){
        let { movieInformation,avatar,genres } = this.state;
       
        return(      
            <div className="mi">
               <div className="mi-container">
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
               </div>
               </div>
        );
    }
}
export default MoviesInformation;