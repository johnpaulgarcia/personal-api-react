import React, { Component  } from 'react';

export default class Navigation extends Component {
    render(){
        return(
            <div class="navigation">
               <div class="logo">
                    <h1 class="logo">
                        LOGO
                    </h1>
               </div>

               <div class="options">
                    <ul class="options-list">
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

                <div class="searchbox">
                    <input class="searchInput" placeholder="Search Movies" />
                </div>
             }
            

            </div>
        );
    }
}