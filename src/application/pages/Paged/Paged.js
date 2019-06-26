import React , { Component } from 'react';
import Movies from '../Movies';
export default class Paged extends Component {
    constructor(props){
        super(props);
        this.state = {
           movies: [],
         
        }
    }

    render(){
        document.title = `${this.props.match.params.pagename.toUpperCase()} - Movi Trailers`;
        let { match: {params: {pagename}},movies,loadmore} = this.props;
        return(
            <div className="paged">
                <div className="paged-text">
                    <p className="paged-text-actual">{pagename} Movies</p>
                </div>

                <Movies movies={movies} />
                <div class="next">
                    <button onClick={()=>loadmore(pagename)} class="loadmore">
                        LOAD MORE
                    </button>
                </div>
            </div>
        );
    }
}