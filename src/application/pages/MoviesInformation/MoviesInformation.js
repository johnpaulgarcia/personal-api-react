import React, { Component } from 'react';
import { getMovieInformation, apiSuffix } from '../../api';
import { getDataFn } from '../../actions/data';
import { posterImage } from '../../api';
class MoviesInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieInformation: [],
            avatar: []
        }
    }

    componentWillMount(){
       let { match: { params: {id} } } = this.props;
        getDataFn(getMovieInformation+id+apiSuffix)
            .then(response=>{
                this.setState({
                    movieInformation: response,
                    avatar: posterImage+response.poster_path
                });
                console.log(response);
            });
    }

    render(){
        let { movieInformation,avatar } = this.state;
       
        return(      
            <div className="mi">
               <div className="mi-container">
                    <div style={{backgroundImage: `url('${avatar}')`,backgroundSize: 'cover'}} className="movie-logo">
                    </div>

                    <div className="properties">
                        <div className="movie-title movie-tag">{movieInformation.original_title}</div>
                        <div className="movie-tag">Language : {movieInformation.original_language}</div>
                        <div className="movie-tag">Popularity: {movieInformation.popularity}</div>
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