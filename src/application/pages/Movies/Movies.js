import React, { Component } from 'react';
import ListItem from '../../components/ListItem';
import { getPopularMovies } from '../../api';
import { getDataFn } from '../../actions/data';
export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            page : 1
        }
    }
    componentWillMount(){
        let { page } = this.state;
        let data = getDataFn(getPopularMovies+page)
                    .then(data=>{
                       let results = data.results;
                       this.setState({
                           movies: results
                       });
                       console.log(results[0]);
                    });
    }
    render(){
        let { movies } = this.state;
        return(
            <div class="movies">
                {
                    movies.map(movie=>{
                        return(
                            <ListItem key={movie.id} item={movie} />
                        );
                    })
                }
            </div>
        )
    }
}