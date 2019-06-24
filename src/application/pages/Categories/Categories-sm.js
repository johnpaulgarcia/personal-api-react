import React, { Component } from 'react';
import styles from './categories.css';
import { Link } from 'react-router-dom';
export default class Categories extends Component {
    render(){
        let { genres,fetchByGenre } = this.props;
        return(
            <div className="categories-sm">

                <div class="top-mobs">
                   <Link class="popular" to="">
                     Popular
                   </Link>

                   <Link class="popular" to="">
                    Top Rated
                  </Link>

                  <Link class="popular" to="">
                     Upcoming
                   </Link>
                </div>

                <div class="genre-small">
                    <p class="gs-tag">Genre</p>
                    <select class="select" onClick={(e)=>fetchByGenre(e.target.value)}>
                    {genres.map(genre=>{
                        return(
                            <option value={genre.id}>
                                {genre.name}
                            </option>
                        );
                    })}
                    </select>
                </div>
           
                <ul className="csm-list">
                    {
                        genres.map(genre=>{
                             return(
                                <Link onClick={()=>fetchByGenre(genre.id)} className="csm-list-actual">
                                    {genre.name}
                                </Link>
                             );
                        })
                    }
                </ul>
            </div>
        );
    }
}