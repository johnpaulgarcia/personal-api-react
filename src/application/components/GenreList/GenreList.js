import React, { Component } from 'react';

const GenreList = ({item}) => {
    return(
        <div className="select-option">
               <div className="select">
                    <p className="cat-tag">{item.name}</p>
                    <p className="next-tag">></p>
              </div>
        </div>
    );
}

export default GenreList;

