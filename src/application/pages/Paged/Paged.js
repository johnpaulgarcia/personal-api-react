import React , { Component } from 'react';
import Movies from '../Movies';
export default class Paged extends Component {
    constructor(props){
        super(props);
        this.state = {
           movies: []
        }
    }
    
    render(){
        let { match: {params: {pagename}},movies} = this.props;
        return(
            <div className="paged">
                <div className="paged-text">
                    <h1 className="paged-text-actual">{pagename} Movies</h1>
                </div>

                <Movies movies={movies} />
            </div>
        );
    }
}