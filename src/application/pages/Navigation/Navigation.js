import React, { Component  } from 'react';
import { searchMovies } from '../../api';
import { Link } from 'react-router-dom'; 
export default class Navigation extends Component {
    render(){
        let { searchMoviesFn } = this.props;
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
                        <li>
                            <a>
                                Popular
                            </a>
                        </li>

                        <li>
                        <a>
                            Top Rated
                        </a>
                     </li>

                     <li>
                     <a>
                         Now Playing
                     </a>
                  </li>
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