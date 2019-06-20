import React, { Component } from 'react';
import GenreList from '../../components/GenreList';
export default class Categories extends Component {
    render(){

        let { genres,fetchByGenre } = this.props;

        return(
            <div className="categories">
               {
                  genres.map(genre=>{
                   return(
                    <GenreList fetchByGenre={fetchByGenre} item={genre}/>
                   ) 
               })
            }
            </div>
        );
    }
}