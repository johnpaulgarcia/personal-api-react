import React, { Component } from 'react';
import ListItem from '../../components/ListItem';
export default class Movies extends Component {
    render(){
        let { movies } = this.props;
       
       
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