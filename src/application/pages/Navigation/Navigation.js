import React, { Component  } from 'react';
import { searchMovies } from '../../api';
import { Link } from 'react-router-dom'; 
export default class Navigation extends Component {
    render(){
        let { searchMoviesFn,populateMoviesFn } = this.props;
        return(
            <div className="navigation">
               <div className="logo">
               <Link to="/">
                    <h1 className="logo">
                        MOVI
                    </h1>
                </Link>
               </div>

               <div className="options">
                    <ul className="options-list">
                        <Link to="/paged/popular" onClick={()=>populateMoviesFn('popular')}>             
                                Popular
                        </Link>

                        <Link to="/paged/toprated" onClick={()=>populateMoviesFn('toprated')}>             
                                Top Rated
                        </Link>

                        <Link to="/paged/nowplaying" onClick={()=>populateMoviesFn('nowplaying')}>             
                            Now Playing
                        </Link>
                    </ul>
               </div>

               {
                //  searchbox

                <div className="searchbox">
                    <input onChange={(e)=>searchMoviesFn(e.target.value)} className="searchInput" placeholder="Search Movies" />
                </div>
             }
            

            </div>
        );
    }
}