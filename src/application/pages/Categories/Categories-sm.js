import React, { Component } from 'react';
import styles from './categories.css';
import { Link } from 'react-router-dom';
export default class Categories extends Component {
    render(){
        let { genres,fetchByGenre } = this.props;
        return(
            <div className="categories-sm">
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