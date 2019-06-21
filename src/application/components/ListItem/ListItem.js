import React, { Component } from 'react';
import { posterImage  } from '../../api';
import { Link } from 'react-router-dom';
const ListItem = ({item}) => {
    let {
        genre_ids,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        title,
    } = item;

    return(
        <div style={{backgroundSize: 'cover',backgroundImage: `url("${posterImage}/${poster_path}")`}} className="movie-item">
            <div className="avatar">
              <p class="description">
                {overview}
              </p>
            </div>
            
            <Link to={`/movie/${item.id}`} className="name">
                {title}
            </Link>
        </div>
    );
}

export default ListItem;