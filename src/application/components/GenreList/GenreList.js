import React, { Component } from 'react';

const GenreList = ({fetchByGenre,item}) => {
    return(
        <div className="select-option">
               <div onClick={()=>fetchByGenre(item.id)} className="select-big">
                    <p className="cat-tag">{item.name}</p>
                    <p className="next-tag">></p>
              </div>
        </div>
    );
}

export default GenreList;

