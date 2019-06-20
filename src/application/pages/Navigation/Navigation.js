import React, { Component  } from 'react';

export default class Navigation extends Component {
    render(){
        return(
            <div className="navigation">
               <div className="logo">
                    <h1 class="logo">
                       MOVI
                    </h1>
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
                    <input className="searchInput" placeholder="Search Movies" />
                </div>
             }
            

            </div>
        );
    }
}